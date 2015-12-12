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
    },
    onSlideEnd: function(position, value){triggerAction(position, value)}
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


function triggerAction(position, value){
    var deviceStatus = $( '#myonoffswitch' ).is(":checked" );
    //console.log('deviceStatus ', deviceStatus, 'type', typeof(deviceStatus));
    var deviceId = $('#deviceId').val();
    $.ajax({
        method:'post',
        url: "doit.php",
        data: {
            'value': value,
            'deviceStatus': deviceStatus,
            'deviceId': deviceId
        },
        success: function( xhr, data ) {
           var deviceId = getDeviceId(xhr);
           var  value        = getValue(xhr);
           var  deviceStatus = getDeviceStatus(xhr); //return string : 'true'/'false'
           
           update_info_to_icon(deviceId, value,deviceStatus);
        },
        complete: function(xhr, data){
        
        }
    });
}


function iconClick(base){
    $this = $(base);
    var value = $this.data('value');
    var deviceid = $this.data('deviceid');
    var devicestatus = $this.data('deviceStatus');
    console.log('type cu devicestatus ', devicestatus, 'xxxme', typeof(devicestatus));
    /*update infomation to controler box*/
    $('#deviceId').val(deviceid);
    $('#myonoffswitch')[0].checked = devicestatus;
    $element.val(value).change();
}

/*loop all icon to detected icon( deviceId)*/
function update_info_to_icon(deviceId, value,deviceStatus){
    $('.icon').each(function(){
        $t = $(this);
        var deviceid = $t.data('deviceid');
        if(deviceid == deviceId){
            //update
            $t.data('value', value) ;
            if(deviceStatus){
                var StrdeviceStatus = 'true';
            }else{
                var StrdeviceStatus = 'false';
            }
                
            $t.data('deviceStatus', StrdeviceStatus);
            console.log($t.data());
        }
    });
}

/*UPDATE INFO DATA TO ICON BTN AFTER RECEVED FROM SERVER*/
function getAllFromResponse(str){
    var xmlDoc = jQuery.parseXML(str);
     $xml = $( xmlDoc ),
     $title = $xml.find( "value" );
     $deviceid = $xml.find( "deviceId" );
     $devicestatus = $xml.find( "deviceStatus" );
    var value = $title.text();
    var deviceid = $deviceid.text();
    var devicestatus = $devicestatus.text();
    console.log('value '+value);
    console.log('deviceid '+deviceid);
    console.log('devicestatus '+devicestatus);
}

/*get deviceId from resonsive*/
function getDeviceId(str){
    var xmlDoc = jQuery.parseXML(str);
    $xml = $( xmlDoc );  
    $deviceid = $xml.find( "deviceId");
    var deviceid = $deviceid.text();
    return deviceid;
}
function getValue(str){
    var xmlDoc = jQuery.parseXML(str);
    $xml = $( xmlDoc );  
    $value = $xml.find( "value");
    var value = $value.text();
    return value;
}
function getDeviceStatus(str){
    var xmlDoc = jQuery.parseXML(str);
    $xml = $( xmlDoc );  
    $deviceStatus = $xml.find( "deviceStatus");
    var deviceStatus = $deviceStatus.text();

    return deviceStatus;
}



