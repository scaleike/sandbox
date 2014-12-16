
(function() {
	$.extend({
		notDoubleLink: function(selecter) {
			if(!selecter)selecter='a';
			$(selecter).click(function() {
			    $(this).click(function () {
			        return false;
			    });
			});
		},
		notDoubleSubmit: function(selecter) {
			if(!selecter)selecter='form';
			$(selecter).submit(function() {
			    $(this).submit(function () {
			        return false;
			    });
			});
		}
	});
})(jQuery);

$('[waitmodal="true"]').live('click', function(){
	showWaitModal();
});

function showWaitModal() {
	jQuery.blockUI({
		message: jQuery('img#waitModal'),
		css: {
			border: 'none',
			top:  (jQuery(window).height() - 48) /2 + 'px',
			left: (jQuery(window).width() - 48) /2 + 'px',
			width: '48px'
		}
	});
}

// [RNEW-727]年月日入力の改善　対応
// 日付コントロールの使用判定
function isUsableInputDate() {
	
	// type="date"が使用できないブラウザの場合
	// 未対応ブラウザの場合、文字列が入力できるので、値が入っていた場合は未対応と判断
	$isUsable = false;
	$("<input type='date' id='CanUseTypeDate'/>").appendTo("body");
	$("#CanUseTypeDate").val('yyyy-mm-dd');
	if ($("#CanUseTypeDate").val() != "") {
		$isUsable = true;
	}
	$("#CanUseTypeDate").remove();
	return $isUsable;
}
