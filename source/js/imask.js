import IMask from 'imask';

const telephoneEl = document.querySelector('#tel-id');

if (telephoneEl) {
  IMask(telephoneEl, { mask: '+{7} (000) 000-00-00' });

  telephoneEl.addEventListener('input', function () {
    if (telephoneEl.validity.patternMismatch) {
      telephoneEl.setCustomValidity(
        'Введите номер телефона в формате: +7 (000) 000-00-00',
      );
    } else {
      telephoneEl.setCustomValidity('');
    }
  });
}
