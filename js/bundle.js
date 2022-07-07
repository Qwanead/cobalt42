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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2NvdmVyLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2ltYXNrLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvc3dpcGVyLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvYW5jaG9ycy1saW5rcy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2luZGV4LmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvcGFydG5lcnMuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VsZWN0b3JMaXN0ID0gW1xuICAnLmluZGljYXRvcnNfX2l0ZW0tLWNvc3QgLmluZGljYXRvcnNfX2xpbmVzJyxcbiAgJy5pbmRpY2F0b3JzX19pdGVtLS1zcGVlZCAuaW5kaWNhdG9yc19fbGluZXMnLFxuICAnLmltcHJvdmVfX2l0ZW0nLFxuICAnLnBhcnRuZXJzX19pdGVtJyxcbl07XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICBjb25zdCB2aXNpYmxlRWxlbWVudHMgPSBbLi4uZW50cmllc11cbiAgICAuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgIC5tYXAoZW50cnkgPT4gZW50cnkudGFyZ2V0KTtcbiAgdmlzaWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICB9KTtcbn0pO1xuXG5zZWxlY3Rvckxpc3QuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgfSk7XG59KTtcbiIsImNvbnN0IGNhcmRCdG5FbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHNfX2J0bicpO1xuY29uc3QgZnVuY3Rpb25hbEJ0bkVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mdW5jdGlvbmFsX19idG4nKTtcbmNvbnN0IGZ1bmN0aW9uYWxDYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVuY3Rpb25hbF9fYXBpLXdyYXBwZXInKTtcblxuWy4uLmNhcmRCdG5FbHNdLmZvckVhY2goY2FyZEJ0bkVsID0+IHtcbiAgY2FyZEJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICBjb25zdCBjYXJkc0l0ZW0gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXJkc19faXRlbScpO1xuICAgIGNhcmRzSXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkc19faXRlbS0tYWN0aXZlJyk7XG4gIH0pO1xufSk7XG5cblsuLi5mdW5jdGlvbmFsQnRuRWxzXS5mb3JFYWNoKGZ1bmN0aW9uYWxCdG5FbCA9PiB7XG4gIGZ1bmN0aW9uYWxCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmdW5jdGlvbmFsQ2FyZEVsLmNsYXNzTGlzdC50b2dnbGUoJ2Z1bmN0aW9uYWxfX2FwaS13cmFwcGVyLS1hY3RpdmUnKTtcbiAgfSk7XG59KTtcbiIsImNvbnN0IGNvbnRhY3RzTGlua0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzLWxpbmsnKTtcbmNvbnN0IGNvbnRhY3RzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMnKTtcbmNvbnN0IGNsb3NlQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMtY2xvc2UnKTtcblxuY29uc3Qgb25Fc2NLZXlEb3duID0gZXZ0ID0+IHtcbiAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBvbk92ZXJsYXlDbGljayA9IGV2dCA9PiB7XG4gIGlmIChldnQudGFyZ2V0LmlkID09PSAnY29udGFjdHMnKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBvcGVuTW9kYWwgPSBldnQgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29udGFjdHNFbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy0tdmlzaWJsZScpO1xuICBjbG9zZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2NLZXlEb3duKTtcbiAgY29udGFjdHNFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uT3ZlcmxheUNsaWNrKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufTtcblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgY29udGFjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0cy0tdmlzaWJsZScpO1xuICBjbG9zZUJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2NLZXlEb3duKTtcbiAgY29udGFjdHNFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uT3ZlcmxheUNsaWNrKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbn07XG5cbmlmIChjb250YWN0c0VsICYmIGNsb3NlQnRuRWwgJiYgY29udGFjdHNMaW5rRWwpIHtcbiAgY29udGFjdHNMaW5rRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xufVxuIiwiY29uc3QgY292ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuY29uc3QgY2FyZHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xuXG5sZXQgbGFzdEtub3duU2Nyb2xsUG9zaXRpb24gPSAwO1xubGV0IHRpY2tpbmcgPSBmYWxzZTtcblxuY29uc3Qgb25TY3JvbGwgPSBzY3JvbGxZID0+IHtcbiAgY29uc3QgY292ZXJIZWlnaHQgPSBjb3ZlckVsLm9mZnNldEhlaWdodDtcbiAgaWYgKHNjcm9sbFkgIT09IDApIHtcbiAgICBjb3ZlckVsLnN0eWxlLm9wYWNpdHkgPVxuICAgICAgY292ZXJIZWlnaHQgLSBzY3JvbGxZIC0gMTA0ID4gMFxuICAgICAgICA/IChjb3ZlckhlaWdodCAtIHNjcm9sbFkgLSAxMDQpIC8gY292ZXJIZWlnaHRcbiAgICAgICAgOiAwO1xuICB9IGVsc2Uge1xuICAgIGNvdmVyRWwuc3R5bGUub3BhY2l0eSA9IDE7XG4gIH1cbn07XG5cbmlmIChjb3ZlckVsICYmIGNhcmRzRWwpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmICghdGlja2luZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIG9uU2Nyb2xsKGxhc3RLbm93blNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aWNraW5nID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIG9uU2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcbn1cbiIsImNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmNvbnN0IGxpbmsgPSAnL2FwaS9vcmRlcic7XG5jb25zdCB1cmwgPSBpc1Byb2QgPyBsaW5rIDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCR7bGlua31gO1xuXG5mdW5jdGlvbiBzZW5kRGF0YSgpIHtcbiAgY29uc3QgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgWEhSLm9wZW4oJ1BPU1QnLCB1cmwpO1xuXG4gIFhIUi5zZW5kKGRhdGEpO1xuXG4gIFhIUi5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKFhIUi5zdGF0dXMgIT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhg0J7RiNC40LHQutCwICR7WEhSLnN0YXR1c306ICR7WEhSLnN0YXR1c1RleHR9YCk7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NhbGxiYWNrX19mb3JtLS1lcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhg0JPQvtGC0L7QstC+LCDQv9C+0LvRg9GH0LjQu9C4ICR7WEhSLnJlc3BvbnNlfWApO1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjYWxsYmFja19fZm9ybS0tc3VjY2VzJyk7XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZvcm0nKTtcbmNvbnN0IGJ0blNlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuJyk7XG5cbmlmIChmb3JtKSB7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGJ0blNlbmQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgc2VuZERhdGEoKTtcbiAgfSk7XG59XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tb2snKTtcbmlmIChidG4pIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnY2FsbGJhY2tfX2Zvcm0tLXN1Y2NlcycpO1xuICAgIGJ0blNlbmQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufVxuIiwiY29uc3QgbWVudUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudS1idG4nKTtcbmNvbnN0IG1lbnVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdi1saXN0Jyk7XG5jb25zdCBtZW51SXRlbXNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXYtaXRlbScpO1xuXG5jb25zdCBjbG9zZU1lbnUgPSAoKSA9PiB7XG4gIG1lbnVFbC5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdi1saXN0LS1vcGVuJyk7XG4gIG1lbnVCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KTtcbiAgWy4uLm1lbnVJdGVtc0Vsc10uZm9yRWFjaChtZW51SXRlbUVsID0+IHtcbiAgICBtZW51SXRlbUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51KTtcbiAgfSk7XG59O1xuXG5jb25zdCBvcGVuTWVudSA9ICgpID0+IHtcbiAgbWVudUVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2LWxpc3QtLW9wZW4nKTtcbiAgWy4uLm1lbnVJdGVtc0Vsc10uZm9yRWFjaChtZW51SXRlbUVsID0+IHtcbiAgICBtZW51SXRlbUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51KTtcbiAgfSk7XG4gIG1lbnVCdG5FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KTtcbn07XG5cbmlmIChtZW51QnRuRWwgJiYgbWVudUVsKSB7XG4gIG1lbnVCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KTtcbn1cbiIsImltcG9ydCBJTWFzayBmcm9tICdpbWFzayc7XG5cbmNvbnN0IHRlbGVwaG9uZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbC1pZCcpO1xuXG5pZiAodGVsZXBob25lRWwpIHtcbiAgSU1hc2sodGVsZXBob25lRWwsIHsgbWFzazogJyt7N30gKDAwMCkgMDAwLTAwLTAwJyB9KTtcblxuICB0ZWxlcGhvbmVFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGVsZXBob25lRWwudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICB0ZWxlcGhvbmVFbC5zZXRDdXN0b21WYWxpZGl0eShcbiAgICAgICAgJ9CS0LLQtdC00LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCDQsiDRhNC+0YDQvNCw0YLQtTogKzcgKDEyMykgNDU2LTc4LTkwJyxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbGVwaG9uZUVsLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IFN3aXBlciwgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlcic7XG5Td2lwZXIudXNlKFtBdXRvcGxheV0pO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmNvbnN0IHNsaWRlTmV4dCA9ICgpID0+IHtcbiAgc3dpcGVyLnNsaWRlTmV4dCgpO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lclRvQnRucyA9ICgpID0+IHtcbiAgY29uc3QgcHJldkJ0bkVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5yZXZpZXdzX19hdmF0YXItd3JhcHBlci0tbGFzdCcsXG4gICk7XG5cbiAgcHJldkJ0bkVscy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2xpZGVOZXh0KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiAxNTAwMCxcbiAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gIH0sXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogNCxcbiAgYXV0b0hlaWdodDogdHJ1ZSxcblxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDc2OHB4XG4gICAgNzY4OiB7XG4gICAgICBzcGFjZUJldHdlZW46IDMyLFxuICAgIH0sXG4gIH0sXG59KTtcblxuYWRkRXZlbnRMaXN0ZW5lclRvQnRucygpO1xuXG5zd2lwZXIub24oJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcsIGFkZEV2ZW50TGlzdGVuZXJUb0J0bnMpO1xuIiwiaW1wb3J0IHNtb290aHNjcm9sbCBmcm9tICdzbW9vdGhzY3JvbGwtcG9seWZpbGwnO1xuc21vb3Roc2Nyb2xsLnBvbHlmaWxsKCk7XG5cbmNvbnN0IGNhcmRzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FbaHJlZj1cIiNjYXJkcy1hbmNob3JcIl0nKTtcbmNvbnN0IGNhbGxiYWNrTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWY9XCIjY2FsbGJhY2tcIl0nKTtcblxuY29uc3Qgb25BbmNob3JDbGljayA9IGV2dCA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKGV2dC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKVxuICAgIC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbn07XG5cbltjYXJkc0xpbmssIC4uLmNhbGxiYWNrTGlua3NdLmZvckVhY2goZWwgPT4ge1xuICBpZiAoZWwpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQW5jaG9yQ2xpY2spO1xuICB9XG59KTtcbiIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vaW1hc2snO1xuaW1wb3J0ICcuL2Zvcm0nO1xuaW1wb3J0ICcuL2NvbnRhY3RzJztcbmltcG9ydCAnLi9oZWFkZXInO1xuaW1wb3J0ICcuL2NhcmRzJztcbmltcG9ydCAnLi9hbmltYXRpb24nO1xuaW1wb3J0ICcuL3N3aXBlcic7XG5pbXBvcnQgJy4vcGFydG5lcnMnO1xuaW1wb3J0ICcuL2NvdmVyJztcbmltcG9ydCAnLi9hbmNob3JzLWxpbmtzJztcbiIsImNvbnN0IHNob3dBbGxCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVyc19faXRlbS0tc2hvdy1hbGwnKTtcbmNvbnN0IHBhcnRuZXJzTGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzX19saXN0Jyk7XG5cbmNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gIHBhcnRuZXJzTGlzdEVsLmNsYXNzTGlzdC5hZGQoJ3BhcnRuZXJzX19saXN0LS1zaG93LWFsbCcpO1xuICBzaG93QWxsQnRuRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWxsKTtcbn07XG5cbmlmIChzaG93QWxsQnRuRWwgJiYgcGFydG5lcnNMaXN0RWwpIHtcbiAgc2hvd0FsbEJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQyOTY6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvYmFsdDQyX2J1c2luZXNzX2NhcmRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY29iYWx0NDJfYnVzaW5lc3NfY2FyZFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzY0XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNzQyKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInNlbGVjdG9yTGlzdCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwidmlzaWJsZUVsZW1lbnRzIiwiZmlsdGVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm1hcCIsInRhcmdldCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidW5vYnNlcnZlIiwic2VsZWN0b3IiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmUiLCJjYXJkQnRuRWxzIiwiZnVuY3Rpb25hbEJ0bkVscyIsImZ1bmN0aW9uYWxDYXJkRWwiLCJxdWVyeVNlbGVjdG9yIiwiY2FyZEJ0bkVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsImNhcmRzSXRlbSIsImNsb3Nlc3QiLCJ0b2dnbGUiLCJmdW5jdGlvbmFsQnRuRWwiLCJjb250YWN0c0xpbmtFbCIsImNvbnRhY3RzRWwiLCJjbG9zZUJ0bkVsIiwib25Fc2NLZXlEb3duIiwia2V5IiwiY2xvc2VNb2RhbCIsIm9uT3ZlcmxheUNsaWNrIiwiaWQiLCJvcGVuTW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvdmVyRWwiLCJjYXJkc0VsIiwibGFzdEtub3duU2Nyb2xsUG9zaXRpb24iLCJ0aWNraW5nIiwib25TY3JvbGwiLCJzY3JvbGxZIiwiY292ZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvcGFjaXR5IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaXNQcm9kIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwibGluayIsInVybCIsInNlbmREYXRhIiwiWEhSIiwiWE1MSHR0cFJlcXVlc3QiLCJkYXRhIiwiRm9ybURhdGEiLCJmb3JtIiwib3BlbiIsInNlbmQiLCJvbmxvYWQiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlIiwiYnRuU2VuZCIsImV2ZW50IiwiZGlzYWJsZWQiLCJidG4iLCJyZXNldCIsIm1lbnVCdG5FbCIsIm1lbnVFbCIsIm1lbnVJdGVtc0VscyIsImNsb3NlTWVudSIsIm9wZW5NZW51IiwibWVudUl0ZW1FbCIsIklNYXNrIiwidGVsZXBob25lRWwiLCJtYXNrIiwidmFsaWRpdHkiLCJwYXR0ZXJuTWlzbWF0Y2giLCJzZXRDdXN0b21WYWxpZGl0eSIsIlN3aXBlciIsIkF1dG9wbGF5IiwidXNlIiwic2xpZGVOZXh0Iiwic3dpcGVyIiwiYWRkRXZlbnRMaXN0ZW5lclRvQnRucyIsInByZXZCdG5FbHMiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiYXV0b0hlaWdodCIsImJyZWFrcG9pbnRzIiwib24iLCJzbW9vdGhzY3JvbGwiLCJwb2x5ZmlsbCIsImNhcmRzTGluayIsImNhbGxiYWNrTGlua3MiLCJvbkFuY2hvckNsaWNrIiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJlbCIsInNob3dBbGxCdG5FbCIsInBhcnRuZXJzTGlzdEVsIiwic2hvd0FsbCJdLCJzb3VyY2VSb290IjoiIn0=