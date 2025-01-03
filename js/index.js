//Constantes
const boton         =document.querySelector(`.Header-svg`)
const menu          =document.querySelector(`.Boton-ul`)

//Funciones
let botonHandler = ()=> menu.classList.toggle(`Activo`)

//Listeners
boton.addEventListener(`click`, botonHandler)
