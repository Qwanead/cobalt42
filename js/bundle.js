/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 741:
/***/ (() => {

const selectorList = ['.indicators__item--cost .indicators__lines', '.indicators__item--speed .indicators__lines', '.improve__item', '.partners__item'];
const observer = new IntersectionObserver(entries => {
  const visibleElements = [...entries].filter(entry => entry.isIntersecting).map(entry => entry.target);
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

/***/ }),

/***/ 349:
/***/ (() => {

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
    const isCardActive = functionalCardEl.classList.contains('functional__api--active');
    functionalBtnEl.textContent = isCardActive ? 'Скрыть -' : 'Подробнее +';
  });
}

/***/ }),

/***/ 988:
/***/ (() => {

const contactsLinkEl = document.querySelector('#contacts-link');
const contactsEl = document.querySelector('#contacts');
const closeBtnEl = document.querySelector('#contacts-close');

const onEscKeyDown = evt => {
  if (evt.key === 'Escape') {
    closeModal();
  }
};

const onOverlayClick = evt => {
  if (evt.target.id === 'contacts') {
    closeModal();
  }
};

const openModal = evt => {
  evt.preventDefault();
  contactsEl.classList.add('contacts--visible');
  closeBtnEl.addEventListener('click', closeModal);
  window.addEventListener('keydown', onEscKeyDown);
  contactsEl.addEventListener('click', onOverlayClick);
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  contactsEl.classList.remove('contacts--visible');
  closeBtnEl.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', onEscKeyDown);
  contactsEl.removeEventListener('click', onOverlayClick);
  document.body.style.overflow = 'auto';
};

if (contactsEl && closeBtnEl && contactsLinkEl) {
  contactsLinkEl.addEventListener('click', openModal);
}

/***/ }),

/***/ 925:
/***/ (() => {

const isProd = "production" === 'production';
const link = '/api/order';
const url = isProd ? link : `http://localhost:8000${link}`;

function sendData() {
  const XHR = new XMLHttpRequest();
  const data = new FormData(form);
  XHR.open("POST", url);
  XHR.send(data);

  XHR.onload = function () {
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
const btnSend = document.querySelector('.js-btn');

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    btnSend.disabled = true;
    sendData();
  });
}

const btn = document.querySelector('.js-btn-ok');

if (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    form.classList.remove('callback__form--succes');
    btnSend.disabled = false;
    form.reset();
  });
}

/***/ }),

/***/ 143:
/***/ (() => {

const menuBtnEl = document.querySelector('.header__menu-btn');
const menuEl = document.querySelector('.header__nav-list');
const menuItemsEls = document.querySelectorAll('.header__nav-item');

const closeMenu = () => {
  menuEl.classList.remove('header__nav-list--open');
  menuBtnEl.addEventListener('click', openMenu);
  [...menuItemsEls].forEach(menuItemEl => {
    menuItemEl.removeEventListener('click', closeMenu);
  });
};

const openMenu = () => {
  menuEl.classList.add('header__nav-list--open');
  [...menuItemsEls].forEach(menuItemEl => {
    menuItemEl.addEventListener('click', closeMenu);
  });
  menuBtnEl.removeEventListener('click', openMenu);
};

if (menuBtnEl && menuEl) {
  menuBtnEl.addEventListener('click', openMenu);
}

/***/ }),

/***/ 660:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/imask/esm/index.js + 25 modules
var esm = __webpack_require__(704);
;// CONCATENATED MODULE: ./source/js/imask.js

const telephoneEl = document.querySelector('#tel-id');

if (telephoneEl) {
  (0,esm/* default */.ZP)(telephoneEl, {
    mask: '+{7} (000) 000-00-00'
  });
  telephoneEl.addEventListener('input', function () {
    if (telephoneEl.validity.patternMismatch) {
      telephoneEl.setCustomValidity('Введите номер телефона в формате: +7 (123) 456-78-90');
    } else {
      telephoneEl.setCustomValidity('');
    }
  });
}
// EXTERNAL MODULE: ./source/js/form.js
var js_form = __webpack_require__(925);
// EXTERNAL MODULE: ./source/js/contacts.js
var contacts = __webpack_require__(988);
// EXTERNAL MODULE: ./source/js/header.js
var header = __webpack_require__(143);
// EXTERNAL MODULE: ./source/js/cards.js
var cards = __webpack_require__(349);
// EXTERNAL MODULE: ./source/js/animation.js
var animation = __webpack_require__(741);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 89 modules
var swiper_esm = __webpack_require__(51);
;// CONCATENATED MODULE: ./source/js/swiper.js

