const mobile_nav_icon = document.getElementById("mobile-nav-btn");
const header = document.querySelector(".header");

mobile_nav_icon.addEventListener("click", function () {
  // console.log("clicked");
  header.classList.toggle("nav-open");
});

// Update year on daily basis in footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.innerText = currentYear;

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroling back to top when click on logo of site
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links when click on any btn or nav menu
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close mobile navigation after click on nav link
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});
// Fixing flexbox gap property missing in some Safari Version
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexboox-gap");
}

checkFlexGap();
