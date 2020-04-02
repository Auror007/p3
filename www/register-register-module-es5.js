function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n      <ion-title align-title=\"center\">Register</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <div class=\"ion-list\">\n      \n        <ion-item>\n        <br>\n        <br>\n        <ion-label position=\"floating\">\n          Name\n        </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n      </ion-item>\n      <br>\n      <br>\n  \n      <ion-item class=\"input-cover\">\n        <ion-label position=\"floating\">\n          Email\n        </ion-label>\n        <ion-input  type=\"email\" [(ngModel)]=\"email\" (change)=\"viewval()\" [pattern]=\"emailPattern\" #val=\"ngModel\"></ion-input>\n        \n      </ion-item>\n      <div style=\"font-size: small;color: red;margin-left:5%;\" *ngIf=\"val.errors?.pattern\" (change)=\"viewval()\"> \n        Email not valid\n      </div> \n      \n      <br>\n      <br>\n  \n      <ion-item>\n        <ion-label position=\"floating\">\n          Phonenumber\n        </ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"phonenumber\"></ion-input>\n      </ion-item>\n      <br>\n      <br>\n      <ion-item>\n        <ion-label position=\"fixed\">\n          Address\n        </ion-label>\n<ion-button slot=\"end\"routerLink=\"/pickloc\" routerDirection=\"forward\">Select Location</ion-button>\n  </ion-item>\n      <br>\n      <br>\n  \n      <ion-row>\n        <ion-button fill=\"solid\" shape=\"round\" color=\"dark\" expand=\"block\" class=\"buttons\" size=\"large\"\n           (click)=sendotp()>Register</ion-button>\n        <ion-button fill=\"solid\" shape=\"round\" color=\"danger\" expand=\"block\" class=\"buttons\" size=\"large\"\n          (click)=gotoLogin()>Login</ion-button>\n      </ion-row>\n      <br>\n      <!-- <ion-title>Or Sign Up using</ion-title>\n      <br>\n      <ion-button fill=\"solid\" color=\"primary\" expand=\"full\" class=\"buttons1\" size=\"large\">Facebook</ion-button>\n      <br>\n      \n      <ion-button fill=\"solid\" color=\"danger\" expand=\"block\" class=\"buttons1\" size=\"large\">Google</ion-button> -->\n    </div>\n    \n  \n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }];

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttons {\n  width: 40%;\n  margin-left: 6%;\n  font-size: 18px;\n}\n\nion-button.buttons1 {\n  margin-left: 6%;\n  font-size: 18px;\n  width: 88%;\n  border-radius: 50px;\n}\n\nion-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXFNFTThcXHAzL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBSjs7QURJQTtFQUVJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDRko7O0FETUE7RUFFSSxrQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnNcclxue1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OjYlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi1idXR0b24uYnV0dG9uczFcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6NiU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7IFxyXG4gICAgd2lkdGg6ODglO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5idXR0b25zIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDYlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi1idXR0b24uYnV0dG9uczEge1xuICBtYXJnaW4tbGVmdDogNiU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDg4JTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _regservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./regservice.service */
    "./src/app/register/regservice.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(storage, alerCtrl, router, http, regServ) {
        _classCallCheck(this, RegisterPage);

        this.storage = storage;
        this.alerCtrl = alerCtrl;
        this.router = router;
        this.http = http;
        this.regServ = regServ;
        this.val = 'valid';
        this.phonenumber = '';
        this.username = '';
        this.email = '';
        this.addr = '';
        this.emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storage.get('activity').then(function (data) {
            console.log(data);

            if (data == 'loggedin') {
              _this.router.navigate(['/tabs/tabs/dash'], {
                replaceUrl: true
              });
            } else if (data == 'loggingin') {
              _this.router.navigate(['/login'], {
                replaceUrl: true
              });
            } else if (data == 'registered') {
              _this.router.navigate(['/login'], {
                replaceUrl: true
              });
            }
          });
        }
      }, {
        key: "doAlert",
        value: function doAlert(msg, btn) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alerCtrl.create({
                      header: 'Error',
                      message: msg,
                      buttons: [btn]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "gotoLogin",
        value: function gotoLogin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.router.navigate(['/login'], {
                      replaceUrl: true
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // pickloc(){
        //   this.router.navigateByUrl('/pickloc');
        // }

      }, {
        key: "sendotp",
        value: function sendotp() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var flag, phone, username, email, regexp, data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.storage.get('addr').then(function (res) {
                      console.log(res);
                      flag = res;
                    });

                  case 2:
                    phone = '91' + this.phonenumber;
                    username = this.username;
                    email = this.email;
                    regexp = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
                    console.log(regexp.test(email));

                    if (username.length == 0) {
                      this.doAlert('Enter Valid Username!', 'Okay');
                      this.username = '';
                    } else if (!regexp.test(email)) {
                      //regex email
                      this.doAlert('Enter Valid Email!', 'Okay');
                      this.email = '';
                    } else if (phone.length < 12 || phone.length > 12) {
                      this.doAlert('Enter Valid Phonenumber!', 'Okay');
                      this.phonenumber = '';
                      console.log(this.val);
                    } else if (flag == null) {
                      console.log(flag);
                      this.doAlert('Select Address!', 'Okay');
                    } else {
                      this.regServ.setPhone(phone);
                      this.regServ.setName(username);
                      this.regServ.setEmail(email);
                      data = {
                        userName: this.regServ.getName(),
                        email: this.regServ.getEmail(),
                        phone: this.regServ.getPhone()
                      };
                      console.log(data);
                      this.http.post('https://mywash.herokuapp.com/registerotp', data).subscribe(function (result) {
                        console.log(result.message);

                        if (result.message == '2') {
                          _this2.storage.set('email', _this2.email).then(function (successData) {
                            console.log('email stored');
                          });

                          _this2.storage.set('name', _this2.username).then(function (successData) {
                            console.log('name stored');
                          });

                          _this2.storage.set('activity', 'registered').then(function (successData) {
                            console.log('activity :stored');
                          });

                          _this2.router.navigate(['/registernew'], {
                            replaceUrl: true
                          });
                        } else if (result.message == '1') {
                          _this2.doAlert('Phonenumber Already Registered!', 'Okay');

                          _this2.phonenumber = '';
                        } else if (result.message == '0') {
                          _this2.doAlert('Email Already Registered!', 'Okay');

                          _this2.email = '';
                        } else {
                          console.log('hello');

                          _this2.doAlert('User exists', 'Okay');

                          _this2.phonenumber = '';
                        }
                      }, function (error) {
                        console.log(error);
                      });
                    }

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "viewval",
        value: function viewval() {}
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _regservice_service__WEBPACK_IMPORTED_MODULE_5__["RegserviceService"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _regservice_service__WEBPACK_IMPORTED_MODULE_5__["RegserviceService"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map