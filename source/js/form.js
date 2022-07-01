const isProd = process.env.NODE_ENV === 'production';

const link = '/api/order';
const url = isProd ? link : `http://localhost:8000${link}`;

function sendData() {
  const XHR = new XMLHttpRequest();
  const data = new FormData( form );

  XHR.open( "POST", url );

  XHR.send( data );

  XHR.onload = function() {
    if (XHR.status != 200) {
      console.log(`Ошибка ${XHR.status}: ${XHR.statusText}`);
      form.classList.add('callback__form--error');
    } else {
      console.log(`Готово, получили ${XHR.response}`);
      form.classList.add('callback__form--succes');
    }
  };
}

const form = document.querySelector('.js-form');

form.addEventListener( "submit", function ( event ) {
  event.preventDefault();

  sendData();
} );

const btn = document.querySelector('.js-btn-ok');
btn.addEventListener( "click", function ( event ) {
  event.preventDefault();

  form.classList.remove('callback__form--succes');
  form.reset();
} );
