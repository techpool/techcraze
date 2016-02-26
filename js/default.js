
function googleMap() {
    var o = document.getElementById("google-map"),
        e = {
            center: new google.maps.LatLng(22.850808, 88.344764),
            scrollwheel: !1,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        o = new google.maps.Map(o, e),
        a = new google.maps.LatLng(22.850808, 88.344764);
    new google.maps.Marker({
        position: a,
        map: o,
        icon: "img/location-pin.svg"
    })
}
WebFont.load({
    google: {
        families: ["Ubuntu:300,400,500,700", "Montserrat:400,700"]
    }
}), $(".carousel").swipeleft(function() {
    $(this).carousel("next")
}), google.maps.event.addDomListener(window, "load", googleMap);