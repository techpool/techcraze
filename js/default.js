
var xmlns = "http://www.w3.org/2000/svg",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  container = select('.bottle_loader')

//center the container cos it's pretty an' that
TweenMax.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})
TweenMax.set('svg', {
  visibility: 'visible'
})

var tl = new TimelineMax();
tl.staggerTo('#bubbleGroup circle', 3, {
  attr: {
    cy: 200
  },
  repeat: -1
}, 0.6)

$(window).load(function() {
     $('#gradient').addClass('animated fadeOutDown');
     $('main').addClass('animated fadeIn');
     $('main').removeClass('hidden');
});


var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

  if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient,6);

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
    $(function(){
        $(".autotype_element").typed({
            strings: ["TECHCRAZE 2K16", "<span style='font-size:0.5em'>NURTURE :: CULTIVATE :: CREATE<span>"],
            contentType: 'html',
            typeSpeed: 10,
            loop: true,
            showCursor: false
        });
    });
});
