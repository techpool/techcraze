
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
  $('a[href*="#"]:not([href="#event-group-2"],[href="#event-group-1"], [data-toggle="collapse"])').click(function() {
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

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(1456833600000);
initializeClock('clockdiv', deadline);

jQuery(document).ready( function() {
     jQuery('#grid-container').cubeportfolio({
        // options
     });
});
