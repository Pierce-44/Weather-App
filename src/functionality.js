/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import * as DOM from './DOM';

function functionality() {
  DOM.dailyBtn.addEventListener('click', dailyDisplay);
  DOM.hourlyBtn.addEventListener('click', hourlyDisplay);
}

function dailyDisplay() {
  const prevButton = document.querySelector('#arrowLeft');
  const nextButton = document.querySelector('#arrowRight');

  DOM.hourlyBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.671)';
  DOM.dailyBtn.style.backgroundColor = 'rgb(190, 242, 255)';

  DOM.carousel.style.display = 'none';

  // this removes any previous event listeners
  prevButton.replaceWith(prevButton.cloneNode(true));
  nextButton.replaceWith(nextButton.cloneNode(true));

  DOM.arrows.forEach((element) => {
    element.style.display = 'none';
  });

  DOM.daysContent.forEach((element) => {
    element.style.display = 'flex';
  });

  DOM.daysContent.forEach((element) => {
    element.style.animation = 'fade 0.15s ease-in-out 1 forwards';
  });
}

function hourlyDisplay() {
  DOM.carousel.style.animation = 'fade 0.15s ease-in-out 1 forwards';
  DOM.carousel.style.display = 'initial';
  DOM.dailyBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.671)';
  DOM.hourlyBtn.style.backgroundColor = 'rgb(190, 242, 255)';

  DOM.daysContent.forEach((element) => {
    element.style.display = 'none';
  });

  DOM.arrows.forEach((element) => {
    if (window.innerWidth > 600) {
      element.style.display = 'flex';
    } else if (window.innerWidth < 600) {
      element.style.display = 'none';
    }
  });
  carousel();
}

function carousel() {
  const slides = Array.from(DOM.track.children);
  const slideWidth = slides[0].getBoundingClientRect().width;
  const prevButton = document.querySelector('#arrowLeft');
  const nextButton = document.querySelector('#arrowRight');

  slides[0].classList.add('current-slide');
  slides[1].classList.remove('current-slide');
  slides[2].classList.remove('current-slide');
  DOM.track.style.transform = 'translateX(0)';

  // arrange the slides next to eachother
  const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  };
  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  // left arrow, move slides to the left
  prevButton.addEventListener('click', () => {
    const currentSlide = document.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(DOM.track, currentSlide, prevSlide);
  });

  // right arrow, move slides to the right
  nextButton.addEventListener('click', () => {
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(DOM.track, currentSlide, nextSlide);
  });
}

export default functionality;
