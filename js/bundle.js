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

/***/ 258:
/***/ (() => {

const form = document.querySelector('.callback__form');
const inputsEls = form.querySelectorAll('input');

const checkInput = evt => {
  const {
    target: input,
    type: eventType
  } = evt;
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
    type: null
  });
  inputEl.addEventListener('input', checkInput);
  inputEl.addEventListener('focus', checkInput);
  inputEl.addEventListener('blur', checkInput);
});

/***/ }),

/***/ 349:
/***/ (() => {

const cardBtnEls = document.querySelectorAll('.cards__btn');
const functionalBtnEls = document.querySelectorAll('.functional__btn');
const functionalCardEl = document.querySelector('.functional__api-wrapper');
[...cardBtnEls].forEach(cardBtnEl => {
  cardBtnEl.addEventListener('click', evt => {
    const cardsItem = evt.target.closest('.cards__item');
    cardsItem.classList.toggle('cards__item--active');
  });
});
[...functionalBtnEls].forEach(functionalBtnEl => {
  functionalBtnEl.addEventListener('click', () => {
    functionalCardEl.classList.toggle('functional__api-wrapper--active');
  });
});

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

/***/ 510:
/***/ (() => {

const coverEl = document.querySelector('.cover');
const cardsEl = document.querySelector('.cards');
let lastKnownScrollPosition = 0;
let ticking = false;

const onScroll = scrollY => {
  const coverHeight = coverEl.offsetHeight;

  if (scrollY !== 0) {
    coverEl.style.opacity = coverHeight - scrollY - 104 > 0 ? (coverHeight - scrollY - 104) / coverHeight : 0;
  } else {
    coverEl.style.opacity = 1;
  }
};

if (coverEl && cardsEl) {
  window.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll(lastKnownScrollPosition);
        ticking = false;
      });
      ticking = true;
    }
  });
  onScroll(window.scrollY);
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
  XHR.open('POST', url);
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
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    btnSend.disabled = true;
    sendData();
  });
}

const btn = document.querySelector('.js-btn-ok');

if (btn) {
  btn.addEventListener('click', function (event) {
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

/***/ 742:
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
      telephoneEl.setCustomValidity('Введите номер телефона в формате: +7 (000) 000-00-00');
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
  spaceBetween: 4,
  autoHeight: true,
  breakpoints: {
    // when window width is >= 768px
    768: {
      spaceBetween: 32
    }
  }
});
addEventListenerToBtns();
swiper.on('slideChangeTransitionEnd', addEventListenerToBtns);
// EXTERNAL MODULE: ./source/js/partners.js
var partners = __webpack_require__(298);
// EXTERNAL MODULE: ./source/js/cover.js
var cover = __webpack_require__(510);
// EXTERNAL MODULE: ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js
var smoothscroll = __webpack_require__(523);
var smoothscroll_default = /*#__PURE__*/__webpack_require__.n(smoothscroll);
;// CONCATENATED MODULE: ./source/js/anchors-links.js

smoothscroll_default().polyfill();
const cardsLink = document.querySelector('a[href="#cards-anchor"]');
const callbackLinks = document.querySelectorAll('a[href="#callback"]');

const onAnchorClick = evt => {
  evt.preventDefault();
  document.querySelector(evt.currentTarget.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
};

[cardsLink, ...callbackLinks].forEach(el => {
  if (el) {
    el.addEventListener('click', onAnchorClick);
  }
});
// EXTERNAL MODULE: ./source/js/callback.js
var callback = __webpack_require__(258);
;// CONCATENATED MODULE: ./source/js/index.js
// Это - ваша точка входа для скриптов страницы. Импортируйте сюда нужные вам файлы.












/***/ }),

