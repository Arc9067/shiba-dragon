const navBtn = document.querySelector("#nav-toggle");
const links = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");
const date = document.querySelector("#date")
// add event listener

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const d = new Date();
let year = d.getFullYear();

date.textContent=year

window.addEventListener("scroll", () => {
  let currentPo = window.scrollY;
  if (currentPo > 200) {
    navbar.classList.add("navcol");
  } else {
    navbar.classList.remove("navcol");
  }
});
