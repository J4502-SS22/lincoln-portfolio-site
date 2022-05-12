"use strict";

function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

const toggleButton = document.getElementsByClassName('toggle-button')
const navbarLinks = document.getElementsByClassName('navbar-links')

toggleButton.addEventListener('click', () {
  navbarLinks.classList.toggle('active')
}
