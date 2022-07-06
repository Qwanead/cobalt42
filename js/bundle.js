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

/***/ 510:
/***/ (() => {

const coverEl = document.querySelector('.cover');
const cardsEl = document.querySelector('.cards');
let lastKnownScrollPosition = 0;
let ticking = false;

const onScroll = scrollY => {
  const coverHeight = coverEl.offsetHeight;

  if (scrollY !== 0) {
    coverEl.style.opacity = (coverHeight - scrollY - 104) / coverHeight;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2NhcmRzLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9jb3Zlci5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9pbWFzay5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL3N3aXBlci5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2luZGV4LmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvcGFydG5lcnMuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlbGVjdG9yTGlzdCA9IFtcbiAgJy5pbmRpY2F0b3JzX19pdGVtLS1jb3N0IC5pbmRpY2F0b3JzX19saW5lcycsXG4gICcuaW5kaWNhdG9yc19faXRlbS0tc3BlZWQgLmluZGljYXRvcnNfX2xpbmVzJyxcbiAgJy5pbXByb3ZlX19pdGVtJyxcbiAgJy5wYXJ0bmVyc19faXRlbScsXG5dO1xuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgY29uc3QgdmlzaWJsZUVsZW1lbnRzID0gWy4uLmVudHJpZXNdXG4gICAgLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZylcbiAgICAubWFwKGVudHJ5ID0+IGVudHJ5LnRhcmdldCk7XG4gIHZpc2libGVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgfSk7XG59KTtcblxuc2VsZWN0b3JMaXN0LmZvckVhY2goc2VsZWN0b3IgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gIH0pO1xufSk7XG4iLCJjb25zdCBjYXJkQnRuRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzX19idG4nKTtcbmNvbnN0IGZ1bmN0aW9uYWxCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdW5jdGlvbmFsX19idG4nKTtcbmNvbnN0IGZ1bmN0aW9uYWxDYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVuY3Rpb25hbF9fYXBpJyk7XG5cbmNvbnN0IHRvZ2dsZUNhcmQgPSBldnQgPT4ge1xuICBjb25zdCBjYXJkc0l0ZW0gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXJkc19faXRlbScpO1xuICBjb25zdCBjYXJkQnRuRWwgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXJkc19fYnRuJyk7XG5cbiAgY2FyZHNJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRzX19pdGVtLS1hY3RpdmUnKTtcbiAgY29uc3QgaXNDYXJkQWN0aXZlID0gY2FyZHNJdGVtLmNsYXNzTGlzdC5jb250YWlucygnY2FyZHNfX2l0ZW0tLWFjdGl2ZScpO1xuICBjYXJkQnRuRWwudGV4dENvbnRlbnQgPSBpc0NhcmRBY3RpdmUgPyAn0KHQutGA0YvRgtGMIC0nIDogJ9Cf0L7QtNGA0L7QsdC90LXQtSArJztcbn07XG5cblsuLi5jYXJkQnRuRWxzXS5mb3JFYWNoKGNhcmRCdG5FbCA9PiB7XG4gIGNhcmRCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNhcmQpO1xufSk7XG5cbmlmIChmdW5jdGlvbmFsQnRuRWwpIHtcbiAgZnVuY3Rpb25hbEJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZ1bmN0aW9uYWxDYXJkRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZnVuY3Rpb25hbF9fYXBpLS1hY3RpdmUnKTtcbiAgICBjb25zdCBpc0NhcmRBY3RpdmUgPSBmdW5jdGlvbmFsQ2FyZEVsLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICdmdW5jdGlvbmFsX19hcGktLWFjdGl2ZScsXG4gICAgKTtcbiAgICBmdW5jdGlvbmFsQnRuRWwudGV4dENvbnRlbnQgPSBpc0NhcmRBY3RpdmUgPyAn0KHQutGA0YvRgtGMIC0nIDogJ9Cf0L7QtNGA0L7QsdC90LXQtSArJztcbiAgfSk7XG59XG4iLCJjb25zdCBjb250YWN0c0xpbmtFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0cy1saW5rJyk7XG5jb25zdCBjb250YWN0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzJyk7XG5jb25zdCBjbG9zZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzLWNsb3NlJyk7XG5cbmNvbnN0IG9uRXNjS2V5RG93biA9IGV2dCA9PiB7XG4gIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxufTtcblxuY29uc3Qgb25PdmVybGF5Q2xpY2sgPSBldnQgPT4ge1xuICBpZiAoZXZ0LnRhcmdldC5pZCA9PT0gJ2NvbnRhY3RzJykge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxufTtcblxuY29uc3Qgb3Blbk1vZGFsID0gZXZ0ID0+IHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnRhY3RzRWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtLXZpc2libGUnKTtcbiAgY2xvc2VCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRXNjS2V5RG93bik7XG4gIGNvbnRhY3RzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk92ZXJsYXlDbGljayk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnRhY3RzRWwuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFjdHMtLXZpc2libGUnKTtcbiAgY2xvc2VCdG5FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRXNjS2V5RG93bik7XG4gIGNvbnRhY3RzRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk92ZXJsYXlDbGljayk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG59O1xuXG5pZiAoY29udGFjdHNFbCAmJiBjbG9zZUJ0bkVsICYmIGNvbnRhY3RzTGlua0VsKSB7XG4gIGNvbnRhY3RzTGlua0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKTtcbn1cbiIsImNvbnN0IGNvdmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKTtcbmNvbnN0IGNhcmRzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcblxubGV0IGxhc3RLbm93blNjcm9sbFBvc2l0aW9uID0gMDtcbmxldCB0aWNraW5nID0gZmFsc2U7XG5cbmNvbnN0IG9uU2Nyb2xsID0gc2Nyb2xsWSA9PiB7XG4gIGNvbnN0IGNvdmVySGVpZ2h0ID0gY292ZXJFbC5vZmZzZXRIZWlnaHQ7XG4gIGlmIChzY3JvbGxZICE9PSAwKSB7XG4gICAgY292ZXJFbC5zdHlsZS5vcGFjaXR5ID0gKGNvdmVySGVpZ2h0IC0gc2Nyb2xsWSAtIDEwNCkgLyBjb3ZlckhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBjb3ZlckVsLnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9XG59O1xuXG5pZiAoY292ZXJFbCAmJiBjYXJkc0VsKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgbGFzdEtub3duU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBvblNjcm9sbChsYXN0S25vd25TY3JvbGxQb3NpdGlvbik7XG4gICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGlja2luZyA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBvblNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XG59XG4iLCJjb25zdCBpc1Byb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5jb25zdCBsaW5rID0gJy9hcGkvb3JkZXInO1xuY29uc3QgdXJsID0gaXNQcm9kID8gbGluayA6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAke2xpbmt9YDtcblxuZnVuY3Rpb24gc2VuZERhdGEoKSB7XG4gIGNvbnN0IFhIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCBmb3JtICk7XG5cbiAgWEhSLm9wZW4oIFwiUE9TVFwiLCB1cmwgKTtcblxuICBYSFIuc2VuZCggZGF0YSApO1xuXG4gIFhIUi5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoWEhSLnN0YXR1cyAhPSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGDQntGI0LjQsdC60LAgJHtYSFIuc3RhdHVzfTogJHtYSFIuc3RhdHVzVGV4dH1gKTtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2FsbGJhY2tfX2Zvcm0tLWVycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGDQk9C+0YLQvtCy0L4sINC/0L7Qu9GD0YfQuNC70LggJHtYSFIucmVzcG9uc2V9YCk7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NhbGxiYWNrX19mb3JtLS1zdWNjZXMnKTtcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZm9ybScpO1xuY29uc3QgYnRuU2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4nKTtcblxuaWYgKGZvcm0pIHtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCBcInN1Ym1pdFwiLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBidG5TZW5kLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHNlbmREYXRhKCk7XG4gIH0gKTtcbn1cblxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ0bi1vaycpO1xuaWYgKGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2NhbGxiYWNrX19mb3JtLS1zdWNjZXMnKTtcbiAgICBidG5TZW5kLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9ICk7XG59XG4iLCJjb25zdCBtZW51QnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LWJ0bicpO1xuY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LWxpc3QnKTtcbmNvbnN0IG1lbnVJdGVtc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdi1pdGVtJyk7XG5cbmNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcbiAgbWVudUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbmF2LWxpc3QtLW9wZW4nKTtcbiAgbWVudUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xuICBbLi4ubWVudUl0ZW1zRWxzXS5mb3JFYWNoKG1lbnVJdGVtRWwgPT4ge1xuICAgIG1lbnVJdGVtRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xuICB9KTtcbn07XG5cbmNvbnN0IG9wZW5NZW51ID0gKCkgPT4ge1xuICBtZW51RWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19uYXYtbGlzdC0tb3BlbicpO1xuICBbLi4ubWVudUl0ZW1zRWxzXS5mb3JFYWNoKG1lbnVJdGVtRWwgPT4ge1xuICAgIG1lbnVJdGVtRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xuICB9KTtcbiAgbWVudUJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xufTtcblxuaWYgKG1lbnVCdG5FbCAmJiBtZW51RWwpIHtcbiAgbWVudUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xufVxuIiwiaW1wb3J0IElNYXNrIGZyb20gJ2ltYXNrJztcblxuY29uc3QgdGVsZXBob25lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVsLWlkJyk7XG5cbmlmICh0ZWxlcGhvbmVFbCkge1xuICBJTWFzayh0ZWxlcGhvbmVFbCwgeyBtYXNrOiAnK3s3fSAoMDAwKSAwMDAtMDAtMDAnIH0pO1xuXG4gIHRlbGVwaG9uZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0ZWxlcGhvbmVFbC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAgIHRlbGVwaG9uZUVsLnNldEN1c3RvbVZhbGlkaXR5KFxuICAgICAgICAn0JLQstC10LTQuNGC0LUg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwINCyINGE0L7RgNC80LDRgtC1OiArNyAoMTIzKSA0NTYtNzgtOTAnLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVsZXBob25lRWwuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgU3dpcGVyLCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcblN3aXBlci51c2UoW0F1dG9wbGF5XSk7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuY29uc3Qgc2xpZGVOZXh0ID0gKCkgPT4ge1xuICBzd2lwZXIuc2xpZGVOZXh0KCk7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyVG9CdG5zID0gKCkgPT4ge1xuICBjb25zdCBwcmV2QnRuRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLnJldmlld3NfX2F2YXRhci13cmFwcGVyLS1sYXN0JyxcbiAgKTtcblxuICBwcmV2QnRuRWxzLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzbGlkZU5leHQpO1xuICB9KTtcbn07XG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDE1MDAwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgfSxcbiAgbG9vcDogdHJ1ZSxcbiAgc3BhY2VCZXR3ZWVuOiA0LFxuICBhdXRvSGVpZ2h0OiB0cnVlLFxuXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNzY4cHhcbiAgICA3Njg6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5hZGRFdmVudExpc3RlbmVyVG9CdG5zKCk7XG5cbnN3aXBlci5vbignc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJywgYWRkRXZlbnRMaXN0ZW5lclRvQnRucyk7XG4iLCIvLyDQrdGC0L4gLSDQstCw0YjQsCDRgtC+0YfQutCwINCy0YXQvtC00LAg0LTQu9GPINGB0LrRgNC40L/RgtC+0LIg0YHRgtGA0LDQvdC40YbRiy4g0JjQvNC/0L7RgNGC0LjRgNGD0LnRgtC1INGB0Y7QtNCwINC90YPQttC90YvQtSDQstCw0Lwg0YTQsNC50LvRiy5cblxuaW1wb3J0ICcuL2ltYXNrJztcbmltcG9ydCAnLi9mb3JtJztcbmltcG9ydCAnLi9jb250YWN0cyc7XG5pbXBvcnQgJy4vaGVhZGVyJztcbmltcG9ydCAnLi9jYXJkcyc7XG5pbXBvcnQgJy4vYW5pbWF0aW9uJztcbmltcG9ydCAnLi9zd2lwZXInO1xuaW1wb3J0ICcuL3BhcnRuZXJzJztcbmltcG9ydCAnLi9jb3Zlcic7XG4iLCJjb25zdCBzaG93QWxsQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnNfX2l0ZW0tLXNob3ctYWxsJyk7XG5jb25zdCBwYXJ0bmVyc0xpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVyc19fbGlzdCcpO1xuXG5jb25zdCBzaG93QWxsID0gKCkgPT4ge1xuICBwYXJ0bmVyc0xpc3RFbC5jbGFzc0xpc3QuYWRkKCdwYXJ0bmVyc19fbGlzdC0tc2hvdy1hbGwnKTtcbiAgc2hvd0FsbEJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbCk7XG59O1xuXG5pZiAoc2hvd0FsbEJ0bkVsICYmIHBhcnRuZXJzTGlzdEVsKSB7XG4gIHNob3dBbGxCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGwpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDI5NjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY29iYWx0NDJfYnVzaW5lc3NfY2FyZFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2JhbHQ0Ml9idXNpbmVzc19jYXJkXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbOF0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDY2MCkpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJzZWxlY3Rvckxpc3QiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInZpc2libGVFbGVtZW50cyIsImZpbHRlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJtYXAiLCJ0YXJnZXQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvYnNlcnZlIiwiY2FyZEJ0bkVscyIsImZ1bmN0aW9uYWxCdG5FbCIsInF1ZXJ5U2VsZWN0b3IiLCJmdW5jdGlvbmFsQ2FyZEVsIiwidG9nZ2xlQ2FyZCIsImV2dCIsImNhcmRzSXRlbSIsImNsb3Nlc3QiLCJjYXJkQnRuRWwiLCJ0b2dnbGUiLCJpc0NhcmRBY3RpdmUiLCJjb250YWlucyIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhY3RzTGlua0VsIiwiY29udGFjdHNFbCIsImNsb3NlQnRuRWwiLCJvbkVzY0tleURvd24iLCJrZXkiLCJjbG9zZU1vZGFsIiwib25PdmVybGF5Q2xpY2siLCJpZCIsIm9wZW5Nb2RhbCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY292ZXJFbCIsImNhcmRzRWwiLCJsYXN0S25vd25TY3JvbGxQb3NpdGlvbiIsInRpY2tpbmciLCJvblNjcm9sbCIsInNjcm9sbFkiLCJjb3ZlckhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9wYWNpdHkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpc1Byb2QiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJsaW5rIiwidXJsIiwic2VuZERhdGEiLCJYSFIiLCJYTUxIdHRwUmVxdWVzdCIsImRhdGEiLCJGb3JtRGF0YSIsImZvcm0iLCJvcGVuIiwic2VuZCIsIm9ubG9hZCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNUZXh0IiwicmVzcG9uc2UiLCJidG5TZW5kIiwiZXZlbnQiLCJkaXNhYmxlZCIsImJ0biIsInJlc2V0IiwibWVudUJ0bkVsIiwibWVudUVsIiwibWVudUl0ZW1zRWxzIiwiY2xvc2VNZW51Iiwib3Blbk1lbnUiLCJtZW51SXRlbUVsIiwiSU1hc2siLCJ0ZWxlcGhvbmVFbCIsIm1hc2siLCJ2YWxpZGl0eSIsInBhdHRlcm5NaXNtYXRjaCIsInNldEN1c3RvbVZhbGlkaXR5IiwiU3dpcGVyIiwiQXV0b3BsYXkiLCJ1c2UiLCJzbGlkZU5leHQiLCJzd2lwZXIiLCJhZGRFdmVudExpc3RlbmVyVG9CdG5zIiwicHJldkJ0bkVscyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImxvb3AiLCJzcGFjZUJldHdlZW4iLCJhdXRvSGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJvbiIsInNob3dBbGxCdG5FbCIsInBhcnRuZXJzTGlzdEVsIiwic2hvd0FsbCJdLCJzb3VyY2VSb290IjoiIn0=