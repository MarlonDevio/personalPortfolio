"use strict";

/****Variables****/
// HEADER VARIABLES
const navContainer = document.querySelector(
  ".header__nav-container__nav-items"
);
const navItems = document.querySelectorAll(".nav-item");

// About variables
const aboutImgContainer = document.querySelector(".about__grid-row__col--1");
const aboutImages = document.querySelectorAll(".about__pictures");
navContainer.addEventListener("click", (e) => {
  e.preventDefault();

  // check if correct target
  if (e.target.classList.contains("nav-item")) {
    const clicked = e.target;
    const dataNav = clicked.dataset.nav;
    const element = document.getElementById(dataNav);
    element.scrollIntoView({ behavior: "smooth" });
  }
});

aboutImgContainer.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    // guard clause

  }

  //
);

// function to check classes


