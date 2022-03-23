const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
const searchBtn = document.querySelector("#search-btn");
const searchBoxBtn = document.querySelector("#search-box");
const searchForm = document.querySelector(".search-form");
const contactInfo = document.querySelector(".contact-info");
const infoBtn = document.querySelector("#info-btn");
const closeContactInfo = document.querySelector("#close-contact-info");
const userBtn = document.querySelector("#user-btn");
const loginForm = document.querySelector(".login-form");
const loginBtn = document.querySelector(".login-btn");
const customSpinner = document.querySelector(".custom-spinner");

function set() {
  customSpinner.style.display = "none";
}

window.addEventListener("load", function () {
  this.setTimeout(() => {
    set();
  }, 2500);
});

// menu click event
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  contactInfo.classList.remove("contact-info__active");
  loginForm.classList.remove("login-form__active");
  searchForm.classList.remove("search-form__active");
});

// search click event

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("search-form__active");
  navbar.classList.remove("active");
  contactInfo.classList.remove("contact-info__active");
  loginForm.classList.remove("login-form__active");
});

infoBtn.addEventListener("click", function () {
  contactInfo.classList.toggle("contact-info__active");
  navbar.classList.remove("active");
  loginForm.classList.remove("login-form__active");
  searchForm.classList.remove("search-form__active");
});

closeContactInfo.addEventListener("click", () => {
  contactInfo.classList.toggle("contact-info__active");
});

userBtn.addEventListener("click", () => {
  loginForm.classList.toggle("login-form__active");
  navbar.classList.remove("active");
  contactInfo.classList.remove("contact-info__active");
  searchForm.classList.remove("search-form__active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.toggle("login-form__active");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
  contactInfo.classList.remove("contact-info__active");
  loginForm.classList.remove("login-form__active");
  searchForm.classList.remove("search-form__active");
});

// swiper begin

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// end of swiper
var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
