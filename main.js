const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".nav__list");
const openButton = document.getElementById("open__button");
const overlay = document.getElementById("overlay");
const closeButton = document.querySelector(".close__btn");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 80);
});
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

openButton.addEventListener("click", () => {
  overlay.style.display = "block";
});

closeButton.addEventListener("click", () => {
  overlay.style.display = "none";
});
// console.log(window.scrollY)
const sr=ScrollReveal({
  origin:'top',
  distance:'85px',
  duration: 2500,
  reset: true
})
sr.reveal('.home__text',{delay:300});
sr.reveal('.home__img',{delay:400});
sr.reveal('.description',{delay:300});
sr.reveal('.div__logos',{delay:300});
sr.reveal('.div__certif',{delay:300});
sr.reveal('.div__project',{delay:300});
sr.reveal('.div__contacts',{delay:300});

