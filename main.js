const menuHamburguesa = document.querySelector(".boton-hamburguesa");
const menuBody = document.querySelector("#container-expand");
const body = document.querySelector("body");

menuHamburguesa.onclick = () => {
  menuBody.classList.toggle("ocultar");
  body.classList.toggle("overlay");
};
