const menuHamburguesa = document.querySelector(".boton-hamburguesa");
const menuBody = document.querySelector("#container-expand");

menuHamburguesa.onclick = () => {
  menuBody.classList.toggle("ocultar");
};
