const coverEl = document.querySelector('.cover');
const cardsEl = document.querySelector('.cards');

let lastKnownScrollPosition = 0;
let ticking = false;

const onScroll = scrollY => {
  const coverHeight = coverEl.offsetHeight;
  if (scrollY !== 0) {
    coverEl.style.opacity = (coverHeight - scrollY - 104) / coverHeight;
  } else {
    coverEl.style.opacity = 1;
  }
};

if (coverEl && cardsEl) {
  window.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll(lastKnownScrollPosition);
        ticking = false;
      });
      ticking = true;
    }
  });

  onScroll(window.scrollY);
}
