/*      menu responsive      */
const nav = document.querySelector(".nav");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    nav.classList.toggle("menu_opened")
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.nav a[href^="#"');
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        nav.classList.remove("menu_opened");
    })
})

//boton subir

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
    let currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 0) {
        window.scrollTo (0, 0);
    }
}

buttonUp = document.getElementById("button-up");
window.onscroll = function() {
    let scroll = document.documentElement.scrollTop;
    if(scroll > 300){
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 300) {
        buttonUp.style.transform = "scale(0)";
    }
}


//acordeon

const targets = document.querySelectorAll("[data-target]");
const content =document.querySelectorAll("[data-content]")

targets.forEach(target => {
    target.addEventListener("click", () => {
        content.forEach(c =>{
            c.classList.remove("active")
        })    
        
        const t = document.querySelector(target.dataset.target)
        t.classList.add("active")
    })    
})    
