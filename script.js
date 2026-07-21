const hamburger = document.querySelector(".hamburger");
const services = document.querySelector(".services");

hamburger.addEventListener("click", function () {
  services.classList.toggle("open");
});
