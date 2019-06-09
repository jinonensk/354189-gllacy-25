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

// popup
if (document.querySelector('.map-contacts .button')) {
  const invokePopup = document.querySelector('.map-contacts .button');
  const askPopup = document.querySelector('.ask-popup');
  const darkOverlay = document.querySelector('.dark-overlay')

  const askClose = askPopup.querySelector('.button-close');
  const askForm = askPopup.querySelector('form');

  const userName = askPopup.querySelector('[name=user-name]');
  const userEmail = askPopup.querySelector('[name=popup-user-email]');
  const askMessage = askPopup.querySelector('[name=user-text]');

  let isStorageSupport = true;
  let storage = '';

  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }

  invokePopup.addEventListener('click', function(evt) {
    evt.preventDefault();
    askPopup.classList.add('popup-show');
    darkOverlay.classList.add('overlay-show');
    userName.focus();

    if (storage) {
      userName.value = storage;
      userEmail.value = localStorage.getItem('email')
      askMessage.focus();
    } else {
      userName.focus();
    };
  });

  askClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    askPopup.classList.remove('popup-show');
    darkOverlay.classList.remove('overlay-show');
    askPopup.classList.remove('popup-ask-error');
  });

  askForm.addEventListener('submit', function(evt) {

    if (!userName.value || !userEmail.value || !askMessage.value) {
      evt.preventDefault();
      askPopup.classList.remove('popup-ask-error');
      askPopup.offsetWidth = askPopup.offsetWidth;
      askPopup.classList.add('popup-ask-error');
    } else {

      if (isStorageSupport) {
        localStorage.setItem('name', userName.value);
        localStorage.setItem('email', userEmail.value);
      };
    };
  });

  window.addEventListener('keydown', function(evt) {
    if (askPopup.classList.contains('popup-show')) {

      if (evt.keyCode === 27) {
        evt.preventDefault();
        askPopup.classList.remove('popup-show');
        darkOverlay.classList.remove('overlay-show');
        askPopup.classList.remove('popup-ask-error');
      };
    };
  });
};
