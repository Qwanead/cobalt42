const form = document.querySelector('.callback__form');
const inputsEls = form.querySelectorAll('input');

const checkInput = evt => {
  const { target: input, type: eventType } = evt;
  const inputValue = input.value;
  const inputContainerEl = evt.target.closest('.input');
  const labelEl = inputContainerEl.querySelector('.input__label');

  if (eventType === 'focus') {
    input.classList.add('input__field--focus');
  }

  if (eventType === 'blur') {
    input.classList.remove('input__field--focus');
  }

  if (eventType && !input.checkValidity()) {
    input.classList.add('input__field--invalid');
  } else {
    input.classList.remove('input__field--invalid');
  }

  if (inputValue.length > 0) {
    labelEl.classList.add('input__label--fill');
  } else {
    labelEl.classList.remove('input__label--fill');
  }
};

[...inputsEls].forEach(inputEl => {
  checkInput({
    target: inputEl,
    type: null,
  });
  inputEl.addEventListener('input', checkInput);
  inputEl.addEventListener('focus', checkInput);
  inputEl.addEventListener('blur', checkInput);
});
