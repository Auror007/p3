(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-coupon-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/coupon/coupon.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coupon/coupon.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCouponCouponPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-header translucent>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button routerLink=\"/tabs/tabs/profile\" routerDirection=\"backward\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Coupons</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-header>\n\n<ion-content >\n  <ion-list *ngFor=\"let item of resp\">\n\n    <ion-item>\n      <ion-card color=\"dark\">\n        \n        <!-- <ion-grid>\n       \n            <ion-row>\n              <ion-col>\n               Service {{item.name}}\n              </ion-col>\n              <ion-col>\n              PackageID:  {{item.packageId}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n               Duration: {{item.duration}}\n              </ion-col>\n              <ion-col>\n               Price : {{item.price}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n               Vehicle: {{item.brandName}} {{item.vehicleModel}}\n              </ion-col>\n             \n              <ion-col>\n               Number: {{item.number}}\n              </ion-col>\n            </ion-row>\n          </ion-grid> -->\n      </ion-card>\n    </ion-item>\n    \n  </ion-list>\n  \n\n<div class=\"ion-text-center\" style=\"color: grey;\" *ngIf=\"flag\">\n  <h3>No coupons found</h3>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/coupon/coupon.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/coupon/coupon.module.ts ***!
    \*****************************************/

  /*! exports provided: CouponPageModule */

  /***/
  function srcAppCouponCouponModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponPageModule", function () {
      return CouponPageModule;
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


    var _coupon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./coupon.page */
    "./src/app/coupon/coupon.page.ts");

    const routes = [{
      path: '',
      component: _coupon_page__WEBPACK_IMPORTED_MODULE_6__["CouponPage"]
    }];
    let CouponPageModule = class CouponPageModule {};
    CouponPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_coupon_page__WEBPACK_IMPORTED_MODULE_6__["CouponPage"]]
    })], CouponPageModule);
    /***/
  },

  /***/
  "./src/app/coupon/coupon.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/coupon/coupon.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCouponCouponPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cG9uL0Q6XFxTRU04XFxwMy9zcmNcXGFwcFxcY291cG9uXFxjb3Vwb24ucGFnZS5zY3NzIiwic3JjL2FwcC9jb3Vwb24vY291cG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvdXBvbi9jb3Vwb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIiwiaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/coupon/coupon.page.ts":
  /*!***************************************!*\
    !*** ./src/app/coupon/coupon.page.ts ***!
    \***************************************/

  /*! exports provided: CouponPage */

  /***/
  function srcAppCouponCouponPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponPage", function () {
      return CouponPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    let CouponPage = class CouponPage {
      constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.flag = 0;
        this.resp = [];
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.storage.get('email').then(res => {
            this.em = res;
          });
          console.log(this.em);
          this.http.post('https://mywash.herokuapp.com/profile/history  ', {
            email: this.em
          }).subscribe(res => {
            console.log(res);
          }, error => {
            console.log(error);
          });
        });
      }

    };

    CouponPage.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
    }];

    CouponPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-coupon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./coupon.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/coupon/coupon.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./coupon.page.scss */
      "./src/app/coupon/coupon.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])], CouponPage);
    /***/
  }
}]);
//# sourceMappingURL=coupon-coupon-module-es5.js.map