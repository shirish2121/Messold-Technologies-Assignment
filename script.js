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

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".dropdown-content1").classList.toggle("show");
});

// carousel =========================================================================

const track = document.querySelectorAll(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const slides_review = Array.from(
  document.querySelectorAll(".carousel-slide-review")
);
console.log(slides_review);
const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".prev-btn");
console.log(nextBtn);
console.log(track);
console.log(slides);

// Set initial slide width based on visible count
const slideWidth = slides[0].getBoundingClientRect().width;
const slideWidth_review = slides_review[0].getBoundingClientRect().width;
console.log(slideWidth_review);
console.log(slideWidth);
const visibleSlides = 5;
let currentPosition = 0;

// Move to slide
const moveToSlide = (direction) => {
  const maxPosition = -(slides.length - visibleSlides) * slideWidth;

  if (direction === "next") {
    currentPosition = Math.max(currentPosition - slideWidth, maxPosition);
  } else {
    currentPosition = Math.min(currentPosition + slideWidth, 0);
  }

  track[0].style.transform = `translateX(${currentPosition}px)`;
};

// Event listeners
nextBtn[0].addEventListener("click", () => moveToSlide("next"));
prevBtn[0].addEventListener("click", () => moveToSlide("prev"));

// ============== for second slider===================================
const moveToSlide_review = (direction) => {
  const maxPosition =
    -(slides_review.length - visibleSlides) * slideWidth_review;

  if (direction === "next") {
    currentPosition = Math.max(
      currentPosition - slideWidth_review,
      maxPosition
    );
  } else {
    currentPosition = Math.min(currentPosition + slideWidth_review, 0);
  }

  track[1].style.transform = `translateX(${currentPosition}px)`;
};

nextBtn[1].addEventListener("click", () => moveToSlide_review("next"));
prevBtn[1].addEventListener("click", () => moveToSlide_review("prev"));
