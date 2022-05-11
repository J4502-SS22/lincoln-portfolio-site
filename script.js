"use strict";

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += "responsive";
  } else {
    x.className = "navbar";
  }
}

const toggleButton = document.getElementsByClassName('toggle-button')
const navbarLinks = document.getElementsByClassName('navbar-links')

toggleButton.addEventListener('click', () {
  navbarLinks.classList.toggle('active')
}
