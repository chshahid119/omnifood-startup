const mobile_nav_icon = document.getElementById("mobile-nav-btn");
const header = document.querySelector(".header");

mobile_nav_icon.addEventListener("click", function () {
  console.log("clicked");
  header.classList.toggle("nav-open");
});
