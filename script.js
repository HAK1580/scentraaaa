const imgElements = [
  document.querySelector('.firstimg'),
  ...document.querySelectorAll('.slide')
];

let currentIndex = 0;

imgElements.forEach((img, index) => {
  img.style.opacity = index === 0 ? 1 : 0;
  img.style.zIndex = index === 0 ? 1 : 0;
});

function showNextImage() {
  imgElements[currentIndex].style.opacity = 0;
  imgElements[currentIndex].style.zIndex = 0;

  currentIndex = (currentIndex + 1) % imgElements.length;

  imgElements[currentIndex].style.opacity = 1;
  imgElements[currentIndex].style.zIndex = 1;

  const delay = currentIndex === 0 ? 10000 : 4000;
  setTimeout(showNextImage, delay);
}

setTimeout(showNextImage, 1000);

// ANIMATION CONTROL
let hasAnimated = false;

window.addEventListener("DOMContentLoaded", () => {
  const head = document.querySelector(".head");
  const nav = document.querySelector("nav");

  if (!hasAnimated) {
    nav.classList.add("animate-once");
    head.classList.add("animate-once");
    hasAnimated = true;
  }
});

// SEARCH LOGIC
let search = document.getElementById("search");
let headbox = document.querySelector(".head");
let navbar = document.querySelector("nav");
let crossbox = document.getElementById("cross_box");
let crossicon = document.getElementById("cross");
let isOpen = false;

search.addEventListener("click", () => {
  if (!isOpen) {
    headbox.style.visibility = "hidden";
    navbar.style.visibility = "hidden";
    crossbox.style.display = "";
    isOpen = true;
  }
});

crossicon.addEventListener("click", () => {
  if (isOpen) {
    crossbox.style.display = "none";
    headbox.style.visibility = "visible";
    navbar.style.visibility = "visible";

    // Remove animation classes so they don’t replay
    navbar.classList.remove("animate-once");
    headbox.classList.remove("animate-once");

    isOpen = false;
  }

  
});
