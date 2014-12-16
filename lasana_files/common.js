$(function(){

	//UAを確認してbodyにクラス追加
	$(document).ready(function(){
		var agent = navigator.userAgent;
		if(agent.search(/iPhone/) != -1){
			$("body").addClass("iphone");
		}else if(agent.search(/Android/) != -1){
			$("body").addClass("android");
		}
	});

	//ページの先頭へ
	$('.pageTop a').click(function() {
		var targetY = $($(this).attr('href')).offset().top;
		$('html,body').animate({scrollTop: targetY}, 500, 'easeOutQuint');
		return false;
	});

	//ヘッダー「メニュー」開閉
	$('#siteMenu, #menuList .close').click(function(){
			if ($('#menuList').css('display') == 'none') {
					$('#menuList').slideDown('slow','swing');
			} else {
					$('#menuList').slideUp('slow','easeOutQuint');
			}
	});

/*-- Delete 2014/07/07 backlogID="WEB_MONOSUS_02-2"

	
	//セット内容開閉
	$('#detaileSet h1').click(function() {
		$(this).next().slideToggle('slow','easeOutQuint');
	}).next().hide();

/*-- /Delete 2014/07/07 backlogID="WEB_MONOSUS_02-2" --*/




/*-- Add .priceBox01 2014/07/07 backlogID="WEB_MONOSUS_02-2" --*/


	$('#detaileSet h1').click(function() {
		$(this).next().slideToggle('slow','easeOutQuint');
		var arrow = $('span',this);
		if($(arrow).is(".arrowOn")){
				$(arrow).removeClass("arrowOn");
		}else {
				$(arrow).addClass("arrowOn");
		}		
	}).next().hide();


	$('#detaileRelation h1').click(function() {
		var arrow = $('span',this);
		$(this).next().slideToggle('slow','easeOutQuint');
		if($(arrow).is(".arrowOn")){
				$(arrow).removeClass("arrowOn");
		}else {
				$(arrow).addClass("arrowOn");
		}		
	}).next().hide();

	$('#status h1').click(function() {
		var arrow = $('span',this);
		$(this).next().slideToggle('slow','easeOutQuint');
		if($(arrow).is(".arrowOn")){
				$(arrow).removeClass("arrowOn");
		}else {
				$(arrow).addClass("arrowOn");
		}		
	}).next().hide();


/*-- /Add .priceBox01 2014/07/07 backlogID="WEB_MONOSUS_02-2" --*/


	
	//フッター メリット開閉
	$('#merit li span').click(function() {
		$(this).next().slideToggle('slow','easeOutQuint');
	}).next().hide();

	//フッター　問い合わせクリック
	$('.inquiry').click(function() {
		window.location= $(this).find("a").attr("href");
		return false;
	});

});




//動き
jQuery.extend( jQuery.easing,{
	easeOutQuint: function (e,f,a,h,g) {
		return -h*((f=f/g-1)*f*f*f-1)+a;
	}	
});



