const hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");
const Link = document.querySelectorAll(".link");

hamburger.addEventListener("click", openMenu);
navLink.forEach((x) => x.addEventListener("click", closeMenu));

function openMenu() {
    hamburger.classList.toggle("active");
    Menu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    Menu.classList.remove("active");
}