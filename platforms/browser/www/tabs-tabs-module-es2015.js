(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dash/dash.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dash/dash.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Home</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n <ion-slides [options]=\"slideOptsOne\">\r\n   <!-- <ion-slide>\r\n     <img src=\"http://placehold.it/300x300/ff0000/ffffff\" alt=\"\">\r\n   </ion-slide>\r\n   <ion-slide>\r\n    <img src=\"http://placehold.it/300x300/ffcc33/ffffff\" alt=\"\">\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <img src=\"http://placehold.it/300x300/33ccff/ffffff\" alt=\"\">\r\n  </ion-slide> -->\r\n  <ion-slide *ngFor=\"let slide of slideData\">\r\n    <img src=\"{{slide.image}}\" />\r\n  </ion-slide>\r\n </ion-slides>\r\n<ion-item>\r\n <ion-label text-wrap position=\"fixed\">\r\n  Four-Wheeler\r\n</ion-label>\r\n</ion-item>\r\n\r\n<ion-slides>\r\n  <ng-container *ngFor='let det of array_serv'>\r\n  <ion-slide  *ngIf='det.vehicleType === \"car\"'  >\r\n    <ion-card  button style=\"border-radius: 25px;\"  (click)=\"addCart(det.packageId)\">\r\n      <ion-card-header>\r\n        \r\n        <ion-card-title>{{det.name}}</ion-card-title>\r\n        <ion-card-subtitle>{{det.duration}} Months</ion-card-subtitle>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>{{det.description}}</ion-card-content>\r\n  </ion-card>\r\n  </ion-slide>\r\n</ng-container>\r\n\r\n\r\n</ion-slides>\r\n<ion-item>\r\n  <ion-label text-wrap position=\"fixed\">\r\n   Two-Wheeler\r\n </ion-label>\r\n </ion-item>\r\n <ion-slides >\r\n  <ng-container *ngFor='let det of array_serv'>\r\n  <ion-slide  *ngIf='det.vehicleType === \"bike\"'  >\r\n    <ion-card  button style=\"border-radius: 25px;\"  (click)=\"addCart(det.packageId)\">\r\n      <ion-card-header>\r\n        \r\n        <ion-card-title>{{det.name}}</ion-card-title>\r\n        <ion-card-subtitle>{{det.duration}} Months</ion-card-subtitle>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>{{det.description}}</ion-card-content>\r\n  </ion-card>\r\n  </ion-slide>\r\n</ng-container>\r\n\r\n\r\n</ion-slides>\r\n      </ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title align-title=\"center\">Offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-slides>\n        \n\n        <ion-slide  *ngFor='let det of array_serv'>\n            <ion-card style=\"border-radius: 25px;\" button (click)=\"addCart(det.packageId)\">\n              <ion-card-header>\n \n              <ion-card-title>{{det.name}}</ion-card-title>\n              <ion-card-subtitle>{{det.duration}} Months</ion-card-subtitle>\n              </ion-card-header>\n            \n              <ion-card-content>{{det.description}}</ion-card-content>\n            </ion-card>\n        </ion-slide>\n      \n      </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item >\n    <!-- <ion-avatar class=\"ion-margin-start\">\n    <img src=\"../../assets/icon/avatar.svg\"/>\n  </ion-avatar>-->\n    <img slot=\"start\" style=\"width: 50px;height:50px;\" src=\"../../assets/icon/user.png\"> \n\n\n    <ion-label slot=\"end\" fixed>\n      {{name}}\n    </ion-label >\n  </ion-item> \n<br>\n  <ion-item  style=\"margin-top: 0%;\">\n <ion-list style=\"margin-top: 0%;\">\n  <ion-label fixed>\n  Phone: {{no}}\n  </ion-label>\n  <ion-label fixed>\n    Email: {{em}}\n    </ion-label>\n </ion-list>\n  </ion-item>    \n  <hr>\n\n  <ion-list>\n    \n    <ion-item button routerLink=\"/orders\" routerDirection=\"forward\">\n      <ion-icon name=\"basket\" slot=\"start\"></ion-icon>\n      <ion-label>Orders</ion-label>\n    </ion-item>\n    <ion-item button routerLink=\"/support\" routerDirection=\"forward\">\n      <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n      <ion-label>Help & Support</ion-label>\n    </ion-item>\n    <ion-item button routerLink=\"/policy\" routerDirection=\"forward\">\n      <ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>\n      <ion-label>Policy</ion-label>\n    </ion-item>\n    <ion-item button routerLink=\"/about\" routerDirection=\"forward\">\n      <ion-icon name=\"car-sport\" slot=\"start\"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-item>\n    <ion-item button (click)=\"presentAlertConfirm()\" >\n      <ion-icon name=\"trash-sharp\" slot=\"start\"></ion-icon>\n      <ion-label>Delete Account</ion-label>\n    </ion-item>\n    <ion-item button (click)=\"logout()\">\n      <ion-icon name=\"log-out-sharp\" slot=\"start\"></ion-icon>\n      <ion-label>Logout</ion-label>\n    </ion-item>\n    \n   </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-title>Dashboard</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content>\n    \n      <!-- <ion-slides>\n        <ion-slide>\n          <ion-card style=\"height:200px !important;\">\n              <ion-card-header>\n                <ion-card-title>Vehicle 1</ion-card-title>\n                <ion-card-subtitle>1 month</ion-card-subtitle>\n                </ion-card-header>\n              \n                <ion-card-content style=\"text-align: left;\">\n                  Vehicle type<br>\n                  Vehicle Number<br>\n                  Package Selected<br>\n                </ion-card-content>\n                <ion-label>Start - End Date</ion-label>\n               \n          </ion-card>\n      </ion-slide>\n       \n      </ion-slides> -->\n        <ion-slides #slides (ionSlideDidChange)=\"slideChanged()\" > \n          <ion-slide *ngFor='let veh of vehicle'>\n              <ion-card style=\"height:200px !important;\">\n                  <ion-card-header>\n                    <ion-card-title >{{veh.brandName}}  {{veh.vehicleModel}}</ion-card-title>\n                    <ion-card-subtitle>{{veh.duration}}</ion-card-subtitle>\n                    </ion-card-header>\n                  \n                    <ion-card-content style=\"text-align: left;\">\n                      Vehicle type:{{veh.vehicleType}}<br>\n                      Vehicle Number:{{veh.number}}<br>\n                      Package Selected:{{veh.id}}<br>\n                      Preferred Time:{{veh.time}} A.M<br>\n\n                    </ion-card-content>\n                    <ion-label>Date:{{veh.duration}}</ion-label>\n                   \n              </ion-card>\n          </ion-slide> \n        </ion-slides>\n       \n<ion-grid>\n\n  <ion-row>\n        <ion-button style=\"margin:auto;\" color=\"danger\" size=\"medium\" expand=\"block\" class=\"buttons\" routerLink=\"/cart\" routerDirection=\"forward\">\n          <ion-icon name=\"cart-sharp\" style=\"padding-right: 3%;\"></ion-icon>  View Cart</ion-button>\n          \n\n        <ion-button style=\"margin:auto;\" size=\"medium\" class=\"buttons\" (click)=\"presentActionSheet()\">\n          <ion-icon name=\"time-sharp\" style=\"padding-right: 3%;\">\n          </ion-icon>Change Time\n          <!-- <ion-datetime [hidden]=1 #picker  displayFormat=\"HH:mm\" ></ion-datetime>  -->\n       </ion-button>\n\n  </ion-row>\n  <br>\n  \n\n  <ion-row>\n\n        <ion-button style=\"margin:auto;\" color=\"warning\" size=\"medium\"   expand=\"block\" class=\"buttons\" routerLink=\"/gps\" routerDirection=\"forward\"><ion-icon name=\"analytics-sharp\" style=\"padding-right: 3%;\"></ion-icon>Track Job</ion-button>\n  \n        <ion-button style=\"margin:auto;\" color=\"tertiary\" size=\"medium\"  expand=\"block\" class=\"buttons\" routerLink=\"/addvehicle\" routerDirection=\"forward\"><ion-icon name=\"car-sharp\"  style=\"padding-right: 3%;\"></ion-icon>Add vehicle</ion-button>\n  </ion-row>\n</ion-grid>\n       \n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-router-outlet></ion-router-outlet>\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" >\n      <ion-tab-button tab=\"dash\" >\n\n      <ion-icon name=\"home\"></ion-icon>\n\n      <ion-label>Home</ion-label>\n\n    </ion-tab-button>\n\n\n\n    <ion-tab-button tab=\"services\" >\n\n      <ion-icon name=\"bar-chart\"></ion-icon>\n\n      <ion-label>Dashboard</ion-label>\n\n    </ion-tab-button>\n\n\n\n    <ion-tab-button tab=\"offer\">\n\n      <ion-icon name=\"newspaper-sharp\"></ion-icon>\n      <ion-label>Offers</ion-label>\n\n    </ion-tab-button>\n\n\n\n\n\n    <ion-tab-button tab=\"profile\" routerLink=\"profile\" routerDirection=\"root\">\n\n      <ion-icon name=\"person\"></ion-icon>\n\n      <ion-label>Profile</ion-label>\n\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/dash/dash.page.scss":
/*!*************************************!*\
  !*** ./src/app/dash/dash.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  text-align: center;\n}\n\nion-label {\n  width: 100%;\n  text-align: center;\n}\n\nion-slides {\n  height: 200px;\n}\n\nion-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: lightblue;\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaC9EOlxcU0VNOFxccDMvc3JjXFxhcHBcXGRhc2hcXGRhc2gucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoL2Rhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoL2Rhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXNsaWRlc3tcclxuICAgIGhlaWdodDoyMDBweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgfSIsImlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB3aWR0aDogODUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dash/dash.page.ts":
/*!***********************************!*\
  !*** ./src/app/dash/dash.page.ts ***!
  \***********************************/
/*! exports provided: DashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashPage", function() { return DashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _dashmod_dashmod_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashmod/dashmod.page */ "./src/app/dashmod/dashmod.page.ts");
/* harmony import */ var _det_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./det.model */ "./src/app/dash/det.model.ts");







