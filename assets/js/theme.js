const hamburg = document.querySelector("#hamburger");
const mobileHeader = document.querySelector(".mobile-header");

const backToTop = document.querySelector("#back-to-top");

const dreambtn = document.querySelector('.dreambtn');
const businessbtn = document.querySelector('.businessbtn');
const dreambtn1 = document.querySelector('.dreambtn1');
const form = document.querySelector('.form');

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
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
})

let clicked = false;
hamburg.addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    mobileHeader.classList.add("clicked");
    hamburg.src = "assets/img/hamburgerexit.svg";
  } else {
    mobileHeader.classList.remove("clicked");
    hamburg.src = "assets/img/hamburger.svg";
  }
})

businessbtn.addEventListener('click', () => {
  window.location.href = "uznemejiem.html";
});

dreambtn.addEventListener('click', () => {
  if (dreambtn.classList.contains('dreambtn1')) {
    form.scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    window.location.href = "piesaki_sapni.html";
  }
});