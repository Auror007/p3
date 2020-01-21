(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addvehicle-addvehicle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addvehicle/addvehicle.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addvehicle/addvehicle.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title align-title=\"center\">Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <br>\n    <br>\n    <ion-item>\n        <ion-label >Vehicle type </ion-label>\n        <ion-select interface=\"popover\" [(ngModel)]=\"type\" (ionChange)=\"onChange1(type)\">\n            <ion-select-option value=\"Two wheeler\">Two-wheeler</ion-select-option>\n            <ion-select-option value=\"Car\">Car</ion-select-option>\n          </ion-select>\n      </ion-item>\n      <ion-item [hidden]=\"!car\">\n                  \n        <ion-label>Car type</ion-label>\n        <ion-select interface=\"popover\">\n          <ion-select-option value=\"sedan\">Sedan</ion-select-option>\n          <ion-select-option value=\"hatchback\">Hatchback</ion-select-option>\n          <ion-select-option value=\"suv\">SUV</ion-select-option>\n          </ion-select>\n      </ion-item>\n      <ion-item [hidden]=\"!bike\">\n                  \n        <ion-label>Bike type</ion-label>\n        <ion-select interface=\"popover\">\n          <ion-select-option value=\"sports\">sports bike</ion-select-option>\n          <ion-select-option value=\"moped\">moped</ion-select-option>\n          <ion-select-option value=\"bike\">bike</ion-select-option>\n          </ion-select>      \n        </ion-item>\n      \n      <br>\n      <br>\n      <ion-item>\n          <ion-label >Select Brand</ion-label>\n          <ion-select interface=\"popover\" [hidden]=\"!car\">\n            <ion-select-option value=\"hyundai\">Hyundai</ion-select-option>\n            <ion-select-option value=\"ms\">Maruti Suzuki</ion-select-option>\n            <ion-select-option value=\"honda\">Honda</ion-select-option>\n            </ion-select>\n            <ion-select interface=\"popover\" [hidden]=\"!bike\">\n                <ion-select-option value=\"Honda\">Honda</ion-select-option>\n                <ion-select-option value=\"Bajaj\">bajaj</ion-select-option>\n                <ion-select-option value=\"Hero\">hero</ion-select-option>\n                </ion-select>\n        </ion-item>\n        <br>\n      <br>\n      <ion-item>\n            <ion-label>Select Model</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <br>\n      <br>\n      <ion-item  >\n              <ion-label >Vehicle Number</ion-label>\n              <ion-input placeholder=\"Eg: GJ-13-CC-710\"></ion-input>\n            </ion-item>\n            <br>\n      <br>\n      <ion-item>\n                <ion-label >Parking location</ion-label><br>\n                <ion-select  interface=\"popover\" [(ngModel)]=\"loc\" (ionChange)=\"onChange(loc)\">\n                    <ion-select-option value=\"1\">Basement 1</ion-select-option>\n                    <ion-select-option value=\"2\">Basement 2</ion-select-option>\n                    <ion-select-option value=\"3\">Ground Floor</ion-select-option>\n                    <ion-select-option value=\"4\">Other</ion-select-option>\n                </ion-select>\n           </ion-item>\n        <ion-item [hidden]=\"!value\">\n                  \n            <ion-label>Specify location</ion-label>\n            <ion-input type=\"text\"></ion-input>\n          </ion-item>\n              <br>\n      <br>\n      <ion-item>\n                  <ion-label>Preferred time</ion-label>\n                  <ion-select interface=\"popover\">\n                      <ion-select-option value=\"1\">5:00-6:00 AM</ion-select-option>\n                      <ion-select-option value=\"2\">6:00-7:00 AM</ion-select-option>\n                      <ion-select-option value=\"3\">7:00-8:00 AM</ion-select-option>\n                      <ion-select-option value=\"4\">8:00-9:00 AM</ion-select-option>\n                      <ion-select-option value=\"5\">Any</ion-select-option>\n\n                  </ion-select>\n                </ion-item>\n                <br>\n                <br>\n                <br>\n                \n<ion-button  shape=round class=\"buttons\" size=large  fill=\"solid\" expand=\"block\" color=\"dark\" (click)=dash()  style=\"width: 50%;margin-right:25%;margin-left:25%\" >Add</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/addvehicle/addvehicle.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addvehicle/addvehicle.module.ts ***!
  \*************************************************/
/*! exports provided: AddvehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddvehiclePageModule", function() { return AddvehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addvehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addvehicle.page */ "./src/app/addvehicle/addvehicle.page.ts");







const routes = [
    {
        path: '',
        component: _addvehicle_page__WEBPACK_IMPORTED_MODULE_6__["AddvehiclePage"]
    }
];
let AddvehiclePageModule = class AddvehiclePageModule {
};
AddvehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addvehicle_page__WEBPACK_IMPORTED_MODULE_6__["AddvehiclePage"]]
    })
], AddvehiclePageModule);



/***/ }),

/***/ "./src/app/addvehicle/addvehicle.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addvehicle/addvehicle.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHZlaGljbGUvYWRkdmVoaWNsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/addvehicle/addvehicle.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addvehicle/addvehicle.page.ts ***!
  \***********************************************/
/*! exports provided: AddvehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddvehiclePage", function() { return AddvehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AddvehiclePage = class AddvehiclePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    dash() {
        this.router.navigateByUrl('/tabs');
    }
    onChange(loc) {
        if (this.loc != '4') {
            this.value = 0;
        }
        else
            this.value = 1;
    }
    onChange1(type) {
        console.log(this.type);
        if (this.type == "Car") {
            this.car = 1;
            this.bike = 0;
        }
        else {
            this.bike = 1;
            this.car = 0;
        }
    }
};
AddvehiclePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddvehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addvehicle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addvehicle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addvehicle/addvehicle.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addvehicle.page.scss */ "./src/app/addvehicle/addvehicle.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AddvehiclePage);



/***/ })

}]);
//# sourceMappingURL=addvehicle-addvehicle-module-es2015.js.map