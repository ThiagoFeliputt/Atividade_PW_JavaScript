const menuIcon = document.querySelector(".menu-icone");
const navLinks = document.querySelector(".barra-navegacao-lista");
const links = document.querySelector(".barra-navegacao-link li");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('abrir')
    navLinks.classList.toggle('abrir')
})