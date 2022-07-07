const input = document.querySelector('#tel-id');

input.addEventListener('input', () => {
  let value = input.value.replace(/\D+/g, '');
  if (value[0] === '7' || value[0] === '8') {
    value = value.slice(1);
  }
  const numberLength = 10;

  let result = '+7 (';
  [...value].slice(0, numberLength).forEach((char, index) => {
    switch (index) {
      case 3:
        result += ') ';
        break;
      case 6:
        result += '-';
        break;
      case 8:
        result += '-';
        break;
      default:
        break;
    }

    result += char;
  });

  input.value = result;
});
