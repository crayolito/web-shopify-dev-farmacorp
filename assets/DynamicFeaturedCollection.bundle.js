(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[9],{

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicFeaturedCollection; });
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProductGridItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var DynamicFeaturedCollection = /*#__PURE__*/function () {
  function DynamicFeaturedCollection(section) {
setTimeout( ()=>{
      var _this = this;

    _classCallCheck(this, DynamicFeaturedCollection);

    this.section = section;
    this.el = section.el;
    this.contentWrapperEl = section.el.querySelector('[data-content-wrapper]');
    this.contentEl = section.el.querySelector('[data-content]');
    /*
     * We keep reference to the original layout of the collection
     * because dependent upon viewport width, we may need to enforce
     * one layout over the other.
     */

    this.initialLayout = this.contentEl.dataset.layout;
    

    this.productItems = [];
    var productItemsEls = this.el.querySelectorAll('[data-product-item]');

    for (var i = 0; i < productItemsEls.length; i++) {
      this.productItems.push(new _components_ProductGridItem__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]({
        el: productItemsEls[i],
        id: section.id,
        lazy: false
      }));
    }

    if (this.initialLayout === 'slideshow') {
      window.requestAnimationFrame(function () {
        return _this._initializeFlickity();
      });
    } else {
      this.onBreakpointChange = function () {
        var useSlideshow = _Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].isLessThanBreakpoint('XL');

        if (useSlideshow) {
          _this._initializeFlickity();
        } else {
          _this._destroyFlickity();
        }
      };

      _Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].onBreakpointChange(this.onBreakpointChange);

      if (_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].isLessThanBreakpoint('XL')) {
        window.requestAnimationFrame(function () {
          return _this._initializeFlickity();
        });
      }
    }
    }, 1000);
  }

  _createClass(DynamicFeaturedCollection, [{
    key: "onSectionUnload",
    value: function onSectionUnload() {
      this.productItems.forEach(function (productItem) {
        return productItem.unload();
      });
      this.layoutHandler.offBreakpointChange(this.onBreakpointChange);

      this._destroyFlickity();
    }
  }, {
    key: "_initializeFlickity",
    value: function _initializeFlickity() {
      if (this.flickity) return; // Already initialized

      this.contentEl.dataset.layout = 'slideshow';
      this.flickity = new flickity__WEBPACK_IMPORTED_MODULE_0___default.a(this.contentEl, {
        autoPlay: 0,
        accessibility: true,
        cellAlign: 'left',
        cellSelector: '.productgrid--item',
        groupCells: true,
        pageDots: false,
        contain: true,
        arrowShape: 'M65.29 11.99L27.28 50L65.3 87.99L70.25 83.06L37.19 50L70.26 16.94L65.29 11.99Z'
      });
      var resize = flickity__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.resize;
      var viewport = this.contentEl.querySelector('.flickity-viewport');
      var slider = this.contentEl.querySelector('.flickity-slider');
      /*
       * We must wrap Flickity's slider element to allow the usage of
       * clip, and clip-path to obscure the overflow product items.
       * To use clip, and clip-path, the clipped element must be absolutely
       * positioned. In this case, the only native Flickity element
       * that is absolutely positioned is the slider; but, it moves with the first
       * slide rather than remaining in the viewport removing it as a candidate.
       * Therefore, it is necessary to include a wrapper element that we can
       * absolutely position that remains within the viewport.
       * The only thing we need to watch out for is that the elements
       * are moved in a non-destructive manner.
       */

      var sliderWrapper = document.createElement('div');
      sliderWrapper.classList.add('flickity-slider--wrapper');
      viewport.appendChild(sliderWrapper);
      sliderWrapper.appendChild(slider);

      this.flickity.resize = function r() {
        viewport.style.height = '';
        resize.call(this);
      };
    }
  }, {
    key: "_destroyFlickity",
    value: function _destroyFlickity() {
      if (!this.flickity) return; // Already uninitialized

      this.contentEl.dataset.layout = this.initialLayout;
      var viewport = this.contentEl.querySelector('.flickity-viewport');
      var slider = this.contentEl.querySelector('.flickity-slider');
      /*
       * Remember to move the Flickity native elements back
       * into the correct DOM layout, before removing the added
       * wrapper.
       */

      var sliderWrapper = this.contentEl.querySelector('.flickity-slider--wrapper');
      viewport.appendChild(slider);
      viewport.removeChild(sliderWrapper);
      this.flickity.destroy();
      this.flickity = null;
    }
  }]);

  return DynamicFeaturedCollection;
}();



/***/ })

}]);
//# sourceMappingURL=DynamicFeaturedCollection.bundle.js.map?1585847753798