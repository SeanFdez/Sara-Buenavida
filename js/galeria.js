//Constantes
const boton         =document.querySelector(`.Header-svg`)
const menu          =document.querySelector(`.Boton-ul`)
const imagen        =document.querySelectorAll(`.Fotos-img`)
const lightbox      =document.querySelector(`.Lightbox`)
const cerrar        =lightbox.querySelector(`.Lightbox-button`)
const grande        =lightbox.querySelector(`.Lightbox-img`)

//Funciones
let botonHandler = ()=> menu.classList.toggle(`Activo`)
let imagenHandler = (eachimg, i)=>{
    imagen[i].addEventListener(`click`,()=>{
        lightbox.classList.add(`Active`)
        grande.src=imagen[i].src
    })
}
let cerrarHandler = ()=> lightbox.classList.remove(`Active`)

//Listeners
boton.addEventListener(`click`, botonHandler)
imagen.forEach(imagenHandler)
cerrar.addEventListener(`click`, cerrarHandler)