let DashPage = class DashPage {
    constructor(iserv, http, modal) {
        this.iserv = iserv;
        this.http = http;
        this.modal = modal;
        this.slideOptsOne = {
            initialSlide: 0,
            speed: 100
        };
        this.array_serv = [];
        this.http.post('https://mywash.herokuapp.com/image/get', {}).subscribe((img) => {
            const str1 = "https://mywash.herokuapp.com/image/";
            this.slideData = img.map((item) => {
                return { image: str1.concat(item) };
            });
        });
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    ngOnInit() {
        this.http.get('https://mywash.herokuapp.com/package/show', {}).subscribe((result) => {
            console.log(result);
            for (const key in result) {
                if (result.hasOwnProperty(key)) {
                    this.array_serv.push(new _det_model__WEBPACK_IMPORTED_MODULE_6__["det"](result[key].packageId, result[key].name, result[key].price, result[key].details, result[key].description, result[key].vehicleCatagory, result[key].vehicleType, result[key].duration, result[key].flag));
                }
            }
            console.log(this.array_serv);
        });
    }
    addCart(packageId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const mod = this.array_serv.find(item => item.packageId == packageId);
            console.log(mod);
            const modal = yield this.modal.create({
                component: _dashmod_dashmod_page__WEBPACK_IMPORTED_MODULE_5__["DashmodPage"],
                componentProps: mod
            });
            return yield modal.present();
        });
    }
};
DashPage.ctorParameters = () => [
    { type: _items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
DashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dash',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dash.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dash/dash.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dash.page.scss */ "./src/app/dash/dash.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], DashPage);



/***/ }),

