function initMap() {
    var $map_button = $('#map_burger'),
        $map = $('.map-frame-container');

    $map_button.on('click', function () {

        if($map_button.hasClass('active')){
            $map_button.removeClass('active')
            $map.removeClass('active')
        }else{
            $map_button.addClass('active')
            $map.addClass('active')
        }

    })

    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('main_map'), {
        zoom: 4,
        scrollwheel: false,
        center: uluru
    });

}