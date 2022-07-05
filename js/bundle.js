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


const slideNext = () => {
  swiper.slideNext();
};

const addEventListenerToBtns = () => {
  const prevBtnEls = document.querySelectorAll('.reviews__avatar-wrapper--last');
  prevBtnEls.forEach(btn => {
    btn.addEventListener('click', slideNext);
  });
};

const swiper = new swiper_esm/* default */.ZP('.swiper', {
  autoplay: {
    delay: 15000,
    disableOnInteraction: false
  },
  loop: true,
  spaceBetween: 32,
  autoHeight: true
});
addEventListenerToBtns();
swiper.on('slideChangeTransitionEnd', addEventListenerToBtns);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9pbWFzay5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL3N3aXBlci5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2luZGV4LmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWxlY3Rvckxpc3QgPSBbXG4gICcuaW5kaWNhdG9yc19faXRlbS0tY29zdCAuaW5kaWNhdG9yc19fbGluZXMnLFxuICAnLmluZGljYXRvcnNfX2l0ZW0tLXNwZWVkIC5pbmRpY2F0b3JzX19saW5lcycsXG4gICcuaW1wcm92ZV9faXRlbScsXG4gICcucGFydG5lcnNfX2l0ZW0nLFxuXTtcblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gIGNvbnN0IHZpc2libGVFbGVtZW50cyA9IFsuLi5lbnRyaWVzXVxuICAgIC5maWx0ZXIoZW50cnkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpXG4gICAgLm1hcChlbnRyeSA9PiBlbnRyeS50YXJnZXQpO1xuICB2aXNpYmxlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gIH0pO1xufSk7XG5cbnNlbGVjdG9yTGlzdC5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICB9KTtcbn0pO1xuIiwiY29uc3QgY2FyZEJ0bkVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkc19fYnRuJyk7XG5jb25zdCBmdW5jdGlvbmFsQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVuY3Rpb25hbF9fYnRuJyk7XG5jb25zdCBmdW5jdGlvbmFsQ2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1bmN0aW9uYWxfX2FwaScpO1xuXG5jb25zdCB0b2dnbGVDYXJkID0gZXZ0ID0+IHtcbiAgY29uc3QgY2FyZHNJdGVtID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FyZHNfX2l0ZW0nKTtcbiAgY29uc3QgY2FyZEJ0bkVsID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FyZHNfX2J0bicpO1xuXG4gIGNhcmRzSXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkc19faXRlbS0tYWN0aXZlJyk7XG4gIGNvbnN0IGlzQ2FyZEFjdGl2ZSA9IGNhcmRzSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmRzX19pdGVtLS1hY3RpdmUnKTtcbiAgY2FyZEJ0bkVsLnRleHRDb250ZW50ID0gaXNDYXJkQWN0aXZlID8gJ9Ch0LrRgNGL0YLRjCAtJyA6ICfQn9C+0LTRgNC+0LHQvdC10LUgKyc7XG59O1xuXG5bLi4uY2FyZEJ0bkVsc10uZm9yRWFjaChjYXJkQnRuRWwgPT4ge1xuICBjYXJkQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDYXJkKTtcbn0pO1xuXG5pZiAoZnVuY3Rpb25hbEJ0bkVsKSB7XG4gIGZ1bmN0aW9uYWxCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmdW5jdGlvbmFsQ2FyZEVsLmNsYXNzTGlzdC50b2dnbGUoJ2Z1bmN0aW9uYWxfX2FwaS0tYWN0aXZlJyk7XG4gICAgY29uc3QgaXNDYXJkQWN0aXZlID0gZnVuY3Rpb25hbENhcmRFbC5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICAnZnVuY3Rpb25hbF9fYXBpLS1hY3RpdmUnLFxuICAgICk7XG4gICAgZnVuY3Rpb25hbEJ0bkVsLnRleHRDb250ZW50ID0gaXNDYXJkQWN0aXZlID8gJ9Ch0LrRgNGL0YLRjCAtJyA6ICfQn9C+0LTRgNC+0LHQvdC10LUgKyc7XG4gIH0pO1xufVxuIiwiY29uc3QgY29udGFjdHNMaW5rRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMtbGluaycpO1xuY29uc3QgY29udGFjdHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0cycpO1xuY29uc3QgY2xvc2VCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0cy1jbG9zZScpO1xuXG5jb25zdCBvbkVzY0tleURvd24gPSBldnQgPT4ge1xuICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbn07XG5cbmNvbnN0IG9uT3ZlcmxheUNsaWNrID0gZXZ0ID0+IHtcbiAgaWYgKGV2dC50YXJnZXQuaWQgPT09ICdjb250YWN0cycpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbn07XG5cbmNvbnN0IG9wZW5Nb2RhbCA9IGV2dCA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb250YWN0c0VsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLS12aXNpYmxlJyk7XG4gIGNsb3NlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVzY0tleURvd24pO1xuICBjb250YWN0c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25PdmVybGF5Q2xpY2spO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG59O1xuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb250YWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhY3RzLS12aXNpYmxlJyk7XG4gIGNsb3NlQnRuRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVzY0tleURvd24pO1xuICBjb250YWN0c0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25PdmVybGF5Q2xpY2spO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xufTtcblxuaWYgKGNvbnRhY3RzRWwgJiYgY2xvc2VCdG5FbCAmJiBjb250YWN0c0xpbmtFbCkge1xuICBjb250YWN0c0xpbmtFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG59XG4iLCJjb25zdCBpc1Byb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5jb25zdCBsaW5rID0gJy9hcGkvb3JkZXInO1xuY29uc3QgdXJsID0gaXNQcm9kID8gbGluayA6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAke2xpbmt9YDtcblxuZnVuY3Rpb24gc2VuZERhdGEoKSB7XG4gIGNvbnN0IFhIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCBmb3JtICk7XG5cbiAgWEhSLm9wZW4oIFwiUE9TVFwiLCB1cmwgKTtcblxuICBYSFIuc2VuZCggZGF0YSApO1xuXG4gIFhIUi5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoWEhSLnN0YXR1cyAhPSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGDQntGI0LjQsdC60LAgJHtYSFIuc3RhdHVzfTogJHtYSFIuc3RhdHVzVGV4dH1gKTtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2FsbGJhY2tfX2Zvcm0tLWVycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGDQk9C+0YLQvtCy0L4sINC/0L7Qu9GD0YfQuNC70LggJHtYSFIucmVzcG9uc2V9YCk7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NhbGxiYWNrX19mb3JtLS1zdWNjZXMnKTtcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZm9ybScpO1xuY29uc3QgYnRuU2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4nKTtcblxuaWYgKGZvcm0pIHtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCBcInN1Ym1pdFwiLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBidG5TZW5kLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHNlbmREYXRhKCk7XG4gIH0gKTtcbn1cblxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ0bi1vaycpO1xuaWYgKGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2NhbGxiYWNrX19mb3JtLS1zdWNjZXMnKTtcbiAgICBidG5TZW5kLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9ICk7XG59XG4iLCJjb25zdCBtZW51QnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LWJ0bicpO1xuY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LWxpc3QnKTtcbmNvbnN0IG1lbnVJdGVtc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1pdGVtJyk7XG5cbmNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcbiAgbWVudUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbmF2LWxpc3QtLW9wZW4nKTtcbiAgbWVudUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xuICBbLi4ubWVudUl0ZW1zRWxzXS5mb3JFYWNoKG1lbnVJdGVtRWwgPT4ge1xuICAgIG1lbnVJdGVtRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xuICB9KTtcbn07XG5cbmNvbnN0IG9wZW5NZW51ID0gKCkgPT4ge1xuICBtZW51RWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19uYXYtbGlzdC0tb3BlbicpO1xuICBbLi4ubWVudUl0ZW1zRWxzXS5mb3JFYWNoKG1lbnVJdGVtRWwgPT4ge1xuICAgIG1lbnVJdGVtRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xuICB9KTtcbiAgbWVudUJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xufTtcblxuaWYgKG1lbnVCdG5FbCAmJiBtZW51RWwpIHtcbiAgbWVudUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xufVxuIiwiaW1wb3J0IElNYXNrIGZyb20gJ2ltYXNrJztcblxuY29uc3QgdGVsZXBob25lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVsLWlkJyk7XG5cbmlmICh0ZWxlcGhvbmVFbCkge1xuICBJTWFzayh0ZWxlcGhvbmVFbCwgeyBtYXNrOiAnK3s3fSAoMDAwKSAwMDAtMDAtMDAnIH0pO1xuXG4gIHRlbGVwaG9uZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0ZWxlcGhvbmVFbC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAgIHRlbGVwaG9uZUVsLnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgICAn0JLQstC10LTQuNGC0LUg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwINCyINGE0L7RgNC80LDRgtC1OiArNyAoMTIzKSA0NTYtNzgtOTAnLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVsZXBob25lRWwuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgU3dpcGVyLCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcblN3aXBlci51c2UoW0F1dG9wbGF5XSk7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuY29uc3Qgc2xpZGVOZXh0ID0gKCkgPT4ge1xuICBzd2lwZXIuc2xpZGVOZXh0KCk7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9CdG5zID0gKCkgPT4ge1xuICBjb25zdCBwcmV2QnRuRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLnJldmlld3NfX2F2YXRhci13cmFwcGVyLS1sYXN0JyxcbiAgKTtcblxuICBwcmV2QnRuRWxzLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzbGlkZU5leHQpO1xuICB9KTtcbn07XG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDE1MDAwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgfSxcbiAgbG9vcDogdHJ1ZSxcbiAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgYXV0b0hlaWdodDogdHJ1ZSxcbn0pO1xuXG5hZGRFdmVudExpc3RlbmVyVG9CdG5zKCk7XG5cbnN3aXBlci5vbignc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJywgYWRkRXZlbnRMaXN0ZW5lclRvQnRucyk7XG4iLCIvLyDQrdGC0L4gLSDQstCw0YjQsCDRgtC+0YfQutCwINCy0YXQvtC00LAg0LTQu9GPINGB0LrRgNC40L/RgtC+0LIg0YHRgtGA0LDQvdC40YbRiy4g0JjQvNC/0L7RgNGC0LjRgNGD0LnRgtC1INGB0Y7QtNCwINC90YPQttC90YvQtSDQstCw0Lwg0YTQsNC50LvRiy5cblxuaW1wb3J0ICcuL2ltYXNrJztcbmltcG9ydCAnLi9mb3JtJztcbmltcG9ydCAnLi9jb250YWN0cyc7XG5pbXBvcnQgJy4vaGVhZGVyJztcbmltcG9ydCAnLi9jYXJkcyc7XG5pbXBvcnQgJy4vYW5pbWF0aW9uJztcbmltcG9ydCAnLi9zd2lwZXInO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDI5NjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY29iYWx0NDJfYnVzaW5lc3NfY2FyZFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2JhbHQ0Ml9idXNpbmVzc19jYXJkXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbOF0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDY2MCkpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJzZWxlY3Rvckxpc3QiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInZpc2libGVFbGVtZW50cyIsImZpbHRlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJtYXAiLCJ0YXJnZXQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvYnNlcnZlIiwiY2FyZEJ0bkVscyIsImZ1bmN0aW9uYWxCdG5FbCIsInF1ZXJ5U2VsZWN0b3IiLCJmdW5jdGlvbmFsQ2FyZEVsIiwidG9nZ2xlQ2FyZCIsImV2dCIsImNhcmRzSXRlbSIsImNsb3Nlc3QiLCJjYXJkQnRuRWwiLCJ0b2dnbGUiLCJpc0NhcmRBY3RpdmUiLCJjb250YWlucyIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhY3RzTGlua0VsIiwiY29udGFjdHNFbCIsImNsb3NlQnRuRWwiLCJvbkVzY0tleURvd24iLCJrZXkiLCJjbG9zZU1vZGFsIiwib25PdmVybGF5Q2xpY2siLCJpZCIsIm9wZW5Nb2RhbCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNQcm9kIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwibGluayIsInVybCIsInNlbmREYXRhIiwiWEhSIiwiWE1MSHR0cFJlcXVlc3QiLCJkYXRhIiwiRm9ybURhdGEiLCJmb3JtIiwib3BlbiIsInNlbmQiLCJvbmxvYWQiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlIiwiYnRuU2VuZCIsImV2ZW50IiwiZGlzYWJsZWQiLCJidG4iLCJyZXNldCIsIm1lbnVCdG5FbCIsIm1lbnVFbCIsIm1lbnVJdGVtc0VscyIsImNsb3NlTWVudSIsIm9wZW5NZW51IiwibWVudUl0ZW1FbCIsIklNYXNrIiwidGVsZXBob25lRWwiLCJtYXNrIiwidmFsaWRpdHkiLCJwYXR0ZXJuTWlzbWF0Y2giLCJzZXRDdXN0b21WYWxpZGl0eSIsIlN3aXBlciIsIkF1dG9wbGF5IiwidXNlIiwic2xpZGVOZXh0Iiwic3dpcGVyIiwiYWRkRXZlbnRMaXN0ZW5lclRvQnRucyIsInByZXZCdG5FbHMiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiYXV0b0hlaWdodCIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==