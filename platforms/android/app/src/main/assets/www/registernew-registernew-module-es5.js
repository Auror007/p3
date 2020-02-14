function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registernew-registernew-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registernew/registernew.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registernew/registernew.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisternewRegisternewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header>\n    <ion-toolbar>\n      <ion-title align-title=\"center\">Verify OTP</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <br>\n    <br>\n  \n    <ion-item>\n      <ion-label position=\"floating\" center>\n        CONFIRM OTP\n      </ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"otp\"></ion-input>\n    </ion-item> <br>\n    <br>\n  \n    <ion-row>\n        <ion-button style=\"margin-left: 35%;margin-right: 30%;\" fill=\"solid\" shape=\"round\" color=\"dark\" expand=\"block\" class=\"buttons\" size=\"large\"\n          (click)=verify()>VERIFY</ion-button>\n    </ion-row>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/registernew/registernew.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/registernew/registernew.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisternewPageModule */

  /***/
  function srcAppRegisternewRegisternewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisternewPageModule", function () {
      return RegisternewPageModule;
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


    var _registernew_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registernew.page */
    "./src/app/registernew/registernew.page.ts");

    var routes = [{
      path: '',
      component: _registernew_page__WEBPACK_IMPORTED_MODULE_6__["RegisternewPage"]
    }];

    var RegisternewPageModule = function RegisternewPageModule() {
      _classCallCheck(this, RegisternewPageModule);
    };

    RegisternewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_registernew_page__WEBPACK_IMPORTED_MODULE_6__["RegisternewPage"]]
    })], RegisternewPageModule);
    /***/
  },

  /***/
  "./src/app/registernew/registernew.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/registernew/registernew.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisternewRegisternewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVybmV3L3JlZ2lzdGVybmV3LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/registernew/registernew.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/registernew/registernew.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisternewPage */

  /***/
  function srcAppRegisternewRegisternewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisternewPage", function () {
      return RegisternewPage;
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


    var _register_regservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../register/regservice.service */
    "./src/app/register/regservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var RegisternewPage =
    /*#__PURE__*/
    function () {
      function RegisternewPage(regServ, http, router, nav) {
        _classCallCheck(this, RegisternewPage);

        this.regServ = regServ;
        this.http = http;
        this.router = router;
        this.nav = nav;
        this.otp = '';
      }

      _createClass(RegisternewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "verify",
        value: function verify() {
          var _this = this;

          var otp = this.otp;
          this.regServ.setOtp(otp);
          var data = this.regServ.getJson();
          console.log(data);

          try {
            this.http.post('https://mywash.herokuapp.com/verify', data).subscribe(function (result) {
              console.log(result);

              if (result.message == true) {
                _this.router.navigateByUrl('/tabs');
              }
            }, function (error) {
              console.log(error);
            });
          } catch (err) {
            console.dir(err);
          }
        }
      }]);

      return RegisternewPage;
    }();

    RegisternewPage.ctorParameters = function () {
      return [{
        type: _register_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    RegisternewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registernew',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registernew.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registernew/registernew.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registernew.page.scss */
      "./src/app/registernew/registernew.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_register_regservice_service__WEBPACK_IMPORTED_MODULE_2__["RegserviceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], RegisternewPage);
    /***/
  }
}]);
//# sourceMappingURL=registernew-registernew-module-es5.js.map