$(document).ready(function() {
	$(".demo-toggle").click(function() {
		button = $(this);
		code = button.siblings('code');
		demo = button.siblings('.demo');

		button.toggleClass('off');
		code.toggleClass('off');
		demo.toggleClass('ffs');
		demo.children('em').toggleClass('ffs');
	});
});