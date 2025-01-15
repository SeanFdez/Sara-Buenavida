//Constantes
const botonMenu          =document.querySelector(`.Header-svg`)
const menu               =document.querySelector(`.Boton-ul`)
const section            =document.querySelectorAll(`.Main-section`)

 

//Funciones

//Este es el menú
let menuHandler = ()=>{
      menu.classList.toggle(`Activo`)
}

//Esta es la funcion de las secciones
section.forEach((eachSection)=>{
    const titulo             =eachSection.querySelector(`.Main-titulo`) //Creamos los querySelector de cada seccion.
    const wrap               =eachSection.querySelector(`.Main-wrap`)
    const svg                =eachSection.querySelector(`.Main-svg`)

    titulo.addEventListener(`click`, ()=>{                              //Al hacer click en cada seccion, se muestra el wrap y el svg de la flecha se da la vuelta
        wrap.classList.toggle(`Activo`)
        if(wrap.classList.contains(`Activo`)){
            svg.style.transform = "rotate(180deg)"
        }else{
            svg.style.transform = "rotate(0deg)"
        }
    })

})


//Listener
botonMenu.addEventListener(`click`, menuHandler)
