const cardBtnEls = document.querySelectorAll('.cards__btn');
const functionalBtnEl = document.querySelector('.functional__btn');
const functionalCardEl = document.querySelector('.functional__api');

const toggleCard = evt => {
  const cardsItem = evt.target.closest('.cards__item');
  const cardBtnEl = evt.target.closest('.cards__btn');

  cardsItem.classList.toggle('cards__item--active');
  const isCardActive = cardsItem.classList.contains('cards__item--active');
  cardBtnEl.textContent = isCardActive ? 'Скрыть -' : 'Подробнее +';
};

[...cardBtnEls].forEach(cardBtnEl => {
  cardBtnEl.addEventListener('click', toggleCard);
});

if (functionalBtnEl) {
  functionalBtnEl.addEventListener('click', () => {
    functionalCardEl.classList.toggle('functional__api--active');
    const isCardActive = functionalCardEl.classList.contains(
      'functional__api--active',
    );
    functionalBtnEl.textContent = isCardActive ? 'Скрыть -' : 'Подробнее +';
  });
}