/***/ "./src/app/dash/det.model.ts":
/*!***********************************!*\
  !*** ./src/app/dash/det.model.ts ***!
  \***********************************/
/*! exports provided: det */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "det", function() { return det; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class det {
    constructor(packageId, name, price, details, description, vehicleCatagory, vehicleType, duration, flag) {
        this.packageId = packageId;
        this.name = name;
        this.price = price;
        this.details = details;
        this.description = description;
        this.vehicleCatagory = vehicleCatagory;
        this.vehicleType = vehicleType;
        this.duration = duration;
        this.flag = flag;
    }
}


/***/ }),

/***/ "./src/app/items.service.ts":
/*!**********************************!*\
  !*** ./src/app/items.service.ts ***!
  \**********************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ItemsService = class ItemsService {
    constructor() {
        this.cart = [];
    }
    addtoCart(data) {
        // this.servicename=data.servicename;
        // this.timecost=data.timecost;
        // this.vehicleType=data.vehicleType;
        // this.details=data.details;
        // this.price=data.price;
        // this.validtime=data.validtime;
        this.cart.push(data);
    }
    getCart() {
        return this.cart;
    }
};
ItemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ItemsService);



/***/ }),

/***/ "./src/app/offer/offer.page.scss":
/*!***************************************!*\
  !*** ./src/app/offer/offer.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  text-align: center;\n}\n\nion-label {\n  width: 100%;\n  text-align: center;\n}\n\nion-slides {\n  height: 200px;\n}\n\nion-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: lightblue;\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXIvRDpcXFNFTThcXHAzL3NyY1xcYXBwXFxvZmZlclxcb2ZmZXIucGFnZS5zY3NzIiwic3JjL2FwcC9vZmZlci9vZmZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxrQkFBQTtBQ0RKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL29mZmVyL29mZmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tdGl0bGV7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tc2xpZGVze1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9IiwiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIHdpZHRoOiA4NSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/offer/offer.page.ts":
/*!*************************************!*\
  !*** ./src/app/offer/offer.page.ts ***!
  \*************************************/
