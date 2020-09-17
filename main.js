const menuHamburguesa = document.querySelector(".boton-hamburguesa");
const menuBody = document.querySelector("#container-expand");
const body = document.querySelector("body");
const links = document.querySelectorAll(".lista-expand");
const headerExpand = document.querySelector(".menu-expand");

menuHamburguesa.onclick = () => {
  menuBody.classList.toggle("ocultar");
  body.classList.toggle("overlay");
  headerExpand.classList.toggle("fixed");
};

for (let link of links) {
  link.onclick = () => {
    menuBody.classList.toggle("ocultar");
  };
}
