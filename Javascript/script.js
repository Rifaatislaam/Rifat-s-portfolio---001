const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav-item"),
  header = document.getElementById("header");

  // OPEN AND CLOSE MENU 
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-open");
  changeIcon();
});


//close the menu when the user clicks the nav link
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav-menu-open")) {
      navMenu.classList.remove("nav-menu-open");
    }
    changeIcon();
  });
});

//change nav toggle icon 
function changeIcon() {
  if (navMenu.classList.contains("nav-menu-open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-fill");
  } else {
    navToggle.classList.replace("ri-close-fill", "ri-menu-3-line" );
  }
}