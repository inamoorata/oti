//toggle active class
const navbarNav = document.querySelector(".navbar-nav");
//saat menu diklik,
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//menghilangkan nav dgn klik di mana pun
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
