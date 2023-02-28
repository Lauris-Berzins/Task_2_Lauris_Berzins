const hamburg = document.querySelector("#hamburger");
const mobileHeader = document.querySelector(".mobile-header");

const backToTop = document.querySelector("#back-to-top");

document.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    if (backToTop.classList.contains("appear"))
      backToTop.classList.remove("appear");
  }
  if (window.scrollY > 0) {
    if (!backToTop.classList.contains("appear")) {
      backToTop.classList.add("appear");
    }
  }
})

backToTop.addEventListener("click", function (e) {
  window.scroll({ top: 0, behavior: "smooth" });
})

let clicked = false;
hamburg.addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    mobileHeader.classList.add("clicked");
    hamburg.src = "assets/img/hamburgerexit.svg";
  }
  else {
    mobileHeader.classList.remove("clicked");
    hamburg.src = "assets/img/hamburger.svg";
  }
})