
function initMap() {
    var position = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('contacts_map'), {
        zoom: 4,
        scrollwheel: false,
        center: position
    });
}