/*! exports provided: OfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPage", function() { return OfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dash_det_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dash/det.model */ "./src/app/dash/det.model.ts");
/* harmony import */ var _dashmod_dashmod_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashmod/dashmod.page */ "./src/app/dashmod/dashmod.page.ts");






let OfferPage = class OfferPage {
    constructor(http, modal) {
        this.http = http;
        this.modal = modal;
        this.array_serv = [];
    }
    ngOnInit() {
        this.http.get('https://mywash.herokuapp.com/package/offer', {}).subscribe((result) => {
            console.log(result);
            for (const key in result) {
                if (result.hasOwnProperty(key)) {
                    this.array_serv.push(new _dash_det_model__WEBPACK_IMPORTED_MODULE_4__["det"](result[key].packageId, result[key].name, result[key].price, result[key].details, result[key].description, result[key].vehicleCatagory, result[key].vehicleType, result[key].duration, result[key].flag));
                }
            }
            console.log(this.array_serv);
        });
    }
    addCart(packageId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const mod = this.array_serv.find(item => item.packageId == packageId);
            console.log(mod);
            const modal = yield this.modal.create({
                component: _dashmod_dashmod_page__WEBPACK_IMPORTED_MODULE_5__["DashmodPage"],
                componentProps: mod
            });
            return yield modal.present();
        });
    }
};
OfferPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
OfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offer.page.scss */ "./src/app/offer/offer.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], OfferPage);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  text-align: center;\n}\n\nion-item {\n  white-space: pre-line !important;\n  min-width: 100% !important;\n}\n\nion-item {\n  margin: auto;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcU0VNOFxccDMvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUNBSjs7QURFQTtFQUNJLGdDQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgXHJcbn1cclxuIiwiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ProfilePage = class ProfilePage {
    constructor(navCtrl, storage, router, http, alertController) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.router = router;
        this.http = http;
        this.alertController = alertController;
        this.storage.get('email').then((data) => {
            this.em = data;
        });
        this.storage.get('num').then((data) => {
            console.log(data);
            this.no = data;
        });
        this.storage.get('name').then((data) => {
            console.log(data);
            this.name = data;
        });
    }
    ngOnInit() {
    }
    logout() {
        this.storage.set('activity', 'logged out').then((successData) => {
            console.log("Logging out!");
            this.router.navigate(['/register'], { replaceUrl: true });
        });
    }
    call() {
        let tel_number = '9879178177  ';
        window.open(`tel:${tel_number}`, '_system');
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Warning',
                message: ' <h3>Do you really want to delete your account?</h3>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            console.log('Confirm Delete');
                            this.http.post('https://mywash.herokuapp.com/deleteacc', { email: this.em }).subscribe((res) => {
                                console.log(res);
                            });
                            this.storage.clear();
                            this.router.navigate(['/register'], { replaceUrl: true });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ProfilePage);



