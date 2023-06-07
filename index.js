"use strict";

/****** VARIABLES NAVBAR *******/
const navbarContainer = document.querySelector(".nav-container");
const navItems = document.querySelectorAll(".nav-item");

navbarContainer.addEventListener("mouseenter", function (e) {
  if (e.target.classList.contains(".nav-item")) {
    console.log("yes");
  }
});
