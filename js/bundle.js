/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
form.addEventListener("submit", function (event) {
  event.preventDefault();
  sendData();
});
const btn = document.querySelector('.js-btn-ok');
btn.addEventListener("click", function (event) {
  event.preventDefault();
  form.classList.remove('callback__form--succes');
  form.reset();
});

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

/***/ 12:
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [704], () => (__webpack_require__(12)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2NvbnRhY3RzLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2ltYXNrLmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvLi9zb3VyY2UvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RzTGlua0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzLWxpbmsnKTtcbmNvbnN0IGNvbnRhY3RzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMnKTtcbmNvbnN0IGNsb3NlQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMtY2xvc2UnKTtcblxuY29uc3Qgb25Fc2NLZXlEb3duID0gZXZ0ID0+IHtcbiAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBvbk92ZXJsYXlDbGljayA9IGV2dCA9PiB7XG4gIGlmIChldnQudGFyZ2V0LmlkID09PSAnY29udGFjdHMnKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBvcGVuTW9kYWwgPSBldnQgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29udGFjdHNFbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy0tdmlzaWJsZScpO1xuICBjbG9zZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2NLZXlEb3duKTtcbiAgY29udGFjdHNFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uT3ZlcmxheUNsaWNrKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufTtcblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgY29udGFjdHNFbC5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0cy0tdmlzaWJsZScpO1xuICBjbG9zZUJ0bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Fc2NLZXlEb3duKTtcbiAgY29udGFjdHNFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uT3ZlcmxheUNsaWNrKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbn07XG5cbmlmIChjb250YWN0c0VsICYmIGNsb3NlQnRuRWwgJiYgY29udGFjdHNMaW5rRWwpIHtcbiAgY29udGFjdHNMaW5rRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xufVxuIiwiY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuY29uc3QgbGluayA9ICcvYXBpL29yZGVyJztcbmNvbnN0IHVybCA9IGlzUHJvZCA/IGxpbmsgOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwJHtsaW5rfWA7XG5cbmZ1bmN0aW9uIHNlbmREYXRhKCkge1xuICBjb25zdCBYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSggZm9ybSApO1xuXG4gIFhIUi5vcGVuKCBcIlBPU1RcIiwgdXJsICk7XG5cbiAgWEhSLnNlbmQoIGRhdGEgKTtcblxuICBYSFIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKFhIUi5zdGF0dXMgIT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhg0J7RiNC40LHQutCwICR7WEhSLnN0YXR1c306ICR7WEhSLnN0YXR1c1RleHR9YCk7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NhbGxiYWNrX19mb3JtLS1lcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhg0JPQvtGC0L7QstC+LCDQv9C+0LvRg9GH0LjQu9C4ICR7WEhSLnJlc3BvbnNlfWApO1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjYWxsYmFja19fZm9ybS0tc3VjY2VzJyk7XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZvcm0nKTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCBcInN1Ym1pdFwiLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHNlbmREYXRhKCk7XG59ICk7XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tb2snKTtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdjYWxsYmFja19fZm9ybS0tc3VjY2VzJyk7XG4gIGZvcm0ucmVzZXQoKTtcbn0gKTtcbiIsImNvbnN0IG1lbnVCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUtYnRuJyk7XG5jb25zdCBtZW51RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtbGlzdCcpO1xuY29uc3QgbWVudUl0ZW1zRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2LWl0ZW0nKTtcblxuY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xuICBtZW51RWwuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19uYXYtbGlzdC0tb3BlbicpO1xuICBtZW51QnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG4gIFsuLi5tZW51SXRlbXNFbHNdLmZvckVhY2gobWVudUl0ZW1FbCA9PiB7XG4gICAgbWVudUl0ZW1FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XG4gIH0pO1xufTtcblxuY29uc3Qgb3Blbk1lbnUgPSAoKSA9PiB7XG4gIG1lbnVFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX25hdi1saXN0LS1vcGVuJyk7XG4gIFsuLi5tZW51SXRlbXNFbHNdLmZvckVhY2gobWVudUl0ZW1FbCA9PiB7XG4gICAgbWVudUl0ZW1FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XG4gIH0pO1xuICBtZW51QnRuRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG59O1xuXG5pZiAobWVudUJ0bkVsICYmIG1lbnVFbCkge1xuICBtZW51QnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XG59XG4iLCJpbXBvcnQgSU1hc2sgZnJvbSAnaW1hc2snO1xuXG5jb25zdCB0ZWxlcGhvbmVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWwtaWQnKTtcblxuaWYgKHRlbGVwaG9uZUVsKSB7XG4gIElNYXNrKHRlbGVwaG9uZUVsLCB7IG1hc2s6ICcrezd9ICgwMDApIDAwMC0wMC0wMCcgfSk7XG5cbiAgdGVsZXBob25lRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRlbGVwaG9uZUVsLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgdGVsZXBob25lRWwuc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAgICfQktCy0LXQtNC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0LIg0YTQvtGA0LzQsNGC0LU6ICs3ICgxMjMpIDQ1Ni03OC05MCcsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZWxlcGhvbmVFbC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfVxuICB9KTtcbn1cbiIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vaW1hc2snO1xuaW1wb3J0ICcuL2Zvcm0nO1xuaW1wb3J0ICcuL2NvbnRhY3RzJztcbmltcG9ydCAnLi9oZWFkZXInO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDI5NjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY29iYWx0NDJfYnVzaW5lc3NfY2FyZFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2JhbHQ0Ml9idXNpbmVzc19jYXJkXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbNzA0XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oMTIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiY29udGFjdHNMaW5rRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWN0c0VsIiwiY2xvc2VCdG5FbCIsIm9uRXNjS2V5RG93biIsImV2dCIsImtleSIsImNsb3NlTW9kYWwiLCJvbk92ZXJsYXlDbGljayIsInRhcmdldCIsImlkIiwib3Blbk1vZGFsIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNQcm9kIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwibGluayIsInVybCIsInNlbmREYXRhIiwiWEhSIiwiWE1MSHR0cFJlcXVlc3QiLCJkYXRhIiwiRm9ybURhdGEiLCJmb3JtIiwib3BlbiIsInNlbmQiLCJvbmxvYWQiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlIiwiZXZlbnQiLCJidG4iLCJyZXNldCIsIm1lbnVCdG5FbCIsIm1lbnVFbCIsIm1lbnVJdGVtc0VscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZU1lbnUiLCJvcGVuTWVudSIsImZvckVhY2giLCJtZW51SXRlbUVsIiwiSU1hc2siLCJ0ZWxlcGhvbmVFbCIsIm1hc2siLCJ2YWxpZGl0eSIsInBhdHRlcm5NaXNtYXRjaCIsInNldEN1c3RvbVZhbGlkaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==