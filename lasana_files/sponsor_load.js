(function(){

	var init = function () {
		microadDevice = new MicroadDevice(ua);
		if (microadDevice) {
			new SponsorAccess(microadDevice);
		}
	}

	var jsList=[];
	var loader = function () {
		var o = jsList.length;
		for (i = 0; i < jsList.length; i++) {
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.charset = 'utf-8';
			s.src = jsList[i];
			s.onload = function () {
				o--;
				if(o == 0) init();
			};
			document.body.appendChild(s);
		}
	};

	ua = navigator.userAgent;
	if(/(iPhone|iPod|iPad|Android)/.test(ua)){
		jsList.push('http://cache.ssend.microad.jp/js/device.js');
		jsList.push('http://cache.ssend.microad.jp/js/sponsor.js');

		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', loader, true);
		} else {
			loader();
		}
	}
})();