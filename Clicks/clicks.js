/*global $*/
/*jslint sloppy:true, browser: true*/


var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var y = $(window).height() / 2;

setInterval(function () {
  $('.logo').css({
      left: x,
      top: y
  });
  x = x + vx;
  y = y + vy;
  if (x < 0) {
      x = 0;
      vx = -vx;
  } else if (x > $(window).width()) {
      x = $(window).width();
      vx = -vx;
  }
}, 20);