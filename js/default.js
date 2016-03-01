
function googleMap() {
    var o = document.getElementById("google-map"),
        e = {
            center: new google.maps.LatLng(22.850808, 88.344764),
            scrollwheel: !1,
            zoom: 13,
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
  $('a[href*="#"]:not([data-toggle="collapse"], [data-toggle="tab"], [data-toggle="dropdown"])').click(function() {
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

var deadline = new Date(1458498600000);
initializeClock('clockdiv', deadline);

function addAnimation(selector, animation) {
    var animation = 'animated ' + animation;
    $(selector).addClass(animation);
    $(selector).removeClass('display-none');
}

jQuery(document).ready( function() {

    $('.parallax').parallax();
    jQuery('#grid-container').cubeportfolio({
    // options
    });

    var options = [
        {selector: '.schedule-text', offset: 0, callback: "addAnimation('.schedule-text', 'fadeInRight')" },
        {selector: '.schedule-tab', offset: 0, callback: "addAnimation('.schedule-tab', 'fadeInLeft')" },
        {selector: '.manual-robotics-text', offset: 0, callback: "addAnimation('.manual-robotics-text', 'fadeInRight')" },
        {selector: '.manual-robotics-tab', offset: 0, callback: "addAnimation('.manual-robotics-tab', 'fadeInLeft')" },
        {selector: '.autonomous-robots-text', offset: 0, callback: "addAnimation('.autonomous-robots-text', 'fadeInLeft')" },
        {selector: '.autonomous-robots-tabs', offset: 0, callback: "addAnimation('.autonomous-robots-tabs', 'fadeInRight')" },
        {selector: '.ideate-tabs', offset: 0, callback: "addAnimation('.ideate-tabs', 'fadeInLeft')" },
        {selector: '.ideate-text', offset: 0, callback: "addAnimation('.ideate-text', 'fadeInRight')" },
        {selector: '.camera-tabs', offset: 0, callback: "addAnimation('.camera-tabs', 'fadeInRight')" },
        {selector: '.camera-text', offset: 0, callback: "addAnimation('.camera-text', 'fadeInLeft')" },
        {selector: '.tech-design-tabs', offset: 0, callback: "addAnimation('.tech-design-tabs', 'fadeInLeft')" },
        {selector: '.tech-design-text', offset: 0, callback: "addAnimation('.tech-design-text', 'fadeInRight')" },
        {selector: '.codificer-tabs', offset: 0, callback: "addAnimation('.codificer-tabs', 'fadeInRight')" },
        {selector: '.codificer-text', offset: 0, callback: "addAnimation('.codificer-text', 'fadeInLeft')" },
        {selector: '.gaming-tabs', offset: 0, callback: "addAnimation('.gaming-tabs', 'fadeInLeft')" },
        {selector: '.gaming-text', offset: 0, callback: "addAnimation('.gaming-text', 'fadeInRight')" },
        {selector: '.bridge-building-tabs', offset: 0, callback: "addAnimation('.bridge-building-tabs', 'fadeInRight')" },
        {selector: '.bridge-building-text', offset: 0, callback: "addAnimation('.bridge-building-text', 'fadeInLeft')" },
        {selector: '.makebestofwaste-tabs', offset: 0, callback: "addAnimation('.makebestofwaste-tabs', 'fadeInLeft')" },
        {selector: '.makebestofwaste-text', offset: 0, callback: "addAnimation('.makebestofwaste-text', 'fadeInRight')" }
    ];
    Materialize.scrollFire(options);
    $('.last_year_gallery').slick({
        // normal options...
        infinite: true,
        autoplay: true,
        dots: true,
        adaptiveHeight: true,
        accessibility: true,
        arrows: true
    });

});
