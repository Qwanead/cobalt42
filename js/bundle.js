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
  form.classList.add('callback__form--preloader');
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

    form.classList.remove('callback__form--preloader');
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

/***/ 209:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./source/js/tel-mask.js
var tel_mask = __webpack_require__(807);
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

/***/ }),

/***/ 807:
/***/ (() => {

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [656], () => (__webpack_require__(209)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2NhbGxiYWNrLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2NvdmVyLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL3N3aXBlci5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2FuY2hvcnMtbGlua3MuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL3BhcnRuZXJzLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvdGVsLW1hc2suanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VsZWN0b3JMaXN0ID0gW1xuICAnLmluZGljYXRvcnNfX2l0ZW0tLWNvc3QgLmluZGljYXRvcnNfX2xpbmVzJyxcbiAgJy5pbmRpY2F0b3JzX19pdGVtLS1zcGVlZCAuaW5kaWNhdG9yc19fbGluZXMnLFxuICAnLmltcHJvdmVfX2l0ZW0nLFxuICAnLnBhcnRuZXJzX19pdGVtJyxcbl07XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICBjb25zdCB2aXNpYmxlRWxlbWVudHMgPSBbLi4uZW50cmllc11cbiAgICAuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgIC5tYXAoZW50cnkgPT4gZW50cnkudGFyZ2V0KTtcbiAgdmlzaWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICB9KTtcbn0pO1xuXG5zZWxlY3Rvckxpc3QuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgfSk7XG59KTtcbiIsImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsbGJhY2tfX2Zvcm0nKTtcbmNvbnN0IGlucHV0c0VscyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuY29uc3QgY2hlY2tJbnB1dCA9IGV2dCA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0OiBpbnB1dCwgdHlwZTogZXZlbnRUeXBlIH0gPSBldnQ7XG4gIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgY29uc3QgaW5wdXRDb250YWluZXJFbCA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmlucHV0Jyk7XG4gIGNvbnN0IGxhYmVsRWwgPSBpbnB1dENvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dF9fbGFiZWwnKTtcblxuICBpZiAoZXZlbnRUeXBlID09PSAnZm9jdXMnKSB7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXRfX2ZpZWxkLS1mb2N1cycpO1xuICB9XG5cbiAgaWYgKGV2ZW50VHlwZSA9PT0gJ2JsdXInKSB7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRfX2ZpZWxkLS1mb2N1cycpO1xuICB9XG5cbiAgaWYgKGV2ZW50VHlwZSAmJiAhaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXRfX2ZpZWxkLS1pbnZhbGlkJyk7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRfX2ZpZWxkLS1pbnZhbGlkJyk7XG4gIH1cblxuICBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgbGFiZWxFbC5jbGFzc0xpc3QuYWRkKCdpbnB1dF9fbGFiZWwtLWZpbGwnKTtcbiAgfSBlbHNlIHtcbiAgICBsYWJlbEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0X19sYWJlbC0tZmlsbCcpO1xuICB9XG59O1xuXG5bLi4uaW5wdXRzRWxzXS5mb3JFYWNoKGlucHV0RWwgPT4ge1xuICBjaGVja0lucHV0KHtcbiAgICB0YXJnZXQ6IGlucHV0RWwsXG4gICAgdHlwZTogbnVsbCxcbiAgfSk7XG4gIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGVja0lucHV0KTtcbiAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGNoZWNrSW5wdXQpO1xuICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0lucHV0KTtcbn0pO1xuIiwiY29uc3QgY2FyZEJ0bkVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkc19fYnRuJyk7XG5jb25zdCBmdW5jdGlvbmFsQnRuRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZ1bmN0aW9uYWxfX2J0bicpO1xuY29uc3QgZnVuY3Rpb25hbENhcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdW5jdGlvbmFsX19hcGktd3JhcHBlcicpO1xuXG5bLi4uY2FyZEJ0bkVsc10uZm9yRWFjaChjYXJkQnRuRWwgPT4ge1xuICBjYXJkQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgIGNvbnN0IGNhcmRzSXRlbSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhcmRzX19pdGVtJyk7XG4gICAgY2FyZHNJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRzX19pdGVtLS1hY3RpdmUnKTtcbiAgfSk7XG59KTtcblxuWy4uLmZ1bmN0aW9uYWxCdG5FbHNdLmZvckVhY2goZnVuY3Rpb25hbEJ0bkVsID0+IHtcbiAgZnVuY3Rpb25hbEJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZ1bmN0aW9uYWxDYXJkRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZnVuY3Rpb25hbF9fYXBpLXdyYXBwZXItLWFjdGl2ZScpO1xuICB9KTtcbn0pO1xuIiwiY29uc3QgY29udGFjdHNMaW5rRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMtbGluaycpO1xuY29uc3QgY29udGFjdHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0cycpO1xuY29uc3QgY2xvc2VCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0cy1jbG9zZScpO1xuXG5jb25zdCBvbkVzY0tleURvd24gPSBldnQgPT4ge1xuICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbn07XG5cbmNvbnN0IG9uT3ZlcmxheUNsaWNrID0gZXZ0ID0+IHtcbiAgaWYgKGV2dC50YXJnZXQuaWQgPT09ICdjb250YWN0cycpIHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH1cbn07XG5cbmNvbnN0IG9wZW5Nb2RhbCA9IGV2dCA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb250YWN0c0VsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLS12aXNpYmxlJyk7XG4gIGNsb3NlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVzY0tleURvd24pO1xuICBjb250YWN0c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25PdmVybGF5Q2xpY2spO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG59O1xuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb250YWN0c0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhY3RzLS12aXNpYmxlJyk7XG4gIGNsb3NlQnRuRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVzY0tleURvd24pO1xuICBjb250YWN0c0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25PdmVybGF5Q2xpY2spO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xufTtcblxuaWYgKGNvbnRhY3RzRWwgJiYgY2xvc2VCdG5FbCAmJiBjb250YWN0c0xpbmtFbCkge1xuICBjb250YWN0c0xpbmtFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG59XG4iLCJjb25zdCBjb3ZlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XG5jb25zdCBjYXJkc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG5cbmxldCBsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA9IDA7XG5sZXQgdGlja2luZyA9IGZhbHNlO1xuXG5jb25zdCBvblNjcm9sbCA9IHNjcm9sbFkgPT4ge1xuICBjb25zdCBjb3ZlckhlaWdodCA9IGNvdmVyRWwub2Zmc2V0SGVpZ2h0O1xuICBpZiAoc2Nyb2xsWSAhPT0gMCkge1xuICAgIGNvdmVyRWwuc3R5bGUub3BhY2l0eSA9XG4gICAgICBjb3ZlckhlaWdodCAtIHNjcm9sbFkgLSAxMDQgPiAwXG4gICAgICAgID8gKGNvdmVySGVpZ2h0IC0gc2Nyb2xsWSAtIDEwNCkgLyBjb3ZlckhlaWdodFxuICAgICAgICA6IDA7XG4gIH0gZWxzZSB7XG4gICAgY292ZXJFbC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgfVxufTtcblxuaWYgKGNvdmVyRWwgJiYgY2FyZHNFbCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIGxhc3RLbm93blNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgaWYgKCF0aWNraW5nKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgb25TY3JvbGwobGFzdEtub3duU2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgb25TY3JvbGwod2luZG93LnNjcm9sbFkpO1xufVxuIiwiY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuY29uc3QgbGluayA9ICcvYXBpL29yZGVyJztcbmNvbnN0IHVybCA9IGlzUHJvZCA/IGxpbmsgOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwJHtsaW5rfWA7XG5cbmZ1bmN0aW9uIHNlbmREYXRhKCkge1xuICBjb25zdCBYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcblxuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NhbGxiYWNrX19mb3JtLS1wcmVsb2FkZXInKTtcbiAgWEhSLm9wZW4oJ1BPU1QnLCB1cmwpO1xuICBYSFIuc2VuZChkYXRhKTtcbiAgWEhSLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoWEhSLnN0YXR1cyAhPSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGDQntGI0LjQsdC60LAgJHtYSFIuc3RhdHVzfTogJHtYSFIuc3RhdHVzVGV4dH1gKTtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2FsbGJhY2tfX2Zvcm0tLWVycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGDQk9C+0YLQvtCy0L4sINC/0L7Qu9GD0YfQuNC70LggJHtYSFIucmVzcG9uc2V9YCk7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NhbGxiYWNrX19mb3JtLS1zdWNjZXMnKTtcbiAgICB9XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdjYWxsYmFja19fZm9ybS0tcHJlbG9hZGVyJyk7XG4gIH07XG59XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZm9ybScpO1xuY29uc3QgYnRuU2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4nKTtcblxuaWYgKGZvcm0pIHtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGJ0blNlbmQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHNlbmREYXRhKCk7XG4gIH0pO1xufVxuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLW9rJyk7XG5pZiAoYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdjYWxsYmFja19fZm9ybS0tc3VjY2VzJyk7XG4gICAgYnRuU2VuZC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG59XG4iLCJjb25zdCBtZW51QnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LWJ0bicpO1xuY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LWxpc3QnKTtcbmNvbnN0IG1lbnVJdGVtc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1pdGVtJyk7XG5cbmNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcbiAgbWVudUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbmF2LWxpc3QtLW9wZW4nKTtcbiAgbWVudUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xuICBbLi4ubWVudUl0ZW1zRWxzXS5mb3JFYWNoKG1lbnVJdGVtRWwgPT4ge1xuICAgIG1lbnVJdGVtRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xuICB9KTtcbn07XG5cbmNvbnN0IG9wZW5NZW51ID0gKCkgPT4ge1xuICBtZW51RWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19uYXYtbGlzdC0tb3BlbicpO1xuICBbLi4ubWVudUl0ZW1zRWxzXS5mb3JFYWNoKG1lbnVJdGVtRWwgPT4ge1xuICAgIG1lbnVJdGVtRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xuICB9KTtcbiAgbWVudUJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xufTtcblxuaWYgKG1lbnVCdG5FbCAmJiBtZW51RWwpIHtcbiAgbWVudUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xufVxuIiwiaW1wb3J0IFN3aXBlciwgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlcic7XG5Td2lwZXIudXNlKFtBdXRvcGxheV0pO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmNvbnN0IHNsaWRlTmV4dCA9ICgpID0+IHtcbiAgc3dpcGVyLnNsaWRlTmV4dCgpO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lclRvQnRucyA9ICgpID0+IHtcbiAgY29uc3QgcHJldkJ0bkVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5yZXZpZXdzX19hdmF0YXItd3JhcHBlci0tbGFzdCcsXG4gICk7XG5cbiAgcHJldkJ0bkVscy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2xpZGVOZXh0KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiAxNTAwMCxcbiAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gIH0sXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogNCxcbiAgYXV0b0hlaWdodDogdHJ1ZSxcblxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDc2OHB4XG4gICAgNzY4OiB7XG4gICAgICBzcGFjZUJldHdlZW46IDMyLFxuICAgIH0sXG4gIH0sXG59KTtcblxuYWRkRXZlbnRMaXN0ZW5lclRvQnRucygpO1xuXG5zd2lwZXIub24oJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcsIGFkZEV2ZW50TGlzdGVuZXJUb0J0bnMpO1xuIiwiaW1wb3J0IHNtb290aHNjcm9sbCBmcm9tICdzbW9vdGhzY3JvbGwtcG9seWZpbGwnO1xuc21vb3Roc2Nyb2xsLnBvbHlmaWxsKCk7XG5cbmNvbnN0IGNhcmRzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FbaHJlZj1cIiNjYXJkcy1hbmNob3JcIl0nKTtcbmNvbnN0IGNhbGxiYWNrTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWY9XCIjY2FsbGJhY2tcIl0nKTtcblxuY29uc3Qgb25BbmNob3JDbGljayA9IGV2dCA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKGV2dC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKVxuICAgIC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbn07XG5cbltjYXJkc0xpbmssIC4uLmNhbGxiYWNrTGlua3NdLmZvckVhY2goZWwgPT4ge1xuICBpZiAoZWwpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQW5jaG9yQ2xpY2spO1xuICB9XG59KTtcbiIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vdGVsLW1hc2snO1xuaW1wb3J0ICcuL2Zvcm0nO1xuaW1wb3J0ICcuL2NvbnRhY3RzJztcbmltcG9ydCAnLi9oZWFkZXInO1xuaW1wb3J0ICcuL2NhcmRzJztcbmltcG9ydCAnLi9hbmltYXRpb24nO1xuaW1wb3J0ICcuL3N3aXBlcic7XG5pbXBvcnQgJy4vcGFydG5lcnMnO1xuaW1wb3J0ICcuL2NvdmVyJztcbmltcG9ydCAnLi9hbmNob3JzLWxpbmtzJztcbmltcG9ydCAnLi9jYWxsYmFjayc7XG4iLCJjb25zdCBzaG93QWxsQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnNfX2l0ZW0tLXNob3ctYWxsJyk7XG5jb25zdCBwYXJ0bmVyc0xpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVyc19fbGlzdCcpO1xuXG5jb25zdCBzaG93QWxsID0gKCkgPT4ge1xuICBwYXJ0bmVyc0xpc3RFbC5jbGFzc0xpc3QuYWRkKCdwYXJ0bmVyc19fbGlzdC0tc2hvdy1hbGwnKTtcbiAgc2hvd0FsbEJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbCk7XG59O1xuXG5pZiAoc2hvd0FsbEJ0bkVsICYmIHBhcnRuZXJzTGlzdEVsKSB7XG4gIHNob3dBbGxCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGwpO1xufVxuIiwiY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVsLWlkJyk7XG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICBsZXQgdmFsdWUgPSBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQrL2csICcnKTtcbiAgaWYgKHZhbHVlWzBdID09PSAnNycgfHwgdmFsdWVbMF0gPT09ICc4Jykge1xuICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gIH1cbiAgY29uc3QgbnVtYmVyTGVuZ3RoID0gMTA7XG5cbiAgbGV0IHJlc3VsdCA9ICcrNyAoJztcbiAgWy4uLnZhbHVlXS5zbGljZSgwLCBudW1iZXJMZW5ndGgpLmZvckVhY2goKGNoYXIsIGluZGV4KSA9PiB7XG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXN1bHQgKz0gJykgJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJlc3VsdCArPSAnLSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICByZXN1bHQgKz0gJy0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSBjaGFyO1xuICB9KTtcblxuICBpbnB1dC52YWx1ZSA9IHJlc3VsdDtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0Mjk2OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2JhbHQ0Ml9idXNpbmVzc19jYXJkXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvYmFsdDQyX2J1c2luZXNzX2NhcmRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFs2NTZdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygyMDkpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsic2VsZWN0b3JMaXN0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJ2aXNpYmxlRWxlbWVudHMiLCJmaWx0ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwibWFwIiwidGFyZ2V0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bm9ic2VydmUiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib2JzZXJ2ZSIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRzRWxzIiwiY2hlY2tJbnB1dCIsImV2dCIsImlucHV0IiwidHlwZSIsImV2ZW50VHlwZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsImlucHV0Q29udGFpbmVyRWwiLCJjbG9zZXN0IiwibGFiZWxFbCIsInJlbW92ZSIsImNoZWNrVmFsaWRpdHkiLCJsZW5ndGgiLCJpbnB1dEVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcmRCdG5FbHMiLCJmdW5jdGlvbmFsQnRuRWxzIiwiZnVuY3Rpb25hbENhcmRFbCIsImNhcmRCdG5FbCIsImNhcmRzSXRlbSIsInRvZ2dsZSIsImZ1bmN0aW9uYWxCdG5FbCIsImNvbnRhY3RzTGlua0VsIiwiY29udGFjdHNFbCIsImNsb3NlQnRuRWwiLCJvbkVzY0tleURvd24iLCJrZXkiLCJjbG9zZU1vZGFsIiwib25PdmVybGF5Q2xpY2siLCJpZCIsIm9wZW5Nb2RhbCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY292ZXJFbCIsImNhcmRzRWwiLCJsYXN0S25vd25TY3JvbGxQb3NpdGlvbiIsInRpY2tpbmciLCJvblNjcm9sbCIsInNjcm9sbFkiLCJjb3ZlckhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9wYWNpdHkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpc1Byb2QiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJsaW5rIiwidXJsIiwic2VuZERhdGEiLCJYSFIiLCJYTUxIdHRwUmVxdWVzdCIsImRhdGEiLCJGb3JtRGF0YSIsIm9wZW4iLCJzZW5kIiwib25sb2FkIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJyZXNwb25zZSIsImJ0blNlbmQiLCJldmVudCIsImRpc2FibGVkIiwiYnRuIiwicmVzZXQiLCJtZW51QnRuRWwiLCJtZW51RWwiLCJtZW51SXRlbXNFbHMiLCJjbG9zZU1lbnUiLCJvcGVuTWVudSIsIm1lbnVJdGVtRWwiLCJTd2lwZXIiLCJBdXRvcGxheSIsInVzZSIsInNsaWRlTmV4dCIsInN3aXBlciIsImFkZEV2ZW50TGlzdGVuZXJUb0J0bnMiLCJwcmV2QnRuRWxzIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwibG9vcCIsInNwYWNlQmV0d2VlbiIsImF1dG9IZWlnaHQiLCJicmVha3BvaW50cyIsIm9uIiwic21vb3Roc2Nyb2xsIiwicG9seWZpbGwiLCJjYXJkc0xpbmsiLCJjYWxsYmFja0xpbmtzIiwib25BbmNob3JDbGljayIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZWwiLCJzaG93QWxsQnRuRWwiLCJwYXJ0bmVyc0xpc3RFbCIsInNob3dBbGwiLCJyZXBsYWNlIiwic2xpY2UiLCJudW1iZXJMZW5ndGgiLCJyZXN1bHQiLCJjaGFyIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9