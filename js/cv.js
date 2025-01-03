//Constantes
const botonMenu          =document.querySelector(`.Header-svg`)
const menu               =document.querySelector(`.Boton-ul`)
const section            =document.querySelectorAll(`.Main-section`)

 

//Funciones
let menuHandler = ()=>{
      menu.classList.toggle(`Activo`)
}
section.forEach((eachSection, i)=>{
    console.log(eachSection)
    const titulo             =eachSection.querySelector(`.Main-titulo`)
    const wrap               =eachSection.querySelector(`.Main-wrap`)
    const svg                =eachSection.querySelector(`.Main-svg`)
    console.log(titulo)
    console.log(wrap)
    titulo.addEventListener(`click`, ()=>{
        wrap.classList.toggle(`Activo`)
        if(wrap.classList.contains(`Activo`)){
            svg.style.transform = "rotate(180deg)"
        }else{
            svg.style.transform = "rotate(0deg)"
        }
    })

})

// let acordeonHandler = (_,i)=>{
//       titulo[i].addEventListener(`click`, ()=>{ 
//             contenido.forEach((eachContenido, i)=>{
//                 contenido[i].classList.toggle(`Activo`)
//             })
//       })
// }

//Listener
botonMenu.addEventListener(`click`, menuHandler)
// titulo.forEach(acordeonHandler)