// Enables Strict Mode to catch common coding errors and "unsafe" actions.
"use strict";

/****Variables****/
// HEADER VARIABLES

// Selects the container for the navigation items using the class selector '.header__nav-container__nav-items'.
const navContainer = document.querySelector(".header__nav-container__nav-items");

// Selects all navigation items using the class selector '.nav-item'.
const navItems = document.querySelectorAll(".nav-item");

// ! 1.  Add event listener to common parent element
// ! 2. Determine what element originated the event

// Adds a click event listener to the navigation container.
navContainer.addEventListener("click", (e) => {
  // Prevents the default action of the event.
  e.preventDefault();

  // Matching strategy - Executes code block if the clicked target contains the 'nav-item' class.
  if (e.target.classList.contains("nav-item")) {
    // Extracts the href attribute of the clicked element, which should correspond to an ID of a page section.
    const id = e.target.getAttribute("href");
    // Scrolls to the corresponding section of the page smoothly.
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  }
});

// Reduces the playback rate of the video in the '.bg-video__content' element to 75% of the original speed.
document.querySelector(".bg-video__content").playbackRate = 0.75;

/*** Navbar Opacity ***/




// ! navbar increase size still needs refactoring
function handleHoverEnter(e){
  e.preventDefault()
  if (e.target.classList.contains("nav-item")) {
    const link = e.target;
    navItems.forEach(function(el){
      if (el !== link) {
      removingClass(el, "scale-add")
      addingClass(el, "opacity-add")
      }
      else {
        addingClass(el, "scale-add")
      }
    })
}}
function handleHoverLeave(e){
  e.preventDefault();
  if (e.target.classList.contains("nav-item")) {
    const link = e.target;
    navItems.forEach(function(el){
       removingClass(el,"scale-add")
       removingClass(el,"opacity-add")
     }
    )
  }
}

function addingClass(el, classAdd) {
  return el.classList.add(classAdd)
}

function removingClass(el, classRemove) {
  return el.classList.remove(classRemove);
}

navContainer.addEventListener("mouseover", handleHoverEnter)




navContainer.addEventListener("mouseout", handleHoverLeave);
