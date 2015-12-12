function styleIcon(){
	/*style center*/
	var wrap_icon_width = $('.wrap_icon').width();
	var number_icon = $('.wrap_icon .icon').length;
	/*10% each icon*/
	var one_icon_width = wrap_icon_width/10;
	var icon_width = one_icon_width * number_icon;

	var padding_offset = (wrap_icon_width -icon_width )/2;

	$('.wrap_icon').css({'margin-left': padding_offset+'px'});
	/*--style center--*/
}


$( window ).resize(function() {
  	styleIcon();
});


$( document ).ready( function(){
	styleIcon();
} );


