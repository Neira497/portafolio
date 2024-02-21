function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);

  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const about = document.getElementById("about");
const proyectos = document.getElementById("proyectos");
const modelos = document.getElementById("modelos");
const tecnologias = document.getElementById("tecnologias");

// pc
const aboutPc = document.getElementById("aboutPc");
const proyectosPc = document.getElementById("proyectosPc");
const modelosPc = document.getElementById("modelosPc");
const tecnologiasPc = document.getElementById("tecnologiasPc");

about.addEventListener("click", () => {
  scrollToElement(".about");
  navSide.classList.toggle("nav__side--active");
});

proyectos.addEventListener("click", () => {
  scrollToElement(".projects");
  navSide.classList.toggle("nav__side--active");
});

modelos.addEventListener("click", () => {
  scrollToElement(".models");
  navSide.classList.toggle("nav__side--active");
});

tecnologias.addEventListener("click", () => {
  scrollToElement(".tech");
  navSide.classList.toggle("nav__side--active");
});

aboutPc.addEventListener("click", () => {
  scrollToElement(".about");
});

proyectosPc.addEventListener("click", () => {
  scrollToElement(".projects");
});

modelosPc.addEventListener("click", () => {
  scrollToElement(".models");
});

tecnologiasPc.addEventListener("click", () => {
  scrollToElement(".tech");
});
