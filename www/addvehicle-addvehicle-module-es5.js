function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addvehicle-addvehicle-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/addvehicle/addvehicle.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addvehicle/addvehicle.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddvehicleAddvehiclePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"text-align:center;\">Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #pageTop>\n\n    <br>\n    <br>\n    <ion-item>\n        <ion-label >Vehicle type </ion-label>\n        <ion-select interface=\"popover\" [(ngModel)]=\"type\" (ionChange)=\"onChange1(type)\">\n            <ion-select-option value=\"Two wheeler\">Two-wheeler</ion-select-option>\n            <ion-select-option value=\"Car\">Car</ion-select-option>\n          </ion-select>\n      </ion-item>\n      <ion-item [hidden]=\"!car\">\n                  \n        <ion-label>Car type</ion-label>\n        <ion-select interface=\"popover\" [(ngModel)]=\"catagory\" (ionChange)=\"onChange2()\">\n          <ion-select-option value=\"sedan\">Sedan</ion-select-option>\n          <ion-select-option value=\"hatchback\">Hatchback</ion-select-option>\n          <ion-select-option value=\"suv\">SUV</ion-select-option>\n          </ion-select>\n      </ion-item>\n      <ion-item [hidden]=\"!bike\">\n          \n          <ion-label>Bike type</ion-label>\n          <ion-select interface=\"popover\" [(ngModel)]=\"catagory\">\n          <ion-select-option value=\"sports\">sports bike</ion-select-option>\n          <ion-select-option value=\"moped\">moped</ion-select-option>\n          <ion-select-option value=\"bike\">bike</ion-select-option>\n          </ion-select> \n          <br>\n          <br>     \n      </ion-item>\n      \n     \n      <ion-item>\n          <ion-label >Select Brand</ion-label>\n            \n          <ion-select interface=\"popover\" [(ngModel)]=\"brand\" [hidden]=\"!car\" (ionChange)=\"sendCardet()\">\n            <ion-select-option value=\"hyundai\">Hyundai</ion-select-option>\n            <ion-select-option value=\"suzuki\">Maruti Suzuki</ion-select-option>\n            <ion-select-option value=\"honda\">Honda</ion-select-option>\n            </ion-select>\n\n            <ion-select interface=\"popover\" [(ngModel)]=\"brand\" [hidden]=\"!bike\" >\n                <ion-select-option value=\"Honda\">Honda</ion-select-option>\n                <ion-select-option value=\"Bajaj\">bajaj</ion-select-option>\n                <ion-select-option value=\"Hero\">hero</ion-select-option>\n                </ion-select>\n        </ion-item>\n        <br>\n      <br>\n      <ion-item>\n        <ion-label >Select Model</ion-label>\n        <ion-select interface=\"popover\" [(ngModel)]=\"model\">\n          <ion-select-option *ngFor=\"let model of resp.list\">{{model}}</ion-select-option>\n          </ion-select>\n          </ion-item>\n          <br>\n      <br>\n      <ion-item  >\n              <ion-label >Vehicle Number</ion-label>\n              <ion-input placeholder=\"Eg: GJ-13-CC-710\" [(ngModel)]=\"number\" ></ion-input>\n            </ion-item>\n            <br>\n      <br>\n      <ion-item>\n                <ion-label >Parking location</ion-label><br>\n                <ion-select  interface=\"popover\" [(ngModel)]=\"area\" (ionChange)=\"onChange()\">\n                    <ion-select-option value=\"Basement 1\">Basement 1</ion-select-option>\n                    <ion-select-option value=\"Basement 2\">Basement 2</ion-select-option>\n                    <ion-select-option value=\"Ground Floor\">Ground Floor</ion-select-option>\n                    <ion-select-option value=\"4\">Other</ion-select-option>\n                </ion-select>\n      </ion-item>\n        <ion-item *ngIf=\"vara==4\">\n            <ion-label>Specify location</ion-label>\n            <ion-input  type=\"text\" [(ngModel)]=\"area\"></ion-input>\n        </ion-item>\n              <br>\n      <br>\n      <ion-item>\n                  <ion-label>Preferred time</ion-label>\n                  <ion-select interface=\"popover\" [(ngModel)]=\"time\">\n                      <ion-select-option value=5>5:00-6:00 AM</ion-select-option>\n                      <ion-select-option value=6>6:00-7:00 AM</ion-select-option>\n                      <ion-select-option value=7>7:00-8:00 AM</ion-select-option>\n                      <ion-select-option value=8>8:00-9:00 AM</ion-select-option>\n                      <!-- <ion-select-option value=\"0\">Any</ion-select-option> -->\n\n                  </ion-select>\n                </ion-item>\n                <br>\n                <br>\n                <br>\n               \n                <br>\n                <br>\n                <br>\n                \n<ion-button  shape=round class=\"buttons\" size=medium  fill=\"solid\" expand=\"block\" color=\"dark\"  (click)=dash()  style=\"width: 50%;margin-right:25%;margin-left:25%\" >Add More</ion-button>\n<br>\n<ion-button  shape=round class=\"buttons\" size=medium  fill=\"solid\" expand=\"block\" color=\"dark\" (click)=finaldash()  style=\"width: 50%;margin-right:25%;margin-left:25%\" >Submit</ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/addvehicle/addvehicle.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/addvehicle/addvehicle.module.ts ***!
    \*************************************************/

  /*! exports provided: AddvehiclePageModule */

  /***/
  function srcAppAddvehicleAddvehicleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddvehiclePageModule", function () {
      return AddvehiclePageModule;
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


    var _addvehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addvehicle.page */
    "./src/app/addvehicle/addvehicle.page.ts");

    var routes = [{
      path: '',
      component: _addvehicle_page__WEBPACK_IMPORTED_MODULE_6__["AddvehiclePage"]
    }];

    var AddvehiclePageModule = function AddvehiclePageModule() {
      _classCallCheck(this, AddvehiclePageModule);
    };

    AddvehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_addvehicle_page__WEBPACK_IMPORTED_MODULE_6__["AddvehiclePage"]]
    })], AddvehiclePageModule);
    /***/
  },

  /***/
  "./src/app/addvehicle/addvehicle.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/addvehicle/addvehicle.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddvehicleAddvehiclePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHZlaGljbGUvYWRkdmVoaWNsZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/addvehicle/addvehicle.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/addvehicle/addvehicle.page.ts ***!
    \***********************************************/

  /*! exports provided: AddvehiclePage */

  /***/
  function srcAppAddvehicleAddvehiclePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddvehiclePage", function () {
      return AddvehiclePage;
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


    var _details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details.service */
    "./src/app/addvehicle/details.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _register_regservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../register/regservice.service */
    "./src/app/register/regservice.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var AddvehiclePage = /*#__PURE__*/function () {
      function AddvehiclePage(storage, router, detServ, regServ, http, geolocation, toastController, events) {
        var _this = this;

        _classCallCheck(this, AddvehiclePage);

        this.storage = storage;
        this.router = router;
        this.detServ = detServ;
        this.regServ = regServ;
        this.http = http;
        this.geolocation = geolocation;
        this.toastController = toastController;
        this.events = events;
        this.resp = {
          list: []
        };
        this.vara = 0;
        this.storage.get('email').then(function (data) {
          console.log(data);
          _this.email = data; //static because this page is hit only after registration
          //this.email='parmar.parth97531@gmail.com'
        });
        this.storage.get('addr').then(function (data) {
          console.log(data);
          _this.address = data; //static because this page is hit only after registration
          //this.email='parmar.parth97531@gmail.com'
        });
        this.storage.get('cord').then(function (data) {
          console.log(data);
          _this.lat = data.lat;
          _this.lng = data.lng; //static because this page is hit only after registration
          //this.email='parmar.parth97531@gmail.com'
        });
      }

      _createClass(AddvehiclePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dash",
        value: function dash() {
          var _this2 = this;

          this.detServ.setEmail(this.email);
          this.detServ.setModel(this.model);
          this.detServ.setNumber(this.number);
          this.detServ.setParkingarea(this.area);
          this.detServ.setprefferedTime(this.time);
          this.detServ.setBrand(this.brand);
          this.detServ.setCategory(this.catagory);
          this.detServ.setType(this.type);
          this.detServ.setAddress(this.address);
          this.detServ.setLat(this.lat);
          this.detServ.setLng(this.lng);
          var data = this.detServ.getDet();
          console.log(data);
          this.http.post('https://mywash.herokuapp.com/uservehicle/addvehicle', data).subscribe(function (result) {
            console.log(result);

            if (result.message == true) {
              _this2.area = '';
              _this2.type = '';
              _this2.brand = '';
              _this2.model = '';
              _this2.number = '';
              _this2.time = 0;
              _this2.catagory = '';

              _this2.pageTop.scrollToTop();
            } else if (result.message == false) {//alert and clear  relavent inputs
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "finaldash",
        value: function finaldash() {
          var _this3 = this;

          this.detServ.setEmail(this.email);
          this.detServ.setModel(this.model);
          this.detServ.setNumber(this.number);
          this.detServ.setParkingarea(this.area);
          this.detServ.setprefferedTime(this.time);
          this.detServ.setBrand(this.brand);
          this.detServ.setCategory(this.catagory);
          this.detServ.setType(this.type);
          this.detServ.setLat(this.lat);
          this.detServ.setLng(this.lng);
          this.detServ.setAddress(this.address);
          var data = this.detServ.getDet();
          console.log(data);
          this.http.post('https://mywash.herokuapp.com/uservehicle/addvehicle', data).subscribe(function (result) {
            console.log(result);

            if (result.message == true) {
              _this3.storage.set('activity', 'loggedin');

              _this3.area = '';
              _this3.type = '';
              _this3.brand = '';
              _this3.model = '';
              _this3.number = '';
              _this3.time = 0;
              _this3.catagory = '';

              _this3.events.publish('check1', 'update');

              _this3.router.navigateByUrl('/tabs/tabs/dash');
            } else if (result.message == false) {//alert and clear  relavent inputs
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onChange",
        value: function onChange() {
          if (this.area == '4') {
            this.vara = 4;
            this.area = undefined;
          } else {//this.vara=this.area;
          }
        }
      }, {
        key: "addArea",
        value: function addArea(data) {
          this.area = data;
        }
      }, {
        key: "onChange1",
        value: function onChange1(type) {
          console.log(this.type);
          this.detServ.setType(this.type);

          if (this.type == "Car") {
            this.car = 1;
            this.bike = 0;
          } else {
            this.bike = 1;
            this.car = 0;
          }
        }
      }, {
        key: "onChange2",
        value: function onChange2() {
          this.brand = '';
          this.model = '';
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: 'Your location has been saved!',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "sendCardet",
        value: function sendCardet() {
          var _this4 = this;

          this.detServ.setCategory(this.catagory);
          this.detServ.setBrand(this.brand);
          var data = this.detServ.getCardet();
          console.log(this.detServ.getCardet());
          this.http.post('https://mywash.herokuapp.com/uservehicle/findModel', data).subscribe(function (result) {
            console.log(result.list);
            _this4.resp.list = result.list;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return AddvehiclePage;
    }();

    AddvehiclePage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _details_service__WEBPACK_IMPORTED_MODULE_3__["DetailsService"]
      }, {
        type: _register_regservice_service__WEBPACK_IMPORTED_MODULE_6__["RegserviceService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pageTop', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"])], AddvehiclePage.prototype, "pageTop", void 0);
    AddvehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addvehicle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addvehicle.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/addvehicle/addvehicle.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addvehicle.page.scss */
      "./src/app/addvehicle/addvehicle.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _details_service__WEBPACK_IMPORTED_MODULE_3__["DetailsService"], _register_regservice_service__WEBPACK_IMPORTED_MODULE_6__["RegserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"]])], AddvehiclePage);
    /***/
  },

  /***/
  "./src/app/addvehicle/details.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/addvehicle/details.service.ts ***!
    \***********************************************/

  /*! exports provided: DetailsService */

  /***/
  function srcAppAddvehicleDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsService", function () {
      return DetailsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DetailsService = /*#__PURE__*/function () {
      function DetailsService() {
        _classCallCheck(this, DetailsService);

        this.details = {
          email: String,
          vehicleType: String,
          brandName: String,
          vehicleModel: String,
          vehicleCatagory: String,
          number: String,
          parkingarea: String,
          address: String,
          lat: Number,
          lng: Number,
          prefferedTime: Number,
          flag: 0
        };
      }

      _createClass(DetailsService, [{
        key: "setEmail",
        value: function setEmail(data) {
          this.details.email = data;
        }
      }, {
        key: "setType",
        value: function setType(data) {
          this.details.vehicleType = data;
        }
      }, {
        key: "setBrand",
        value: function setBrand(data) {
          this.details.brandName = data;
        }
      }, {
        key: "setModel",
        value: function setModel(data) {
          this.details.vehicleModel = data;
        }
      }, {
        key: "setCategory",
        value: function setCategory(data) {
          this.details.vehicleCatagory = data;
        }
      }, {
        key: "setParkingarea",
        value: function setParkingarea(data) {
          this.details.parkingarea = data;
        }
      }, {
        key: "setNumber",
        value: function setNumber(data) {
          this.details.number = data;
        }
      }, {
        key: "setAddress",
        value: function setAddress(data) {
          this.details.address = data;
        }
      }, {
        key: "setLat",
        value: function setLat(data) {
          this.details.lat = data;
        }
      }, {
        key: "setLng",
        value: function setLng(data) {
          this.details.lng = data;
        }
      }, {
        key: "setprefferedTime",
        value: function setprefferedTime(data) {
          this.details.prefferedTime = data;
        }
      }, {
        key: "getCardet",
        value: function getCardet() {
          var cardet = {
            brand: this.details.brandName,
            catagory: this.details.vehicleCatagory
          };
          return cardet;
        }
      }, {
        key: "getDet",
        value: function getDet() {
          return this.details;
        }
      }]);

      return DetailsService;
    }();

    DetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DetailsService);
    /***/
  }
}]);
//# sourceMappingURL=addvehicle-addvehicle-module-es5.js.map