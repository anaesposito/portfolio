const menuHamburguesa = document.querySelector(".boton-hamburguesa");
const menuBody = document.querySelector("#container-expand");
const cerrarExpand = document.querySelector(".cerrar-expand");
const links = document.querySelectorAll(".lista-expand");

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

//Empieza Filtro Proyectos
const botonTodos = document.querySelector("#todos");
const botonHtml = document.querySelector("#html");
const botonJs = document.querySelector("#js");
const botonReact = document.querySelector("#react");

const tarjetas = document.querySelectorAll(".caja-pro");
const botones = document.querySelectorAll(".project-filter");

for (let boton of botones) {
  boton.onclick = () => {
    for (let tarjeta of tarjetas) {
      boton.classList.add("selected");
      if (boton.dataset.tecnologia === tarjeta.dataset.tecnologia) {
        tarjeta.classList.remove("hidden");
      } else if (boton.dataset.tecnologia === "todos") {
        tarjeta.classList.remove("hidden");
      } else tarjeta.classList.add("hidden");
    }
  };
}
