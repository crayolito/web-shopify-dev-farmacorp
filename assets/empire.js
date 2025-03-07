/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		35: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"0":"vendors-DynamicBlogPosts-DynamicFeaturedCollection-DynamicProduct-DynamicTwitterFeed-StaticCollectio-0ac4f36c","1":"DynamicFeaturedCollection-DynamicProduct-StaticCollection-StaticProduct-StaticProductRecommendations-724f8050","2":"vendors-DynamicFeaturedCollection-DynamicProduct-StaticCollection-StaticProduct-StaticProductRecomme-e656a3da","3":"DynamicFeaturedCollection-StaticCollection-StaticProductRecommendations-StaticSearch","4":"DynamicSearch-StaticHeader","5":"Account","6":"Contact","7":"ContainSwatchTooltips","8":"DynamicBlogPosts","9":"DynamicFeaturedCollection","10":"DynamicMenuList","11":"DynamicNewsletter","12":"DynamicProduct","13":"DynamicPromoBlocks","14":"DynamicRichText","15":"DynamicSearch","16":"DynamicTwitterFeed","17":"DynamicVideo","18":"GiftCard","19":"PXSMap","20":"Page","21":"StaticAnnouncement","22":"StaticArticle","23":"StaticBlog","24":"StaticCart","25":"StaticCollection","26":"StaticFooter","27":"StaticHeader","28":"StaticHighlightsBanners","29":"StaticPassword","30":"StaticProduct","31":"StaticProductRecommendations","32":"StaticRecentlyViewed","33":"StaticSearch","34":"StaticSlideshow","36":"vendors-StaticCart","37":"vendors-StaticHeader"}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 	  var bundles = { '0': '//farmacorp.com/cdn/shop/t/99/assets/vendors-DynamicBlogPosts-DynamicFeaturedCollection-DynamicProduct-DynamicTwitterFeed-StaticCollectio-0ac4f36c.bundle.js?v=135925101434741177001735308395','1': '//farmacorp.com/cdn/shop/t/99/assets/DynamicFeaturedCollection-DynamicProduct-StaticCollection-StaticProduct-StaticProductRecommendations-724f8050.bundle.js?v=26195044379219976811735308328','2': '//farmacorp.com/cdn/shop/t/99/assets/vendors-DynamicFeaturedCollection-DynamicProduct-StaticCollection-StaticProduct-StaticProductRecomme-e656a3da.bundle.js?v=62697829851098309831735308395','3': '//farmacorp.com/cdn/shop/t/99/assets/DynamicFeaturedCollection-StaticCollection-StaticProductRecommendations-StaticSearch.bundle.js?v=178852716841362363891735308329','4': '//farmacorp.com/cdn/shop/t/99/assets/DynamicSearch-StaticHeader.bundle.js?v=65373203983723216791735308338','5': '//farmacorp.com/cdn/shop/t/99/assets/Account.bundle.js?v=60163333149307938431735308309','6': '//farmacorp.com/cdn/shop/t/99/assets/Contact.bundle.js?v=33781904072742584861735308324','7': '//farmacorp.com/cdn/shop/t/99/assets/ContainSwatchTooltips.bundle.js?v=123228310156081421901735308325','8': '//farmacorp.com/cdn/shop/t/99/assets/DynamicBlogPosts.bundle.js?v=42541741794882772941735308327','9': '//farmacorp.com/cdn/shop/t/99/assets/DynamicFeaturedCollection.bundle.js?v=5815672758233778431735308330','10': '//farmacorp.com/cdn/shop/t/99/assets/DynamicMenuList.bundle.js?v=78684469256105081901735308331','11': '//farmacorp.com/cdn/shop/t/99/assets/DynamicNewsletter.bundle.js?v=111710430703432868271735308334','12': '//farmacorp.com/cdn/shop/t/99/assets/DynamicProduct.bundle.js?v=57468328900476588361735308335','13': '//farmacorp.com/cdn/shop/t/99/assets/DynamicPromoBlocks.bundle.js?v=66039786716367863961735308336','14': '//farmacorp.com/cdn/shop/t/99/assets/DynamicRichText.bundle.js?v=87200603749892685421735308337','15': '//farmacorp.com/cdn/shop/t/99/assets/DynamicSearch.bundle.js?v=6287415663957000321735308339','16': '//farmacorp.com/cdn/shop/t/99/assets/DynamicTwitterFeed.bundle.js?v=48175843835142496261735308340','17': '//farmacorp.com/cdn/shop/t/99/assets/DynamicVideo.bundle.js?v=169098583132147208871735308341','18': '//farmacorp.com/cdn/shop/t/99/assets/GiftCard.bundle.js?v=68307675402537102901735308346','19': '//farmacorp.com/cdn/shop/t/99/assets/PXSMap.bundle.js?v=141067799097905789651735308369','20': '//farmacorp.com/cdn/shop/t/99/assets/Page.bundle.js?v=111065031637970312641735308361','21': '//farmacorp.com/cdn/shop/t/99/assets/StaticAnnouncement.bundle.js?v=82148461033328864151735308375','22': '//farmacorp.com/cdn/shop/t/99/assets/StaticArticle.bundle.js?v=47852024516500311751735308376','23': '//farmacorp.com/cdn/shop/t/99/assets/StaticBlog.bundle.js?v=7615720582833624231735308377','24': '//farmacorp.com/cdn/shop/t/99/assets/StaticCart.bundle.js?v=130272310208113749021735308378','25': '//farmacorp.com/cdn/shop/t/99/assets/StaticCollection.bundle.js?v=109596908451882731921735308379','26': '//farmacorp.com/cdn/shop/t/99/assets/StaticFooter.bundle.js?v=128812069588102052071735308380','27': '//farmacorp.com/cdn/shop/t/99/assets/StaticHeader.bundle.js?v=114818546327840350641735308380','28': '//farmacorp.com/cdn/shop/t/99/assets/StaticHighlightsBanners.bundle.js?v=37399437777709611081735308381','29': '//farmacorp.com/cdn/shop/t/99/assets/StaticPassword.bundle.js?v=177766761362169859971735308382','30': '//farmacorp.com/cdn/shop/t/99/assets/StaticProduct.bundle.js?v=144073390982531162731735308383','31': '//farmacorp.com/cdn/shop/t/99/assets/StaticProductRecommendations.bundle.js?v=124397160705792786421735308384','32': '//farmacorp.com/cdn/shop/t/99/assets/StaticRecentlyViewed.bundle.js?v=68390520552721108311735308385','33': '//farmacorp.com/cdn/shop/t/99/assets/StaticSearch.bundle.js?v=170046858337623251201735308385','34': '//farmacorp.com/cdn/shop/t/99/assets/StaticSlideshow.bundle.js?v=148154148482059293721735308386','36': '//farmacorp.com/cdn/shop/t/99/assets/vendors-StaticCart.bundle.js?v=40975808107103816541735308397','37': '//farmacorp.com/cdn/shop/t/99/assets/vendors-StaticHeader.bundle.js?v=120940014509746949791735308398' };
/******/ 	  return bundles[chunkId];
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([5,38]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./source/scripts/globals/jquery.js
// jQuery plugins expect to find a global `jQuery` object, so we
// need to attach it to the window.
//
// This is in its own file because we have to attach it before any
// other imports happen, but with ES6 modules, all `import`s have
// to be at the top.

window.jQuery = jquery_default.a;
window.$ = jquery_default.a;
// EXTERNAL MODULE: ./node_modules/jquery-trend/jquery.trend.js
var jquery_trend = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/jquery-revealer/jquery.revealer.js
var jquery_revealer = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/scriptjs/dist/script.js
var script = __webpack_require__(1);
var script_default = /*#__PURE__*/__webpack_require__.n(script);

// EXTERNAL MODULE: ./node_modules/rimg-shopify/dist/index.es.js + 1 modules
var index_es = __webpack_require__(2);

// CONCATENATED MODULE: ./source/scripts/Sections.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Allows a callback to be run once, when a target intersects the viewport.
 * @constructor
 * @param {Object} [options] options with which to construct the IntersectionObserver
 * @param {string} [options.rootMargin='30%'] A string which specifies a set of offsets to add to
 *                                          the root's bounding_box when calculating intersections.
 * @param {number} [options.threshold=0] Ratio of intersection required to trigger callback
 */
var LazyLoader = /*#__PURE__*/function () {
  function LazyLoader(options) {
    _classCallCheck(this, LazyLoader);

    var defaultOptions = {
      rootMargin: '30%',
      threshold: 0
    };
    this.callbacks = new WeakMap();
    this._observerCallback = this._observerCallback.bind(this);
    this.observer = new IntersectionObserver(this._observerCallback, _objectSpread({}, defaultOptions, {}, options));
  }
  /**
   * Add target and callback. Callback is only run once.
   * @add
   * @param {HTMLElement} target Target element
   * @param {function} callback Callback to run when target begins intersecting
   */


  _createClass(LazyLoader, [{
    key: "add",
    value: function add(target, callback) {
      this.callbacks.set(target, callback);
      this.observer.observe(target);
    }
    /**
     * Remove target. Associated callback is also removed.
     * @remove
     * @param {HTMLElement} target Target element
     */

  }, {
    key: "remove",
    value: function remove(target) {
      this.observer.unobserve(target);
      this.callbacks.delete(target);
    }
    /**
     * Disconnects IntersectionObserver if active
     * @unload
     */

  }, {
    key: "unload",
    value: function unload() {
      this.observer.disconnect();
    }
    /**
     * Runs associated callbacks for each entry, then removes that entry and callback
     * @_observerCallback
     * @param {IntersectionObserverEntry[]} entries Entries to check
     * @param {InterserctionObserver} observer IntersectionObserver instance
     */

  }, {
    key: "_observerCallback",
    value: function _observerCallback(entries, observer) {
      var _this = this;

      entries.forEach(function (_ref) {
        var isIntersecting = _ref.isIntersecting,
            target = _ref.target;

        // do nothing unless target moved into state of intersection
        if (isIntersecting === true) {
          // make sure we stop observing before running the callback, so we don't
          // somehow run the callback twice if element intersects twice quickly
          observer.unobserve(target);

          var callback = _this.callbacks.get(target);

          if (typeof callback === 'function') {
            callback();
          }

          _this.callbacks.delete(target);
        }
      });
    }
  }]);

  return LazyLoader;
}();

var Sections = /*#__PURE__*/function () {
  function Sections() {
    _classCallCheck(this, Sections);

    this.handlers = {};
    this.instances = {};
    this.options = {};
    this.imports = {};
    this.lazyLoader = null;
    this._onSectionEvent = this._onSectionEvent.bind(this);
    document.addEventListener('shopify:section:load', this._onSectionEvent);
    document.addEventListener('shopify:section:unload', this._onSectionEvent);
    document.addEventListener('shopify:section:select', this._onSectionEvent);
    document.addEventListener('shopify:section:deselect', this._onSectionEvent);
    document.addEventListener('shopify:block:select', this._onSectionEvent);
    document.addEventListener('shopify:block:deselect', this._onSectionEvent);
  }
  /**
   * Stop listening for section events, and unbind all handlers.
   */


  _createClass(Sections, [{
    key: "unbind",
    value: function unbind() {
      document.removeEventListener('shopify:section:load', this._onSectionEvent);
      document.removeEventListener('shopify:section:unload', this._onSectionEvent);
      document.removeEventListener('shopify:section:select', this._onSectionEvent);
      document.removeEventListener('shopify:section:deselect', this._onSectionEvent);
      document.removeEventListener('shopify:block:select', this._onSectionEvent);
      document.removeEventListener('shopify:block:deselect', this._onSectionEvent); // Unload all instances

      for (var i = 0; i < this.instances.length; i++) {
        this._triggerInstanceEvent(this.instances[i], 'onSectionUnload');
      }

      this.handlers = {};
      this.options = {};
      this.lazyLoader.unload();
      this.lazyLoader = null;
      this.instances = {};
    }
    /**
     * Register a section handler.
     *
     * @param {string} type
     *        The section type to handle. The handler will be called for all
     *        sections with this type.
     *
     * @param {function} handler
     *        The handler function is passed information about a specific section
     *        instance. The handler is expected to return an object that will be
     *        associated with the section instance.
     *
     *        Section handlers are passed an object with the following parameters:
     *          {string} id
     *          An ID that maps to a specific section instance. Typically the
     *          section's filename for static sections, or a generated ID for
     *          dynamic sections.
     *
     *          {string} type
     *          The section type, as supplied when registered.
     *
     *          {Element} el
     *          The root DOM element for the section instance.
     *
     *          {Object} data
     *          Data loaded from the section script element. Defaults to an
     *          empty object.
     *
     *          {Function} postMessage
     *          A function that can be called to pass messages between sections.
     *          The function should be called with a message "name", and
     *          optionally some data.
     *
     * @param {object} options
     *
     * @param {boolean} options.lazy
     *     If true, sections will only be initialized after they intersect the viewport + 30% margin
     */

  }, {
    key: "register",
    value: function register(type, handler) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this.handlers[type]) {
        console.warn("Sections: section handler already exists of type '".concat(type, "'."));
      } // Store the section handler


      this.handlers[type] = handler; // Store options

      this.options[type] = options; // Init sections for this type

      this._initSections(type);
    }
    /**
     * Initialize sections already on the page.
     */

  }, {
    key: "_initSections",
    value: function _initSections(type) {
      var _this2 = this;

      // Fetch all existing sections of our type on the page
      var dataEls = document.querySelectorAll("[data-section-type=\"".concat(type, "\"]"));
      if (!dataEls) return; // Create an instance for each section

      var _loop = function _loop(i) {
        var dataEl = dataEls[i];
        var el = dataEl.parentNode; // Get instance ID

        var idEl = el.querySelector('[data-section-id]');

        if (!idEl) {
          console.warn("Sections: unable to find section id for '".concat(type, "'."), el);
          return "continue"; // eslint-disable-line no-continue
        }

        var sectionId = idEl.getAttribute('data-section-id');

        if (!sectionId) {
          console.warn("Sections: unable to find section id for '".concat(type, "'."), el);
          return "continue"; // eslint-disable-line no-continue
        }

        if (_this2.options[type] && _this2.options[type].lazy) {
          if (_this2.lazyLoader === null) {
            _this2.lazyLoader = new LazyLoader();
          }

          _this2.lazyLoader.add(el, function () {
            return _this2._createInstance(sectionId, el);
          });
        } else {
          _this2._createInstance(sectionId, el);
        }
      };

      for (var i = 0; i < dataEls.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }
    }
  }, {
    key: "_onSectionEvent",
    value: function _onSectionEvent(event) {
      var el = event.target;
      var _event$detail = event.detail,
          sectionId = _event$detail.sectionId,
          blockId = _event$detail.blockId;
      var instance = this.instances[sectionId];

      switch (event.type) {
        case 'shopify:section:load':
          this._createInstance(sectionId, el);

          break;

        case 'shopify:section:unload':
          this._triggerInstanceEvent(instance, 'onSectionUnload', {
            el: el,
            id: sectionId
          });

          if (this.lazyLoader) {
            this.lazyLoader.remove(el);
          }

          delete this.instances[sectionId];
          break;

        case 'shopify:section:select':
          this._triggerInstanceEvent(instance, 'onSectionSelect', {
            el: el,
            id: sectionId
          });

          break;

        case 'shopify:section:deselect':
          this._triggerInstanceEvent(instance, 'onSectionDeselect', {
            el: el,
            id: sectionId
          });

          break;

        case 'shopify:block:select':
          this._triggerInstanceEvent(instance, 'onSectionBlockSelect', {
            el: el,
            id: blockId
          });

          break;

        case 'shopify:block:deselect':
          this._triggerInstanceEvent(instance, 'onSectionBlockDeselect', {
            el: el,
            id: blockId
          });

          break;

        default:
          break;
      }
    }
  }, {
    key: "_triggerInstanceEvent",
    value: function _triggerInstanceEvent(instance, eventName) {
      if (instance && instance[eventName]) {
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        instance[eventName].apply(instance, args);
      }
    }
  }, {
    key: "_postMessage",
    value: function _postMessage(name, data) {
      var _this3 = this;

      Object.keys(this.instances).forEach(function (id) {
        _this3._triggerInstanceEvent(_this3.instances[id], 'onSectionMessage', name, data);
      });
    }
  }, {
    key: "_createInstance",
    value: function _createInstance(id, el) {
      var _this4 = this;

      var typeEl = el.querySelector('[data-section-type]');
      if (!typeEl) return;
      var type = typeEl.getAttribute('data-section-type');
      if (!type) return;
      var handler = this.handlers[type];

      if (!handler) {
        console.warn("Sections: unable to find section handler for type '".concat(type, "'."));
        return;
      }

      var data = this._loadData(el);

      var postMessage = this._postMessage.bind(this);

      var handlerParams = {
        id: id,
        type: type,
        el: el,
        data: data,
        postMessage: postMessage
      };

      if (!this.imports[type]) {
        handler().then(function (_ref2) {
          var Component = _ref2.default;
          _this4.imports[type] = Component;
          _this4.instances[id] = new Component(handlerParams);
        });
      } else {
        this.instances[id] = new this.imports[type](handlerParams);
      }
    }
  }, {
    key: "_loadData",
    value: function _loadData(el) {
      var dataEl = el.querySelector('[data-section-data]');
      if (!dataEl) return {}; // Load data from attribute, or innerHTML

      var data = dataEl.getAttribute('data-section-data') || dataEl.innerHTML;

      try {
        return JSON.parse(data);
      } catch (error) {
        console.warn("Sections: invalid section data found. ".concat(error.message));
        return {};
      }
    }
  }]);

  return Sections;
}();


