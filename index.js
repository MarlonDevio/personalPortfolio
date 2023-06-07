'use strict';

/****** VARIABLES NAVBAR *******/

const navbar = document.querySelector('.navbar');
const navListItems = document.querySelectorAll('.nav-list-item')

/****** EVENT LISTENERS *******/
navbar.addEventListener('click', (e) => {
	e.preventDefault();

	/* Dom traversing --> There are multiple elements inside the navbar, but we only
	need the elements with classList "nav-list-item"
	Ignore clicks where result is null
	Guard clause
	null is falsy value, so if clicked returns null, its falsy, so it
	won't return, so we have to add !clicked is another way of saying
	clicked == null
	Makes sure that rest of code is not executed, good for performance */

	const clicked = e.target.closest(".nav-list-item");
	// if not clicked, then immediately return (guard close)
	if(!clicked) return;






})