/***/ 298:
/***/ (() => {

const showAllBtnEl = document.querySelector('.partners__item--show-all');
const partnersListEl = document.querySelector('.partners__list');

const showAll = () => {
  partnersListEl.classList.add('partners__list--show-all');
  showAllBtnEl.removeEventListener('click', showAll);
};

if (showAllBtnEl && partnersListEl) {
  showAllBtnEl.addEventListener('click', showAll);
}

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [64], () => (__webpack_require__(742)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9jYXJkcy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2NvbnRhY3RzLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvY292ZXIuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9mb3JtLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvaGVhZGVyLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvaW1hc2suanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9hbmNob3JzLWxpbmtzLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9wYXJ0bmVycy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWxlY3Rvckxpc3QgPSBbXG4gICcuaW5kaWNhdG9yc19faXRlbS0tY29zdCAuaW5kaWNhdG9yc19fbGluZXMnLFxuICAnLmluZGljYXRvcnNfX2l0ZW0tLXNwZWVkIC5pbmRpY2F0b3JzX19saW5lcycsXG4gICcuaW1wcm92ZV9faXRlbScsXG4gICcucGFydG5lcnNfX2l0ZW0nLFxuXTtcblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gIGNvbnN0IHZpc2libGVFbGVtZW50cyA9IFsuLi5lbnRyaWVzXVxuICAgIC5maWx0ZXIoZW50cnkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpXG4gICAgLm1hcChlbnRyeSA9PiBlbnRyeS50YXJnZXQpO1xuICB2aXNpYmxlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gIH0pO1xufSk7XG5cbnNlbGVjdG9yTGlzdC5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICB9KTtcbn0pO1xuIiwiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxsYmFja19fZm9ybScpO1xuY29uc3QgaW5wdXRzRWxzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG5jb25zdCBjaGVja0lucHV0ID0gZXZ0ID0+IHtcbiAgY29uc3QgeyB0YXJnZXQ6IGlucHV0LCB0eXBlOiBldmVudFR5cGUgfSA9IGV2dDtcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICBjb25zdCBpbnB1dENvbnRhaW5lckVsID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuaW5wdXQnKTtcbiAgY29uc3QgbGFiZWxFbCA9IGlucHV0Q29udGFpbmVyRWwucXVlcnlTZWxlY3RvcignLmlucHV0X19sYWJlbCcpO1xuXG4gIGlmIChldmVudFR5cGUgPT09ICdmb2N1cycpIHtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dF9fZmllbGQtLWZvY3VzJyk7XG4gIH1cblxuICBpZiAoZXZlbnRUeXBlID09PSAnYmx1cicpIHtcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dF9fZmllbGQtLWZvY3VzJyk7XG4gIH1cblxuICBpZiAoZXZlbnRUeXBlICYmICFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dF9fZmllbGQtLWludmFsaWQnKTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dF9fZmllbGQtLWludmFsaWQnKTtcbiAgfVxuXG4gIGlmIChpbnB1dFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBsYWJlbEVsLmNsYXNzTGlzdC5hZGQoJ2lucHV0X19sYWJlbC0tZmlsbCcpO1xuICB9IGVsc2Uge1xuICAgIGxhYmVsRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRfX2xhYmVsLS1maWxsJyk7XG4gIH1cbn07XG5cblsuLi5pbnB1dHNFbHNdLmZvckVhY2goaW5wdXRFbCA9PiB7XG4gIGNoZWNrSW5wdXQoe1xuICAgIHRhcmdldDogaW5wdXRFbCxcbiAgICB0eXBlOiBudWxsLFxuICB9KTtcbiAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrSW5wdXQpO1xuICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgY2hlY2tJbnB1dCk7XG4gIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoZWNrSW5wdXQpO1xufSk7XG4iLCJjb25zdCBjYXJkQnRuRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzX19idG4nKTtcbmNvbnN0IGZ1bmN0aW9uYWxCdG5FbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnVuY3Rpb25hbF9fYnRuJyk7XG5jb25zdCBmdW5jdGlvbmFsQ2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1bmN0aW9uYWxfX2FwaS13cmFwcGVyJyk7XG5cblsuLi5jYXJkQnRuRWxzXS5mb3JFYWNoKGNhcmRCdG5FbCA9PiB7XG4gIGNhcmRCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgY29uc3QgY2FyZHNJdGVtID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FyZHNfX2l0ZW0nKTtcbiAgICBjYXJkc0l0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZHNfX2l0ZW0tLWFjdGl2ZScpO1xuICB9KTtcbn0pO1xuXG5bLi4uZnVuY3Rpb25hbEJ0bkVsc10uZm9yRWFjaChmdW5jdGlvbmFsQnRuRWwgPT4ge1xuICBmdW5jdGlvbmFsQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZnVuY3Rpb25hbENhcmRFbC5jbGFzc0xpc3QudG9nZ2xlKCdmdW5jdGlvbmFsX19hcGktd3JhcHBlci0tYWN0aXZlJyk7XG4gIH0pO1xufSk7XG4iLCJjb25zdCBjb250YWN0c0xpbmtFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0cy1saW5rJyk7XG5jb25zdCBjb250YWN0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzJyk7XG5jb25zdCBjbG9zZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzLWNsb3NlJyk7XG5cbmNvbnN0IG9uRXNjS2V5RG93biA9IGV2dCA9PiB7XG4gIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxufTtcblxuY29uc3Qgb25PdmVybGF5Q2xpY2sgPSBldnQgPT4ge1xuICBpZiAoZXZ0LnRhcmdldC5pZCA9PT0gJ2NvbnRhY3RzJykge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxufTtcblxuY29uc3Qgb3Blbk1vZGFsID0gZXZ0ID0+IHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnRhY3RzRWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtLXZpc2libGUnKTtcbiAgY2xvc2VCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRXNjS2V5RG93bik7XG4gIGNvbnRhY3RzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk92ZXJsYXlDbGljayk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnRhY3RzRWwuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFjdHMtLXZpc2libGUnKTtcbiAgY2xvc2VCdG5FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRXNjS2V5RG93bik7XG4gIGNvbnRhY3RzRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk92ZXJsYXlDbGljayk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG59O1xuXG5pZiAoY29udGFjdHNFbCAmJiBjbG9zZUJ0bkVsICYmIGNvbnRhY3RzTGlua0VsKSB7XG4gIGNvbnRhY3RzTGlua0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKTtcbn1cbiIsImNvbnN0IGNvdmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKTtcbmNvbnN0IGNhcmRzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcblxubGV0IGxhc3RLbm93blNjcm9sbFBvc2l0aW9uID0gMDtcbmxldCB0aWNraW5nID0gZmFsc2U7XG5cbmNvbnN0IG9uU2Nyb2xsID0gc2Nyb2xsWSA9PiB7XG4gIGNvbnN0IGNvdmVySGVpZ2h0ID0gY292ZXJFbC5vZmZzZXRIZWlnaHQ7XG4gIGlmIChzY3JvbGxZICE9PSAwKSB7XG4gICAgY292ZXJFbC5zdHlsZS5vcGFjaXR5ID1cbiAgICAgIGNvdmVySGVpZ2h0IC0gc2Nyb2xsWSAtIDEwNCA+IDBcbiAgICAgICAgPyAoY292ZXJIZWlnaHQgLSBzY3JvbGxZIC0gMTA0KSAvIGNvdmVySGVpZ2h0XG4gICAgICAgIDogMDtcbiAgfSBlbHNlIHtcbiAgICBjb3ZlckVsLnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9XG59O1xuXG5pZiAoY292ZXJFbCAmJiBjYXJkc0VsKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgbGFzdEtub3duU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBvblNjcm9sbChsYXN0S25vd25TY3JvbGxQb3NpdGlvbik7XG4gICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGlja2luZyA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBvblNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XG59XG4iLCJjb25zdCBpc1Byb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5jb25zdCBsaW5rID0gJy9hcGkvb3JkZXInO1xuY29uc3QgdXJsID0gaXNQcm9kID8gbGluayA6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAke2xpbmt9YDtcblxuZnVuY3Rpb24gc2VuZERhdGEoKSB7XG4gIGNvbnN0IFhIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuXG4gIFhIUi5vcGVuKCdQT1NUJywgdXJsKTtcblxuICBYSFIuc2VuZChkYXRhKTtcblxuICBYSFIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChYSFIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsCAke1hIUi5zdGF0dXN9OiAke1hIUi5zdGF0dXNUZXh0fWApO1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjYWxsYmFja19fZm9ybS0tZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYNCT0L7RgtC+0LLQviwg0L/QvtC70YPRh9C40LvQuCAke1hIUi5yZXNwb25zZX1gKTtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2FsbGJhY2tfX2Zvcm0tLXN1Y2NlcycpO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtJyk7XG5jb25zdCBidG5TZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ0bicpO1xuXG5pZiAoZm9ybSkge1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBidG5TZW5kLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHNlbmREYXRhKCk7XG4gIH0pO1xufVxuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLW9rJyk7XG5pZiAoYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2NhbGxiYWNrX19mb3JtLS1zdWNjZXMnKTtcbiAgICBidG5TZW5kLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9KTtcbn1cbiIsImNvbnN0IG1lbnVCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUtYnRuJyk7XG5jb25zdCBtZW51RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtbGlzdCcpO1xuY29uc3QgbWVudUl0ZW1zRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWl0ZW0nKTtcblxuY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xuICBtZW51RWwuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19uYXYtbGlzdC0tb3BlbicpO1xuICBtZW51QnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG4gIFsuLi5tZW51SXRlbXNFbHNdLmZvckVhY2gobWVudUl0ZW1FbCA9PiB7XG4gICAgbWVudUl0ZW1FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XG4gIH0pO1xufTtcblxuY29uc3Qgb3Blbk1lbnUgPSAoKSA9PiB7XG4gIG1lbnVFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX25hdi1saXN0LS1vcGVuJyk7XG4gIFsuLi5tZW51SXRlbXNFbHNdLmZvckVhY2gobWVudUl0ZW1FbCA9PiB7XG4gICAgbWVudUl0ZW1FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XG4gIH0pO1xuICBtZW51QnRuRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG59O1xuXG5pZiAobWVudUJ0bkVsICYmIG1lbnVFbCkge1xuICBtZW51QnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG59XG4iLCJpbXBvcnQgSU1hc2sgZnJvbSAnaW1hc2snO1xuXG5jb25zdCB0ZWxlcGhvbmVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWwtaWQnKTtcblxuaWYgKHRlbGVwaG9uZUVsKSB7XG4gIElNYXNrKHRlbGVwaG9uZUVsLCB7IG1hc2s6ICcrezd9ICgwMDApIDAwMC0wMC0wMCcgfSk7XG5cbiAgdGVsZXBob25lRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRlbGVwaG9uZUVsLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgdGVsZXBob25lRWwuc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAgICfQktCy0LXQtNC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0LIg0YTQvtGA0LzQsNGC0LU6ICs3ICgwMDApIDAwMC0wMC0wMCcsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZWxlcGhvbmVFbC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBTd2lwZXIsIHsgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xuU3dpcGVyLnVzZShbQXV0b3BsYXldKTtcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5jb25zdCBzbGlkZU5leHQgPSAoKSA9PiB7XG4gIHN3aXBlci5zbGlkZU5leHQoKTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0J0bnMgPSAoKSA9PiB7XG4gIGNvbnN0IHByZXZCdG5FbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcucmV2aWV3c19fYXZhdGFyLXdyYXBwZXItLWxhc3QnLFxuICApO1xuXG4gIHByZXZCdG5FbHMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlTmV4dCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogMTUwMDAsXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICB9LFxuICBsb29wOiB0cnVlLFxuICBzcGFjZUJldHdlZW46IDQsXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG5cbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA3NjhweFxuICAgIDc2ODoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICB9LFxuICB9LFxufSk7XG5cbmFkZEV2ZW50TGlzdGVuZXJUb0J0bnMoKTtcblxuc3dpcGVyLm9uKCdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnLCBhZGRFdmVudExpc3RlbmVyVG9CdG5zKTtcbiIsImltcG9ydCBzbW9vdGhzY3JvbGwgZnJvbSAnc21vb3Roc2Nyb2xsLXBvbHlmaWxsJztcbnNtb290aHNjcm9sbC5wb2x5ZmlsbCgpO1xuXG5jb25zdCBjYXJkc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjY2FyZHMtYW5jaG9yXCJdJyk7XG5jb25zdCBjYWxsYmFja0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmPVwiI2NhbGxiYWNrXCJdJyk7XG5cbmNvbnN0IG9uQW5jaG9yQ2xpY2sgPSBldnQgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihldnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSlcbiAgICAuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG59O1xuXG5bY2FyZHNMaW5rLCAuLi5jYWxsYmFja0xpbmtzXS5mb3JFYWNoKGVsID0+IHtcbiAgaWYgKGVsKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkFuY2hvckNsaWNrKTtcbiAgfVxufSk7XG4iLCIvLyDQrdGC0L4gLSDQstCw0YjQsCDRgtC+0YfQutCwINCy0YXQvtC00LAg0LTQu9GPINGB0LrRgNC40L/RgtC+0LIg0YHRgtGA0LDQvdC40YbRiy4g0JjQvNC/0L7RgNGC0LjRgNGD0LnRgtC1INGB0Y7QtNCwINC90YPQttC90YvQtSDQstCw0Lwg0YTQsNC50LvRiy5cblxuaW1wb3J0ICcuL2ltYXNrJztcbmltcG9ydCAnLi9mb3JtJztcbmltcG9ydCAnLi9jb250YWN0cyc7XG5pbXBvcnQgJy4vaGVhZGVyJztcbmltcG9ydCAnLi9jYXJkcyc7XG5pbXBvcnQgJy4vYW5pbWF0aW9uJztcbmltcG9ydCAnLi9zd2lwZXInO1xuaW1wb3J0ICcuL3BhcnRuZXJzJztcbmltcG9ydCAnLi9jb3Zlcic7XG5pbXBvcnQgJy4vYW5jaG9ycy1saW5rcyc7XG5pbXBvcnQgJy4vY2FsbGJhY2snO1xuIiwiY29uc3Qgc2hvd0FsbEJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzX19pdGVtLS1zaG93LWFsbCcpO1xuY29uc3QgcGFydG5lcnNMaXN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnNfX2xpc3QnKTtcblxuY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcbiAgcGFydG5lcnNMaXN0RWwuY2xhc3NMaXN0LmFkZCgncGFydG5lcnNfX2xpc3QtLXNob3ctYWxsJyk7XG4gIHNob3dBbGxCdG5FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGwpO1xufTtcblxuaWYgKHNob3dBbGxCdG5FbCAmJiBwYXJ0bmVyc0xpc3RFbCkge1xuICBzaG93QWxsQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWxsKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDI5NjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY29iYWx0NDJfYnVzaW5lc3NfY2FyZFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2JhbHQ0Ml9idXNpbmVzc19jYXJkXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbNjRdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg3NDIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsic2VsZWN0b3JMaXN0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJ2aXNpYmxlRWxlbWVudHMiLCJmaWx0ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwibWFwIiwidGFyZ2V0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bm9ic2VydmUiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZSIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRzRWxzIiwiY2hlY2tJbnB1dCIsImV2dCIsImlucHV0IiwidHlwZSIsImV2ZW50VHlwZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsImlucHV0Q29udGFpbmVyRWwiLCJjbG9zZXN0IiwibGFiZWxFbCIsInJlbW92ZSIsImNoZWNrVmFsaWRpdHkiLCJsZW5ndGgiLCJpbnB1dEVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcmRCdG5FbHMiLCJmdW5jdGlvbmFsQnRuRWxzIiwiZnVuY3Rpb25hbENhcmRFbCIsImNhcmRCdG5FbCIsImNhcmRzSXRlbSIsInRvZ2dsZSIsImZ1bmN0aW9uYWxCdG5FbCIsImNvbnRhY3RzTGlua0VsIiwiY29udGFjdHNFbCIsImNsb3NlQnRuRWwiLCJvbkVzY0tleURvd24iLCJrZXkiLCJjbG9zZU1vZGFsIiwib25PdmVybGF5Q2xpY2siLCJpZCIsIm9wZW5Nb2RhbCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY292ZXJFbCIsImNhcmRzRWwiLCJsYXN0S25vd25TY3JvbGxQb3NpdGlvbiIsInRpY2tpbmciLCJvblNjcm9sbCIsInNjcm9sbFkiLCJjb3ZlckhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9wYWNpdHkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpc1Byb2QiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJsaW5rIiwidXJsIiwic2VuZERhdGEiLCJYSFIiLCJYTUxIdHRwUmVxdWVzdCIsImRhdGEiLCJGb3JtRGF0YSIsIm9wZW4iLCJzZW5kIiwib25sb2FkIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJyZXNwb25zZSIsImJ0blNlbmQiLCJldmVudCIsImRpc2FibGVkIiwiYnRuIiwicmVzZXQiLCJtZW51QnRuRWwiLCJtZW51RWwiLCJtZW51SXRlbXNFbHMiLCJjbG9zZU1lbnUiLCJvcGVuTWVudSIsIm1lbnVJdGVtRWwiLCJJTWFzayIsInRlbGVwaG9uZUVsIiwibWFzayIsInZhbGlkaXR5IiwicGF0dGVybk1pc21hdGNoIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJTd2lwZXIiLCJBdXRvcGxheSIsInVzZSIsInNsaWRlTmV4dCIsInN3aXBlciIsImFkZEV2ZW50TGlzdGVuZXJUb0J0bnMiLCJwcmV2QnRuRWxzIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwibG9vcCIsInNwYWNlQmV0d2VlbiIsImF1dG9IZWlnaHQiLCJicmVha3BvaW50cyIsIm9uIiwic21vb3Roc2Nyb2xsIiwicG9seWZpbGwiLCJjYXJkc0xpbmsiLCJjYWxsYmFja0xpbmtzIiwib25BbmNob3JDbGljayIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZWwiLCJzaG93QWxsQnRuRWwiLCJwYXJ0bmVyc0xpc3RFbCIsInNob3dBbGwiXSwic291cmNlUm9vdCI6IiJ9