// CONCATENATED MODULE: ./source/scripts/checkPolyfills.js
var polyfillUrls = []; // Checks if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.

if (!('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
  polyfillUrls.push(document.querySelector('[data-scripts]').dataset.pxuPolyfills);
} // Polyfill NodeList.forEach if required.
// Polyfill is so small it doesn't need to load any external code.


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/* harmony default export */ var checkPolyfills = (polyfillUrls);
// CONCATENATED MODULE: ./source/scripts/helpers/FlickityTouchFix.js
// This is a helper class to fix a touch issue that came up in flickity
// on iOS devices as of version 13. It should smooth out some of the scroll
// and swipe issues that flickity is having on that version of iOS.
var flickityTouchFix = function flickityTouchFix() {
  var touchingSlider = false;
  var touchStartCoordsX = 0;

  var onTouchStart = function onTouchStart(e) {
    if (e.target.closest && e.target.closest('.flickity-slider')) {
      touchingSlider = true;
      touchStartCoordsX = e.touches[0].pageX;
    } else {
      touchingSlider = false;
    }
  };

  var onTouchMove = function onTouchMove(e) {
    if (!(touchingSlider && e.cancelable)) {
      return;
    }

    if (Math.abs(e.touches[0].pageX - touchStartCoordsX) > 10) {
      e.preventDefault();
    }
  };

  document.body.addEventListener('touchstart', onTouchStart);
  document.body.addEventListener('touchmove', onTouchMove, {
    passive: false
  });
};

/* harmony default export */ var FlickityTouchFix = (flickityTouchFix);
// CONCATENATED MODULE: ./source/scripts/Empire.js
// jQuery plugins

 // eslint-disable-line

 // eslint-disable-line
// Global imports

 // Responsive Images

 // eslint-disable-line
// Section Manager

 // Polyfills

 // Flickity iOS fix



var Empire_initEmpire = function initEmpire() {
  index_es["a" /* default */].init('[data-rimg="lazy"]', {
    round: 1
  });
  var sections = new Sections(); // Static sections

  sections.register('static-header', function () {
    return Promise.all(/* import() | StaticHeader */[__webpack_require__.e(37), __webpack_require__.e(4), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, 80));
  });
  sections.register('static-announcement', function () {
    return __webpack_require__.e(/* import() | StaticAnnouncement */ 21).then(__webpack_require__.bind(null, 53));
  });
  sections.register('static-footer', function () {
    return __webpack_require__.e(/* import() | StaticFooter */ 26).then(__webpack_require__.bind(null, 81));
  });
  sections.register('static-article', function () {
    return __webpack_require__.e(/* import() | StaticArticle */ 22).then(__webpack_require__.bind(null, 54));
  });
  sections.register('static-blog', function () {
    return __webpack_require__.e(/* import() | StaticBlog */ 23).then(__webpack_require__.bind(null, 55));
  });
  sections.register('static-cart', function () {
    return Promise.all(/* import() | StaticCart */[__webpack_require__.e(36), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, 56));
  });
  sections.register('static-collection', function () {
    return Promise.all(/* import() | StaticCollection */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, 57));
  });
  sections.register('static-password', function () {
    return __webpack_require__.e(/* import() | StaticPassword */ 29).then(__webpack_require__.bind(null, 58));
  });
  sections.register('static-product', function () {
    return Promise.all(/* import() | StaticProduct */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, 59));
  });
  sections.register('static-product-recommendations', function () {
    return Promise.all(/* import() | StaticProductRecommendations */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, 82));
  });
  sections.register('static-recently-viewed', function () {
    return Promise.all(/* import() | StaticRecentlyViewed */[__webpack_require__.e(0), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, 60));
  });
  sections.register('static-search', function () {
    return Promise.all(/* import() | StaticSearch */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, 61));
  });
  sections.register('static-highlights-banners', function () {
    return Promise.all(/* import() | StaticHighlightsBanners */[__webpack_require__.e(0), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, 62));
  });
  sections.register('static-slideshow', function () {
    return Promise.all(/* import() | StaticSlideshow */[__webpack_require__.e(0), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, 63));
  }, {
    lazy: true
  }); // Dynamic sections (lazy loaded)\

  sections.register('dynamic-blog-posts', function () {
    return Promise.all(/* import() | DynamicBlogPosts */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 64));
  }, {
    lazy: true
  });
  sections.register('dynamic-promo-mosaic', function () {
    return __webpack_require__.e(/* import() | DynamicPromoBlocks */ 13).then(__webpack_require__.bind(null, 65));
  }, {
    lazy: true
  });
  sections.register('dynamic-promo-grid', function () {
    return __webpack_require__.e(/* import() | DynamicPromoBlocks */ 13).then(__webpack_require__.bind(null, 65));
  }, {
    lazy: true
  });
  sections.register('dynamic-menu-list', function () {
    return __webpack_require__.e(/* import() | DynamicMenuList */ 10).then(__webpack_require__.bind(null, 66));
  }, {
    lazy: true
  });
  sections.register('dynamic-twitter-feed', function () {
    return Promise.all(/* import() | DynamicTwitterFeed */[__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, 67));
  }, {
    lazy: true
  });
  sections.register('dynamic-featured-collection', function () {
    return Promise.all(/* import() | DynamicFeaturedCollection */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, 68));
  }, {
    lazy: true
  });
  sections.register('dynamic-featured-product', function () {
    return Promise.all(/* import() | DynamicProduct */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, 69));
  }, {
    lazy: true
  });
  sections.register('dynamic-rich-text', function () {
    return __webpack_require__.e(/* import() | DynamicRichText */ 14).then(__webpack_require__.bind(null, 70));
  }, {
    lazy: true
  });
  sections.register('dynamic-html', function () {
    return __webpack_require__.e(/* import() | DynamicRichText */ 14).then(__webpack_require__.bind(null, 70));
  }, {
    lazy: true
  });
  sections.register('dynamic-search', function () {
    return Promise.all(/* import() | DynamicSearch */[__webpack_require__.e(4), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, 71));
  }, {
    lazy: true
  });
  sections.register('dynamic-video', function () {
    return __webpack_require__.e(/* import() | DynamicVideo */ 17).then(__webpack_require__.bind(null, 72));
  }, {
    lazy: true
  });
  sections.register('pxs-newsletter', function () {
    return __webpack_require__.e(/* import() | DynamicNewsletter */ 11).then(__webpack_require__.bind(null, 73));
  }, {
    lazy: true
  });
  sections.register('pxs-map', function () {
    return __webpack_require__.e(/* import() | PXSMap */ 19).then(__webpack_require__.bind(null, 74));
  }, {
    lazy: true
  });

  if (document.body.classList.contains('template-giftcard')) {
    __webpack_require__.e(/* import() | GiftCard */ 18).then(__webpack_require__.bind(null, 75)).then(function (_ref) {
      var GiftCard = _ref.default;
      return new GiftCard();
    });
  }

  if (document.querySelector('[data-template-account]')) {
    __webpack_require__.e(/* import() | Account */ 5).then(__webpack_require__.bind(null, 76)).then(function (_ref2) {
      var Account = _ref2.default;
      return new Account();
    });
  }

  if (document.body.classList.contains('template-contact')) {
    __webpack_require__.e(/* import() | Contact */ 6).then(__webpack_require__.bind(null, 77)).then(function (_ref3) {
      var Contact = _ref3.default;
      return new Contact();
    });
  }

  if (document.body.classList.contains('template-page')) {
    __webpack_require__.e(/* import() | Page */ 20).then(__webpack_require__.bind(null, 78)).then(function (_ref4) {
      var Page = _ref4.default;
      return new Page();
    });
  }

  if (document.querySelector('[data-swatch-tooltip]')) {
    __webpack_require__.e(/* import() | ContainSwatchTooltips */ 7).then(__webpack_require__.bind(null, 79)).then(function (_ref5) {
      var ContainSwatchTooltips = _ref5.default;
      return new ContainSwatchTooltips();
    });
  }
};

FlickityTouchFix();

if (checkPolyfills.length) {
  script_default()(checkPolyfills, Empire_initEmpire);
} else {
  Empire_initEmpire();
}

/***/ })

/******/ });