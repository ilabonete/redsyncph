// Reusable slider initializer
function initSlider(sliderSelector) {
  const slider = document.querySelector(sliderSelector);
  if (!slider) return;

  const track = slider.querySelector('.slider-track');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');
  const slides = track.children;
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index < slides.length - 1) index++;
    update();
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) index--;
    update();
  });
}

// Init both sliders
document.addEventListener('DOMContentLoaded', () => {
  initSlider('.dashboard-slider');
  initSlider('.onboarding-slider');
});
