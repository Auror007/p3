function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-header translucent>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button routerLink=\"/tabs/tabs/profile\" routerDirection=\"backward\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Orders</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let item of resp\">\n\n    <ion-item >\n      <ion-card color=\"dark\">\n        \n        <ion-grid>\n       \n            <ion-row>\n              <ion-col>\n               Service {{item.name}}\n              </ion-col>\n              <ion-col>\n              PackageID:  {{item.packageId}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n               Duration: {{item.duration}}\n              </ion-col>\n              <ion-col>\n               Price : {{item.price}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n               Vehicle: {{item.brandName}} {{item.vehicleModel}}\n              </ion-col>\n             \n              <ion-col>\n               Number: {{item.number}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n      </ion-card>\n    </ion-item>\n    \n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersPageModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
      return OrdersPageModule;
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


    var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orders.page */
    "./src/app/orders/orders.page.ts");

    var routes = [{
      path: '',
      component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }];

    var OrdersPageModule = function OrdersPageModule() {
      _classCallCheck(this, OrdersPageModule);
    };

    OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })], OrdersPageModule);
    /***/
  },

  /***/
  "./src/app/orders/orders.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL0Q6XFxTRU04XFxwMy9zcmNcXGFwcFxcb3JkZXJzXFxvcmRlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsImlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/orders/orders.page.ts":
  /*!***************************************!*\
    !*** ./src/app/orders/orders.page.ts ***!
    \***************************************/

  /*! exports provided: OrdersPage */

  /***/
  function srcAppOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
      return OrdersPage;
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

    var OrdersPage =
    /*#__PURE__*/
    function () {
      function OrdersPage(http, storage) {
        var _this = this;

        _classCallCheck(this, OrdersPage);

        this.http = http;
        this.storage = storage;
        this.resp = [];
        this.storage.get('email').then(function (result) {
          _this.em = result;
        });
      }

      _createClass(OrdersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.http.post('https://mywash.herokuapp.com/profile/history', {
            email: this.em
          }).subscribe(function (result) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var arr = _step.value;
                var packageId = arr.package[0].packageId;
                var name = arr.package[0].name;
                var price = arr.package[0].price;
                var duration = arr.package[0].duration;
                var brandName = arr.customer[0].brandName;
                var vehicleModel = arr.customer[0].vehicleModel;
                var number = arr.customer[0].number;
                var it = {
                  packageId: packageId,
                  name: name,
                  price: price,
                  duration: duration,
                  brandName: brandName,
                  vehicleModel: vehicleModel,
                  number: number
                };

                _this2.resp.push(it);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            console.log(_this2.resp);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return OrdersPage;
    }();

    OrdersPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.page.scss */
      "./src/app/orders/orders.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])], OrdersPage);
    /***/
  }
}]);
//# sourceMappingURL=orders-orders-module-es5.js.map