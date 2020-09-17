const menuHamburguesa = document.querySelector(".boton-hamburguesa");
const menuBody = document.querySelector("#container-expand");
const body = document.querySelector("body");
const cerrarExpand = document.querySelector(".cerrar-expand");
const links = document.querySelectorAll(".lista-expand");
const headerExpand = document.querySelector(".menu-expand");
const presentacion = document.querySelector(".presentacion");

menuHamburguesa.onclick = () => {
  menuBody.classList.toggle("ocultar");
};

for (let link of links) {
  link.onclick = () => {
    menuHamburguesa.onclick();
  };
}

cerrarExpand.onclick = () => {
  menuBody.classList.toggle("ocultar");
};
