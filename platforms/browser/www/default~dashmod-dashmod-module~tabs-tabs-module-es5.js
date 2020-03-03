function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashmod-dashmod-module~tabs-tabs-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashmod/dashmod.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashmod/dashmod.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashmodDashmodPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Details</ion-title>\n   \n    <ion-button color=\"danger\" slot=\"end\"  (click)=\"fdismiss()\">Close\n     </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>{{title}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{desp}}</ion-label>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n<ion-footer class=\"ion-no-border\">\n <ion-item>\n  <ion-toolbar style=\"font-size: medium;\">\n    <ion-label slot=\"start\">Price:</ion-label>\n    <ion-label>{{price}}</ion-label>\n    <ion-fab-button (click)=\"presentPopover()\"  color=\"danger\" size=\"small\" slot=\"end\">\n      <ion-icon name=\"add\"></ion-icon>\n\n    </ion-fab-button>\n  </ion-toolbar>\n</ion-item>\n</ion-footer>\n";
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
  },

  /***/
  "./src/app/dashmod/dashmod.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/dashmod/dashmod.module.ts ***!
    \*******************************************/

  /*! exports provided: DashmodPageModule */

  /***/
  function srcAppDashmodDashmodModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashmodPageModule", function () {
      return DashmodPageModule;
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


    var _dashmod_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashmod.page */
    "./src/app/dashmod/dashmod.page.ts");
    /* harmony import */


    var _carpop_carpop_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../carpop/carpop.module */
    "./src/app/carpop/carpop.module.ts");

    var routes = [{
      path: '',
      component: _dashmod_page__WEBPACK_IMPORTED_MODULE_6__["DashmodPage"]
    }];

    var DashmodPageModule = function DashmodPageModule() {
      _classCallCheck(this, DashmodPageModule);
    };

    DashmodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _carpop_carpop_module__WEBPACK_IMPORTED_MODULE_7__["CarpopPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_dashmod_page__WEBPACK_IMPORTED_MODULE_6__["DashmodPage"]]
    })], DashmodPageModule);
    /***/
  },

  /***/
  "./src/app/dashmod/dashmod.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/dashmod/dashmod.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashmodDashmodPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2htb2QvZGFzaG1vZC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/dashmod/dashmod.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/dashmod/dashmod.page.ts ***!
    \*****************************************/

  /*! exports provided: DashmodPage */

  /***/
  function srcAppDashmodDashmodPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashmodPage", function () {
      return DashmodPage;
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


    var _carpop_carpop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../carpop/carpop.page */
    "./src/app/carpop/carpop.page.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");

    var DashmodPage =
    /*#__PURE__*/
    function () {
      function DashmodPage(modalCtrl, navParams, events, popoverController, http, storage, cartService) {
        var _this = this;

        _classCallCheck(this, DashmodPage);

        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.events = events;
        this.popoverController = popoverController;
        this.http = http;
        this.storage = storage;
        this.cartService = cartService;
        this.desp = navParams.get('description');
        this.title = navParams.get('details');
        this.price = navParams.get('price');
        this.cat = navParams.get('vehicleCatagory');
        this.id = navParams.get('packageId');
        this.name = navParams.get('title');
        this.time = navParams.get('duration');
        this.storage.get('email').then(function (data) {
          _this.email = data;
        });
      }

      _createClass(DashmodPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var em = 'parmar.parth97531@gmail.com';
          var req = {
            email: em,
            vehicleCatagory: this.cat
          };
          console.log(req);
          this.http.post('https://mywash.herokuapp.com/service/find', req).subscribe(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(result);
                      this.crt = result;

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "presentPopover",
        value: function presentPopover() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var ev, popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //  this.http.post<Array<{vehicleModel:string,number:string}>>('https://mywash.herokuapp.com/service/find',req ).subscribe(
                    //  async (result) => {
                    //    console.log('GOT ANSWER',result)
                    //     this.crt=result;
                    //     let temp=this.cartService.getCart();
                    //   //  console.log(cardet);
                    //      this.crt.filter((item)=>{
                    //           if(cart's numbers != 
                    //      });
                    console.log(this.crt);
                    _context2.next = 3;
                    return this.popoverController.create({
                      component: _carpop_carpop_page__WEBPACK_IMPORTED_MODULE_3__["CarpopPage"],
                      componentProps: {
                        'list': this.crt
                      },
                      event: ev,
                      translucent: true
                    });

                  case 3:
                    popover = _context2.sent;
                    popover.onDidDismiss().then(function (result) {
                      _this3.selection = result.data;

                      _this3.dismiss();
                    });
                    _context2.next = 7;
                    return popover.present();

                  case 7:
                    return _context2.abrupt("return", _context2.sent);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          var _this4 = this;

          var prod = {
            id: this.id,
            name: this.name,
            time: this.time,
            vehnumber: this.selection,
            price: this.price
          };

          if (prod.vehnumber == undefined) {
            this.fdismiss();
          } else {
            console.log(prod);
            this.crt = this.crt.filter(function (item) {
              return item.number != _this4.selection;
            });
            console.log(this.crt);
            this.cartService.addProduct(prod);
          }
        }
      }, {
        key: "fdismiss",
        value: function fdismiss() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return DashmodPage;
    }();

    DashmodPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
      }];
    };

    DashmodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashmod',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashmod.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashmod/dashmod.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashmod.page.scss */
      "./src/app/dashmod/dashmod.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])], DashmodPage);
    /***/
  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CartService =
    /*#__PURE__*/
    function () {
      function CartService() {
        _classCallCheck(this, CartService);

        this.cart = [];
        this.amount = 0;
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
      }

      _createClass(CartService, [{
        key: "getCart",
        value: function getCart() {
          return this.cart;
        }
      }, {
        key: "getAmount",
        value: function getAmount() {
          return this.amount;
        }
      }, {
        key: "addProduct",
        value: function addProduct(product) {
          this.cart.push(product);
          this.amount = this.amount + product.price;
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(product) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.cart.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _step$value = _slicedToArray(_step.value, 2),
                  index = _step$value[0],
                  p = _step$value[1];

              if (p.vehnumber === product.vehnumber) {
                this.amount = this.amount - p.price;
                this.cart.splice(index, 1);
              }
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
        }
      }]);

      return CartService;
    }();

    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CartService);
    /***/
  }
}]);
//# sourceMappingURL=default~dashmod-dashmod-module~tabs-tabs-module-es5.js.map