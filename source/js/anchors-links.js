import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const cardsLink = document.querySelector('a[href="#cards-anchor"]');
const callbackLinks = document.querySelectorAll('a[href="#callback"]');

const onAnchorClick = evt => {
  evt.preventDefault();
  document
    .querySelector(evt.currentTarget.getAttribute('href'))
    .scrollIntoView({ behavior: 'smooth' });
};

[cardsLink, ...callbackLinks].forEach(el => {
  if (el) {
    el.addEventListener('click', onAnchorClick);
  }
});
