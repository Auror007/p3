function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"], {
  /***/
  "./node_modules/ngx-autosize/fesm2015/ngx-autosize.js":
  /*!************************************************************!*\
    !*** ./node_modules/ngx-autosize/fesm2015/ngx-autosize.js ***!
    \************************************************************/

  /*! exports provided: AutosizeDirective, AutosizeModule */

  /***/
  function node_modulesNgxAutosizeFesm2015NgxAutosizeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutosizeDirective", function () {
      return AutosizeDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutosizeModule", function () {
      return AutosizeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAX_LOOKUP_RETRIES = 3;

    var AutosizeDirective = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} _zone
       */
      function AutosizeDirective(element, _zone) {
        _classCallCheck(this, AutosizeDirective);

        this.element = element;
        this._zone = _zone;
        this.onlyGrow = false;
        this.useImportant = false;
        this.retries = 0;
        this._destroyed = false;

        if (this.element.nativeElement.tagName !== 'TEXTAREA') {
          this._findNestedTextArea();
        } else {
          this.textAreaEl = this.element.nativeElement;
          this.textAreaEl.style.overflow = 'hidden';

          this._onTextAreaFound();
        }
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(AutosizeDirective, [{
        key: "onInput",

        /**
         * @param {?} textArea
         * @return {?}
         */
        value: function onInput(textArea) {
          this.adjust();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed = true;

          if (this._windowResizeHandler) {
            window.removeEventListener('resize', this._windowResizeHandler, false);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this.adjust();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.adjust(true);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_findNestedTextArea",
        value: function _findNestedTextArea() {
          var _this = this;

          this.textAreaEl = this.element.nativeElement.querySelector('TEXTAREA');

          if (!this.textAreaEl && this.element.nativeElement.shadowRoot) {
            this.textAreaEl = this.element.nativeElement.shadowRoot.querySelector('TEXTAREA');
          }

          if (!this.textAreaEl) {
            if (this.retries >= MAX_LOOKUP_RETRIES) {
              console.warn('ngx-autosize: textarea not found');
            } else {
              this.retries++;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this._findNestedTextArea();
              }, 100);
            }

            return;
          }

          this.textAreaEl.style.overflow = 'hidden';

          this._onTextAreaFound();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onTextAreaFound",
        value: function _onTextAreaFound() {
          var _this2 = this;

          this._addWindowResizeHandler();

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this2.adjust();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "_addWindowResizeHandler",
        value: function _addWindowResizeHandler() {
          var _this3 = this;

          this._windowResizeHandler = Debounce(
          /**
          * @return {?}
          */
          function () {
            _this3._zone.run(
            /**
            * @return {?}
            */
            function () {
              _this3.adjust();
            });
          }, 200);

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            window.addEventListener('resize', _this3._windowResizeHandler, false);
          });
        }
        /**
         * @param {?=} inputsChanged
         * @return {?}
         */

      }, {
        key: "adjust",
        value: function adjust() {
          var inputsChanged = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!this._destroyed && this.textAreaEl) {
            /** @type {?} */
            var currentText = this.textAreaEl.value;

            if (inputsChanged === false && currentText === this._oldContent && this.textAreaEl.offsetWidth === this._oldWidth) {
              return;
            }

            this._oldContent = currentText;
            this._oldWidth = this.textAreaEl.offsetWidth;
            /** @type {?} */

            var clone = this.textAreaEl.cloneNode(true);
            /** @type {?} */

            var parent = this.textAreaEl.parentNode;
            clone.style.width = this.textAreaEl.offsetWidth + 'px';
            clone.style.visibility = 'hidden';
            clone.style.position = 'absolute';
            clone.textContent = currentText;
            parent.appendChild(clone);
            clone.style.overflow = 'auto';
            clone.style.height = 'auto';
            /** @type {?} */

            var height = clone.scrollHeight; // add into height top and bottom borders' width

            /** @type {?} */

            var computedStyle = window.getComputedStyle(clone, null);
            height += parseInt(computedStyle.getPropertyValue('border-top-width'));
            height += parseInt(computedStyle.getPropertyValue('border-bottom-width'));
            /** @type {?} */

            var oldHeight = this.textAreaEl.offsetHeight;
            /** @type {?} */

            var willGrow = height > oldHeight;

            if (this.onlyGrow === false || willGrow) {
              /** @type {?} */
              var lineHeight = this._getLineHeight();
              /** @type {?} */


              var rowsCount = height / lineHeight;

              if (this._minRows && this._minRows >= rowsCount) {
                height = this._minRows * lineHeight;
              } else if (this.maxRows && this.maxRows <= rowsCount) {
                // never shrink the textarea if onlyGrow is true

                /** @type {?} */
                var maxHeight = this.maxRows * lineHeight;
                height = this.onlyGrow ? Math.max(maxHeight, oldHeight) : maxHeight;
                this.textAreaEl.style.overflow = 'auto';
              } else {
                this.textAreaEl.style.overflow = 'hidden';
              }
              /** @type {?} */


              var heightStyle = height + 'px';
              heightStyle += this.useImportant ? ' !important' : '';
              this.textAreaEl.style.height = heightStyle;
            }

            parent.removeChild(clone);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getLineHeight",
        value: function _getLineHeight() {
          /** @type {?} */
          var lineHeight = parseInt(this.textAreaEl.style.lineHeight, 10);

          if (isNaN(lineHeight) && window.getComputedStyle) {
            /** @type {?} */
            var styles = window.getComputedStyle(this.textAreaEl);
            lineHeight = parseInt(styles.lineHeight, 10);
          }

          if (isNaN(lineHeight)) {
            /** @type {?} */
            var fontSize = window.getComputedStyle(this.textAreaEl, null).getPropertyValue('font-size');
            lineHeight = Math.floor(parseInt(fontSize.replace('px', ''), 10) * 1.5);
          }

          return lineHeight;
        }
      }, {
        key: "minRows",
        set: function set(value) {
          this._minRows = value;

          if (this.textAreaEl) {
            this.textAreaEl.rows = value;
          }
        }
      }]);

      return AutosizeDirective;
    }();

    AutosizeDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[autosize]'
      }]
    }];
    /** @nocollapse */

    AutosizeDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    AutosizeDirective.propDecorators = {
      minRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onlyGrow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      useImportant: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['input', ['$event.target']]
      }]
    };

    if (false) {}
    /**
     * @param {?} func
     * @param {?} wait
     * @param {?=} immediate
     * @return {?}
     */


    function Debounce(func, wait) {
      var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      /** @type {?} */
      var timeout;
      return (
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var context = this;
          /** @type {?} */

          var args = arguments;
          /** @type {?} */

          var later =
          /**
          * @return {?}
          */
          function later() {
            timeout = null;

            if (!immediate) {
              func.apply(context, args);
            }
          };
          /** @type {?} */


          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);

          if (callNow) {
            func.apply(context, args);
          }
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AutosizeModule = function AutosizeModule() {
      _classCallCheck(this, AutosizeModule);
    };

    AutosizeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [AutosizeDirective],
        imports: [],
        exports: [AutosizeDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-autosize.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSupportSupportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button routerLink=\"/tabs/tabs/profile\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Support</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <ion-grid>\n   <ion-row *ngFor=\"let message of messages\">\n     <ion-col size=\"9\" *ngIf=\"currentUser !==message.user\" class=\"message other-message\">\n<b>{{message.user}}</b><br>\n<span>{{message.msg}}</span>\n<div class=\"time\" text-right>\n  <br>{{message.createdAt | date:'short'}}\n</div>\n     </ion-col>\n\n     <ion-col offset=\"3\" size=\"9\" *ngIf=\"currentUser ===message.user\" class=\"message my-message\">\n      <b>{{message.user}}</b><br>\n      <span>{{message.msg}}</span>\n      <div class=\"time\" text-right>\n        <br>{{message.createdAt | date:'short'}}\n      </div>\n           </ion-col>\n\n   </ion-row>\n </ion-grid>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row align-items-center no-padding>\n      <ion-col size=\"10\">\n        <textarea autosize maxRows=\"3\" [(ngModel)]=\"newMsg\"\tclass=\"message-input\">\n        </textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n          <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" class=\"msg-btn\" (click)=\"sendMessage()\">\n            <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>         \n           </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>  \n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/support/support.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/support/support.module.ts ***!
    \*******************************************/

  /*! exports provided: SupportPageModule */

  /***/
  function srcAppSupportSupportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPageModule", function () {
      return SupportPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./support.page */
    "./src/app/support/support.page.ts");
    /* harmony import */


    var ngx_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-autosize */
    "./node_modules/ngx-autosize/fesm2015/ngx-autosize.js");

    var routes = [{
      path: '',
      component: _support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]
    }];

    var SupportPageModule = function SupportPageModule() {
      _classCallCheck(this, SupportPageModule);
    };

    SupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), ngx_autosize__WEBPACK_IMPORTED_MODULE_7__["AutosizeModule"]],
      declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
    })], SupportPageModule);
    /***/
  },

  /***/
  "./src/app/support/support.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/support/support.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSupportSupportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.other-message {\n  background-color: var(--ion-color-tertiary);\n  color: white;\n}\n\n.my-message {\n  background-color: var(--ion-color-secondary);\n  color: white;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.msg-btn {\n  --padding-start:0.5em;\n  --padding-end:0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcG9ydC9EOlxcU0VNOFxccDMvc3JjXFxhcHBcXHN1cHBvcnRcXHN1cHBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9zdXBwb3J0L3N1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJQTtFQUNJLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdle1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5vdGhlci1tZXNzYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm15LW1lc3NhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi50aW1le1xyXG4gICAgY29sb3I6ICNkZmRmZGY7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tZXNzYWdlLWlucHV0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tc2ctYnRue1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjAuNWVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDowLjVlbTtcclxufVxyXG4iLCIubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiAjZGZkZmRmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLm1zZy1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6MC41ZW07XG4gIC0tcGFkZGluZy1lbmQ6MC41ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/support/support.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/support/support.page.ts ***!
    \*****************************************/

  /*! exports provided: SupportPage */

  /***/
  function srcAppSupportSupportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPage", function () {
      return SupportPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var SupportPage = /*#__PURE__*/function () {
      function SupportPage(http, storage) {
        var _this4 = this;

        _classCallCheck(this, SupportPage);

        this.http = http;
        this.storage = storage;
        this.messages = [];
        this.order = 'not-applicable';
        this.currentUser = 'You';
        this.newMsg = '';
        this.storage.get('email').then(function (res) {
          _this4.email = res;
        });
        this.storage.get('num').then(function (res) {
          _this4.num = res;
        });
      }

      _createClass(SupportPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this5 = this;

          this.messages.push({
            user: 'You',
            createdAt: new Date().getTime(),
            msg: this.newMsg
          });
          this.http.post('https://mywash.herokuapp.com/chat', {
            input: this.newMsg
          }).subscribe(function (res) {
            var reply = res.response;
            console.log(reply); //text.split(" ")[0]

            if (_this5.newMsg == 'service' || _this5.newMsg == 'tech') {
              _this5.type = _this5.newMsg;

              if (_this5.newMsg == 'tech') {
                _this5.order = 'not-applicable';
              }
            }

            if (reply == 'What is your complaint?') {
              var x = _this5.newMsg.split(" ")[1];

              _this5.order = x;
            }

            if (reply == 'Thank you! We are working on this right away.') {
              _this5.comp = _this5.newMsg;
              var req = {
                email: _this5.email,
                num: _this5.num,
                orderno: _this5.order,
                type: _this5.type,
                complaint: _this5.comp
              };
              console.log(req);

              _this5.http.post('https://mywash.herokuapp.com/sheet/write', req).subscribe(function (res) {
                console.log(res);
              });
            }

            _this5.newMsg = '';

            _this5.messages.push({
              user: 'Bot',
              createdAt: new Date().getTime(),
              msg: reply
            });

            setTimeout(function () {
              _this5.content.scrollToBottom(200);
            });
          });
          setTimeout(function () {
            _this5.content.scrollToBottom(200);
          });
        }
      }]);

      return SupportPage;
    }();

    SupportPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], SupportPage.prototype, "content", void 0);
    SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-support',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./support.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./support.page.scss */
      "./src/app/support/support.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], SupportPage);
    /***/
  }
}]);
//# sourceMappingURL=support-support-module-es5.js.map