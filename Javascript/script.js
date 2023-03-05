const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav-item"),
  header = document.getElementById("header");

  // OPEN AND CLOSE MENU 
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-open");
});