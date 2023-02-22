AOS.init();

const $anchor = document.querySelectorAll('.anchor li')

new Pageable(".wrapper", {
  animation: 800,
  anchors: [$anchor],
  events: {
    wheel: true, // enable / disable mousewheel scrolling
    mouse: true, // enable / disable mouse drag scrolling
    touch: true, // enable / disable touch / swipe scrolling
    keydown: true, // enable / disable keyboard navigation
  },
});

