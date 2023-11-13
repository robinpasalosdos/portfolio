const menu = document.querySelector(".hamburger-navigation");
const icon = document.querySelector(".toggleMenu");

function toggleMenu() {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}