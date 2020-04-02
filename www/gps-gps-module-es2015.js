(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gps-gps-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gps/gps.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gps/gps.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button routerLink=\"/tabs/tabs/services\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Live Tracking\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n \n  <div #map id=\"map\" [hidden]=\"!user\"></div>\n  <ion-item class=\"align-items-center\">\n    <ion-label  [hidden]=\"user\"><b>No cleaner assigned yet</b></ion-label>\n\n  </ion-item>\n\n  <div *ngIf=\"user\">\n    <ion-item>\n      \n      <ion-label>User ID: {{ user }}</ion-label>\n    </ion-item>\n    <ion-item (click)=\"call()\">\n      <ion-label>Contact: {{ phone }}</ion-label><ion-icon  name=\"call-sharp\"></ion-icon>\n\n    </ion-item>\n \n\n \n    <ion-list>\n      <ion-item-sliding *ngFor=\"let pos of locations | async\">\n        <ion-item>\n          <ion-label text-wrap>\n            Lat: {{ pos.lat }}\n            Lng: {{ pos.lng }}\n            <p>\n              {{ pos.timestamp | date:'short' }}\n            </p>\n          </ion-label>\n        </ion-item>\n \n        <ion-item-options side=\"start\">\n          <ion-item-option color=\"danger\" (click)=\"deleteLocation(pos)\">\n            <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n \n      </ion-item-sliding>\n    </ion-list>\n \n  </div>\n \n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3BzL0Q6XFxTRU04XFxwMy9zcmNcXGFwcFxcZ3BzXFxncHMucGFnZS5zY3NzIiwic3JjL2FwcC9ncHMvZ3BzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ncHMvZ3BzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jbWFwe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn0iLCIjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */");

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
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let GpsPage = class GpsPage {
    constructor(afAuth, afs, http, storage) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.http = http;
        this.storage = storage;
        this.user = null;
        this.markers = [];
        this.isTracking = false;
        this.anonLogin();
    }
    ionViewWillEnter() {
        this.storage.get('email').then((res) => {
            this.email = res;
            console.log(this.email);
            this.http.post('https://mywash.herokuapp.com/batch/track', { email: this.email }).subscribe((res) => {
                console.log(res);
                if (res.data != null) {
                    this.user = res.data.cleaner_name;
                    this.phone = res.data.cleaner_phone;
                }
                else {
                    console.log('null');
                }
            });
            this.loadMap();
        });
    }
    loadMap() {
        let latlng = new google.maps.LatLng(51.9090902, 7, 6673267);
        let mapOptions = {
            center: latlng,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }
    call() {
        let tel_number = this.phone;
        window.open(`tel:${tel_number}`, '_system');
    }
    anonLogin() {
        //email auth
        this.afAuth.auth.signInAnonymously().then(user => {
            console.log(user);
        }).then(() => {
            this.findloc();
        });
    }
    findloc() {
        console.log("loc called");
        this.locationsCollection = this.afs.collection(`locations/cleaner1/track`, ref => ref.orderBy('timestamp', "desc"));
        this.locations = this.locationsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        this.locations.subscribe(locations => {
            console.log("paused", locations);
            setTimeout(() => {
                console.log("update called");
                this.markers.map(marker => marker.setMap(null));
                this.markers = [];
                // for (let loc of locations) {
                let latLng = new google.maps.LatLng(locations[0].lat, locations[0].lng);
                this.map.setCenter(latLng);
                this.map.setZoom(14);
                let marker = new google.maps.Marker({
                    map: this.map,
                    // animation: google.maps.Animation.DROP,
                    position: latLng
                });
                this.markers.push(marker);
            }, 2000);
        });
    }
    // Delete a location from Firebase
    deleteLocation(pos) {
        this.locationsCollection.doc(pos.id).delete();
    }
};
GpsPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GpsPage.prototype, "mapElement", void 0);
GpsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gps',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gps.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gps/gps.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gps.page.scss */ "./src/app/gps/gps.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], GpsPage);



/***/ })

}]);
//# sourceMappingURL=gps-gps-module-es2015.js.map