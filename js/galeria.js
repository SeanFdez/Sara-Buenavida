const boton =document.querySelector(`.Header-svg`)
const menu  =document.querySelector(`.Boton-ul`)

console.log(boton)
console.log (menu)
boton.addEventListener(`click`, ()=>{
    menu.classList.toggle(`Activo`)
})