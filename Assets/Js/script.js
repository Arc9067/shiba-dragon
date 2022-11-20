const navBtn = document.querySelector("#nav-toggle");
const links = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");
// add event listener

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

window.addEventListener("scroll", () => {
  let currentPo = window.scrollY;
  if (currentPo > 300) {
    navbar.classList.add("navcol");
  } else {
    navbar.classList.remove("navcol");
  }
});
