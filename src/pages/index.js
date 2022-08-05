import '../pages/index.css';

/* Vars - Gallery Slider */

const gallerySlider = document.querySelector('.gallery__slider');
const gallerySliderDotsWrapper = document.querySelector('.gallery__slider-dots');
const gallerySliderDots = gallerySliderDotsWrapper.querySelectorAll('.gallery__slider-dot');
const gallerySlides = document.querySelectorAll('.gallery__slide');
const gallerySliderNav = document.querySelector('.gallery__slider-menu');
const gallerySliderPrevBtn = document.querySelector('.gallery__slider-nav-button_to_prev');
const gallerySliderNextBtn = document.querySelector('.gallery__slider-nav-button_to_next');
const gallerySliderToggle = document.querySelector('.gallery__slider-toggle');
const galleryTextToggle = document.querySelector('.gallery__text-toggle');
const galleryContainer = document.querySelector('.gallery__container');
let gallerySlideIndex = 1;

/* Vars - Events Slider */

const eventsSlider = document.querySelector('.events__slider');
const eventsSliderDotsWrapper = document.querySelector('.events__slider-dots');
const eventsSliderDots = eventsSliderDotsWrapper.querySelectorAll('.events__slider-dot');
const eventsSlides = document.querySelectorAll('.events__slide');
const eventsSliderNav = document.querySelector('.events__slider-menu');
const eventsSliderPrevBtn = document.querySelector('.events__slider-nav-button_to_prev');
const eventsSliderNextBtn = document.querySelector('.events__slider-nav-button_to_next');
const eventsSliderToggle = document.querySelector('.events__slider-toggle');
const eventsTextToggle = document.querySelector('.events__text-toggle');
const eventsContainer = document.querySelector('.events__container');
let eventsSlideIndex = 1;

/* ___ Events Slider */

function showEventsSlides(n) {
  if (n < 1) {
    eventsSlideIndex = eventsSlides.length;
  } else if (n > eventsSlides.length) {
    eventsSlideIndex = 1;
  }
  for (let i = 0; i < eventsSlides.length; i++) {
    eventsSlides[i].classList.remove('events__slide_is_active');
  }
  for (let i = 0; i < eventsSliderDots.length; i++) {
    eventsSliderDots[i].classList.remove('events__slider-dot_is_active');
  }
  eventsSlides[eventsSlideIndex - 1].classList.add('events__slide_is_active');
  eventsSliderDots[eventsSlideIndex - 1].classList.add('events__slider-dot_is_active');
}

function plusEventsSlides(n) {
  showEventsSlides(eventsSlideIndex += n);
}

function currentEventsSlide(n) {
  showEventsSlides(eventsSlideIndex = n);
}

eventsSliderPrevBtn.addEventListener('click', function() {
  plusEventsSlides(-1);
});

eventsSliderNextBtn.addEventListener('click', function() {
  plusEventsSlides(1);
});

eventsSliderDotsWrapper.addEventListener('click', function(evt) {
  for (let i = 0; i < eventsSliderDots.length + 1; i++) {
    if (evt.target.classList.contains('events__slider-dot') && evt.target == eventsSliderDots[i - 1]) {
      currentEventsSlide(i);
    }
  }
});

/* ___ Gallery Slider */

function showGallerySlides(n) {
  if (n < 1) {
    gallerySlideIndex = gallerySlides.length;
  } else if (n > gallerySlides.length) {
    gallerySlideIndex = 1;
  }
  for (let i = 0; i < gallerySlides.length; i++) {
    gallerySlides[i].classList.remove('gallery__slide_is_active');
  }
  for (let i = 0; i < gallerySliderDots.length; i++) {
    gallerySliderDots[i].classList.remove('gallery__slider-dot_is_active');
  }
  gallerySlides[gallerySlideIndex - 1].classList.add('gallery__slide_is_active');
  gallerySliderDots[gallerySlideIndex - 1].classList.add('gallery__slider-dot_is_active');
}

var timer = 0;
makeTimer();
function makeTimer() {
    clearInterval(timer)
    timer = setInterval(function() {
      gallerySlideIndex++;
      showGallerySlides(gallerySlideIndex);
    }, 4000);
  }

function plusgallerySlides(n) {
  showGallerySlides(gallerySlideIndex += n);
}

function currentgallerySlide(n) {
  showGallerySlides(gallerySlideIndex = n);
}

gallerySliderPrevBtn.addEventListener('click', function() {
  plusgallerySlides(-1);
  makeTimer();
});

gallerySliderNextBtn.addEventListener('click', function() {
  plusgallerySlides(1);
  makeTimer();
});

gallerySliderDotsWrapper.addEventListener('click', function(evt) {
  for (let i = 0; i < gallerySliderDots.length + 1; i++) {
    if (evt.target.classList.contains('gallery__slider-dot') && evt.target == gallerySliderDots[i - 1]) {
      currentgallerySlide(i);
      makeTimer();
    }
  }
});

// gallerySliderToggle.addEventListener('click', function(evt) {
//   gallerySlider.classList.add('gallery__slider_visible');
//   galleryContainer.classList.add('gallery__container_hidden');
//   gallerySliderNav.classList.remove('gallery__slider-menu_hidden');
//   gallerySliderToggle.classList.add('gallery__slider-toggle_hidden');
//   galleryTextToggle.classList.remove('gallery__text-toggle_hidden');
// });

// galleryTextToggle.addEventListener('click', function(evt) {
//   gallerySlider.classList.remove('gallery__slider_visible');
//   galleryContainer.classList.remove('gallery__container_hidden');
//   gallerySliderNav.classList.add('gallery__slider-menu_hidden');
//   gallerySliderToggle.classList.remove('gallery__slider-toggle_hidden');
//   galleryTextToggle.classList.add('gallery__text-toggle_hidden');
// });

/*___ Smooth Anchors */

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(evt) {
    evt.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
