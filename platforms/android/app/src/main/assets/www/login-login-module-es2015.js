(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-title>Login</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class=\"ion-list\">\n        <br>\n        <br>\n      <ion-item>\n        <ion-label  position=\"floating\">\n         Enter E-mail\n        </ion-label>\n        <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n      <br>\n      <br>\n      <!-- <ion-item>\n          <ion-label  position=\"floating\">\n              Password\n             </ion-label>\n             <ion-input type=\"password\" [(ngModel)]=\"pass\"></ion-input>\n      </ion-item> -->\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n  <ion-button  shape=round class=\"buttons\" size=large  fill=\"solid\" expand=\"block\" color=\"dark\" (click)=login()  style=\"width: 50%;margin-right:25%;margin-left:25%\" >Login</ion-button>\n  <br>\n    <br>\n    <br>\n    <br>\n  <ion-button  shape=round class=\"buttons\" size=large  fill=\"solid\" expand=\"block\" color=\"dark\" (click)=dash()  style=\"width: 50%;margin-right:25%;margin-left:25%\" >Add Vehicle</ion-button> \n</ion-content>\n  ");

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttons {\n  width: 40%;\n  font-size: 18px;\n}\n\nion-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFNFTThcXHAzL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxVQUFBO0VBRUEsZUFBQTtBQ0RKOztBRElBO0VBRUksa0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zXHJcbntcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIFxyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5idXR0b25zIHtcbiAgd2lkdGg6IDQwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_regservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/regservice.service */ "./src/app/register/regservice.service.ts");






let LoginPage = class LoginPage {
    constructor(router, http, alerCtrl, regServ) {
        this.router = router;
        this.http = http;
        this.alerCtrl = alerCtrl;
        this.regServ = regServ;
        this.email = '';
    }
    ngOnInit() {
    }
    dash() {
        this.router.navigateByUrl('/addvehicle');
    }
    login() {
        const email = this.email;
        if (email.length == 0) {
            this.doAlert('Enter Valid Email!', 'Okay');
        }
        else {
            this.regServ.setEmail(email);
            const data = {
                email: this.regServ.getEmail()
            };
            //check is user already logged in then route directly to dash else to registration pages
            console.log(data);
            this.http.post('https://mywash.herokuapp.com/loginotp', data).subscribe((result) => {
                console.log(result);
                if (result.message == true) {
                    this.router.navigateByUrl('/registernew');
                }
                else {
                    this.doAlert('Not Registered', 'Register Now');
                    this.router.navigateByUrl('/register');
                }
            }, error => {
                console.log(error);
            });
        }
    }
    /*async login()
     {
       const options={
         email: this.username,
         password: this.pass
       };
  
       try {
         this.http.post('https://mywash.herokuapp.com/auth', options).subscribe(
           result => {
  
           if (result == "user doesn't exist") {
             this.doAlert( "Username Incorrect" , "Retype" );
     } else if(result == 'wrong password') {
             this.doAlert( 'Password Incorrect' , 'Retype' );
      } else {
       this.router.navigateByUrl('/dash');
       }
  
         },
         error => {
           this.doAlert('HELLO ERROR','OKAY');
         });
  
       } catch (err) {
         console.dir(err)
       }
     }*/
    doAlert(msg, btn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alerCtrl.create({
                header: 'Error',
                message: msg,
                buttons: [btn],
            });
            yield alert.present();
            if (alert.message == 'Enter valid Number') {
                this.email = '';
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _register_regservice_service__WEBPACK_IMPORTED_MODULE_5__["RegserviceService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _register_regservice_service__WEBPACK_IMPORTED_MODULE_5__["RegserviceService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map