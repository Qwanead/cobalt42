function sendData() {
  const XHR = new XMLHttpRequest();
  const data = new FormData( form );

  XHR.open( "POST", "http://localhost:8000/api/order" );

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

const form = document.querySelector('.callback__form');

form.addEventListener( "submit", function ( event ) {
  event.preventDefault();

  sendData();
} );
