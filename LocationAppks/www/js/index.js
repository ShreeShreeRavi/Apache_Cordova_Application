document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    initMap();
}

function initMap() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
    var mapOptions = {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 15
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: { lat: position.coords.latitude, lng: position.coords.longitude },
        map: map,
        title: 'You are here!'
    });
}

function onError(error) {
    console.error('Error getting location:', error);
    alert('Error getting location: ' + error.message);
}