/***/ }),

/***/ "./src/app/services/services.page.scss":
/*!*********************************************!*\
  !*** ./src/app/services/services.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  border-radius: 10px;\n  margin-top: 5% !important;\n  width: 90% !important;\n  height: 90% !important;\n}\n\nion-card-title {\n  background-color: #979a9b !important;\n}\n\nion-slide {\n  max-width: 100% !important;\n  max-height: 100% !important;\n}\n\nion-title {\n  text-align: center;\n}\n\n.buttons {\n  width: 40%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvRDpcXFNFTThcXHAzL3NyY1xcYXBwXFxzZXJ2aWNlc1xcc2VydmljZXMucGFnZS5zY3NzIiwic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENBO0VBQ0ksb0NBQUE7QUNFSjs7QURBQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FERUU7RUFFRSxVQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjkwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OjkwJSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jYXJkLXRpdGxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OWE5YiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1zbGlkZXtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuaW9uLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuICBcclxuICAuYnV0dG9uc1xyXG57XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcblxyXG4gICAgXHJcbiAgICBcclxufVxyXG4iLCJpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5YTliICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZSB7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbnMge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/services/services.page.ts":
/*!*******************************************!*\
  !*** ./src/app/services/services.page.ts ***!
  \*******************************************/
