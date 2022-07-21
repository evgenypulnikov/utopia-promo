import '../pages/index.css';

/* Vars - Slider */

const sliderDotsWrapper = document.querySelector('.slider__dots');
const sliderDots = sliderDotsWrapper.querySelectorAll('.slider__dot');
const sliderSlides = document.querySelectorAll('.slider__slide');
const sliderPrevBtn = document.querySelector('.slider__nav-button_to_prev');
const sliderNextBtn = document.querySelector('.slider__nav-button_to_next');
let sliderSlideIndex = 1;

/* ___ Slider */

function showSlides(n) {
  if (n < 1) {
    sliderSlideIndex = sliderSlides.length;
  } else if (n > sliderSlides.length) {
    sliderSlideIndex = 1;
  }
  for (let i = 0; i < sliderSlides.length; i++) {
    sliderSlides[i].classList.remove('slider__slide_is_active');
  }
  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].classList.remove('slider__dot_is_active');
  }
  sliderSlides[sliderSlideIndex - 1].classList.add('slider__slide_is_active');
  sliderDots[sliderSlideIndex - 1].classList.add('slider__dot_is_active');
}

var timer = 0;
makeTimer();
function makeTimer() {
    clearInterval(timer)
    timer = setInterval(function() {
      sliderSlideIndex++;
      showSlides(sliderSlideIndex);
    }, 4000);
  }

function plusSlides(n) {
  showSlides(sliderSlideIndex += n);
}

function currentSlide(n) {
  showSlides(sliderSlideIndex = n);
}

sliderPrevBtn.addEventListener('click', function() {
  plusSlides(-1);
});

sliderNextBtn.addEventListener('click', function() {
  plusSlides(1);
});

sliderDotsWrapper.addEventListener('click', function(evt) {
  for (let i = 0; i < sliderDots.length + 1; i++) {
    if (evt.target.classList.contains('slider__dot') && evt.target == sliderDots[i - 1]) {
      currentSlide(i);
    }
  }
});

