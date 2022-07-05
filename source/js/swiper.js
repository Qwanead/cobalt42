import Swiper, { Autoplay } from 'swiper';
Swiper.use([Autoplay]);
import 'swiper/css';
const slideNext = () => {
  swiper.slideNext();
};

const addEventListenerToBtns = () => {
  const prevBtnEls = document.querySelectorAll(
    '.reviews__avatar-wrapper--last',
  );

  prevBtnEls.forEach(btn => {
    btn.addEventListener('click', slideNext);
  });
};

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 32,
  autoHeight: true,
});

addEventListenerToBtns();

swiper.on('slideChangeTransitionEnd', addEventListenerToBtns);
