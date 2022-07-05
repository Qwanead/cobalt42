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

const slidePrev = () => {
  swiper.slidePrev();
};

const addEventListenerToBtns = () => {
  const prevBtnEls = document.querySelectorAll('.reviews__avatar-wrapper--last');
  const nextBtnEls = document.querySelectorAll('.reviews__avatar-wrapper--first');
  prevBtnEls.forEach(btn => {
    btn.addEventListener('click', slidePrev);
  });
  nextBtnEls.forEach(btn => {
    btn.addEventListener('click', slideNext);
  });
};

const swiper = new swiper_esm/* default */.ZP('.swiper', {
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
    reverseDirection: true
  },
  loop: true,
  spaceBetween: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9pbWFzay5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL3N3aXBlci5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2luZGV4LmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWxlY3Rvckxpc3QgPSBbXG4gICcuaW5kaWNhdG9yc19faXRlbS0tY29zdCAuaW5kaWNhdG9yc19fbGluZXMnLFxuICAnLmluZGljYXRvcnNfX2l0ZW0tLXNwZWVkIC5pbmRpY2F0b3JzX19saW5lcycsXG4gICcuaW1wcm92ZV9faXRlbScsXG4gICcucGFydG5lcnNfX2l0ZW0nLFxuXTtcblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gIGNvbnN0IHZpc2libGVFbGVtZW50cyA9IFsuLi5lbnRyaWVzXVxuICAgIC5maWx0ZXIoZW50cnkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpXG4gICAgLm1hcChlbnRyeSA9PiBlbnRyeS50YXJnZXQpO1xuICB2aXNpYmxlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gIH0pO1xufSk7XG5cbnNlbGVjdG9yTGlzdC5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICB9KTtcbn0pO1xuIiwiY29uc3QgY2FyZEJ0bkVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkc19fYnRuJyk7XG5jb25zdCBmdW5jdGlvbmFsQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVuY3Rpb25hbF9fYnRuJyk7XG5jb25zdCBmdW5jdGlvbmFsQ2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1bmN0aW9uYWxfX2FwaScpO1xuXG5jb25zdCB0b2dnbGVDYXJkID0gZXZ0ID0+IHtcbiAgY29uc3QgY2FyZHNJdGVtID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FyZHNfX2l0ZW0nKTtcbiAgY29uc3QgY2FyZEJ0bkVsID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FyZHNfX2J0bicpO1xuXG4gIGNhcmRzSXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkc19faXRlbS0tYWN0aXZlJyk7XG4gIGNvbnN0IGlzQ2FyZEFjdGl2ZSA9IGNhcmRzSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmRzX19pdGVtLS1hY3RpdmUnKTtcbiAgY2FyZEJ0bkVsLnRleHRDb250ZW50ID0gaXNDYXJkQWN0aXZlID8gJ9Ch0LrRgNGL0YLRjCAtJyA6ICfQn9C+0LTRgNC+0LHQvdC10LUgKyc7XG59O1xuXG5bLi4uY2FyZEJ0bkVsc10uZm9yRWFjaChjYXJkQnRuRWwgPT4ge1xuICBjYXJkQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDYXJkKTtcbn0pO1xuXG5pZiAoZnVuY3Rpb25hbEJ0bkVsKSB7XG4gIGZ1bmN0aW9uYWxCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmdW5jdGlvbmFsQ2FyZEVsLmNsYXNzTGlzdC50b2dnbGUoJ2Z1bmN0aW9uYWxfX2FwaS0tYWN0aXZlJyk7XG4gICAgY29uc3QgaXNDYXJkQWN0aXZlID0gZnVuY3Rpb25hbENhcmRFbC5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICAnZnVuY3Rpb25hbF9fYXBpLS1hY3RpdmUnLFxuICAgICk7XG4gICAgZnVuY3Rpb25hbEJ0bkVsLnRleHRDb250ZW50ID0gaXNDYXJkQWN0aXZlID8gJ9Ch0LrRgNGL0YLRjCAtJyA6ICfQn9C+0LTRgNC+0LHQvdC10LUgKyc7XG4gIH0pO1xufVxuIiwiY29uc3QgY29udGFjdHNMaW5rRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMtbGluaycpO1xuY29uc3QgY29udGFjdHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0cycpO1xuY29uc3QgY2xvc2VCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0cy1jbG9zZScpO1xuXG5jb25zdCBvbkVzY0tleURvd24gPSBldnQgPT4ge1xuICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbn07XG5cbmNvbnN0IG9uT3ZlcmxheUNsaWNrID0gZXZ0ID0+IHtcbiAgaWYgKGV2dC50YXJnZXQuaWQgPT09ICdjb250YWN0cycpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbn07XG5cbmNvbnN0IG9wZW5Nb2RhbCA9IGV2dCA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb250YWN0c0VsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLS12aXNpYmxlJyk7XG4gIGNsb3NlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVzY0tleURvd24pO1xuICBjb250YWN0c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25PdmVybGF5Q2xpY2spO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG59O1xuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb250YWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhY3RzLS12aXNpYmxlJyk7XG4gIGNsb3NlQnRuRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVzY0tleURvd24pO1xuICBjb250YWN0c0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25PdmVybGF5Q2xpY2spO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xufTtcblxuaWYgKGNvbnRhY3RzRWwgJiYgY2xvc2VCdG5FbCAmJiBjb250YWN0c0xpbmtFbCkge1xuICBjb250YWN0c0xpbmtFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG59XG4iLCJjb25zdCBpc1Byb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5jb25zdCBsaW5rID0gJy9hcGkvb3JkZXInO1xuY29uc3QgdXJsID0gaXNQcm9kID8gbGluayA6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAke2xpbmt9YDtcblxuZnVuY3Rpb24gc2VuZERhdGEoKSB7XG4gIGNvbnN0IFhIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCBmb3JtICk7XG5cbiAgWEhSLm9wZW4oIFwiUE9TVFwiLCB1cmwgKTtcblxuICBYSFIuc2VuZCggZGF0YSApO1xuXG4gIFhIUi5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoWEhSLnN0YXR1cyAhPSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGDQntGI0LjQsdC60LAgJHtYSFIuc3RhdHVzfTogJHtYSFIuc3RhdHVzVGV4dH1gKTtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2FsbGJhY2tfX2Zvcm0tLWVycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGDQk9C+0YLQvtCy0L4sINC/0L7Qu9GD0YfQuNC70LggJHtYSFIucmVzcG9uc2V9YCk7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NhbGxiYWNrX19mb3JtLS1zdWNjZXMnKTtcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZm9ybScpO1xuY29uc3QgYnRuU2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4nKTtcblxuaWYgKGZvcm0pIHtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCBcInN1Ym1pdFwiLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBidG5TZW5kLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHNlbmREYXRhKCk7XG4gIH0gKTtcbn1cblxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ0bi1vaycpO1xuaWYgKGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2NhbGxiYWNrX19mb3JtLS1zdWNjZXMnKTtcbiAgICBidG5TZW5kLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9ICk7XG59XG4iLCJjb25zdCBtZW51QnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LWJ0bicpO1xuY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LWxpc3QnKTtcbmNvbnN0IG1lbnVJdGVtc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1pdGVtJyk7XG5cbmNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcbiAgbWVudUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbmF2LWxpc3QtLW9wZW4nKTtcbiAgbWVudUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xuICBbLi4ubWVudUl0ZW1zRWxzXS5mb3JFYWNoKG1lbnVJdGVtRWwgPT4ge1xuICAgIG1lbnVJdGVtRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xuICB9KTtcbn07XG5cbmNvbnN0IG9wZW5NZW51ID0gKCkgPT4ge1xuICBtZW51RWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19uYXYtbGlzdC0tb3BlbicpO1xuICBbLi4ubWVudUl0ZW1zRWxzXS5mb3JFYWNoKG1lbnVJdGVtRWwgPT4ge1xuICAgIG1lbnVJdGVtRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xuICB9KTtcbiAgbWVudUJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xufTtcblxuaWYgKG1lbnVCdG5FbCAmJiBtZW51RWwpIHtcbiAgbWVudUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xufVxuIiwiaW1wb3J0IElNYXNrIGZyb20gJ2ltYXNrJztcblxuY29uc3QgdGVsZXBob25lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVsLWlkJyk7XG5cbmlmICh0ZWxlcGhvbmVFbCkge1xuICBJTWFzayh0ZWxlcGhvbmVFbCwgeyBtYXNrOiAnK3s3fSAoMDAwKSAwMDAtMDAtMDAnIH0pO1xuXG4gIHRlbGVwaG9uZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0ZWxlcGhvbmVFbC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAgIHRlbGVwaG9uZUVsLnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgICAn0JLQstC10LTQuNGC0LUg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwINCyINGE0L7RgNC80LDRgtC1OiArNyAoMTIzKSA0NTYtNzgtOTAnLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVsZXBob25lRWwuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgU3dpcGVyLCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcblN3aXBlci51c2UoW0F1dG9wbGF5XSk7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuXG5jb25zdCBzbGlkZU5leHQgPSAoKSA9PiB7XG4gIHN3aXBlci5zbGlkZU5leHQoKTtcbn07XG5jb25zdCBzbGlkZVByZXYgPSAoKSA9PiB7XG4gIHN3aXBlci5zbGlkZVByZXYoKTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0J0bnMgPSAoKSA9PiB7XG4gIGNvbnN0IHByZXZCdG5FbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcucmV2aWV3c19fYXZhdGFyLXdyYXBwZXItLWxhc3QnLFxuICApO1xuICBjb25zdCBuZXh0QnRuRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLnJldmlld3NfX2F2YXRhci13cmFwcGVyLS1maXJzdCcsXG4gICk7XG5cbiAgcHJldkJ0bkVscy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2xpZGVQcmV2KTtcbiAgfSk7XG4gIG5leHRCdG5FbHMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlTmV4dCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogMTUwMDAsXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgIHJldmVyc2VEaXJlY3Rpb246IHRydWUsXG4gIH0sXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMTYsXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG59KTtcblxuYWRkRXZlbnRMaXN0ZW5lclRvQnRucygpO1xuXG5zd2lwZXIub24oJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcsIGFkZEV2ZW50TGlzdGVuZXJUb0J0bnMpO1xuIiwiLy8g0K3RgtC+IC0g0LLQsNGI0LAg0YLQvtGH0LrQsCDQstGF0L7QtNCwINC00LvRjyDRgdC60YDQuNC/0YLQvtCyINGB0YLRgNCw0L3QuNGG0YsuINCY0LzQv9C+0YDRgtC40YDRg9C50YLQtSDRgdGO0LTQsCDQvdGD0LbQvdGL0LUg0LLQsNC8INGE0LDQudC70YsuXG5cbmltcG9ydCAnLi9pbWFzayc7XG5pbXBvcnQgJy4vZm9ybSc7XG5pbXBvcnQgJy4vY29udGFjdHMnO1xuaW1wb3J0ICcuL2hlYWRlcic7XG5pbXBvcnQgJy4vY2FyZHMnO1xuaW1wb3J0ICcuL2FuaW1hdGlvbic7XG5pbXBvcnQgJy4vc3dpcGVyJztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQyOTY6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvYmFsdDQyX2J1c2luZXNzX2NhcmRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY29iYWx0NDJfYnVzaW5lc3NfY2FyZFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzhdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg2NjApKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsic2VsZWN0b3JMaXN0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJ2aXNpYmxlRWxlbWVudHMiLCJmaWx0ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwibWFwIiwidGFyZ2V0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bm9ic2VydmUiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZSIsImNhcmRCdG5FbHMiLCJmdW5jdGlvbmFsQnRuRWwiLCJxdWVyeVNlbGVjdG9yIiwiZnVuY3Rpb25hbENhcmRFbCIsInRvZ2dsZUNhcmQiLCJldnQiLCJjYXJkc0l0ZW0iLCJjbG9zZXN0IiwiY2FyZEJ0bkVsIiwidG9nZ2xlIiwiaXNDYXJkQWN0aXZlIiwiY29udGFpbnMiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWN0c0xpbmtFbCIsImNvbnRhY3RzRWwiLCJjbG9zZUJ0bkVsIiwib25Fc2NLZXlEb3duIiwia2V5IiwiY2xvc2VNb2RhbCIsIm9uT3ZlcmxheUNsaWNrIiwiaWQiLCJvcGVuTW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzUHJvZCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImxpbmsiLCJ1cmwiLCJzZW5kRGF0YSIsIlhIUiIsIlhNTEh0dHBSZXF1ZXN0IiwiZGF0YSIsIkZvcm1EYXRhIiwiZm9ybSIsIm9wZW4iLCJzZW5kIiwib25sb2FkIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJyZXNwb25zZSIsImJ0blNlbmQiLCJldmVudCIsImRpc2FibGVkIiwiYnRuIiwicmVzZXQiLCJtZW51QnRuRWwiLCJtZW51RWwiLCJtZW51SXRlbXNFbHMiLCJjbG9zZU1lbnUiLCJvcGVuTWVudSIsIm1lbnVJdGVtRWwiLCJJTWFzayIsInRlbGVwaG9uZUVsIiwibWFzayIsInZhbGlkaXR5IiwicGF0dGVybk1pc21hdGNoIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJTd2lwZXIiLCJBdXRvcGxheSIsInVzZSIsInNsaWRlTmV4dCIsInN3aXBlciIsInNsaWRlUHJldiIsImFkZEV2ZW50TGlzdGVuZXJUb0J0bnMiLCJwcmV2QnRuRWxzIiwibmV4dEJ0bkVscyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInJldmVyc2VEaXJlY3Rpb24iLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiYXV0b0hlaWdodCIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==