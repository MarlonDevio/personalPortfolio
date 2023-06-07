"use strict";

/****** VARIABLES NAVBAR *******/
const navbarContainer = document.querySelector(".nav-container");
const navItems = document.querySelectorAll(".nav-item");


navbarContainer.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav-item")) {
    const hover = e.target.dataset.nav;
    const targetElement = document.querySelector(`.nav-item-${hover}`)
    
    navItems.forEach(el => el.classList.add("non-active"));
    targetElement.classList.toggle("non-active");
    
  }
});

navbarContainer.addEventListener("mouseleave", function (e) {
  if (e.target.classList.contains("nav-item")) {
    const hover = e.target.dataset.nav;
    const targetElement = document.querySelector(`.nav-item-${hover}`)

    navItems.forEach(el => el.classList.remove("non-active"));
    
}})
