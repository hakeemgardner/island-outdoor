const menuBtn = document.querySelector(".menu-button");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-menu");
menuBtn.addEventListener("click", () => {
  overlay.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.toggle("active");
});
