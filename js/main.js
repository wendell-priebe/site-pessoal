const 
    navMenu = document.getElementById("nav_menu"),
    toggleMenu = document.getElementById("nav_toggle"),
    closeMenu = document.getElementById("nav_close"),

    estilo = document.getElementById("estilo"),
    button_dark = document.getElementById("button");

permanencCookie()

// ATIVAR MODO DARK
function darkMode(){
    // ativa o modo dark
    onOffDark()

    // verifica se esta true/false e troca estado cookie
    let resCookie = checkCookie("cookie_valid")
    if (resCookie) {
        creatCookie("cookie_valid", false, 30)
    }else{
        creatCookie("cookie_valid", true, 30)
    }

}

// verifica estado true/false cookie
function checkCookie (name){
    // cria o cookie caso nao exista
    let testname = document.cookie.includes(name)

    if (!testname) {
        creatCookie("cookie_valid", false, 30)
        return testname
    }
    // retorna o valor de cookie
    let [,test] = document.cookie.split("=")
    if (test==="true") {
        return true
    }else{
        return false
    }
}
// quando o cookie estiver true liga o modo dark
function permanencCookie(){
    let resCookie = checkCookie("cookie_valid")
    if (resCookie) {
        onOffDark()
    }
}
// cria cookie
function creatCookie(name, value, date){
    let dateExpires = "expires="+date
    document.cookie = name + "=" + value + "; " + dateExpires;
}
// aplica as alteraçoes no html
function onOffDark(){
    button_dark.classList.toggle('button_active')

    if (button_dark.classList.contains("button_active")) {
        estilo.href = "css/dark.css"
    } else {
        estilo.href = "css/white.css"
    }
}


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
