// 'use strict';

const tnslider = tns({
  container: '.slider',
  slideBy: 1,
  speed: 700, // 1秒
  nav: true,
  navPosition: 'bottom',
  autoPlay: true,
  autoPlayTimeout: 7000,
  autoPlayButtonOutput: false,
  controlContainer: '#controls',
  prevButton: '.previous',
  nextButton: '.next'
});

// const tnslider = tns({
//   container: ".slider",
//   slideBy: 1,
//   speed: 700,
//   nav: true,
//   navPosition: "bottom",
//   autoPlay: true,
//   autoPlayTimeout: 7000,
//   autoPlayButtonOutput: false,
//   controlsContainer: "#controls",
//   prevButton: ".previous",
//   nextButton: ".next"
// })