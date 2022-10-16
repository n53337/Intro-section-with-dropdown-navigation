"use strict";

// Elements
const nav = document.querySelector(".header__nav");
const navIcon = document.querySelector(".menu-btn>img");

// navbar toggle
navIcon.addEventListener("click", () => {
  nav.classList.toggle("nav-hide");
  if (nav.classList.contains("nav-hide")) {
    navIcon.setAttribute("src", "./images/icon-menu.svg");
  } else {
    navIcon.setAttribute("src", "./images/icon-close-menu.svg");
  }
});
