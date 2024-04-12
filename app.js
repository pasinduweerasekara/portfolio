const hamburgerBtn = document.getElementById("hamburger-btn")
const menu = document.getElementById("nav-links-container")
hamburgerBtn.addEventListener('click', ()=>{
    hamburgerBtn.classList.toggle("open")
    menu.classList.toggle("open")
})