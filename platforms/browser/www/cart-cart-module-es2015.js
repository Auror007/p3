(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button routerLink=\"/tabs/tabs/services\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item>\n  <ion-label>Your Order Summary</ion-label>\n</ion-item>\n<ion-list>\n  <ion-item-sliding  *ngFor=\"let item of cart\" >\n    <ion-item>\n      <!-- <ion-label text-wrap>\n        {{item.name}}\n      </ion-label>\n      <br>\n      <ion-label text-wrap>\n        Vehicle number:{{item.vehnumber}}\n      </ion-label>\n      <ion-label text-wrap>\n        Validity:{{item.duration}}\n      </ion-label>\n      <ion-label slot=\"end\">\n        {{item.price}}\n      </ion-label> -->\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            {{item.name}}\n          </ion-col>\n          <ion-col>\n           Price: {{item.price}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n           Vehicle Number:{{item.vehnumber}}\n          </ion-col>\n          <ion-col>\n          Validity:  {{item.time}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item-options side=\"start\" (click)=\"deleteItem(item)\">\n      <ion-item-option color=\"danger\" >\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n\n  </ion-item-sliding>\n</ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        \n          <ion-title>Total : {{tot}}</ion-title>\n         \n\n      </ion-col>\n      <ion-col>\n\n        \n        <ion-button color=\"danger\"  (click)=\"subs()\"  expand=\"block\">Checkout</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let CartPage = class CartPage {
    constructor(cartserv, http, router, storage) {
        this.cartserv = cartserv;
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.storage.get('email').then((data) => {
            this.em = data;
        });
        this.storage.get('num').then((data) => {
            this.num = data;
        });
    }
    ngOnInit() {
        this.tot = this.cartserv.getAmount();
        this.cart = this.cartserv.getCart();
        console.log(this.cart);
    }
    deleteItem(dat) {
        this.cartserv.removeProduct(dat);
        this.tot = this.cartserv.getAmount();
    }
    subs() {
        const req = this.cart.map((item) => {
            return { email: this.em, id: item.id, number: item.vehnumber };
        });
        console.log(req);
        // this.http.post('https://mywash.herokuapp.com/service/add',req ).subscribe(
        //   (result) => {
        //     console.log('added');
        //   });
        //   this.router.navigateByUrl('/tabs/tabs/services'); 
        this.http.post('https://mywash.herokuapp.com/payment', { amount: this.tot }).subscribe((result) => {
            console.log(result);
        });
        var options = {
            description: 'Subscription fee',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: "INR",
            key: "rzp_test_8gpkmLwN2hocfu",
            amount: this.tot * 100,
            name: 'Payment',
            method: "upi",
            prefill: {
                email: this.em,
                contact: this.num,
                name: 'Carwash'
            },
            theme: {
                color: '#2525f4'
            },
            modal: {
                ondismiss: function () {
                    alert('dismissed');
                }
            }
        };
        var successCallback = function (payment_id) {
            console.log(payment_id);
        };
        var cancelCallback = function (error) {
            alert(error.description + ' (Error ' + error.code + ')');
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
        this.router.navigateByUrl('/tabs/tabs/services');
    }
};
CartPage.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map