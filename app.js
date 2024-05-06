const hamburgerBtn = document.getElementById("hamburger-btn")
const menu = document.getElementById("nav-links-container")
const body = document.getElementById("body")
const navlinks = document.querySelectorAll(".navlink")

hamburgerBtn.addEventListener('click', ()=>{
    hamburgerBtn.classList.toggle("open")
    menu.classList.toggle("open")
    body.classList.toggle("noscroll")
})

navlinks.forEach(element => {
    element.addEventListener('click',()=>{
        hamburgerBtn.classList.remove("open")
        menu.classList.remove("open")
        body.classList.remove("noscroll")
    })
});

window.addEventListener('scroll',()=>{
    if(window.scrollY>120){
        document.getElementById("navbar").classList.add("navbar-shadow")
    }
    if(window.scrollY<120){
        document.getElementById("navbar").classList.remove("navbar-shadow")
    }
})