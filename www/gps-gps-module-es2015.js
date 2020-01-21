(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gps-gps-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gps/gps.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gps/gps.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    \n\n \n\n  <ion-button (click)=startTracking() *ngIf=\"!isTracking\">\n    <ion-icon name=\"locate\"></ion-icon>\n    Start Tracking\n  </ion-button>\n\n  <ion-button (click)=stopTracking() *ngIf=\"isTracking\">\n    <ion-icon name=\"hand\"></ion-icon>\n    Stop Tracking\n  </ion-button>\n  <div class=\"map\" #map  style=\" width: 100%;\n  height: 300px\"></div>\n\n<ion-list>\n  <ion-list-header>Previous Tracks</ion-list-header>\n  <ion-item *ngFor=\"let route of previousTracks\">\n    {{ route.finished | date }}, {{ route.path.length }} Waypoints\n    <ion-button  (click)=\"showHistoryRoute(route.path)\">View Route</ion-button>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/gps/gps.module.ts":
/*!***********************************!*\
  !*** ./src/app/gps/gps.module.ts ***!
  \***********************************/
/*! exports provided: GpsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsPageModule", function() { return GpsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gps.page */ "./src/app/gps/gps.page.ts");







const routes = [
    {
        path: '',
        component: _gps_page__WEBPACK_IMPORTED_MODULE_6__["GpsPage"]
    }
];
let GpsPageModule = class GpsPageModule {
};
GpsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_gps_page__WEBPACK_IMPORTED_MODULE_6__["GpsPage"]]
    })
], GpsPageModule);



/***/ }),

/***/ "./src/app/gps/gps.page.scss":
/*!***********************************!*\
  !*** ./src/app/gps/gps.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dwcy9ncHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/gps/gps.page.ts":
/*!*********************************!*\
  !*** ./src/app/gps/gps.page.ts ***!
  \*********************************/
/*! exports provided: GpsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsPage", function() { return GpsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");






let GpsPage = class GpsPage {
    constructor(navCtrl, plt, geolocation, storage) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.geolocation = geolocation;
        this.storage = storage;
        this.currentMapTrack = null;
        this.isTracking = false;
        this.trackedRoute = [];
        this.previousTracks = [];
    }
    ngOnInit() {
        console.log("BYE");
        this.plt.ready().then(() => {
            // this.loadHistoricRoutes();
            let mapOptions = {
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
            };
            this.map = new google.maps.Map(this.mapEle.nativeElement, mapOptions);
            this.geolocation.getCurrentPosition().then((pos) => {
                let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                this.map.setCenter(latLng);
                this.map.setZoom(15);
            });
        });
    }
    ngAfterViewInit() {
    }
};
GpsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GpsPage.prototype, "mapEle", void 0);
GpsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gps',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gps.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gps/gps.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gps.page.scss */ "./src/app/gps/gps.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], GpsPage);



/***/ })

}]);
//# sourceMappingURL=gps-gps-module-es2015.js.map