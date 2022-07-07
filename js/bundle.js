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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyxDQUNuQiw0Q0FEbUIsRUFFbkIsNkNBRm1CLEVBR25CLGdCQUhtQixFQUluQixpQkFKbUIsQ0FBckI7QUFPQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUJDLE9BQU8sSUFBSTtFQUNuRCxNQUFNQyxlQUFlLEdBQUcsQ0FBQyxHQUFHRCxPQUFKLEVBQ3JCRSxNQURxQixDQUNkQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsY0FERCxFQUVyQkMsR0FGcUIsQ0FFakJGLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxNQUZFLENBQXhCO0VBR0FMLGVBQWUsQ0FBQ00sT0FBaEIsQ0FBd0JDLE9BQU8sSUFBSTtJQUNqQ0EsT0FBTyxDQUFDQyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixTQUF0QjtJQUNBWixRQUFRLENBQUNhLFNBQVQsQ0FBbUJILE9BQW5CO0VBQ0QsQ0FIRDtBQUlELENBUmdCLENBQWpCO0FBVUFYLFlBQVksQ0FBQ1UsT0FBYixDQUFxQkssUUFBUSxJQUFJO0VBQy9CLE1BQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQkgsUUFBMUIsQ0FBakI7RUFDQUMsUUFBUSxDQUFDTixPQUFULENBQWlCQyxPQUFPLElBQUk7SUFDMUJWLFFBQVEsQ0FBQ2tCLE9BQVQsQ0FBaUJSLE9BQWpCO0VBQ0QsQ0FGRDtBQUdELENBTEQ7Ozs7Ozs7QUNqQkEsTUFBTVMsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLENBQW5CO0FBQ0EsTUFBTUcsZUFBZSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXhCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdOLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixrQkFBdkIsQ0FBekI7O0FBRUEsTUFBTUUsVUFBVSxHQUFHQyxHQUFHLElBQUk7RUFDeEIsTUFBTUMsU0FBUyxHQUFHRCxHQUFHLENBQUNoQixNQUFKLENBQVdrQixPQUFYLENBQW1CLGNBQW5CLENBQWxCO0VBQ0EsTUFBTUMsU0FBUyxHQUFHSCxHQUFHLENBQUNoQixNQUFKLENBQVdrQixPQUFYLENBQW1CLGFBQW5CLENBQWxCO0VBRUFELFNBQVMsQ0FBQ2QsU0FBVixDQUFvQmlCLE1BQXBCLENBQTJCLHFCQUEzQjtFQUNBLE1BQU1DLFlBQVksR0FBR0osU0FBUyxDQUFDZCxTQUFWLENBQW9CbUIsUUFBcEIsQ0FBNkIscUJBQTdCLENBQXJCO0VBQ0FILFNBQVMsQ0FBQ0ksV0FBVixHQUF3QkYsWUFBWSxHQUFHLFVBQUgsR0FBZ0IsYUFBcEQ7QUFDRCxDQVBEOztBQVNBLENBQUMsR0FBR1YsVUFBSixFQUFnQlYsT0FBaEIsQ0FBd0JrQixTQUFTLElBQUk7RUFDbkNBLFNBQVMsQ0FBQ0ssZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0NULFVBQXBDO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJSCxlQUFKLEVBQXFCO0VBQ25CQSxlQUFlLENBQUNZLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxNQUFNO0lBQzlDVixnQkFBZ0IsQ0FBQ1gsU0FBakIsQ0FBMkJpQixNQUEzQixDQUFrQyx5QkFBbEM7SUFDQSxNQUFNQyxZQUFZLEdBQUdQLGdCQUFnQixDQUFDWCxTQUFqQixDQUEyQm1CLFFBQTNCLENBQ25CLHlCQURtQixDQUFyQjtJQUdBVixlQUFlLENBQUNXLFdBQWhCLEdBQThCRixZQUFZLEdBQUcsVUFBSCxHQUFnQixhQUExRDtFQUNELENBTkQ7QUFPRDs7Ozs7OztBQ3pCRCxNQUFNSSxjQUFjLEdBQUdqQixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXZCO0FBQ0EsTUFBTWEsVUFBVSxHQUFHbEIsUUFBUSxDQUFDSyxhQUFULENBQXVCLFdBQXZCLENBQW5CO0FBQ0EsTUFBTWMsVUFBVSxHQUFHbkIsUUFBUSxDQUFDSyxhQUFULENBQXVCLGlCQUF2QixDQUFuQjs7QUFFQSxNQUFNZSxZQUFZLEdBQUdaLEdBQUcsSUFBSTtFQUMxQixJQUFJQSxHQUFHLENBQUNhLEdBQUosS0FBWSxRQUFoQixFQUEwQjtJQUN4QkMsVUFBVTtFQUNYO0FBQ0YsQ0FKRDs7QUFNQSxNQUFNQyxjQUFjLEdBQUdmLEdBQUcsSUFBSTtFQUM1QixJQUFJQSxHQUFHLENBQUNoQixNQUFKLENBQVdnQyxFQUFYLEtBQWtCLFVBQXRCLEVBQWtDO0lBQ2hDRixVQUFVO0VBQ1g7QUFDRixDQUpEOztBQU1BLE1BQU1HLFNBQVMsR0FBR2pCLEdBQUcsSUFBSTtFQUN2QkEsR0FBRyxDQUFDa0IsY0FBSjtFQUNBUixVQUFVLENBQUN2QixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixtQkFBekI7RUFDQXVCLFVBQVUsQ0FBQ0gsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNNLFVBQXJDO0VBQ0FLLE1BQU0sQ0FBQ1gsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNJLFlBQW5DO0VBQ0FGLFVBQVUsQ0FBQ0YsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNPLGNBQXJDO0VBQ0F2QixRQUFRLENBQUM0QixJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFFBQS9CO0FBQ0QsQ0FQRDs7QUFTQSxNQUFNUixVQUFVLEdBQUcsTUFBTTtFQUN2QkosVUFBVSxDQUFDdkIsU0FBWCxDQUFxQm9DLE1BQXJCLENBQTRCLG1CQUE1QjtFQUNBWixVQUFVLENBQUNhLG1CQUFYLENBQStCLE9BQS9CLEVBQXdDVixVQUF4QztFQUNBSyxNQUFNLENBQUNLLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDWixZQUF0QztFQUNBRixVQUFVLENBQUNjLG1CQUFYLENBQStCLE9BQS9CLEVBQXdDVCxjQUF4QztFQUNBdkIsUUFBUSxDQUFDNEIsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxRQUFwQixHQUErQixNQUEvQjtBQUNELENBTkQ7O0FBUUEsSUFBSVosVUFBVSxJQUFJQyxVQUFkLElBQTRCRixjQUFoQyxFQUFnRDtFQUM5Q0EsY0FBYyxDQUFDRCxnQkFBZixDQUFnQyxPQUFoQyxFQUF5Q1MsU0FBekM7QUFDRDs7Ozs7OztBQ25DRCxNQUFNUSxPQUFPLEdBQUdqQyxRQUFRLENBQUNLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBaEI7QUFDQSxNQUFNNkIsT0FBTyxHQUFHbEMsUUFBUSxDQUFDSyxhQUFULENBQXVCLFFBQXZCLENBQWhCO0FBRUEsSUFBSThCLHVCQUF1QixHQUFHLENBQTlCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEtBQWQ7O0FBRUEsTUFBTUMsUUFBUSxHQUFHQyxPQUFPLElBQUk7RUFDMUIsTUFBTUMsV0FBVyxHQUFHTixPQUFPLENBQUNPLFlBQTVCOztFQUNBLElBQUlGLE9BQU8sS0FBSyxDQUFoQixFQUFtQjtJQUNqQkwsT0FBTyxDQUFDSixLQUFSLENBQWNZLE9BQWQsR0FDRUYsV0FBVyxHQUFHRCxPQUFkLEdBQXdCLEdBQXhCLEdBQThCLENBQTlCLEdBQ0ksQ0FBQ0MsV0FBVyxHQUFHRCxPQUFkLEdBQXdCLEdBQXpCLElBQWdDQyxXQURwQyxHQUVJLENBSE47RUFJRCxDQUxELE1BS087SUFDTE4sT0FBTyxDQUFDSixLQUFSLENBQWNZLE9BQWQsR0FBd0IsQ0FBeEI7RUFDRDtBQUNGLENBVkQ7O0FBWUEsSUFBSVIsT0FBTyxJQUFJQyxPQUFmLEVBQXdCO0VBQ3RCUCxNQUFNLENBQUNYLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLE1BQU07SUFDdENtQix1QkFBdUIsR0FBR1IsTUFBTSxDQUFDVyxPQUFqQzs7SUFDQSxJQUFJLENBQUNGLE9BQUwsRUFBYztNQUNaVCxNQUFNLENBQUNlLHFCQUFQLENBQTZCLE1BQU07UUFDakNMLFFBQVEsQ0FBQ0YsdUJBQUQsQ0FBUjtRQUNBQyxPQUFPLEdBQUcsS0FBVjtNQUNELENBSEQ7TUFJQUEsT0FBTyxHQUFHLElBQVY7SUFDRDtFQUNGLENBVEQ7RUFXQUMsUUFBUSxDQUFDVixNQUFNLENBQUNXLE9BQVIsQ0FBUjtBQUNEOzs7Ozs7O0FDL0JELE1BQU1LLE1BQU0sR0FBR0MsWUFBQSxLQUF5QixZQUF4QztBQUVBLE1BQU1HLElBQUksR0FBRyxZQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHTCxNQUFNLEdBQUdJLElBQUgsR0FBVyx3QkFBdUJBLElBQUssRUFBekQ7O0FBRUEsU0FBU0UsUUFBVCxHQUFvQjtFQUNsQixNQUFNQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFaO0VBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlDLFFBQUosQ0FBY0MsSUFBZCxDQUFiO0VBRUFKLEdBQUcsQ0FBQ0ssSUFBSixDQUFVLE1BQVYsRUFBa0JQLEdBQWxCO0VBRUFFLEdBQUcsQ0FBQ00sSUFBSixDQUFVSixJQUFWOztFQUVBRixHQUFHLENBQUNPLE1BQUosR0FBYSxZQUFXO0lBQ3RCLElBQUlQLEdBQUcsQ0FBQ1EsTUFBSixJQUFjLEdBQWxCLEVBQXVCO01BQ3JCQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxVQUFTVixHQUFHLENBQUNRLE1BQU8sS0FBSVIsR0FBRyxDQUFDVyxVQUFXLEVBQXBEO01BQ0FQLElBQUksQ0FBQzNELFNBQUwsQ0FBZUMsR0FBZixDQUFtQix1QkFBbkI7SUFDRCxDQUhELE1BR087TUFDTCtELE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQlYsR0FBRyxDQUFDWSxRQUFTLEVBQTdDO01BQ0FSLElBQUksQ0FBQzNELFNBQUwsQ0FBZUMsR0FBZixDQUFtQix3QkFBbkI7SUFDRDtFQUNGLENBUkQ7QUFTRDs7QUFFRCxNQUFNMEQsSUFBSSxHQUFHdEQsUUFBUSxDQUFDSyxhQUFULENBQXVCLFVBQXZCLENBQWI7QUFDQSxNQUFNMEQsT0FBTyxHQUFHL0QsUUFBUSxDQUFDSyxhQUFULENBQXVCLFNBQXZCLENBQWhCOztBQUVBLElBQUlpRCxJQUFKLEVBQVU7RUFDUkEsSUFBSSxDQUFDdEMsZ0JBQUwsQ0FBdUIsUUFBdkIsRUFBaUMsVUFBV2dELEtBQVgsRUFBbUI7SUFDbERBLEtBQUssQ0FBQ3RDLGNBQU47SUFFQXFDLE9BQU8sQ0FBQ0UsUUFBUixHQUFtQixJQUFuQjtJQUVBaEIsUUFBUTtFQUNULENBTkQ7QUFPRDs7QUFFRCxNQUFNaUIsR0FBRyxHQUFHbEUsUUFBUSxDQUFDSyxhQUFULENBQXVCLFlBQXZCLENBQVo7O0FBQ0EsSUFBSTZELEdBQUosRUFBUztFQUNQQSxHQUFHLENBQUNsRCxnQkFBSixDQUFzQixPQUF0QixFQUErQixVQUFXZ0QsS0FBWCxFQUFtQjtJQUNoREEsS0FBSyxDQUFDdEMsY0FBTjtJQUVBNEIsSUFBSSxDQUFDM0QsU0FBTCxDQUFlb0MsTUFBZixDQUFzQix3QkFBdEI7SUFDQWdDLE9BQU8sQ0FBQ0UsUUFBUixHQUFtQixLQUFuQjtJQUNBWCxJQUFJLENBQUNhLEtBQUw7RUFDRCxDQU5EO0FBT0Q7Ozs7Ozs7QUM5Q0QsTUFBTUMsU0FBUyxHQUFHcEUsUUFBUSxDQUFDSyxhQUFULENBQXVCLG1CQUF2QixDQUFsQjtBQUNBLE1BQU1nRSxNQUFNLEdBQUdyRSxRQUFRLENBQUNLLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWY7QUFDQSxNQUFNaUUsWUFBWSxHQUFHdEUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBckI7O0FBRUEsTUFBTXNFLFNBQVMsR0FBRyxNQUFNO0VBQ3RCRixNQUFNLENBQUMxRSxTQUFQLENBQWlCb0MsTUFBakIsQ0FBd0Isd0JBQXhCO0VBQ0FxQyxTQUFTLENBQUNwRCxnQkFBVixDQUEyQixPQUEzQixFQUFvQ3dELFFBQXBDO0VBQ0EsQ0FBQyxHQUFHRixZQUFKLEVBQWtCN0UsT0FBbEIsQ0FBMEJnRixVQUFVLElBQUk7SUFDdENBLFVBQVUsQ0FBQ3pDLG1CQUFYLENBQStCLE9BQS9CLEVBQXdDdUMsU0FBeEM7RUFDRCxDQUZEO0FBR0QsQ0FORDs7QUFRQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtFQUNyQkgsTUFBTSxDQUFDMUUsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsd0JBQXJCO0VBQ0EsQ0FBQyxHQUFHMEUsWUFBSixFQUFrQjdFLE9BQWxCLENBQTBCZ0YsVUFBVSxJQUFJO0lBQ3RDQSxVQUFVLENBQUN6RCxnQkFBWCxDQUE0QixPQUE1QixFQUFxQ3VELFNBQXJDO0VBQ0QsQ0FGRDtFQUdBSCxTQUFTLENBQUNwQyxtQkFBVixDQUE4QixPQUE5QixFQUF1Q3dDLFFBQXZDO0FBQ0QsQ0FORDs7QUFRQSxJQUFJSixTQUFTLElBQUlDLE1BQWpCLEVBQXlCO0VBQ3ZCRCxTQUFTLENBQUNwRCxnQkFBVixDQUEyQixPQUEzQixFQUFvQ3dELFFBQXBDO0FBQ0Q7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUVBLE1BQU1HLFdBQVcsR0FBRzNFLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixTQUF2QixDQUFwQjs7QUFFQSxJQUFJc0UsV0FBSixFQUFpQjtFQUNmRCx1QkFBSyxDQUFDQyxXQUFELEVBQWM7SUFBRUMsSUFBSSxFQUFFO0VBQVIsQ0FBZCxDQUFMO0VBRUFELFdBQVcsQ0FBQzNELGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQVk7SUFDaEQsSUFBSTJELFdBQVcsQ0FBQ0UsUUFBWixDQUFxQkMsZUFBekIsRUFBMEM7TUFDeENILFdBQVcsQ0FBQ0ksaUJBQVosQ0FDRSxzREFERjtJQUdELENBSkQsTUFJTztNQUNMSixXQUFXLENBQUNJLGlCQUFaLENBQThCLEVBQTlCO0lBQ0Q7RUFDRixDQVJEO0FBU0Q7Ozs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQ0FDLGtDQUFBLENBQVcsQ0FBQ0MsMkJBQUQsQ0FBWDtBQUNBOztBQUNBLE1BQU1FLFNBQVMsR0FBRyxNQUFNO0VBQ3RCQyxNQUFNLENBQUNELFNBQVA7QUFDRCxDQUZEOztBQUlBLE1BQU1FLHNCQUFzQixHQUFHLE1BQU07RUFDbkMsTUFBTUMsVUFBVSxHQUFHdEYsUUFBUSxDQUFDQyxnQkFBVCxDQUNqQixnQ0FEaUIsQ0FBbkI7RUFJQXFGLFVBQVUsQ0FBQzdGLE9BQVgsQ0FBbUJ5RSxHQUFHLElBQUk7SUFDeEJBLEdBQUcsQ0FBQ2xELGdCQUFKLENBQXFCLE9BQXJCLEVBQThCbUUsU0FBOUI7RUFDRCxDQUZEO0FBR0QsQ0FSRDs7QUFVQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUosMEJBQUosQ0FBVyxTQUFYLEVBQXNCO0VBQ25DTyxRQUFRLEVBQUU7SUFDUkMsS0FBSyxFQUFFLEtBREM7SUFFUkMsb0JBQW9CLEVBQUU7RUFGZCxDQUR5QjtFQUtuQ0MsSUFBSSxFQUFFLElBTDZCO0VBTW5DQyxZQUFZLEVBQUUsQ0FOcUI7RUFPbkNDLFVBQVUsRUFBRSxJQVB1QjtFQVNuQ0MsV0FBVyxFQUFFO0lBQ1g7SUFDQSxLQUFLO01BQ0hGLFlBQVksRUFBRTtJQURYO0VBRk07QUFUc0IsQ0FBdEIsQ0FBZjtBQWlCQU4sc0JBQXNCO0FBRXRCRCxNQUFNLENBQUNVLEVBQVAsQ0FBVSwwQkFBVixFQUFzQ1Qsc0JBQXRDOzs7Ozs7Ozs7QUNwQ0E7QUFDQVUsK0JBQUE7QUFFQSxNQUFNRSxTQUFTLEdBQUdqRyxRQUFRLENBQUNLLGFBQVQsQ0FBdUIseUJBQXZCLENBQWxCO0FBQ0EsTUFBTTZGLGFBQWEsR0FBR2xHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIscUJBQTFCLENBQXRCOztBQUVBLE1BQU1rRyxhQUFhLEdBQUczRixHQUFHLElBQUk7RUFDM0JBLEdBQUcsQ0FBQ2tCLGNBQUo7RUFDQTFCLFFBQVEsQ0FDTEssYUFESCxDQUNpQkcsR0FBRyxDQUFDNEYsYUFBSixDQUFrQkMsWUFBbEIsQ0FBK0IsTUFBL0IsQ0FEakIsRUFFR0MsY0FGSCxDQUVrQjtJQUFFQyxRQUFRLEVBQUU7RUFBWixDQUZsQjtBQUdELENBTEQ7O0FBT0EsQ0FBQ04sU0FBRCxFQUFZLEdBQUdDLGFBQWYsRUFBOEJ6RyxPQUE5QixDQUFzQytHLEVBQUUsSUFBSTtFQUMxQyxJQUFJQSxFQUFKLEVBQVE7SUFDTkEsRUFBRSxDQUFDeEYsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkJtRixhQUE3QjtFQUNEO0FBQ0YsQ0FKRDs7QUNiQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQSxNQUFNTSxZQUFZLEdBQUd6RyxRQUFRLENBQUNLLGFBQVQsQ0FBdUIsMkJBQXZCLENBQXJCO0FBQ0EsTUFBTXFHLGNBQWMsR0FBRzFHLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixpQkFBdkIsQ0FBdkI7O0FBRUEsTUFBTXNHLE9BQU8sR0FBRyxNQUFNO0VBQ3BCRCxjQUFjLENBQUMvRyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QiwwQkFBN0I7RUFDQTZHLFlBQVksQ0FBQ3pFLG1CQUFiLENBQWlDLE9BQWpDLEVBQTBDMkUsT0FBMUM7QUFDRCxDQUhEOztBQUtBLElBQUlGLFlBQVksSUFBSUMsY0FBcEIsRUFBb0M7RUFDbENELFlBQVksQ0FBQ3pGLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDMkYsT0FBdkM7QUFDRDs7Ozs7O1VDVkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2NvdmVyLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2ltYXNrLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvc3dpcGVyLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvYW5jaG9ycy1saW5rcy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2luZGV4LmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvcGFydG5lcnMuanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VsZWN0b3JMaXN0ID0gW1xuICAnLmluZGljYXRvcnNfX2l0ZW0tLWNvc3QgLmluZGljYXRvcnNfX2xpbmVzJyxcbiAgJy5pbmRpY2F0b3JzX19pdGVtLS1zcGVlZCAuaW5kaWNhdG9yc19fbGluZXMnLFxuICAnLmltcHJvdmVfX2l0ZW0nLFxuICAnLnBhcnRuZXJzX19pdGVtJyxcbl07XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICBjb25zdCB2aXNpYmxlRWxlbWVudHMgPSBbLi4uZW50cmllc11cbiAgICAuZmlsdGVyKGVudHJ5ID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxuICAgIC5tYXAoZW50cnkgPT4gZW50cnkudGFyZ2V0KTtcbiAgdmlzaWJsZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICB9KTtcbn0pO1xuXG5zZWxlY3Rvckxpc3QuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgfSk7XG59KTtcbiIsImNvbnN0IGNhcmRCdG5FbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHNfX2J0bicpO1xuY29uc3QgZnVuY3Rpb25hbEJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1bmN0aW9uYWxfX2J0bicpO1xuY29uc3QgZnVuY3Rpb25hbENhcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdW5jdGlvbmFsX19hcGknKTtcblxuY29uc3QgdG9nZ2xlQ2FyZCA9IGV2dCA9PiB7XG4gIGNvbnN0IGNhcmRzSXRlbSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhcmRzX19pdGVtJyk7XG4gIGNvbnN0IGNhcmRCdG5FbCA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhcmRzX19idG4nKTtcblxuICBjYXJkc0l0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZHNfX2l0ZW0tLWFjdGl2ZScpO1xuICBjb25zdCBpc0NhcmRBY3RpdmUgPSBjYXJkc0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkc19faXRlbS0tYWN0aXZlJyk7XG4gIGNhcmRCdG5FbC50ZXh0Q29udGVudCA9IGlzQ2FyZEFjdGl2ZSA/ICfQodC60YDRi9GC0YwgLScgOiAn0J/QvtC00YDQvtCx0L3QtdC1ICsnO1xufTtcblxuWy4uLmNhcmRCdG5FbHNdLmZvckVhY2goY2FyZEJ0bkVsID0+IHtcbiAgY2FyZEJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ2FyZCk7XG59KTtcblxuaWYgKGZ1bmN0aW9uYWxCdG5FbCkge1xuICBmdW5jdGlvbmFsQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZnVuY3Rpb25hbENhcmRFbC5jbGFzc0xpc3QudG9nZ2xlKCdmdW5jdGlvbmFsX19hcGktLWFjdGl2ZScpO1xuICAgIGNvbnN0IGlzQ2FyZEFjdGl2ZSA9IGZ1bmN0aW9uYWxDYXJkRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgJ2Z1bmN0aW9uYWxfX2FwaS0tYWN0aXZlJyxcbiAgICApO1xuICAgIGZ1bmN0aW9uYWxCdG5FbC50ZXh0Q29udGVudCA9IGlzQ2FyZEFjdGl2ZSA/ICfQodC60YDRi9GC0YwgLScgOiAn0J/QvtC00YDQvtCx0L3QtdC1ICsnO1xuICB9KTtcbn1cbiIsImNvbnN0IGNvbnRhY3RzTGlua0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzLWxpbmsnKTtcbmNvbnN0IGNvbnRhY3RzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMnKTtcbmNvbnN0IGNsb3NlQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMtY2xvc2UnKTtcblxuY29uc3Qgb25Fc2NLZXlEb3duID0gZXZ0ID0+IHtcbiAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBvbk92ZXJsYXlDbGljayA9IGV2dCA9PiB7XG4gIGlmIChldnQudGFyZ2V0LmlkID09PSAnY29udGFjdHMnKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBvcGVuTW9kYWwgPSBldnQgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29udGFjdHNFbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy0tdmlzaWJsZScpO1xuICBjbG9zZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2NLZXlEb3duKTtcbiAgY29udGFjdHNFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uT3ZlcmxheUNsaWNrKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufTtcblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgY29udGFjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0cy0tdmlzaWJsZScpO1xuICBjbG9zZUJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2NLZXlEb3duKTtcbiAgY29udGFjdHNFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uT3ZlcmxheUNsaWNrKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbn07XG5cbmlmIChjb250YWN0c0VsICYmIGNsb3NlQnRuRWwgJiYgY29udGFjdHNMaW5rRWwpIHtcbiAgY29udGFjdHNMaW5rRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xufVxuIiwiY29uc3QgY292ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuY29uc3QgY2FyZHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xuXG5sZXQgbGFzdEtub3duU2Nyb2xsUG9zaXRpb24gPSAwO1xubGV0IHRpY2tpbmcgPSBmYWxzZTtcblxuY29uc3Qgb25TY3JvbGwgPSBzY3JvbGxZID0+IHtcbiAgY29uc3QgY292ZXJIZWlnaHQgPSBjb3ZlckVsLm9mZnNldEhlaWdodDtcbiAgaWYgKHNjcm9sbFkgIT09IDApIHtcbiAgICBjb3ZlckVsLnN0eWxlLm9wYWNpdHkgPVxuICAgICAgY292ZXJIZWlnaHQgLSBzY3JvbGxZIC0gMTA0ID4gMFxuICAgICAgICA/IChjb3ZlckhlaWdodCAtIHNjcm9sbFkgLSAxMDQpIC8gY292ZXJIZWlnaHRcbiAgICAgICAgOiAwO1xuICB9IGVsc2Uge1xuICAgIGNvdmVyRWwuc3R5bGUub3BhY2l0eSA9IDE7XG4gIH1cbn07XG5cbmlmIChjb3ZlckVsICYmIGNhcmRzRWwpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmICghdGlja2luZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIG9uU2Nyb2xsKGxhc3RLbm93blNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aWNraW5nID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIG9uU2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcbn1cbiIsImNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmNvbnN0IGxpbmsgPSAnL2FwaS9vcmRlcic7XG5jb25zdCB1cmwgPSBpc1Byb2QgPyBsaW5rIDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCR7bGlua31gO1xuXG5mdW5jdGlvbiBzZW5kRGF0YSgpIHtcbiAgY29uc3QgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoIGZvcm0gKTtcblxuICBYSFIub3BlbiggXCJQT1NUXCIsIHVybCApO1xuXG4gIFhIUi5zZW5kKCBkYXRhICk7XG5cbiAgWEhSLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChYSFIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsCAke1hIUi5zdGF0dXN9OiAke1hIUi5zdGF0dXNUZXh0fWApO1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjYWxsYmFja19fZm9ybS0tZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYNCT0L7RgtC+0LLQviwg0L/QvtC70YPRh9C40LvQuCAke1hIUi5yZXNwb25zZX1gKTtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2FsbGJhY2tfX2Zvcm0tLXN1Y2NlcycpO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtJyk7XG5jb25zdCBidG5TZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ0bicpO1xuXG5pZiAoZm9ybSkge1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoIFwic3VibWl0XCIsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGJ0blNlbmQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgc2VuZERhdGEoKTtcbiAgfSApO1xufVxuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLW9rJyk7XG5pZiAoYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnY2FsbGJhY2tfX2Zvcm0tLXN1Y2NlcycpO1xuICAgIGJ0blNlbmQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0gKTtcbn1cbiIsImNvbnN0IG1lbnVCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUtYnRuJyk7XG5jb25zdCBtZW51RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtbGlzdCcpO1xuY29uc3QgbWVudUl0ZW1zRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWl0ZW0nKTtcblxuY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xuICBtZW51RWwuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19uYXYtbGlzdC0tb3BlbicpO1xuICBtZW51QnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG4gIFsuLi5tZW51SXRlbXNFbHNdLmZvckVhY2gobWVudUl0ZW1FbCA9PiB7XG4gICAgbWVudUl0ZW1FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XG4gIH0pO1xufTtcblxuY29uc3Qgb3Blbk1lbnUgPSAoKSA9PiB7XG4gIG1lbnVFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX25hdi1saXN0LS1vcGVuJyk7XG4gIFsuLi5tZW51SXRlbXNFbHNdLmZvckVhY2gobWVudUl0ZW1FbCA9PiB7XG4gICAgbWVudUl0ZW1FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XG4gIH0pO1xuICBtZW51QnRuRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG59O1xuXG5pZiAobWVudUJ0bkVsICYmIG1lbnVFbCkge1xuICBtZW51QnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG59XG4iLCJpbXBvcnQgSU1hc2sgZnJvbSAnaW1hc2snO1xuXG5jb25zdCB0ZWxlcGhvbmVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWwtaWQnKTtcblxuaWYgKHRlbGVwaG9uZUVsKSB7XG4gIElNYXNrKHRlbGVwaG9uZUVsLCB7IG1hc2s6ICcrezd9ICgwMDApIDAwMC0wMC0wMCcgfSk7XG5cbiAgdGVsZXBob25lRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRlbGVwaG9uZUVsLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgdGVsZXBob25lRWwuc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAgICfQktCy0LXQtNC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0LIg0YTQvtGA0LzQsNGC0LU6ICs3ICgxMjMpIDQ1Ni03OC05MCcsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZWxlcGhvbmVFbC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBTd2lwZXIsIHsgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xuU3dpcGVyLnVzZShbQXV0b3BsYXldKTtcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5jb25zdCBzbGlkZU5leHQgPSAoKSA9PiB7XG4gIHN3aXBlci5zbGlkZU5leHQoKTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0J0bnMgPSAoKSA9PiB7XG4gIGNvbnN0IHByZXZCdG5FbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcucmV2aWV3c19fYXZhdGFyLXdyYXBwZXItLWxhc3QnLFxuICApO1xuXG4gIHByZXZCdG5FbHMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlTmV4dCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogMTUwMDAsXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICB9LFxuICBsb29wOiB0cnVlLFxuICBzcGFjZUJldHdlZW46IDQsXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG5cbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA3NjhweFxuICAgIDc2ODoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICB9LFxuICB9LFxufSk7XG5cbmFkZEV2ZW50TGlzdGVuZXJUb0J0bnMoKTtcblxuc3dpcGVyLm9uKCdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnLCBhZGRFdmVudExpc3RlbmVyVG9CdG5zKTtcbiIsImltcG9ydCBzbW9vdGhzY3JvbGwgZnJvbSAnc21vb3Roc2Nyb2xsLXBvbHlmaWxsJztcbnNtb290aHNjcm9sbC5wb2x5ZmlsbCgpO1xuXG5jb25zdCBjYXJkc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjY2FyZHMtYW5jaG9yXCJdJyk7XG5jb25zdCBjYWxsYmFja0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmPVwiI2NhbGxiYWNrXCJdJyk7XG5cbmNvbnN0IG9uQW5jaG9yQ2xpY2sgPSBldnQgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihldnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSlcbiAgICAuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG59O1xuXG5bY2FyZHNMaW5rLCAuLi5jYWxsYmFja0xpbmtzXS5mb3JFYWNoKGVsID0+IHtcbiAgaWYgKGVsKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkFuY2hvckNsaWNrKTtcbiAgfVxufSk7XG4iLCIvLyDQrdGC0L4gLSDQstCw0YjQsCDRgtC+0YfQutCwINCy0YXQvtC00LAg0LTQu9GPINGB0LrRgNC40L/RgtC+0LIg0YHRgtGA0LDQvdC40YbRiy4g0JjQvNC/0L7RgNGC0LjRgNGD0LnRgtC1INGB0Y7QtNCwINC90YPQttC90YvQtSDQstCw0Lwg0YTQsNC50LvRiy5cblxuaW1wb3J0ICcuL2ltYXNrJztcbmltcG9ydCAnLi9mb3JtJztcbmltcG9ydCAnLi9jb250YWN0cyc7XG5pbXBvcnQgJy4vaGVhZGVyJztcbmltcG9ydCAnLi9jYXJkcyc7XG5pbXBvcnQgJy4vYW5pbWF0aW9uJztcbmltcG9ydCAnLi9zd2lwZXInO1xuaW1wb3J0ICcuL3BhcnRuZXJzJztcbmltcG9ydCAnLi9jb3Zlcic7XG5pbXBvcnQgJy4vYW5jaG9ycy1saW5rcyc7XG4iLCJjb25zdCBzaG93QWxsQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnNfX2l0ZW0tLXNob3ctYWxsJyk7XG5jb25zdCBwYXJ0bmVyc0xpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVyc19fbGlzdCcpO1xuXG5jb25zdCBzaG93QWxsID0gKCkgPT4ge1xuICBwYXJ0bmVyc0xpc3RFbC5jbGFzc0xpc3QuYWRkKCdwYXJ0bmVyc19fbGlzdC0tc2hvdy1hbGwnKTtcbiAgc2hvd0FsbEJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbCk7XG59O1xuXG5pZiAoc2hvd0FsbEJ0bkVsICYmIHBhcnRuZXJzTGlzdEVsKSB7XG4gIHNob3dBbGxCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGwpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0Mjk2OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2JhbHQ0Ml9idXNpbmVzc19jYXJkXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvYmFsdDQyX2J1c2luZXNzX2NhcmRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFs2NF0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDc0MikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJzZWxlY3Rvckxpc3QiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInZpc2libGVFbGVtZW50cyIsImZpbHRlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJtYXAiLCJ0YXJnZXQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvYnNlcnZlIiwiY2FyZEJ0bkVscyIsImZ1bmN0aW9uYWxCdG5FbCIsInF1ZXJ5U2VsZWN0b3IiLCJmdW5jdGlvbmFsQ2FyZEVsIiwidG9nZ2xlQ2FyZCIsImV2dCIsImNhcmRzSXRlbSIsImNsb3Nlc3QiLCJjYXJkQnRuRWwiLCJ0b2dnbGUiLCJpc0NhcmRBY3RpdmUiLCJjb250YWlucyIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhY3RzTGlua0VsIiwiY29udGFjdHNFbCIsImNsb3NlQnRuRWwiLCJvbkVzY0tleURvd24iLCJrZXkiLCJjbG9zZU1vZGFsIiwib25PdmVybGF5Q2xpY2siLCJpZCIsIm9wZW5Nb2RhbCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY292ZXJFbCIsImNhcmRzRWwiLCJsYXN0S25vd25TY3JvbGxQb3NpdGlvbiIsInRpY2tpbmciLCJvblNjcm9sbCIsInNjcm9sbFkiLCJjb3ZlckhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9wYWNpdHkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpc1Byb2QiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJsaW5rIiwidXJsIiwic2VuZERhdGEiLCJYSFIiLCJYTUxIdHRwUmVxdWVzdCIsImRhdGEiLCJGb3JtRGF0YSIsImZvcm0iLCJvcGVuIiwic2VuZCIsIm9ubG9hZCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNUZXh0IiwicmVzcG9uc2UiLCJidG5TZW5kIiwiZXZlbnQiLCJkaXNhYmxlZCIsImJ0biIsInJlc2V0IiwibWVudUJ0bkVsIiwibWVudUVsIiwibWVudUl0ZW1zRWxzIiwiY2xvc2VNZW51Iiwib3Blbk1lbnUiLCJtZW51SXRlbUVsIiwiSU1hc2siLCJ0ZWxlcGhvbmVFbCIsIm1hc2siLCJ2YWxpZGl0eSIsInBhdHRlcm5NaXNtYXRjaCIsInNldEN1c3RvbVZhbGlkaXR5IiwiU3dpcGVyIiwiQXV0b3BsYXkiLCJ1c2UiLCJzbGlkZU5leHQiLCJzd2lwZXIiLCJhZGRFdmVudExpc3RlbmVyVG9CdG5zIiwicHJldkJ0bkVscyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImxvb3AiLCJzcGFjZUJldHdlZW4iLCJhdXRvSGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJvbiIsInNtb290aHNjcm9sbCIsInBvbHlmaWxsIiwiY2FyZHNMaW5rIiwiY2FsbGJhY2tMaW5rcyIsIm9uQW5jaG9yQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImVsIiwic2hvd0FsbEJ0bkVsIiwicGFydG5lcnNMaXN0RWwiLCJzaG93QWxsIl0sInNvdXJjZVJvb3QiOiIifQ==