// NAVBAR COLLAPSE CHANGE ICON

// SLIDER FUNCTIONALITY
const swiperContainers = document.querySelectorAll(".swiper-container");
const swipers = document.querySelectorAll(".swiper");

// CREATE ELEMENT
function createElement(className) {
  const element = document.createElement("div");
  element.className = className;
  return element;
}

for (let i = 0; i < swiperContainers.length; i++) {
  const slider = swiperContainers[i];

  const prevButton = createElement("swiper-button-prev");
  const nextButton = createElement("swiper-button-next");
  const pagination = createElement("swiper-pagination");
  slider.append(prevButton, nextButton, pagination);

  const swiperEl = slider.querySelector(".swiper");

  const slidePerView = slider.getAttribute("data-per-view");
  const disablePagination = slider.getAttribute("data-disable-pagination");
  const slideEffect = slider.getAttribute("data-effect");

  // SWIPER
  const swiper = new Swiper(swiperEl, {
    effect: slideEffect || "slide",

    // slidesPerView: slidePerView ? Number(slidePerView) : 4,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: slider.querySelector(".swiper-button-next"),
      prevEl: slider.querySelector(".swiper-button-prev"),
    },

    // pagination
    pagination: {
      el: Boolean(disablePagination === true)
        ? null
        : slider.querySelector(".swiper-pagination"),
      type: "bullets",
      clickable: true,
    },

    // Responsive
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: slidePerView ? Number(slidePerView) : 4,
        spaceBetween: 20,
      },
    },
  });
}

// RANGE SLIDER USING NOUISLIDER
const slider = document.getElementById("slider");

noUiSlider.create(slider, {
  start: [10000],
  connect: "lower",
  range: {
    min: 0,
    max: 20000,
  },
  tooltips: true,
  format: {
    // 'to' the formatted value. Receives a number.
    to: (value) => `$${value.toFixed(0)}`,
    // 'from' the formatted value.
    // Receives a string, should return a number.
    from: (value) => Number(value),
  },
});

// SINGLE PROPERTY JS
// ---------------------
// GLIGHT BOX FOR IMAGE GELLERY

const lightbox = GLightbox();
console.log(lightbox);
