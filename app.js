// Enables Strict Mode to catch common coding errors and "unsafe" actions.
"use strict";

/****Variables****/
// HEADER VARIABLES

// Selects the container for the navigation items using the class selector '.header__nav-container__nav-items'.
const completeNavBar = document.querySelector(".header__nav-container")
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
function handleHoverEnter(e) {
	e.preventDefault()
	if (e.target.classList.contains("nav-item")) {
		const link = e.target;
		navItems.forEach(function (el) {
			if (el !== link) {
				removingClass(el, "scale-add")
				addingClass(el, "opacity-add")
			} else {
				addingClass(el, "scale-add")
			}
		})
	}
}

function handleHoverLeave(e) {
	e.preventDefault();
	if (e.target.classList.contains("nav-item")) {
		const link = e.target;
		navItems.forEach(function (el) {
			 removingClass(el, "scale-add")
			 removingClass(el, "opacity-add")
		 }
		)
	}
}

//function for adding classes to all elements 
function addingClass(el, classAdd) {
	return el.classList.add(classAdd)
}

//function for removing classes from an element
function removingClass(el, classRemove) {
	return el.classList.remove(classRemove);
}


navContainer.addEventListener("mouseover", handleHoverEnter)
navContainer.addEventListener("mouseout", handleHoverLeave);


//! implement sticky navbar with Intersection Observer Api
// const obsCallback = function (entries, observer) { // this callback function
//   // will be called
//   // each time that the observed element, is intersecting the root element
//                                   // at the treshold that we defined
//   // whenever the first section (our target) is intersecting the viewport at
//   // 10%, then this function will be called no matter if we scroll up or down
//   // this function will be called with 2 arguments
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }
// const obsOption = {
//   root: null, //element that target is intersecting // with null, we can
//   threshold: [0, 0.2]   //can have multiple arrays             // observe entire viewport
//
// }
// const about = document.getElementById("about");
// const services = document.getElementById("services")
const header = document.getElementById("header");
const stickyNav = function (entries) {
	const [entry] = entries;
	console.log(entry);

	if(!entry.isIntersecting) addingClass(completeNavBar, "sticky");
	else removingClass(completeNavBar, "sticky");
}
const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0 // when 0% of header is visible then we want something to happen
});

// target
headerObserver.observe(header);