/*! exports provided: ServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let ServicesPage = class ServicesPage {
    constructor(actionSheetController, router, http, storage, loadingController, events) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.http = http;
        this.storage = storage;
        this.loadingController = loadingController;
        this.events = events;
        this.vehicle = [];
        this.index = 0;
        this.events.subscribe('check1', (data) => {
            console.log(data);
            if (data == 'update') {
                this.vehicle = [];
                this.ngOnInit();
            }
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.presentLoading();
            yield this.storage.get('email').then((data) => {
                console.log(data);
                this.ema = data;
            });
            console.log(this.ema);
            yield this.http.post('https://mywash.herokuapp.com/uservehicle/getvehicle', { email: this.ema }).subscribe((result) => {
                console.log(result);
                result.vehicle.forEach(element => {
                    const ans1 = result.service.find(x => x.number === element.number);
                    let pac;
                    let a;
                    if (ans1 != undefined) {
                        pac = result.package.find(x => x.packageId === ans1.id);
                        a = {
                            vehicleType: element.vehicleType,
                            brandName: element.brandName,
                            vehicleModel: element.vehicleModel,
                            number: element.number,
                            vehicleCatagory: element.vehicleCatagory,
                            time: element.prefferedTime,
                            id: ans1.id,
                            name: pac.name,
                            duration: pac.duration
                        };
                    }
                    else {
                        a = {
                            vehicleType: element.vehicleType,
                            brandName: element.brandName,
                            vehicleModel: element.vehicleModel,
                            number: element.number,
                            time: element.prefferedTime,
                            vehicleCatagory: element.vehicleCatagory,
                            id: '0',
                            name: 'None',
                            duration: 'None'
                        };
                    }
                    this.vehicle.push(a);
                });
            });
            console.log(this.vehicle);
            // this.carnum=this.vehicle[0].number;
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 1500,
            });
            yield loading.present();
            console.log('Loading dismissed!');
        });
    }
    gotoCart() {
        this.router.navigateByUrl('/cart');
    }
    slideChanged() {
        this.slides.getActiveIndex().then(index => {
            this.index = index;
            this.carnum = this.vehicle[this.index].number;
            console.log(this.index, this.carnum);
        });
    }
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Time Slot',
                buttons: [{
                        text: '5:00 - 6:00 AM',
                        handler: () => {
                            console.log('first clicked');
                            this.time = 5.5;
                            const req = { email: this.ema, number: this.carnum, time: this.time };
                            console.log(req);
                            this.http.post('https://mywash.herokuapp.com/uservehicle/time', req).subscribe((res) => {
                                console.log(res);
                                this.vehicle[this.index].time = 5;
                            });
                        }
                    }, {
                        text: '6:00 - 7:00 AM',
                        handler: () => {
                            console.log('second clicked');
                            this.time = 6.5;
                            this.http.post('https://mywash.herokuapp.com/uservehicle/time', { email: this.ema, number: this.carnum, time: this.time }).subscribe((res) => {
                                this.vehicle[this.index].time = 6;
                            });
                        }
                    }, {
                        text: '7:00 - 8:00 AM',
                        handler: () => {
                            console.log('third clicked');
                            this.time = 7.5;
                            this.http.post('https://mywash.herokuapp.com/uservehicle/time', { email: this.ema, number: this.carnum, time: this.time }).subscribe((res) => {
                                this.vehicle[this.index].time = 7;
                            });
                        }
                    }, {
                        text: '8:00 - 9:00 AM',
                        handler: () => {
                            console.log('fourth clicked');
                            this.time = 8.5;
                            this.http.post('https://mywash.herokuapp.com/uservehicle/time', { email: this.ema, number: this.carnum, time: this.time }).subscribe((res) => {
                                this.vehicle[this.index].time = 8;
                            });
                        }
                    }, {
                        text: '9:00 - 10:00 AM',
                        handler: () => {
                            console.log('fourth clicked');
                            this.time = 9.5;
                            this.http.post('https://mywash.herokuapp.com/uservehicle/time', { email: this.ema, number: this.carnum, time: this.time }).subscribe((res) => {
                                this.vehicle[this.index].time = 9;
                            });
                        }
                    }, {
                        text: 'Cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
ServicesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServicesPage.prototype, "slides", void 0);
ServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.page.scss */ "./src/app/services/services.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
], ServicesPage);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _dash_dash_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dash/dash.page */ "./src/app/dash/dash.page.ts");
/* harmony import */ var _services_services_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/services.page */ "./src/app/services/services.page.ts");
/* harmony import */ var _offer_offer_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../offer/offer.page */ "./src/app/offer/offer.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../profile/profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _dashmod_dashmod_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dashmod/dashmod.module */ "./src/app/dashmod/dashmod.module.ts");













const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]
    }
];
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _dashmod_dashmod_module__WEBPACK_IMPORTED_MODULE_12__["DashmodPageModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"],
            _dash_dash_page__WEBPACK_IMPORTED_MODULE_8__["DashPage"],
            _services_services_page__WEBPACK_IMPORTED_MODULE_9__["ServicesPage"],
            _offer_offer_page__WEBPACK_IMPORTED_MODULE_10__["OfferPage"],
            _profile_profile_page__WEBPACK_IMPORTED_MODULE_11__["ProfilePage"]
        ]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _dash_dash_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dash/dash.page */ "./src/app/dash/dash.page.ts");
/* harmony import */ var _offer_offer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../offer/offer.page */ "./src/app/offer/offer.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile/profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _services_services_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/services.page */ "./src/app/services/services.page.ts");








const routes1 = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'dash',
                children: [
                    {
                        path: '',
                        component: _dash_dash_page__WEBPACK_IMPORTED_MODULE_4__["DashPage"],
                    }
                ]
            },
            {
                path: 'offer',
                children: [
                    {
                        path: '',
                        component: _offer_offer_page__WEBPACK_IMPORTED_MODULE_5__["OfferPage"],
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"],
                    }
                ]
            },
            {
                path: 'services',
                children: [
                    {
                        path: '',
                        component: _services_services_page__WEBPACK_IMPORTED_MODULE_7__["ServicesPage"],
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tabs/dash',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/dash',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes1)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map