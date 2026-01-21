//  slider feedBack
const slider = document.getElementById("slider");
const cardWidth = 340; // width + gap
const totalCards = 5;
const visibleCards = 3;
let index = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextSlide() {
  if (index < totalCards - visibleCards) {
    index++;
    updateSlider();
  }
}

function prevSlide() {
  if (index > 0) {
    index--;
    updateSlider();
  }
}
