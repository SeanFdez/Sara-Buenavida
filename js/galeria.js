const boton =document.querySelector(`.Header-svg`)
const menu  =document.querySelector(`.Boton-ul`)

console.log(boton)
console.log (menu)
boton.addEventListener(`click`, ()=>{
    menu.classList.toggle(`Activo`)
})

const imagen=document.querySelectorAll(`.Fotos-img`)
const lightbox=document.querySelector(`.Lightbox`)
const cerrar=lightbox.querySelector(`.Lightbox-button`)
const grande=lightbox.querySelector(`.Lightbox-img`)

imagen.forEach((eachimg, i)=>{
    imagen[i].addEventListener(`click`,()=>{
        lightbox.classList.add(`Active`)
        grande.src=imagen[i].src
    })
})
cerrar.addEventListener(`click`, ()=>{
    lightbox.classList.remove(`Active`)
})