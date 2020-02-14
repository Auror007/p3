function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-policy-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/policy/policy.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/policy/policy.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPolicyPolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button routerLink=\"/tabs/tabs/profile\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Policy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/policy/policy.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/policy/policy.module.ts ***!
    \*****************************************/

  /*! exports provided: PolicyPageModule */

  /***/
  function srcAppPolicyPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function () {
      return PolicyPageModule;
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


    var _policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./policy.page */
    "./src/app/policy/policy.page.ts");

    var routes = [{
      path: '',
      component: _policy_page__WEBPACK_IMPORTED_MODULE_6__["PolicyPage"]
    }];

    var PolicyPageModule = function PolicyPageModule() {
      _classCallCheck(this, PolicyPageModule);
    };

    PolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_policy_page__WEBPACK_IMPORTED_MODULE_6__["PolicyPage"]]
    })], PolicyPageModule);
    /***/
  },

  /***/
  "./src/app/policy/policy.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/policy/policy.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPolicyPolicyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljeS9wb2xpY3kucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/policy/policy.page.ts":
  /*!***************************************!*\
    !*** ./src/app/policy/policy.page.ts ***!
    \***************************************/

  /*! exports provided: PolicyPage */

  /***/
  function srcAppPolicyPolicyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolicyPage", function () {
      return PolicyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PolicyPage =
    /*#__PURE__*/
    function () {
      function PolicyPage() {
        _classCallCheck(this, PolicyPage);
      }

      _createClass(PolicyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PolicyPage;
    }();

    PolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./policy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/policy/policy.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./policy.page.scss */
      "./src/app/policy/policy.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PolicyPage);
    /***/
  }
}]);
//# sourceMappingURL=policy-policy-module-es5.js.map