// Dropdown Menu
document.querySelector(".dropdown1").addEventListener("click", () => {
  if (document.querySelector(".dropdown-content2").classList.contains("show")) {
    document.querySelector(".dropdown-content2").classList.toggle("show");
    document
      .querySelector(".dropdown-icon2")
      .classList.toggle("icon-animation");
  }
  document.querySelector(".dropdown-content1").classList.toggle("show");
  document.querySelector(".dropdown-icon1").classList.toggle("icon-animation");
});

document.querySelector(".dropdown2").addEventListener("click", () => {
  if (document.querySelector(".dropdown-content1").classList.contains("show")) {
    document.querySelector(".dropdown-content1").classList.toggle("show");
    document
      .querySelector(".dropdown-icon1")
      .classList.toggle("icon-animation");
  }
  document.querySelector(".dropdown-content2").classList.toggle("show");
  document.querySelector(".dropdown-icon2").classList.toggle("icon-animation");
});

// carousel =========================================================================

const track = document.querySelectorAll(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".prev-btn");
console.log(nextBtn);
console.log(track);

// Set initial slide width based on visible count
const slideWidth = slides[0].getBoundingClientRect().width;
const visibleSlides = 5;
let currentPosition = 0;

// Position slides
const setSlidePosition = () => {
  slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  });
};

// Move to slide
const moveToSlide = (direction) => {
  const maxPosition = -(slides.length - visibleSlides) * slideWidth;

  if (direction === "next") {
    currentPosition = Math.max(currentPosition - slideWidth, maxPosition);
  } else {
    currentPosition = Math.min(currentPosition + slideWidth, 0);
  }

  track[0].style.transform = `translateX(${currentPosition}px)`;
  track[1].style.transform = `translateX(${currentPosition}px)`;
};

// Initialize
setSlidePosition();

// Event listeners
nextBtn[0].addEventListener("click", () => moveToSlide("next"));
prevBtn[0].addEventListener("click", () => moveToSlide("prev"));
nextBtn[1].addEventListener("click", () => moveToSlide("next"));
prevBtn[1].addEventListener("click", () => moveToSlide("prev"));
