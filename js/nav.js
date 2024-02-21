let menu_x = document.getElementById("menu_x");
let menu = document.getElementById("menu");
let navSide = document.querySelector(".nav__side");

menu_x.addEventListener("click", () => {
  navSide.classList.toggle("nav__side--active");
});

menu.addEventListener("click", () => {
  navSide.classList.toggle("nav__side--active");
});
