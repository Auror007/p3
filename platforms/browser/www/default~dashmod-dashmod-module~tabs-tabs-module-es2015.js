(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashmod-dashmod-module~tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carpop/carpop.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carpop/carpop.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"text-align: center;\">\n    Select Car\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list style=\"margin-bottom: 0%;\" *ngFor=\"let item of list\">\n<ion-item button (click)=\"onClick(item)\">\n<ion-label style=\"text-align: center;\">{{item.vehicleModel}}</ion-label>\n</ion-item>\n</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashmod/dashmod.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashmod/dashmod.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Details</ion-title>\n   \n    <ion-button color=\"danger\" slot=\"end\" (click)=\"fdismiss()\">View Cart\n     </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>{{title}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{desp}}</ion-label>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n<ion-footer class=\"ion-no-border\">\n <ion-item>\n  <ion-toolbar style=\"font-size: medium;\">\n    <ion-label slot=\"start\">Price:</ion-label>\n    <ion-label>{{price}}</ion-label>\n    <ion-fab-button (click)=\"presentPopover()\"  color=\"danger\" size=\"small\" slot=\"end\">\n      <ion-icon name=\"add\"></ion-icon>\n\n    </ion-fab-button>\n  </ion-toolbar>\n</ion-item>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/carpop/carpop.module.ts":
/*!*****************************************!*\
  !*** ./src/app/carpop/carpop.module.ts ***!
  \*****************************************/
/*! exports provided: CarpopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpopPageModule", function() { return CarpopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _carpop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carpop.page */ "./src/app/carpop/carpop.page.ts");







const routes = [
    {
        path: '',
        component: _carpop_page__WEBPACK_IMPORTED_MODULE_6__["CarpopPage"]
    }
];
let CarpopPageModule = class CarpopPageModule {
};
CarpopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_carpop_page__WEBPACK_IMPORTED_MODULE_6__["CarpopPage"]]
    })
], CarpopPageModule);



/***/ }),

/***/ "./src/app/carpop/carpop.page.scss":
/*!*****************************************!*\
  !*** ./src/app/carpop/carpop.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  margin: auto;\n  padding: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycG9wL0Q6XFxTRU04XFxwMy9zcmNcXGFwcFxcY2FycG9wXFxjYXJwb3AucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJwb3AvY2FycG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2FycG9wL2NhcnBvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IGluaXRpYWw7ICAgIFxyXG59IiwiaW9uLWl0ZW0ge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IGluaXRpYWw7XG59Il19 */");

/***/ }),

/***/ "./src/app/carpop/carpop.page.ts":
/*!***************************************!*\
  !*** ./src/app/carpop/carpop.page.ts ***!
  \***************************************/
/*! exports provided: CarpopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpopPage", function() { return CarpopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let CarpopPage = class CarpopPage {
    constructor(events, popoverController) {
        this.events = events;
        this.popoverController = popoverController;
        this.list = [];
    }
    ngOnInit() {
    }
    onClick(val) {
        this.popoverController.dismiss(val.number);
        console.log("dismissed");
    }
};
CarpopPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CarpopPage.prototype, "list", void 0);
CarpopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carpop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carpop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carpop/carpop.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carpop.page.scss */ "./src/app/carpop/carpop.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], CarpopPage);



/***/ }),

/***/ "./src/app/dashmod/dashmod.module.ts":
/*!*******************************************!*\
  !*** ./src/app/dashmod/dashmod.module.ts ***!
  \*******************************************/
/*! exports provided: DashmodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashmodPageModule", function() { return DashmodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashmod_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashmod.page */ "./src/app/dashmod/dashmod.page.ts");
/* harmony import */ var _carpop_carpop_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../carpop/carpop.module */ "./src/app/carpop/carpop.module.ts");








const routes = [
    {
        path: '',
        component: _dashmod_page__WEBPACK_IMPORTED_MODULE_6__["DashmodPage"]
    }
];
let DashmodPageModule = class DashmodPageModule {
};
DashmodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _carpop_carpop_module__WEBPACK_IMPORTED_MODULE_7__["CarpopPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dashmod_page__WEBPACK_IMPORTED_MODULE_6__["DashmodPage"]]
    })
], DashmodPageModule);



/***/ }),

