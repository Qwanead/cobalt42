const selectorList = [
  '.indicators__item--cost .indicators__lines',
  '.indicators__item--speed .indicators__lines',
  '.improve__item',
  '.partners__item',
];

const observer = new IntersectionObserver(entries => {
  const visibleElements = [...entries]
    .filter(entry => entry.isIntersecting)
    .map(entry => entry.target);
  visibleElements.forEach(element => {
    element.classList.add('visible');
    observer.unobserve(element);
  });
});

selectorList.forEach(selector => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    observer.observe(element);
  });
});
