//toggle active class
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu");
//saat menu diklik,
menu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

//menghilangkan nav dgn klik di mana pun
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//toggle visible class
const boxAfter = document.querySelector(".box-after");
const buttonFeatures = document.getElementById("button-features");
//saat button features diklik,
if (buttonFeatures && boxAfter) {
  buttonFeatures.addEventListener("click", () => {
    boxAfter.classList.toggle("visible");
    if (boxAfter.classList.contains("visible")) {
      buttonFeatures.innerHTML = 'Show Less <i data-feather="chevron-up"></i>';
    } else {
      buttonFeatures.innerHTML =
        'Show More <i data-feather="chevron-down"></i>';
    }
    feather.replace();
  });
}
