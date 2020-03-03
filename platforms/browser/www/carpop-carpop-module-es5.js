function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carpop-carpop-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/carpop/carpop.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carpop/carpop.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCarpopCarpopPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"text-align: center;\">\n    Select Car\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list style=\"margin-bottom: 0%;\" *ngFor=\"let item of list\">\n<ion-item button (click)=\"onClick(item)\">\n<ion-label style=\"text-align: center;\">{{item.vehicleModel}}</ion-label>\n</ion-item>\n</ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/carpop/carpop.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/carpop/carpop.module.ts ***!
    \*****************************************/

  /*! exports provided: CarpopPageModule */

  /***/
  function srcAppCarpopCarpopModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarpopPageModule", function () {
      return CarpopPageModule;
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


    var _carpop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./carpop.page */
    "./src/app/carpop/carpop.page.ts");

    var routes = [{
      path: '',
      component: _carpop_page__WEBPACK_IMPORTED_MODULE_6__["CarpopPage"]
    }];

    var CarpopPageModule = function CarpopPageModule() {
      _classCallCheck(this, CarpopPageModule);
    };

    CarpopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_carpop_page__WEBPACK_IMPORTED_MODULE_6__["CarpopPage"]]
    })], CarpopPageModule);
    /***/
  },

  /***/
  "./src/app/carpop/carpop.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/carpop/carpop.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCarpopCarpopPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  margin: auto;\n  padding: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycG9wL0Q6XFxTRU04XFxwMy9zcmNcXGFwcFxcY2FycG9wXFxjYXJwb3AucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJwb3AvY2FycG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2FycG9wL2NhcnBvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IGluaXRpYWw7ICAgIFxyXG59IiwiaW9uLWl0ZW0ge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IGluaXRpYWw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/carpop/carpop.page.ts":
  /*!***************************************!*\
    !*** ./src/app/carpop/carpop.page.ts ***!
    \***************************************/

  /*! exports provided: CarpopPage */

  /***/
  function srcAppCarpopCarpopPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarpopPage", function () {
      return CarpopPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var CarpopPage =
    /*#__PURE__*/
    function () {
      function CarpopPage(events, popoverController) {
        _classCallCheck(this, CarpopPage);

        this.events = events;
        this.popoverController = popoverController;
        this.list = [];
      }

      _createClass(CarpopPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick(val) {
          this.popoverController.dismiss(val.number);
          console.log("dismissed");
        }
      }]);

      return CarpopPage;
    }();

    CarpopPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], CarpopPage.prototype, "list", void 0);
    CarpopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carpop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carpop.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/carpop/carpop.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carpop.page.scss */
      "./src/app/carpop/carpop.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], CarpopPage);
    /***/
  }
}]);
//# sourceMappingURL=carpop-carpop-module-es5.js.map