swiper_esm/* default.use */.ZP.use([swiper_esm/* Autoplay */.pt]);

const controlBtnEls = document.querySelectorAll('.reviews__avatar-wrapper');
const swiper = new swiper_esm/* default */.ZP('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  // loop: true,
  spaceBetween: 16,
  autoHeight: true
});
controlBtnEls.forEach(btn => {
  btn.addEventListener('click', evt => {
    swiper.slideTo(Number(btn.dataset.swipeTo));
  });
});
;// CONCATENATED MODULE: ./source/js/index.js
// Это - ваша точка входа для скриптов страницы. Импортируйте сюда нужные вам файлы.








/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			296: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcobalt42_business_card"] = self["webpackChunkcobalt42_business_card"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [8], () => (__webpack_require__(660)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXRpb24uanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9jYXJkcy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2NvbnRhY3RzLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2ltYXNrLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvc3dpcGVyLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlbGVjdG9yTGlzdCA9IFtcbiAgJy5pbmRpY2F0b3JzX19pdGVtLS1jb3N0IC5pbmRpY2F0b3JzX19saW5lcycsXG4gICcuaW5kaWNhdG9yc19faXRlbS0tc3BlZWQgLmluZGljYXRvcnNfX2xpbmVzJyxcbiAgJy5pbXByb3ZlX19pdGVtJyxcbiAgJy5wYXJ0bmVyc19faXRlbScsXG5dO1xuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgY29uc3QgdmlzaWJsZUVsZW1lbnRzID0gWy4uLmVudHJpZXNdXG4gICAgLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZylcbiAgICAubWFwKGVudHJ5ID0+IGVudHJ5LnRhcmdldCk7XG4gIHZpc2libGVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgfSk7XG59KTtcblxuc2VsZWN0b3JMaXN0LmZvckVhY2goc2VsZWN0b3IgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gIH0pO1xufSk7XG4iLCJjb25zdCBjYXJkQnRuRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzX19idG4nKTtcbmNvbnN0IGZ1bmN0aW9uYWxCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdW5jdGlvbmFsX19idG4nKTtcbmNvbnN0IGZ1bmN0aW9uYWxDYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVuY3Rpb25hbF9fYXBpJyk7XG5cbmNvbnN0IHRvZ2dsZUNhcmQgPSBldnQgPT4ge1xuICBjb25zdCBjYXJkc0l0ZW0gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXJkc19faXRlbScpO1xuICBjb25zdCBjYXJkQnRuRWwgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXJkc19fYnRuJyk7XG5cbiAgY2FyZHNJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRzX19pdGVtLS1hY3RpdmUnKTtcbiAgY29uc3QgaXNDYXJkQWN0aXZlID0gY2FyZHNJdGVtLmNsYXNzTGlzdC5jb250YWlucygnY2FyZHNfX2l0ZW0tLWFjdGl2ZScpO1xuICBjYXJkQnRuRWwudGV4dENvbnRlbnQgPSBpc0NhcmRBY3RpdmUgPyAn0KHQutGA0YvRgtGMIC0nIDogJ9Cf0L7QtNGA0L7QsdC90LXQtSArJztcbn07XG5cblsuLi5jYXJkQnRuRWxzXS5mb3JFYWNoKGNhcmRCdG5FbCA9PiB7XG4gIGNhcmRCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNhcmQpO1xufSk7XG5cbmlmIChmdW5jdGlvbmFsQnRuRWwpIHtcbiAgZnVuY3Rpb25hbEJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZ1bmN0aW9uYWxDYXJkRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZnVuY3Rpb25hbF9fYXBpLS1hY3RpdmUnKTtcbiAgICBjb25zdCBpc0NhcmRBY3RpdmUgPSBmdW5jdGlvbmFsQ2FyZEVsLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICdmdW5jdGlvbmFsX19hcGktLWFjdGl2ZScsXG4gICAgKTtcbiAgICBmdW5jdGlvbmFsQnRuRWwudGV4dENvbnRlbnQgPSBpc0NhcmRBY3RpdmUgPyAn0KHQutGA0YvRgtGMIC0nIDogJ9Cf0L7QtNGA0L7QsdC90LXQtSArJztcbiAgfSk7XG59XG4iLCJjb25zdCBjb250YWN0c0xpbmtFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0cy1saW5rJyk7XG5jb25zdCBjb250YWN0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzJyk7XG5jb25zdCBjbG9zZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzLWNsb3NlJyk7XG5cbmNvbnN0IG9uRXNjS2V5RG93biA9IGV2dCA9PiB7XG4gIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxufTtcblxuY29uc3Qgb25PdmVybGF5Q2xpY2sgPSBldnQgPT4ge1xuICBpZiAoZXZ0LnRhcmdldC5pZCA9PT0gJ2NvbnRhY3RzJykge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxufTtcblxuY29uc3Qgb3Blbk1vZGFsID0gZXZ0ID0+IHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnRhY3RzRWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtLXZpc2libGUnKTtcbiAgY2xvc2VCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRXNjS2V5RG93bik7XG4gIGNvbnRhY3RzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk92ZXJsYXlDbGljayk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnRhY3RzRWwuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFjdHMtLXZpc2libGUnKTtcbiAgY2xvc2VCdG5FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRXNjS2V5RG93bik7XG4gIGNvbnRhY3RzRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk92ZXJsYXlDbGljayk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG59O1xuXG5pZiAoY29udGFjdHNFbCAmJiBjbG9zZUJ0bkVsICYmIGNvbnRhY3RzTGlua0VsKSB7XG4gIGNvbnRhY3RzTGlua0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKTtcbn1cbiIsImNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmNvbnN0IGxpbmsgPSAnL2FwaS9vcmRlcic7XG5jb25zdCB1cmwgPSBpc1Byb2QgPyBsaW5rIDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCR7bGlua31gO1xuXG5mdW5jdGlvbiBzZW5kRGF0YSgpIHtcbiAgY29uc3QgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoIGZvcm0gKTtcblxuICBYSFIub3BlbiggXCJQT1NUXCIsIHVybCApO1xuXG4gIFhIUi5zZW5kKCBkYXRhICk7XG5cbiAgWEhSLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChYSFIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsCAke1hIUi5zdGF0dXN9OiAke1hIUi5zdGF0dXNUZXh0fWApO1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjYWxsYmFja19fZm9ybS0tZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYNCT0L7RgtC+0LLQviwg0L/QvtC70YPRh9C40LvQuCAke1hIUi5yZXNwb25zZX1gKTtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2FsbGJhY2tfX2Zvcm0tLXN1Y2NlcycpO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtJyk7XG5jb25zdCBidG5TZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ0bicpO1xuXG5pZiAoZm9ybSkge1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoIFwic3VibWl0XCIsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGJ0blNlbmQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgc2VuZERhdGEoKTtcbiAgfSApO1xufVxuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLW9rJyk7XG5pZiAoYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnY2FsbGJhY2tfX2Zvcm0tLXN1Y2NlcycpO1xuICAgIGJ0blNlbmQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0gKTtcbn1cbiIsImNvbnN0IG1lbnVCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUtYnRuJyk7XG5jb25zdCBtZW51RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtbGlzdCcpO1xuY29uc3QgbWVudUl0ZW1zRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWl0ZW0nKTtcblxuY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xuICBtZW51RWwuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19uYXYtbGlzdC0tb3BlbicpO1xuICBtZW51QnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG4gIFsuLi5tZW51SXRlbXNFbHNdLmZvckVhY2gobWVudUl0ZW1FbCA9PiB7XG4gICAgbWVudUl0ZW1FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XG4gIH0pO1xufTtcblxuY29uc3Qgb3Blbk1lbnUgPSAoKSA9PiB7XG4gIG1lbnVFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX25hdi1saXN0LS1vcGVuJyk7XG4gIFsuLi5tZW51SXRlbXNFbHNdLmZvckVhY2gobWVudUl0ZW1FbCA9PiB7XG4gICAgbWVudUl0ZW1FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XG4gIH0pO1xuICBtZW51QnRuRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG59O1xuXG5pZiAobWVudUJ0bkVsICYmIG1lbnVFbCkge1xuICBtZW51QnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG59XG4iLCJpbXBvcnQgSU1hc2sgZnJvbSAnaW1hc2snO1xuXG5jb25zdCB0ZWxlcGhvbmVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWwtaWQnKTtcblxuaWYgKHRlbGVwaG9uZUVsKSB7XG4gIElNYXNrKHRlbGVwaG9uZUVsLCB7IG1hc2s6ICcrezd9ICgwMDApIDAwMC0wMC0wMCcgfSk7XG5cbiAgdGVsZXBob25lRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRlbGVwaG9uZUVsLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgdGVsZXBob25lRWwuc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAgICfQktCy0LXQtNC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0LIg0YTQvtGA0LzQsNGC0LU6ICs3ICgxMjMpIDQ1Ni03OC05MCcsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZWxlcGhvbmVFbC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBTd2lwZXIsIHsgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xuU3dpcGVyLnVzZShbQXV0b3BsYXldKTtcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5cbmNvbnN0IGNvbnRyb2xCdG5FbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV2aWV3c19fYXZhdGFyLXdyYXBwZXInKTtcblxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogMzAwMCxcbiAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gIH0sXG4gIC8vIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMTYsXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG59KTtcblxuY29udHJvbEJ0bkVscy5mb3JFYWNoKGJ0biA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgc3dpcGVyLnNsaWRlVG8oTnVtYmVyKGJ0bi5kYXRhc2V0LnN3aXBlVG8pKTtcbiAgfSk7XG59KTtcbiIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vaW1hc2snO1xuaW1wb3J0ICcuL2Zvcm0nO1xuaW1wb3J0ICcuL2NvbnRhY3RzJztcbmltcG9ydCAnLi9oZWFkZXInO1xuaW1wb3J0ICcuL2NhcmRzJztcbmltcG9ydCAnLi9hbmltYXRpb24nO1xuaW1wb3J0ICcuL3N3aXBlcic7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0Mjk2OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2JhbHQ0Ml9idXNpbmVzc19jYXJkXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvYmFsdDQyX2J1c2luZXNzX2NhcmRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFs4XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNjYwKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInNlbGVjdG9yTGlzdCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwidmlzaWJsZUVsZW1lbnRzIiwiZmlsdGVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm1hcCIsInRhcmdldCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidW5vYnNlcnZlIiwic2VsZWN0b3IiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmUiLCJjYXJkQnRuRWxzIiwiZnVuY3Rpb25hbEJ0bkVsIiwicXVlcnlTZWxlY3RvciIsImZ1bmN0aW9uYWxDYXJkRWwiLCJ0b2dnbGVDYXJkIiwiZXZ0IiwiY2FyZHNJdGVtIiwiY2xvc2VzdCIsImNhcmRCdG5FbCIsInRvZ2dsZSIsImlzQ2FyZEFjdGl2ZSIsImNvbnRhaW5zIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGFjdHNMaW5rRWwiLCJjb250YWN0c0VsIiwiY2xvc2VCdG5FbCIsIm9uRXNjS2V5RG93biIsImtleSIsImNsb3NlTW9kYWwiLCJvbk92ZXJsYXlDbGljayIsImlkIiwib3Blbk1vZGFsIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc1Byb2QiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJsaW5rIiwidXJsIiwic2VuZERhdGEiLCJYSFIiLCJYTUxIdHRwUmVxdWVzdCIsImRhdGEiLCJGb3JtRGF0YSIsImZvcm0iLCJvcGVuIiwic2VuZCIsIm9ubG9hZCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNUZXh0IiwicmVzcG9uc2UiLCJidG5TZW5kIiwiZXZlbnQiLCJkaXNhYmxlZCIsImJ0biIsInJlc2V0IiwibWVudUJ0bkVsIiwibWVudUVsIiwibWVudUl0ZW1zRWxzIiwiY2xvc2VNZW51Iiwib3Blbk1lbnUiLCJtZW51SXRlbUVsIiwiSU1hc2siLCJ0ZWxlcGhvbmVFbCIsIm1hc2siLCJ2YWxpZGl0eSIsInBhdHRlcm5NaXNtYXRjaCIsInNldEN1c3RvbVZhbGlkaXR5IiwiU3dpcGVyIiwiQXV0b3BsYXkiLCJ1c2UiLCJjb250cm9sQnRuRWxzIiwic3dpcGVyIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwic3BhY2VCZXR3ZWVuIiwiYXV0b0hlaWdodCIsInNsaWRlVG8iLCJOdW1iZXIiLCJkYXRhc2V0Iiwic3dpcGVUbyJdLCJzb3VyY2VSb290IjoiIn0=