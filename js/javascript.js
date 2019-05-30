// index slider
if (document.querySelector('.slider')) {
  const sliderControls = document.querySelectorAll('.slider-control');
  const slides = document.querySelectorAll('.slides .slide');

  sliderControls.forEach(function(item) {
    item.addEventListener('click', function(evt) {
      const currentControl = evt.currentTarget;
      const currentSlide = document.querySelectorAll(evt.currentTarget.dataset.slide)
      const newBodyColor = currentSlide[0].dataset.bodyColor;
      evt.preventDefault();

      sliderControls.forEach(function(item) {
        if (item.classList.contains('control-active')) {
          item.classList.remove('control-active');
        };
      });

      slides.forEach(function(item) {
        if (item.classList.contains('slide-show')) {
          item.classList.remove('slide-show');
        };
      });

      currentControl.classList.add('control-active');
      currentSlide[0].classList.add('slide-show');

      document.body.style.backgroundColor = newBodyColor;
    })
  });
};
