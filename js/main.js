const 
    navMenu = document.getElementById("nav_menu"),
    toggleMenu = document.getElementById("nav_toggle"),
    closeMenu = document.getElementById("nav_close"),

    estilo = document.getElementById("estilo"),
    button_dark = document.getElementById("button");


// ATIVAR MODO DARK
button_dark.addEventListener("click", ()=>{

    button_dark.classList.toggle('button_active')

    if (button_dark.classList.contains("button_active")) {
        estilo.href = "css/dark.css"
    } else {
        estilo.href = "css/white.css"
    }


})


// MENU LATERAL
    // SHOW
toggleMenu.addEventListener(`click`, ()=>{
    navMenu.classList.toggle(`show`)
} )
    // HIDDEN
closeMenu.addEventListener(`click`, ()=>{
    navMenu.classList.remove(`show`)
} )

    // ANIMATION
gsap.from(`.nav_logo, .nav_toggle`, {opacity:0, duration:1, delay:2, y:-10})
gsap.from(`.nav_item`, {opacity:0, duration:1, delay:2.5, y:30, stagger:0.2})
gsap.from(`.big_logo`, {opacity:0, duration:1.5, delay:1, y:30, stagger:0.2})
gsap.from(`.about`, {opacity:0, duration:1.5, delay:2, y:30, stagger:0.2})
gsap.from(`.skills`, {opacity:0, duration:1.5, delay:2.5, y:30, stagger:0.2})




