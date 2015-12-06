var $element = $('input[type="range"]');
var $output = $('.output');

function updateOutput(el, val) {
  el.textContent = val;
}

$element
  .rangeslider({
    polyfill: false,
    onInit: function() {
      updateOutput($output[0], this.value);
    }
  })
  .on('input', function() {
    updateOutput($output[0], this.value);
  });

//center btn
//style for control
    function set_box_controller_position(){
    var slider_width = galleryTop.width;
    var slider_height = galleryTop.height;
    var top_box_controller = slider_height/2 - $('.wrap_box_controler').height()/2 + 0;
    var left_box_controller = slider_width/2 - $('.wrap_box_controler').width()/2;
    $('.wrap_box_controler').css({'top': top_box_controller+'px', 'left': left_box_controller+'px'});
    }
//style for control

$( window ).resize(function() {
  set_box_controller_position();
});

$( document ).ready( function(){
set_box_controller_position();
} );


/*slider swiper*/
function disableSwipe(s){  
    s.lockSwipes();
    console.log('disableSwipe');
}
    
function enableSwipe(s){   
    s.unlockSwipes();
    console.log('enableSwipe');
}

var galleryTop = new Swiper('.gallery-top', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10
});


var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
});

galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;
/*slider swiper*/