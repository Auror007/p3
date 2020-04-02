function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pickloc-pickloc-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pickloc/pickloc.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pickloc/pickloc.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPicklocPicklocPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ADDRESS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-searchbar showCancelButton=\"focus\" cancelButtonIcon=\"arrow-back-sharp\" [(ngModel)]=\"sear\" ></ion-searchbar>\n    <ion-button (click)=\"loadMap()\" >FIND</ion-button>  \n  </ion-item>\n  <ion-label [hidden]=\"flag\"></ion-label>\n <ion-item [hidden]=\"!flag\">\n  <div #map id=\"map\"  ></div>\n </ion-item>\n<ion-item [hidden]=\"!flag\">\n  <!-- <ion-button  (click)=\"conf()\"></ion-button> -->\n  <ion-button  (click)=\"conf()\" style=\"width:90%;\" routerLink=\"/register\" routerDirection=\"backward\">CONFIRM</ion-button>\n\n</ion-item>\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/pickloc/pickloc.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pickloc/pickloc.module.ts ***!
    \*******************************************/

  /*! exports provided: PicklocPageModule */

  /***/
  function srcAppPicklocPicklocModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PicklocPageModule", function () {
      return PicklocPageModule;
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


    var _pickloc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pickloc.page */
    "./src/app/pickloc/pickloc.page.ts");

    var routes = [{
      path: '',
      component: _pickloc_page__WEBPACK_IMPORTED_MODULE_6__["PicklocPage"]
    }];

    var PicklocPageModule = function PicklocPageModule() {
      _classCallCheck(this, PicklocPageModule);
    };

    PicklocPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_pickloc_page__WEBPACK_IMPORTED_MODULE_6__["PicklocPage"]]
    })], PicklocPageModule);
    /***/
  },

  /***/
  "./src/app/pickloc/pickloc.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pickloc/pickloc.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPicklocPicklocPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlja2xvYy9EOlxcU0VNOFxccDMvc3JjXFxhcHBcXHBpY2tsb2NcXHBpY2tsb2MucGFnZS5zY3NzIiwic3JjL2FwcC9waWNrbG9jL3BpY2tsb2MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BpY2tsb2MvcGlja2xvYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI21hcHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59IiwiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pickloc/pickloc.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pickloc/pickloc.page.ts ***!
    \*****************************************/

  /*! exports provided: PicklocPage */

  /***/
  function srcAppPicklocPicklocPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PicklocPage", function () {
      return PicklocPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var PicklocPage = /*#__PURE__*/function () {
      function PicklocPage(router, http, storage) {
        _classCallCheck(this, PicklocPage);

        this.router = router;
        this.http = http;
        this.storage = storage;
      }

      _createClass(PicklocPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadMap",
        value: function loadMap() {
          var _this = this;

          console.log("HELLO");
          var latlng = new google.maps.LatLng(23.1005231, 72.5934804);
          var mapOptions = {
            center: latlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          this.marker = new google.maps.Marker({
            map: this.map,
            position: latlng
          });
          this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.sear + '&key=AIzaSyC2iWI7YzxRXcbcidN7WHfoeF80dEOHU-4', {}).subscribe(function (res) {
            console.log(res);

            _this.map.setCenter({
              lat: res.results[0].geometry.location.lat,
              lng: res.results[0].geometry.location.lng
            });

            _this.marker.setPosition(_this.map.getCenter());
          });
          this.map.addListener('bounds_changed', function () {
            _this.marker.setPosition(_this.map.getCenter());
          });
          this.flag = 1;
        }
      }, {
        key: "conf",
        value: function conf() {
          var abc = {
            lat: this.map.getCenter().lat(),
            lng: this.map.getCenter().lng()
          };
          console.log(abc);
          this.storage.set('cord', abc).then(function (res) {
            console.log(res);
          });
          this.storage.set('addr', this.sear).then(function (res) {
            console.log(res);
          });
        }
      }]);

      return PicklocPage;
    }();

    PicklocPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PicklocPage.prototype, "mapElement", void 0);
    PicklocPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pickloc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pickloc.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pickloc/pickloc.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pickloc.page.scss */
      "./src/app/pickloc/pickloc.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], PicklocPage);
    /***/
  }
}]);
//# sourceMappingURL=pickloc-pickloc-module-es5.js.map