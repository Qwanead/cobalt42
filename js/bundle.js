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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC8uL3NvdXJjZS9qcy9pbWFzay5qcyIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkLy4vc291cmNlL2pzL2luZGV4LmpzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29iYWx0NDItYnVzaW5lc3MtY2FyZC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvYmFsdDQyLWJ1c2luZXNzLWNhcmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2JhbHQ0Mi1idXNpbmVzcy1jYXJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0c0xpbmtFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0cy1saW5rJyk7XG5jb25zdCBjb250YWN0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzJyk7XG5jb25zdCBjbG9zZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzLWNsb3NlJyk7XG5cbmNvbnN0IG9uRXNjS2V5RG93biA9IGV2dCA9PiB7XG4gIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxufTtcblxuY29uc3Qgb25PdmVybGF5Q2xpY2sgPSBldnQgPT4ge1xuICBpZiAoZXZ0LnRhcmdldC5pZCA9PT0gJ2NvbnRhY3RzJykge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxufTtcblxuY29uc3Qgb3Blbk1vZGFsID0gZXZ0ID0+IHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnRhY3RzRWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMtLXZpc2libGUnKTtcbiAgY2xvc2VCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRXNjS2V5RG93bik7XG4gIGNvbnRhY3RzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk92ZXJsYXlDbGljayk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnRhY3RzRWwuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFjdHMtLXZpc2libGUnKTtcbiAgY2xvc2VCdG5FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRXNjS2V5RG93bik7XG4gIGNvbnRhY3RzRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk92ZXJsYXlDbGljayk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG59O1xuXG5pZiAoY29udGFjdHNFbCAmJiBjbG9zZUJ0bkVsICYmIGNvbnRhY3RzTGlua0VsKSB7XG4gIGNvbnRhY3RzTGlua0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKTtcbn1cbiIsImNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmNvbnN0IGxpbmsgPSAnL2FwaS9vcmRlcic7XG5jb25zdCB1cmwgPSBpc1Byb2QgPyBsaW5rIDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCR7bGlua31gO1xuXG5mdW5jdGlvbiBzZW5kRGF0YSgpIHtcbiAgY29uc3QgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoIGZvcm0gKTtcblxuICBYSFIub3BlbiggXCJQT1NUXCIsIHVybCApO1xuXG4gIFhIUi5zZW5kKCBkYXRhICk7XG5cbiAgWEhSLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChYSFIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsCAke1hIUi5zdGF0dXN9OiAke1hIUi5zdGF0dXNUZXh0fWApO1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjYWxsYmFja19fZm9ybS0tZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYNCT0L7RgtC+0LLQviwg0L/QvtC70YPRh9C40LvQuCAke1hIUi5yZXNwb25zZX1gKTtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnY2FsbGJhY2tfX2Zvcm0tLXN1Y2NlcycpO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lciggXCJzdWJtaXRcIiwgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBzZW5kRGF0YSgpO1xufSApO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLW9rJyk7XG5idG4uYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnY2FsbGJhY2tfX2Zvcm0tLXN1Y2NlcycpO1xuICBmb3JtLnJlc2V0KCk7XG59ICk7XG4iLCJpbXBvcnQgSU1hc2sgZnJvbSAnaW1hc2snO1xuXG5jb25zdCB0ZWxlcGhvbmVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWwtaWQnKTtcblxuaWYgKHRlbGVwaG9uZUVsKSB7XG4gIElNYXNrKHRlbGVwaG9uZUVsLCB7IG1hc2s6ICcrezd9ICgwMDApIDAwMC0wMC0wMCcgfSk7XG5cbiAgdGVsZXBob25lRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRlbGVwaG9uZUVsLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgICAgdGVsZXBob25lRWwuc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAgICfQktCy0LXQtNC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0LIg0YTQvtGA0LzQsNGC0LU6ICs3ICgxMjMpIDQ1Ni03OC05MCcsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZWxlcGhvbmVFbC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfVxuICB9KTtcbn1cbiIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vaW1hc2snO1xuaW1wb3J0ICcuL2Zvcm0nO1xuaW1wb3J0ICcuL2NvbnRhY3RzJztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQyOTY6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvYmFsdDQyX2J1c2luZXNzX2NhcmRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY29iYWx0NDJfYnVzaW5lc3NfY2FyZFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzcwNF0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImNvbnRhY3RzTGlua0VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGFjdHNFbCIsImNsb3NlQnRuRWwiLCJvbkVzY0tleURvd24iLCJldnQiLCJrZXkiLCJjbG9zZU1vZGFsIiwib25PdmVybGF5Q2xpY2siLCJ0YXJnZXQiLCJpZCIsIm9wZW5Nb2RhbCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzUHJvZCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImxpbmsiLCJ1cmwiLCJzZW5kRGF0YSIsIlhIUiIsIlhNTEh0dHBSZXF1ZXN0IiwiZGF0YSIsIkZvcm1EYXRhIiwiZm9ybSIsIm9wZW4iLCJzZW5kIiwib25sb2FkIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJyZXNwb25zZSIsImV2ZW50IiwiYnRuIiwicmVzZXQiLCJJTWFzayIsInRlbGVwaG9uZUVsIiwibWFzayIsInZhbGlkaXR5IiwicGF0dGVybk1pc21hdGNoIiwic2V0Q3VzdG9tVmFsaWRpdHkiXSwic291cmNlUm9vdCI6IiJ9