"use strict";

// Elements
const nav = document.querySelector(".header__nav");
const navIcon = document.querySelector(".menu-btn>img");
const subMenu = [
  {
    nav: document.querySelector(".nav-features"),
    sub: document.querySelector(".sub-features"),
    icon: document.querySelector(".nav-features>img"),
  },
  {
    nav: document.querySelector(".nav-company"),
    sub: document.querySelector(".sub-company"),
    icon: document.querySelector(".nav-company>img"),
  },
];

// navbar toggle
navIcon.addEventListener("click", () => {
  nav.classList.toggle("nav-hide");
  if (nav.classList.contains("nav-hide")) {
    navIcon.setAttribute("src", "./images/icon-menu.svg");
  } else {
    navIcon.setAttribute("src", "./images/icon-close-menu.svg");
  }
});

// subMenu toggle
subMenu.forEach((e, i) => {
  e.nav.addEventListener("click", () => {
    e.sub.classList.toggle("d-none");
    e.icon.classList.toggle("rot-anim");
  });
});