/***/ "./src/app/dashmod/dashmod.page.scss":
/*!*******************************************!*\
  !*** ./src/app/dashmod/dashmod.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2htb2QvZGFzaG1vZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dashmod/dashmod.page.ts":
/*!*****************************************!*\
  !*** ./src/app/dashmod/dashmod.page.ts ***!
  \*****************************************/
/*! exports provided: DashmodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashmodPage", function() { return DashmodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _carpop_carpop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carpop/carpop.page */ "./src/app/carpop/carpop.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











let DashmodPage = class DashmodPage {
    constructor(modalCtrl, navParams, events, popoverController, http, storage, cartService, toastController, loadingController, alerCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.events = events;
        this.popoverController = popoverController;
        this.http = http;
        this.storage = storage;
        this.cartService = cartService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alerCtrl = alerCtrl;
        this.router = router;
        this.desp = navParams.get('description');
        this.title = navParams.get('details');
        this.price = navParams.get('price');
        this.cat = navParams.get('vehicleCatagory');
        this.id = navParams.get('packageId');
        this.name = navParams.get('title');
        this.time = navParams.get('duration');
    }
    ngOnInit() {
        this.presentLoading();
        this.storage.get('email').then((data) => {
            this.email = data;
            console.log(this.email);
            this.req = {
                email: this.email,
                vehicleCatagory: this.cat
            };
        }).then(() => {
            console.log(this.req);
            this.http.post('https://mywash.herokuapp.com/service/find', this.req).subscribe((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(result);
                this.crt = result;
            }));
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 1000,
            });
            yield loading.present();
            //const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    presentPopover() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.crt.length == 0) {
                this.doAlert("No car of specified category available!", "Okay");
            }
            else {
                let ev;
                console.log(this.crt);
                const rem = this.cartService.getCart();
                console.log(rem);
                if (rem != undefined) {
                    //  console.log(rem.find((x)=>{ if(x.vehnumber==="GJ-13-CC-1"){
                    //     return x.vehnumber
                    //  }
                    // }) );
                    rem.filter((item1) => {
                        this.crt = this.crt.filter((item) => {
                            return item.number != item1.vehnumber;
                        });
                    });
                }
                console.log(this.crt);
                const popover = yield this.popoverController.create({
                    component: _carpop_carpop_page__WEBPACK_IMPORTED_MODULE_3__["CarpopPage"],
                    componentProps: {
                        'list': this.crt,
                    },
                    event: ev,
                    translucent: true
                });
                popover.onDidDismiss().then((result) => {
                    this.selection = result.data;
                    this.dismiss();
                });
                return yield popover.present();
            }
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'ADDED TO CART.',
                duration: 1500,
                position: 'middle'
            });
            toast.present();
        });
    }
    dismiss() {
        const prod = {
            id: this.id,
            name: this.name,
            time: this.time,
            vehnumber: this.selection,
            price: this.price,
        };
        if (prod.vehnumber == undefined) {
            this.fdismiss();
        }
        else {
            this.presentToast();
            console.log(prod);
            this.crt = this.crt.filter((item) => {
                return item.number != this.selection;
            });
            console.log(this.crt);
            this.cartService.addProduct(prod);
        }
    }
    fdismiss() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
        this.router.navigate(['/cart']);
    }
    doAlert(msg, btn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alerCtrl.create({
                header: 'Error',
                message: msg,
                buttons: [btn],
            });
            yield alert.present();
        });
    }
};
DashmodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
DashmodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashmod',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashmod.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashmod/dashmod.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashmod.page.scss */ "./src/app/dashmod/dashmod.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], DashmodPage);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CartService = class CartService {
    constructor() {
        this.cart = [];
        this.amount = 0;
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
    }
    getCart() {
        return this.cart;
    }
    getAmount() {
        return this.amount;
    }
    addProduct(product) {
        this.cart.push(product);
        this.amount = this.amount + product.price;
    }
    removeProduct(product) {
        for (let [index, p] of this.cart.entries()) {
            if (p.vehnumber === product.vehnumber) {
                this.amount = this.amount - p.price;
                this.cart.splice(index, 1);
            }
        }
    }
    removeAll() {
        this.cart = [];
        this.amount = 0;
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CartService);



/***/ })

}]);
//# sourceMappingURL=default~dashmod-dashmod-module~tabs-tabs-module-es2015.js.map