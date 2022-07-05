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
    disableOnInteraction: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2NhcmRzLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9mb3JtLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvaGVhZGVyLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvaW1hc2suanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VsZWN0b3JMaXN0ID0gW1xuICAnLmluZGljYXRvcnNfX2l0ZW0tLWNvc3QgLmluZGljYXRvcnNfX2xpbmVzJyxcbiAgJy5pbmRpY2F0b3JzX19pdGVtLS1zcGVlZCAuaW5kaWNhdG9yc19fbGluZXMnLFxuICAnLmltcHJvdmVfX2l0ZW0nLFxuICAnLnBhcnRuZXJzX19pdGVtJyxcbl07XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICBjb25zdCB2aXNpYmxlRWxlbWVudHMgPSBbLi4uZW50cmllc11cbiAgICAuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgIC5tYXAoZW50cnkgPT4gZW50cnkudGFyZ2V0KTtcbiAgdmlzaWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICB9KTtcbn0pO1xuXG5zZWxlY3Rvckxpc3QuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgfSk7XG59KTtcbiIsImNvbnN0IGNhcmRCdG5FbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHNfX2J0bicpO1xuY29uc3QgZnVuY3Rpb25hbEJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1bmN0aW9uYWxfX2J0bicpO1xuY29uc3QgZnVuY3Rpb25hbENhcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdW5jdGlvbmFsX19hcGknKTtcblxuY29uc3QgdG9nZ2xlQ2FyZCA9IGV2dCA9PiB7XG4gIGNvbnN0IGNhcmRzSXRlbSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhcmRzX19pdGVtJyk7XG4gIGNvbnN0IGNhcmRCdG5FbCA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhcmRzX19idG4nKTtcblxuICBjYXJkc0l0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZHNfX2l0ZW0tLWFjdGl2ZScpO1xuICBjb25zdCBpc0NhcmRBY3RpdmUgPSBjYXJkc0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkc19faXRlbS0tYWN0aXZlJyk7XG4gIGNhcmRCdG5FbC50ZXh0Q29udGVudCA9IGlzQ2FyZEFjdGl2ZSA/ICfQodC60YDRi9GC0YwgLScgOiAn0J/QvtC00YDQvtCx0L3QtdC1ICsnO1xufTtcblxuWy4uLmNhcmRCdG5FbHNdLmZvckVhY2goY2FyZEJ0bkVsID0+IHtcbiAgY2FyZEJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ2FyZCk7XG59KTtcblxuaWYgKGZ1bmN0aW9uYWxCdG5FbCkge1xuICBmdW5jdGlvbmFsQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZnVuY3Rpb25hbENhcmRFbC5jbGFzc0xpc3QudG9nZ2xlKCdmdW5jdGlvbmFsX19hcGktLWFjdGl2ZScpO1xuICAgIGNvbnN0IGlzQ2FyZEFjdGl2ZSA9IGZ1bmN0aW9uYWxDYXJkRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgJ2Z1bmN0aW9uYWxfX2FwaS0tYWN0aXZlJyxcbiAgICApO1xuICAgIGZ1bmN0aW9uYWxCdG5FbC50ZXh0Q29udGVudCA9IGlzQ2FyZEFjdGl2ZSA/ICfQodC60YDRi9GC0YwgLScgOiAn0J/QvtC00YDQvtCx0L3QtdC1ICsnO1xuICB9KTtcbn1cbiIsImNvbnN0IGNvbnRhY3RzTGlua0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzLWxpbmsnKTtcbmNvbnN0IGNvbnRhY3RzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMnKTtcbmNvbnN0IGNsb3NlQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMtY2xvc2UnKTtcblxuY29uc3Qgb25Fc2NLZXlEb3duID0gZXZ0ID0+IHtcbiAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBvbk92ZXJsYXlDbGljayA9IGV2dCA9PiB7XG4gIGlmIChldnQudGFyZ2V0LmlkID09PSAnY29udGFjdHMnKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBvcGVuTW9kYWwgPSBldnQgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29udGFjdHNFbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy0tdmlzaWJsZScpO1xuICBjbG9zZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2NLZXlEb3duKTtcbiAgY29udGFjdHNFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uT3ZlcmxheUNsaWNrKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufTtcblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgY29udGFjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0cy0tdmlzaWJsZScpO1xuICBjbG9zZUJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2NLZXlEb3duKTtcbiAgY29udGFjdHNFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uT3ZlcmxheUNsaWNrKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbn07XG5cbmlmIChjb250YWN0c0VsICYmIGNsb3NlQnRuRWwgJiYgY29udGFjdHNMaW5rRWwpIHtcbiAgY29udGFjdHNMaW5rRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xufVxuIiwiY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuY29uc3QgbGluayA9ICcvYXBpL29yZGVyJztcbmNvbnN0IHVybCA9IGlzUHJvZCA/IGxpbmsgOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwJHtsaW5rfWA7XG5cbmZ1bmN0aW9uIHNlbmREYXRhKCkge1xuICBjb25zdCBYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSggZm9ybSApO1xuXG4gIFhIUi5vcGVuKCBcIlBPU1RcIiwgdXJsICk7XG5cbiAgWEhSLnNlbmQoIGRhdGEgKTtcblxuICBYSFIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKFhIUi5zdGF0dXMgIT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhg0J7RiNC40LHQutCwICR7WEhSLnN0YXR1c306ICR7WEhSLnN0YXR1c1RleHR9YCk7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NhbGxiYWNrX19mb3JtLS1lcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhg0JPQvtGC0L7QstC+LCDQv9C+0LvRg9GH0LjQu9C4ICR7WEhSLnJlc3BvbnNlfWApO1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjYWxsYmFja19fZm9ybS0tc3VjY2VzJyk7XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZvcm0nKTtcbmNvbnN0IGJ0blNlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuJyk7XG5cbmlmIChmb3JtKSB7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lciggXCJzdWJtaXRcIiwgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYnRuU2VuZC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBzZW5kRGF0YSgpO1xuICB9ICk7XG59XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tb2snKTtcbmlmIChidG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdjYWxsYmFja19fZm9ybS0tc3VjY2VzJyk7XG4gICAgYnRuU2VuZC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSApO1xufVxuIiwiY29uc3QgbWVudUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudS1idG4nKTtcbmNvbnN0IG1lbnVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdi1saXN0Jyk7XG5jb25zdCBtZW51SXRlbXNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtaXRlbScpO1xuXG5jb25zdCBjbG9zZU1lbnUgPSAoKSA9PiB7XG4gIG1lbnVFbC5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdi1saXN0LS1vcGVuJyk7XG4gIG1lbnVCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KTtcbiAgWy4uLm1lbnVJdGVtc0Vsc10uZm9yRWFjaChtZW51SXRlbUVsID0+IHtcbiAgICBtZW51SXRlbUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51KTtcbiAgfSk7XG59O1xuXG5jb25zdCBvcGVuTWVudSA9ICgpID0+IHtcbiAgbWVudUVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2LWxpc3QtLW9wZW4nKTtcbiAgWy4uLm1lbnVJdGVtc0Vsc10uZm9yRWFjaChtZW51SXRlbUVsID0+IHtcbiAgICBtZW51SXRlbUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51KTtcbiAgfSk7XG4gIG1lbnVCdG5FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KTtcbn07XG5cbmlmIChtZW51QnRuRWwgJiYgbWVudUVsKSB7XG4gIG1lbnVCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KTtcbn1cbiIsImltcG9ydCBJTWFzayBmcm9tICdpbWFzayc7XG5cbmNvbnN0IHRlbGVwaG9uZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbC1pZCcpO1xuXG5pZiAodGVsZXBob25lRWwpIHtcbiAgSU1hc2sodGVsZXBob25lRWwsIHsgbWFzazogJyt7N30gKDAwMCkgMDAwLTAwLTAwJyB9KTtcblxuICB0ZWxlcGhvbmVFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGVsZXBob25lRWwudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICB0ZWxlcGhvbmVFbC5zZXRDdXN0b21WYWxpZGl0eShcbiAgICAgICAgJ9CS0LLQtdC00LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCDQsiDRhNC+0YDQvNCw0YLQtTogKzcgKDEyMykgNDU2LTc4LTkwJyxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbGVwaG9uZUVsLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IFN3aXBlciwgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlcic7XG5Td2lwZXIudXNlKFtBdXRvcGxheV0pO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcblxuY29uc3Qgc2xpZGVOZXh0ID0gKCkgPT4ge1xuICBzd2lwZXIuc2xpZGVOZXh0KCk7XG59O1xuY29uc3Qgc2xpZGVQcmV2ID0gKCkgPT4ge1xuICBzd2lwZXIuc2xpZGVQcmV2KCk7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9CdG5zID0gKCkgPT4ge1xuICBjb25zdCBwcmV2QnRuRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLnJldmlld3NfX2F2YXRhci13cmFwcGVyLS1sYXN0JyxcbiAgKTtcbiAgY29uc3QgbmV4dEJ0bkVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5yZXZpZXdzX19hdmF0YXItd3JhcHBlci0tZmlyc3QnLFxuICApO1xuXG4gIHByZXZCdG5FbHMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlUHJldik7XG4gIH0pO1xuICBuZXh0QnRuRWxzLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzbGlkZU5leHQpO1xuICB9KTtcbn07XG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDE1MDAwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgfSxcbiAgbG9vcDogdHJ1ZSxcbiAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgYXV0b0hlaWdodDogdHJ1ZSxcbn0pO1xuXG5hZGRFdmVudExpc3RlbmVyVG9CdG5zKCk7XG5cbnN3aXBlci5vbignc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJywgYWRkRXZlbnRMaXN0ZW5lclRvQnRucyk7XG4iLCIvLyDQrdGC0L4gLSDQstCw0YjQsCDRgtC+0YfQutCwINCy0YXQvtC00LAg0LTQu9GPINGB0LrRgNC40L/RgtC+0LIg0YHRgtGA0LDQvdC40YbRiy4g0JjQvNC/0L7RgNGC0LjRgNGD0LnRgtC1INGB0Y7QtNCwINC90YPQttC90YvQtSDQstCw0Lwg0YTQsNC50LvRiy5cblxuaW1wb3J0ICcuL2ltYXNrJztcbmltcG9ydCAnLi9mb3JtJztcbmltcG9ydCAnLi9jb250YWN0cyc7XG5pbXBvcnQgJy4vaGVhZGVyJztcbmltcG9ydCAnLi9jYXJkcyc7XG5pbXBvcnQgJy4vYW5pbWF0aW9uJztcbmltcG9ydCAnLi9zd2lwZXInO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDI5NjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY29iYWx0NDJfYnVzaW5lc3NfY2FyZFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2JhbHQ0Ml9idXNpbmVzc19jYXJkXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbOF0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDY2MCkpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJzZWxlY3Rvckxpc3QiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInZpc2libGVFbGVtZW50cyIsImZpbHRlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJtYXAiLCJ0YXJnZXQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvYnNlcnZlIiwiY2FyZEJ0bkVscyIsImZ1bmN0aW9uYWxCdG5FbCIsInF1ZXJ5U2VsZWN0b3IiLCJmdW5jdGlvbmFsQ2FyZEVsIiwidG9nZ2xlQ2FyZCIsImV2dCIsImNhcmRzSXRlbSIsImNsb3Nlc3QiLCJjYXJkQnRuRWwiLCJ0b2dnbGUiLCJpc0NhcmRBY3RpdmUiLCJjb250YWlucyIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhY3RzTGlua0VsIiwiY29udGFjdHNFbCIsImNsb3NlQnRuRWwiLCJvbkVzY0tleURvd24iLCJrZXkiLCJjbG9zZU1vZGFsIiwib25PdmVybGF5Q2xpY2siLCJpZCIsIm9wZW5Nb2RhbCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNQcm9kIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwibGluayIsInVybCIsInNlbmREYXRhIiwiWEhSIiwiWE1MSHR0cFJlcXVlc3QiLCJkYXRhIiwiRm9ybURhdGEiLCJmb3JtIiwib3BlbiIsInNlbmQiLCJvbmxvYWQiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlIiwiYnRuU2VuZCIsImV2ZW50IiwiZGlzYWJsZWQiLCJidG4iLCJyZXNldCIsIm1lbnVCdG5FbCIsIm1lbnVFbCIsIm1lbnVJdGVtc0VscyIsImNsb3NlTWVudSIsIm9wZW5NZW51IiwibWVudUl0ZW1FbCIsIklNYXNrIiwidGVsZXBob25lRWwiLCJtYXNrIiwidmFsaWRpdHkiLCJwYXR0ZXJuTWlzbWF0Y2giLCJzZXRDdXN0b21WYWxpZGl0eSIsIlN3aXBlciIsIkF1dG9wbGF5IiwidXNlIiwic2xpZGVOZXh0Iiwic3dpcGVyIiwic2xpZGVQcmV2IiwiYWRkRXZlbnRMaXN0ZW5lclRvQnRucyIsInByZXZCdG5FbHMiLCJuZXh0QnRuRWxzIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwibG9vcCIsInNwYWNlQmV0d2VlbiIsImF1dG9IZWlnaHQiLCJvbiJdLCJzb3VyY2VSb290IjoiIn0=