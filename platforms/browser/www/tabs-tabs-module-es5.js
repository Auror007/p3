function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dash/dash.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dash/dash.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashDashPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Home</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n <ion-slides [options]=\"slideOptsOne\">\r\n   <!-- <ion-slide>\r\n     <img src=\"http://placehold.it/300x300/ff0000/ffffff\" alt=\"\">\r\n   </ion-slide>\r\n   <ion-slide>\r\n    <img src=\"http://placehold.it/300x300/ffcc33/ffffff\" alt=\"\">\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <img src=\"http://placehold.it/300x300/33ccff/ffffff\" alt=\"\">\r\n  </ion-slide> -->\r\n  <ion-slide *ngFor=\"let slide of slideData\">\r\n    <img src=\"{{slide.image}}\" />\r\n  </ion-slide>\r\n </ion-slides>\r\n<ion-item>\r\n <ion-label text-wrap position=\"fixed\">\r\n  Four-Wheeler\r\n</ion-label>\r\n</ion-item>\r\n<ion-slides>\r\n  <ion-slide  *ngFor='let det of array_serv'>\r\n    <ion-card button style=\"border-radius: 25px;\"  (click)=\"addCart(det.packageId)\">\r\n      <ion-card-header>\r\n        \r\n        <ion-card-title>{{det.name}}</ion-card-title>\r\n        <ion-card-subtitle>{{det.duration}} Months</ion-card-subtitle>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>{{det.description}}</ion-card-content>\r\n  </ion-card>\r\n  </ion-slide>\r\n <!-- <ion-slide>\r\n  <ion-card style=\"border-radius: 25px;\" button (click)=\"addCart()\">\r\n      <ion-card-header>\r\n        <ion-card-title>Service1</ion-card-title>\r\n        <ion-card-subtitle>1 month</ion-card-subtitle>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>\r\n          External Wash Weekly + 1 Extra interior wash\r\n        </ion-card-content>\r\n  </ion-card>\r\n</ion-slide>\r\n<ion-slide>\r\n<ion-card style=\"border-radius: 25px;\">\r\n  <ion-card-header>\r\n    <ion-card-title>Service2</ion-card-title>\r\n    <ion-card-subtitle>3 months</ion-card-subtitle>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      External Wash weekly + 2 Extra interior wash\r\n    </ion-card-content>\r\n</ion-card>\r\n</ion-slide>\r\n<ion-slide>\r\n<ion-card style=\"border-radius: 25px;\">\r\n  <ion-card-header>\r\n    <ion-card-title>Service3</ion-card-title>\r\n    <ion-card-subtitle>3 months</ion-card-subtitle>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      External Wash daily + 2 Extra interior wash\r\n    </ion-card-content>\r\n</ion-card>\r\n</ion-slide> -->\r\n\r\n</ion-slides>\r\n<ion-item>\r\n  <ion-label text-wrap position=\"fixed\">\r\n   Two-Wheeler\r\n </ion-label>\r\n </ion-item>\r\n<ion-slides>\r\n<ion-slide>\r\n  <ion-card style=\"border-radius: 25px;\">\r\n      <ion-card-header>\r\n        <ion-card-title>Service1</ion-card-title>\r\n        <ion-card-subtitle>1 month</ion-card-subtitle>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>\r\n          External Wash Weekly + 1 Extra interior wash\r\n        </ion-card-content>\r\n  </ion-card>\r\n</ion-slide>\r\n<ion-slide>\r\n<ion-card style=\"border-radius: 25px;\">\r\n  <ion-card-header>\r\n    <ion-card-title>Service2</ion-card-title>\r\n    <ion-card-subtitle>3 months</ion-card-subtitle>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      External Wash weekly + 2 Extra interior wash\r\n    </ion-card-content>\r\n</ion-card>\r\n</ion-slide>\r\n<ion-slide>\r\n<ion-card style=\"border-radius: 25px;\">\r\n  <ion-card-header>\r\n    <ion-card-title>Service3</ion-card-title>\r\n    <ion-card-subtitle>3 months</ion-card-subtitle>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      External Wash daily + 2 Extra interior wash\r\n    </ion-card-content>\r\n</ion-card>\r\n</ion-slide>\r\n\r\n</ion-slides>\r\n      </ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfferOfferPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title align-title=\"center\">Offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-slides>\n        \n\n        <ion-slide>\n            <ion-card style=\"border-radius: 25px;\" button (click)=\"addCart()\">\n                <ion-card-header>\n                  <ion-card-title>offer1</ion-card-title>\n                  <ion-card-subtitle>1 month</ion-card-subtitle>\n                  </ion-card-header>\n                \n                  <ion-card-content>\n                    External Wash Weekly + 1 Extra interior wash\n                  </ion-card-content>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card style=\"border-radius: 25px;\">\n            <ion-card-header>\n              <ion-card-title>offer2</ion-card-title>\n              <ion-card-subtitle>3 months</ion-card-subtitle>\n              </ion-card-header>\n            \n              <ion-card-content>\n                External Wash weekly + 2 Extra interior wash\n              </ion-card-content>\n        </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card style=\"border-radius: 25px;\">\n            <ion-card-header>\n              <ion-card-title>offer3</ion-card-title>\n              <ion-card-subtitle>3 months</ion-card-subtitle>\n              </ion-card-header>\n            \n              <ion-card-content>\n                External Wash daily + 2 Extra interior wash\n              </ion-card-content>\n        </ion-card>\n        </ion-slide>\n        \n      </ion-slides>\n      <ion-slides>\n        <ion-slide>\n            <ion-card style=\"border-radius: 25px;\">\n                <ion-card-header>\n                  <ion-card-title>offer1</ion-card-title>\n                  <ion-card-subtitle>1 month</ion-card-subtitle>\n                  </ion-card-header>\n                \n                  <ion-card-content>\n                    External Wash Weekly + 1 Extra interior wash\n                  </ion-card-content>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card style=\"border-radius: 25px;\">\n            <ion-card-header>\n              <ion-card-title>offer2</ion-card-title>\n              <ion-card-subtitle>3 months</ion-card-subtitle>\n              </ion-card-header>\n            \n              <ion-card-content>\n                External Wash weekly + 2 Extra interior wash\n              </ion-card-content>\n        </ion-card>\n        </ion-slide>  \n        <ion-slide>\n          <ion-card style=\"border-radius: 25px;\">\n            <ion-card-header>\n              <ion-card-title>offer3</ion-card-title>\n              <ion-card-subtitle>3 months</ion-card-subtitle>\n              </ion-card-header>\n            \n              <ion-card-content>\n                External Wash daily + 2 Extra interior wash\n              </ion-card-content>\n        </ion-card>\n        </ion-slide>\n      </ion-slides>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item >\n    <!-- <ion-avatar class=\"ion-margin-start\">\n    <img src=\"../../assets/icon/avatar.svg\"/>\n  </ion-avatar>-->\n    <img slot=\"start\" src=\"../../assets/icon/favicon.png\"> \n\n\n    <ion-label slot=\"end\" fixed>\n      Parth Parmar\n    </ion-label >\n  </ion-item> \n<br>\n  <ion-item  style=\"margin-top: 0%;\">\n <ion-list style=\"margin-top: 0%;\">\n  <ion-label fixed>\n  Phone: {{no}}\n  </ion-label>\n  <ion-label fixed>\n    Email: {{em}}\n    </ion-label>\n </ion-list>\n  </ion-item>    \n  <hr>\n\n  <ion-list>\n    \n    <ion-item button routerLink=\"/orders\" routerDirection=\"forward\">\n      <ion-icon name=\"basket\" slot=\"start\"></ion-icon>\n      <ion-label>Orders</ion-label>\n    </ion-item>\n    <ion-item button routerLink=\"/support\" routerDirection=\"forward\">\n      <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n      <ion-label>Help & Support</ion-label>\n    </ion-item>\n    <ion-item button routerLink=\"/policy\" routerDirection=\"forward\">\n      <ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>\n      <ion-label>Policy</ion-label>\n    </ion-item>\n    <ion-item button routerLink=\"/about\" routerDirection=\"forward\">\n      <ion-icon name=\"car-sport\" slot=\"start\"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-item>\n    \n   </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServicesServicesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Dashboard</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-item>\n        <ion-slides>\n          <ion-slide>\n              <ion-card style=\"height:200px !important;\">\n                  <ion-card-header>\n                    <ion-card-title>Vehicle 1</ion-card-title>\n                    <ion-card-subtitle>1 month</ion-card-subtitle>\n                    </ion-card-header>\n                  \n                    <ion-card-content style=\"text-align: left;\">\n                      Vehicle type<br>\n                      Vehicle Number<br>\n                      Package Selected<br>\n                    </ion-card-content>\n                    <ion-label>Start - End Date</ion-label>\n                   \n              </ion-card>\n          </ion-slide>\n          <ion-slide>\n            <ion-card style=\"height:200px !important;\">\n              <ion-card-header >\n                <ion-card-title>Vehicle 2</ion-card-title>\n                <ion-card-subtitle>3 months</ion-card-subtitle>\n                </ion-card-header>\n              \n                <ion-card-content>\n                  External Wash weekly + 2 Extra interior wash\n                </ion-card-content>\n          </ion-card>\n          </ion-slide>\n          <ion-slide>\n            <ion-card >\n              <ion-card-header>\n                <ion-card-title>Vehicle 3</ion-card-title>\n                <ion-card-subtitle>3 months</ion-card-subtitle>\n                </ion-card-header>\n              \n                <ion-card-content>\n                  External Wash daily + 2 Extra interior wash\n                </ion-card-content>\n          </ion-card>\n          </ion-slide>\n          \n        </ion-slides>\n  </ion-item>\n        <!-- <ion-item>\n        <ion-label style=\"margin-left: 5%;\">Boost Up (x1)</ion-label>\n        <ion-toggle slot=\"end\"> [value]=\"checked\"  </ion-toggle> \n        </ion-item> -->\n\n        <ion-item >\n          <ion-button style=\"margin:auto;\" color=\"danger\" size=\"medium\" routerLink=\"/cart\" routerDirection=\"forward\" >View Cart</ion-button>\n\n          <ion-button style=\"margin:auto;\" size=\"medium\" (click)=\"presentActionSheet()\">Change Time</ion-button>\n          <!-- add cart and track job -->\n        </ion-item >\n\n\n        <ion-item >\n          <ion-label>\n            Recommended Combos\n          </ion-label>\n         \n        </ion-item >\n         <ion-slides>\n          <ion-slide>\n            <ion-card style=\"border-radius: 25px;\">\n                <ion-card-header>\n                  <ion-card-title>offer1</ion-card-title>\n                  <ion-card-subtitle>1 month</ion-card-subtitle>\n                  </ion-card-header>\n                \n                  <ion-card-content>\n                    External Wash Weekly + 1 Extra interior wash\n                  </ion-card-content>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card style=\"border-radius: 25px;\">\n            <ion-card-header>\n              <ion-card-title>offer2</ion-card-title>\n              <ion-card-subtitle>3 months</ion-card-subtitle>\n              </ion-card-header>\n            \n              <ion-card-content>\n                External Wash weekly + 2 Extra interior wash\n              </ion-card-content>\n        </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card style=\"border-radius: 25px;\">\n            <ion-card-header>\n              <ion-card-title>offer3</ion-card-title>\n              <ion-card-subtitle>3 months</ion-card-subtitle>\n              </ion-card-header>\n            \n              <ion-card-content>\n                External Wash daily + 2 Extra interior wash\n              </ion-card-content>\n        </ion-card>\n        </ion-slide>\n        \n      </ion-slides>\n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-router-outlet></ion-router-outlet>\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" >\n      <ion-tab-button tab=\"dash\" >\n\n      <ion-icon name=\"home\"></ion-icon>\n\n      <ion-label>Home</ion-label>\n\n    </ion-tab-button>\n\n\n\n    <ion-tab-button tab=\"services\" >\n\n      <ion-icon name=\"laptop\"></ion-icon>\n\n      <ion-label>Dashboard</ion-label>\n\n    </ion-tab-button>\n\n\n\n    <ion-tab-button tab=\"offer\">\n\n      <ion-icon name=\"newspaper-sharp\"></ion-icon>\n      <ion-label>Offers</ion-label>\n\n    </ion-tab-button>\n\n\n\n\n\n    <ion-tab-button tab=\"profile\" routerLink=\"profile\" routerDirection=\"root\">\n\n      <ion-icon name=\"person\"></ion-icon>\n\n      <ion-label>Profile</ion-label>\n\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/dash/dash.page.scss":
  /*!*************************************!*\
    !*** ./src/app/dash/dash.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashDashPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  text-align: center;\n}\n\nion-label {\n  width: 100%;\n  text-align: center;\n}\n\nion-slides {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaC9EOlxcU0VNOFxccDMvc3JjXFxhcHBcXGRhc2hcXGRhc2gucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoL2Rhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaC9kYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXN7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbn0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dash/dash.page.ts":
  /*!***********************************!*\
    !*** ./src/app/dash/dash.page.ts ***!
    \***********************************/

  /*! exports provided: DashPage */

  /***/
  function srcAppDashDashPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashPage", function () {
      return DashPage;
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
    /* harmony import */


    var _items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../items.service */
    "./src/app/items.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _dashmod_dashmod_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dashmod/dashmod.page */
    "./src/app/dashmod/dashmod.page.ts");
    /* harmony import */


    var _det_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./det.model */
    "./src/app/dash/det.model.ts");

    var DashPage =
    /*#__PURE__*/
    function () {
      function DashPage(iserv, http, modal) {
        _classCallCheck(this, DashPage);

        this.iserv = iserv;
        this.http = http;
        this.modal = modal;
        this.slideData = [{
          image: "https://mywash.herokuapp.com/image/img.png"
        }, {
          image: "https://mywash.herokuapp.com/image/img1.png"
        }];
        this.slideOptsOne = {
          initialSlide: 0,
          speed: 2000
        };
        this.array_serv = [];
      }

      _createClass(DashPage, [{
        key: "slidesDidLoad",
        value: function slidesDidLoad(slides) {
          slides.startAutoplay();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.http.get('https://mywash.herokuapp.com/package/show', {}).subscribe(function (result) {
            console.log(result);

            for (var key in result) {
              if (result.hasOwnProperty(key)) {
                _this.array_serv.push(new _det_model__WEBPACK_IMPORTED_MODULE_6__["det"](result[key].packageId, result[key].name, result[key].price, result[key].details, result[key].description, result[key].vehicleCatagory, result[key].vehicleType, result[key].duration));
              }
            }

            console.log(_this.array_serv);
          });
        }
      }, {
        key: "addCart",
        value: function addCart(packageId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var mod, modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    mod = this.array_serv.find(function (item) {
                      return item.packageId == packageId;
                    });
                    console.log(mod);
                    _context.next = 4;
                    return this.modal.create({
                      component: _dashmod_dashmod_page__WEBPACK_IMPORTED_MODULE_5__["DashmodPage"],
                      componentProps: mod
                    });

                  case 4:
                    modal = _context.sent;
                    _context.next = 7;
                    return modal.present();

                  case 7:
                    return _context.abrupt("return", _context.sent);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return DashPage;
    }();

    DashPage.ctorParameters = function () {
      return [{
        type: _items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    DashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dash.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dash/dash.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dash.page.scss */
      "./src/app/dash/dash.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], DashPage);
    /***/
  },

  /***/
  "./src/app/dash/det.model.ts":
  /*!***********************************!*\
    !*** ./src/app/dash/det.model.ts ***!
    \***********************************/

  /*! exports provided: det */

  /***/
  function srcAppDashDetModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "det", function () {
      return det;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var det = function det(packageId, name, price, details, description, vehicleCatagory, vehicleType, duration) {
      _classCallCheck(this, det);

      this.packageId = packageId;
      this.name = name;
      this.price = price;
      this.details = details;
      this.description = description;
      this.vehicleCatagory = vehicleCatagory;
      this.vehicleType = vehicleType;
      this.duration = duration;
    };
    /***/

  },

  /***/
  "./src/app/items.service.ts":
  /*!**********************************!*\
    !*** ./src/app/items.service.ts ***!
    \**********************************/

  /*! exports provided: ItemsService */

  /***/
  function srcAppItemsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsService", function () {
      return ItemsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ItemsService =
    /*#__PURE__*/
    function () {
      function ItemsService() {
        _classCallCheck(this, ItemsService);

        this.cart = [];
      }

      _createClass(ItemsService, [{
        key: "addtoCart",
        value: function addtoCart(data) {
          // this.servicename=data.servicename;
          // this.timecost=data.timecost;
          // this.vehicleType=data.vehicleType;
          // this.details=data.details;
          // this.price=data.price;
          // this.validtime=data.validtime;
          this.cart.push(data);
        }
      }, {
        key: "getCart",
        value: function getCart() {
          return this.cart;
        }
      }]);

      return ItemsService;
    }();

    ItemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ItemsService);
    /***/
  },

  /***/
  "./src/app/offer/offer.page.scss":
  /*!***************************************!*\
    !*** ./src/app/offer/offer.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfferOfferPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXIvRDpcXFNFTThcXHAzL3NyY1xcYXBwXFxvZmZlclxcb2ZmZXIucGFnZS5zY3NzIiwic3JjL2FwcC9vZmZlci9vZmZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvb2ZmZXIvb2ZmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/offer/offer.page.ts":
  /*!*************************************!*\
    !*** ./src/app/offer/offer.page.ts ***!
    \*************************************/

  /*! exports provided: OfferPage */

  /***/
  function srcAppOfferOfferPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferPage", function () {
      return OfferPage;
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


    var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../items.service */
    "./src/app/items.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var OfferPage =
    /*#__PURE__*/
    function () {
      function OfferPage(iserv, http) {
        _classCallCheck(this, OfferPage);

        this.iserv = iserv;
        this.http = http;
      }

      _createClass(OfferPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCart",
        value: function addCart() {
          var dat = {
            number: 123,
            serviceName: 'Offer1',
            timeCost: '10min',
            vehicleType: 'Sedan + Bike',
            details: '1 Exterior wash + 2 Weekly Interior Wash',
            price: 750,
            validTime: '2.5 Months'
          };
          this.iserv.addtoCart(dat);
          console.log(this.iserv.getCart());
          var data = this.iserv.getCart();
          this.http.post('https://mywash.herokuapp.com/service/add', data).subscribe(function (result) {
            console.log(result);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return OfferPage;
    }();

    OfferPage.ctorParameters = function () {
      return [{
        type: _items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    OfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offer.page.scss */
      "./src/app/offer/offer.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], OfferPage);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  text-align: center;\n}\n\nion-item {\n  white-space: pre-line !important;\n  min-width: 100% !important;\n}\n\nion-item {\n  margin: auto;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcU0VNOFxccDMvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUNBSjs7QURFQTtFQUNJLGdDQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgXHJcbn1cclxuIiwiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/profile/profile.page.ts ***!
    \*****************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var ProfilePage =
    /*#__PURE__*/
    function () {
      function ProfilePage(navCtrl, http, storage) {
        var _this2 = this;

        _classCallCheck(this, ProfilePage);

        this.navCtrl = navCtrl;
        this.http = http;
        this.storage = storage;
        this.storage.get('email').then(function (data) {
          _this2.em = data;
        });
        this.storage.get('num').then(function (data) {
          console.log(data);
          _this2.no = data;
        });
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], ProfilePage);
    /***/
  },

  /***/
  "./src/app/services/services.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/services/services.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppServicesServicesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  border-radius: 10px;\n  margin-top: 5% !important;\n  width: 90% !important;\n  height: 90% !important;\n}\n\nion-card-title {\n  background-color: #979a9b !important;\n}\n\nion-slide {\n  max-width: 100% !important;\n  max-height: 100% !important;\n}\n\nion-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvRDpcXFNFTThcXHAzL3NyY1xcYXBwXFxzZXJ2aWNlc1xcc2VydmljZXMucGFnZS5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENBO0VBQ0ksb0NBQUE7QUNFSjs7QURBQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6OTAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6OTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5YTliICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXNsaWRle1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5YTliICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZSB7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/services/services.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/services.page.ts ***!
    \*******************************************/

  /*! exports provided: ServicesPage */

  /***/
  function srcAppServicesServicesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesPage", function () {
      return ServicesPage;
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ServicesPage =
    /*#__PURE__*/
    function () {
      function ServicesPage(actionSheetController, router) {
        _classCallCheck(this, ServicesPage);

        this.actionSheetController = actionSheetController;
        this.router = router;
      }

      _createClass(ServicesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gotoCart",
        value: function gotoCart() {
          this.router.navigateByUrl('/cart');
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      header: 'Select Time Slot',
                      buttons: [{
                        text: '5:00 - 6:00 AM',
                        handler: function handler() {
                          console.log('first clicked');
                        }
                      }, {
                        text: '6:00 - 7:00 AM',
                        handler: function handler() {
                          console.log('second clicked');
                        }
                      }, {
                        text: '7:00 - 8:00 AM',
                        handler: function handler() {
                          console.log('third clicked');
                        }
                      }, {
                        text: '8:00 - 9:00 AM',
                        handler: function handler() {
                          console.log('fourth clicked');
                        }
                      }, {
                        text: 'Cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ServicesPage;
    }();

    ServicesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], ServicesPage.prototype, "slides", void 0);
    ServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.page.scss */
      "./src/app/services/services.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ServicesPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
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


    var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs.router.module */
    "./src/app/tabs/tabs.router.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _dash_dash_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../dash/dash.page */
    "./src/app/dash/dash.page.ts");
    /* harmony import */


    var _services_services_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/services.page */
    "./src/app/services/services.page.ts");
    /* harmony import */


    var _offer_offer_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../offer/offer.page */
    "./src/app/offer/offer.page.ts");
    /* harmony import */


    var _profile_profile_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../profile/profile.page */
    "./src/app/profile/profile.page.ts");
    /* harmony import */


    var _dashmod_dashmod_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../dashmod/dashmod.module */
    "./src/app/dashmod/dashmod.module.ts");

    var routes = [{
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]
    }];

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _dashmod_dashmod_module__WEBPACK_IMPORTED_MODULE_12__["DashmodPageModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"], _dash_dash_page__WEBPACK_IMPORTED_MODULE_8__["DashPage"], _services_services_page__WEBPACK_IMPORTED_MODULE_9__["ServicesPage"], _offer_offer_page__WEBPACK_IMPORTED_MODULE_10__["OfferPage"], _profile_profile_page__WEBPACK_IMPORTED_MODULE_11__["ProfilePage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage =
    /*#__PURE__*/
    function () {
      function TabsPage() {
        _classCallCheck(this, TabsPage);
      }

      _createClass(TabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabsPage;
    }();

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TabsPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.router.module.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/tabs.router.module.ts ***!
    \********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _dash_dash_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dash/dash.page */
    "./src/app/dash/dash.page.ts");
    /* harmony import */


    var _offer_offer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../offer/offer.page */
    "./src/app/offer/offer.page.ts");
    /* harmony import */


    var _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../profile/profile.page */
    "./src/app/profile/profile.page.ts");
    /* harmony import */


    var _services_services_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/services.page */
    "./src/app/services/services.page.ts");

    var routes1 = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'dash',
        children: [{
          path: '',
          component: _dash_dash_page__WEBPACK_IMPORTED_MODULE_4__["DashPage"]
        }]
      }, {
        path: 'offer',
        children: [{
          path: '',
          component: _offer_offer_page__WEBPACK_IMPORTED_MODULE_5__["OfferPage"]
        }]
      }, {
        path: 'profile',
        children: [{
          path: '',
          component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
        }]
      }, {
        path: 'services',
        children: [{
          path: '',
          component: _services_services_page__WEBPACK_IMPORTED_MODULE_7__["ServicesPage"]
        }]
      }, {
        path: '',
        redirectTo: 'tabs/dash',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: 'tabs/dash',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes1)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map