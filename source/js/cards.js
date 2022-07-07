const cardBtnEls = document.querySelectorAll('.cards__btn');
const functionalBtnEls = document.querySelectorAll('.functional__btn');
const functionalCardEl = document.querySelector('.functional__api-wrapper');

[...cardBtnEls].forEach(cardBtnEl => {
  cardBtnEl.addEventListener('click', evt => {
    const cardsItem = evt.target.closest('.cards__item');
    cardsItem.classList.toggle('cards__item--active');
  });
});

[...functionalBtnEls].forEach(functionalBtnEl => {
  functionalBtnEl.addEventListener('click', () => {
    functionalCardEl.classList.toggle('functional__api-wrapper--active');
  });
});
