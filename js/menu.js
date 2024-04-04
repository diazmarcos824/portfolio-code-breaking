const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("nav--visible");
    nav.classList.add("transition");
})

close.addEventListener("click", () => {
    nav.classList.remove("nav--visible");
    nav.classList.remove("transition");
})