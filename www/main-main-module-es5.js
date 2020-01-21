function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n    <div (click)=\"proceed()\">\n     Carwash \n    </div>\n</ion-content> ";
    /***/
  },

  /***/
  "./src/app/main/main.module.ts":
  /*!*************************************!*\
    !*** ./src/app/main/main.module.ts ***!
    \*************************************/

  /*! exports provided: MainPageModule */

  /***/
  function srcAppMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageModule", function () {
      return MainPageModule;
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


    var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main.page */
    "./src/app/main/main.page.ts");

    var routes = [{
      path: '',
      component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]
    }];

    var MainPageModule = function MainPageModule() {
      _classCallCheck(this, MainPageModule);
    };

    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })], MainPageModule);
    /***/
  },

  /***/
  "./src/app/main/main.page.scss":
  /*!*************************************!*\
    !*** ./src/app/main/main.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content div {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 350%;\n  font-family: cursive;\n  font-style: bold;\n  font-weight: 600;\n  color: #f04141;\n  background-color: #3b3b3b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcU0VNOFxccDMvc3JjXFxhcHBcXG1haW5cXG1haW4ucGFnZS5zY3NzIiwic3JjL2FwcC9tYWluL21haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBkaXYge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAzNTAlO1xyXG4gICAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgICBmb250LXN0eWxlOmJvbGQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgY29sb3I6I2YwNDE0MTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xyXG4gICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICAgfVxyXG4gICBcclxuICAgIiwiaW9uLWNvbnRlbnQgZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzUwJTtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZjA0MTQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/main.page.ts":
  /*!***********************************!*\
    !*** ./src/app/main/main.page.ts ***!
    \***********************************/

  /*! exports provided: MainPage */

  /***/
  function srcAppMainMainPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPage", function () {
      return MainPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MainPage =
    /*#__PURE__*/
    function () {
      function MainPage(router) {
        _classCallCheck(this, MainPage);

        this.router = router;
      }

      _createClass(MainPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "proceed",
        value: function proceed() {
          this.router.navigate(['/register']);
        }
      }]);

      return MainPage;
    }();

    MainPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.page.scss */
      "./src/app/main/main.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], MainPage);
    /***/
  }
}]);
//# sourceMappingURL=main-main-module-es5.js.map