AOS.init();

const $anchor = document.querySelectorAll(".anchor li");

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

new Swiper(".mySwiper1", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  freeMode: true,
});
new Swiper(".mySwiper2", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  freeMode: true,
});
new Swiper(".mySwiper3", {
  slidesPerView: 2.2,
  spaceBetween: 10,
  freeMode: true,
});
new Swiper(".mySwiper4", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  freeMode: true,
});
