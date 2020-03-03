function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gps-gps-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gps/gps.page.html":
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gps/gps.page.html ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGpsGpsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Live Tracking\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n \n  <div #map id=\"map\" [hidden]=\"!user\"></div>\n \n  <div *ngIf=\"user\">\n \n    <ion-item>\n      <ion-label>User ID: {{ user.uid }}</ion-label>\n    </ion-item>\n \n\n \n    <ion-list>\n      <ion-item-sliding *ngFor=\"let pos of locations | async\">\n        <ion-item>\n          <ion-label text-wrap>\n            Lat: {{ pos.lat }}\n            Lng: {{ pos.lng }}\n            <p>\n              {{ pos.timestamp | date:'short' }}\n            </p>\n          </ion-label>\n        </ion-item>\n \n        <ion-item-options side=\"start\">\n          <ion-item-option color=\"danger\" (click)=\"deleteLocation(pos)\">\n            <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n \n      </ion-item-sliding>\n    </ion-list>\n \n  </div>\n \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/gps/gps.module.ts":
  /*!***********************************!*\
    !*** ./src/app/gps/gps.module.ts ***!
    \***********************************/

  /*! exports provided: GpsPageModule */

  /***/
  function srcAppGpsGpsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GpsPageModule", function () {
      return GpsPageModule;
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


    var _gps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gps.page */
    "./src/app/gps/gps.page.ts");

    var routes = [{
      path: '',
      component: _gps_page__WEBPACK_IMPORTED_MODULE_6__["GpsPage"]
    }];

    var GpsPageModule = function GpsPageModule() {
      _classCallCheck(this, GpsPageModule);
    };

    GpsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_gps_page__WEBPACK_IMPORTED_MODULE_6__["GpsPage"]]
    })], GpsPageModule);
    /***/
  },

  /***/
  "./src/app/gps/gps.page.scss":
  /*!***********************************!*\
    !*** ./src/app/gps/gps.page.scss ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppGpsGpsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3BzL0Q6XFxTRU04XFxwMy9zcmNcXGFwcFxcZ3BzXFxncHMucGFnZS5zY3NzIiwic3JjL2FwcC9ncHMvZ3BzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ncHMvZ3BzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jbWFwe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn0iLCIjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/gps/gps.page.ts":
  /*!*********************************!*\
    !*** ./src/app/gps/gps.page.ts ***!
    \*********************************/

  /*! exports provided: GpsPage */

  /***/
  function srcAppGpsGpsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GpsPage", function () {
      return GpsPage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Geolocation;

    var GpsPage =
    /*#__PURE__*/
    function () {
      function GpsPage(afAuth, afs) {
        _classCallCheck(this, GpsPage);

        this.afAuth = afAuth;
        this.afs = afs;
        this.user = null;
        this.markers = [];
        this.isTracking = false;
        this.anonLogin();
      }

      _createClass(GpsPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.loadMap();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var latlng = new google.maps.LatLng(51.9090902, 7, 6673267);
          var mapOptions = {
            center: latlng,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        }
      }, {
        key: "anonLogin",
        value: function anonLogin() {
          var _this = this;

          //email auth
          this.afAuth.auth.signInAnonymously().then(function (user) {
            console.log(user);
            _this.user = user;
          }).then(function () {
            _this.findloc();
          });
        }
      }, {
        key: "findloc",
        value: function findloc() {
          var _this2 = this;

          this.locationsCollection = this.afs.collection("locations/cleaner1/track", function (ref) {
            return ref.orderBy('timestamp', "desc");
          });
          this.locations = this.locationsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
          this.locations.subscribe(function (locations) {
            _this2.updateMap(locations);
          });
        } // Delete a location from Firebase

      }, {
        key: "deleteLocation",
        value: function deleteLocation(pos) {
          this.locationsCollection.doc(pos.id).delete();
        } // Redraw all markers on the map

      }, {
        key: "updateMap",
        value: function updateMap(locations) {
          var _this3 = this;

          // Remove all current marker
          console.log("update called", locations);
          this.markers.map(function (marker) {
            return marker.setMap(null);
          });
          this.markers = []; // for (let loc of locations) {

          var latLng = new google.maps.LatLng(locations[0].lat, locations[0].lng);
          this.map.setCenter(latLng);
          this.map.setZoom(14);
          var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
          });
          this.markers.push(marker);
          setTimeout(function () {
            _this3.findloc();
          }, 10000); // }
        }
      }]);

      return GpsPage;
    }();

    GpsPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], GpsPage.prototype, "mapElement", void 0);
    GpsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gps',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gps.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gps/gps.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gps.page.scss */
      "./src/app/gps/gps.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])], GpsPage);
    /***/
  }
}]);
//# sourceMappingURL=gps-gps-module-es5.js.map