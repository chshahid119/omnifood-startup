const mobile_nav_icon = document.getElementById("mobile-nav-btn");
const header = document.querySelector(".header");

mobile_nav_icon.addEventListener("click", function () {
  console.log("clicked");
  header.classList.toggle("nav-open");
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
