
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

$(function () {
    var viewer = ImageViewer();
    $('.gallery-items').click(function () {
        var imgSrc = this.src,
            highResolutionImage = $(this).data('high-res-img');

        viewer.show(imgSrc, highResolutionImage);
    });
});

$(function() {
  $('a[href*="#"]:not([href="#event-group-2"],[href="#event-group-1"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
