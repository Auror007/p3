function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{NmYi:function(l,n,e){"use strict";e.r(n);var u,t=e("8Y7J"),a=e("mrSG"),i=((u=function(){function l(){_classCallCheck(this,l),this.details={email:String,vehicleType:String,brandName:String,vehicleModel:String,vehicleCatagory:String,number:String,parkingarea:String,longitude:String,latitude:String,prefferedTime:Number,flag:0}}return _createClass(l,[{key:"setEmail",value:function(l){this.details.email=l}},{key:"setType",value:function(l){this.details.vehicleType=l}},{key:"setBrand",value:function(l){this.details.brandName=l}},{key:"setModel",value:function(l){this.details.vehicleModel=l}},{key:"setCategory",value:function(l){this.details.vehicleCatagory=l}},{key:"setParkingarea",value:function(l){this.details.parkingarea=l}},{key:"setNumber",value:function(l){this.details.number=l}},{key:"setLoc",value:function(l){this.details.latitude=l.lat,this.details.longitude=l.long}},{key:"setprefferedTime",value:function(l){this.details.prefferedTime=l}},{key:"getCardet",value:function(){return{brand:this.details.brandName,catagory:this.details.vehicleCatagory}}},{key:"getDet",value:function(){return this.details}}]),l}()).ngInjectableDef=t.Zb({factory:function(){return new u},token:u,providedIn:"root"}),u),o=e("gTw3"),b=e("N+bC"),r=e("ZZ/e"),s=function(){function l(n,e,u,t,a,i,o){var b=this;_classCallCheck(this,l),this.storage=n,this.router=e,this.detServ=u,this.regServ=t,this.http=a,this.geolocation=i,this.toastController=o,this.resp={list:[]},this.vara=0,this.storage.get("email").then((function(l){console.log(l),b.email=l}))}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"dash",value:function(){var l=this;this.detServ.setEmail(this.email),this.detServ.setModel(this.model),this.detServ.setNumber(this.number),this.detServ.setParkingarea(this.area),this.detServ.setprefferedTime(this.time),this.detServ.setBrand(this.brand),this.detServ.setCategory(this.catagory),this.detServ.setType(this.type);var n=this.detServ.getDet();console.log(n),this.http.post("https://mywash.herokuapp.com/uservehicle/addvehicle",n).subscribe((function(n){console.log(n),1==n.message&&(l.area="",l.type="",l.brand="",l.model="",l.number="",l.time=0,l.catagory="",l.lat="",l.lng="",l.pageTop.scrollToTop())}),(function(l){console.log(l)}))}},{key:"finaldash",value:function(){var l=this;this.detServ.setEmail(this.email),this.detServ.setModel(this.model),this.detServ.setNumber(this.number),this.detServ.setParkingarea(this.area),this.detServ.setprefferedTime(this.time),this.detServ.setBrand(this.brand),this.detServ.setCategory(this.catagory),this.detServ.setType(this.type);var n=this.detServ.getDet();console.log(n),this.http.post("https://mywash.herokuapp.com/uservehicle/addvehicle",n).subscribe((function(n){console.log(n),1==n.message&&(l.storage.set("activity","loggedin"),l.router.navigateByUrl("/tabs/tabs/dash"))}),(function(l){console.log(l)}))}},{key:"onChange",value:function(){"4"==this.area&&(this.vara=4,this.area=void 0)}},{key:"addArea",value:function(l){this.area=l}},{key:"onChange1",value:function(l){console.log(this.type),this.detServ.setType(this.type),"Car"==this.type?(this.car=1,this.bike=0):(this.bike=1,this.car=0)}},{key:"onChange2",value:function(){this.brand="",this.model=""}},{key:"presentToast",value:function(){return a.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toastController.create({message:"Your location has been saved!",duration:2e3});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}},{key:"sendCardet",value:function(){var l=this;this.detServ.setCategory(this.catagory),this.detServ.setBrand(this.brand);var n=this.detServ.getCardet();console.log(this.detServ.getCardet()),this.http.post("https://mywash.herokuapp.com/uservehicle/findModel",n).subscribe((function(n){console.log(n.list),l.resp.list=n.list}),(function(l){console.log(l)}))}},{key:"getLoc",value:function(){var l=this;this.geolocation.getCurrentPosition({maximumAge:1e3,timeout:5e3,enableHighAccuracy:!0}).then((function(n){l.lat=n.coords.latitude,l.lng=n.coords.longitude;var e={lat:l.lat,long:l.lng};console.log(e),l.detServ.setLoc(e)}),(function(l){console.log(l),alert("Can not retrieve Location")})).catch((function(l){alert("Error getting location - "+JSON.stringify(l))}));var n={lat:this.lat,long:this.lng};console.log(n),this.detServ.setLoc(n),this.presentToast()}}]),l}(),g=function l(){_classCallCheck(this,l)},d=e("pMnS"),c=e("oBZk"),h=e("s7LF"),p=e("SVse"),C=e("xgBC"),v=e("iInd"),f=e("IheW"),m=t.Ab({encapsulation:0,styles:[[""]],data:{}});function B(l){return t.Wb(0,[(l()(),t.Cb(0,0,null,null,2,"ion-select-option",[],null,null,null,c.fb,c.z)),t.Bb(1,49152,null,0,r.qb,[t.j,t.p,t.F],null,null),(l()(),t.Ub(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit)}))}function y(l){return t.Wb(0,[(l()(),t.Cb(0,0,null,null,11,"ion-item",[],null,null,null,c.bb,c.r)),t.Bb(1,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(2,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),t.Bb(3,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Specify location"])),(l()(),t.Cb(5,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,a=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,6)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,6)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.area=e)&&u),u}),c.X,c.q)),t.Bb(6,16384,null,0,r.Qb,[t.p],null,null),t.Rb(1024,null,h.b,(function(l){return[l]}),[r.Qb]),t.Bb(8,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,h.c,null,[h.e]),t.Bb(10,16384,null,0,h.d,[[4,h.c]],null,null),t.Bb(11,49152,null,0,r.I,[t.j,t.p,t.F],{type:[0,"type"]},null)],(function(l,n){l(n,8,0,n.component.area),l(n,11,0,"text")}),(function(l,n){l(n,5,0,t.Ob(n,10).ngClassUntouched,t.Ob(n,10).ngClassTouched,t.Ob(n,10).ngClassPristine,t.Ob(n,10).ngClassDirty,t.Ob(n,10).ngClassValid,t.Ob(n,10).ngClassInvalid,t.Ob(n,10).ngClassPending)}))}function O(l){return t.Wb(0,[t.Sb(671088640,1,{pageTop:0}),(l()(),t.Cb(1,0,null,null,6,"ion-header",[],null,null,null,c.V,c.o)),t.Bb(2,49152,null,0,r.D,[t.j,t.p,t.F],null,null),(l()(),t.Cb(3,0,null,0,4,"ion-toolbar",[],null,null,null,c.nb,c.G)),t.Bb(4,49152,null,0,r.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Cb(5,0,null,0,2,"ion-title",[["style","text-align:center;"]],null,null,null,c.mb,c.F)),t.Bb(6,49152,null,0,r.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Details"])),(l()(),t.Cb(8,0,null,null,208,"ion-content",[],null,null,null,c.R,c.k)),t.Bb(9,49152,[[1,4],["pageTop",4]],0,r.w,[t.j,t.p,t.F],null,null),(l()(),t.Cb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(12,0,null,0,17,"ion-item",[],null,null,null,c.bb,c.r)),t.Bb(13,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(14,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),t.Bb(15,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Vehicle type "])),(l()(),t.Cb(17,0,null,0,12,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,a=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,18)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,18)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.type=e)&&u),"ionChange"===n&&(u=!1!==a.onChange1(a.type)&&u),u}),c.gb,c.y)),t.Bb(18,16384,null,0,r.Pb,[t.p],null,null),t.Rb(1024,null,h.b,(function(l){return[l]}),[r.Pb]),t.Bb(20,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,h.c,null,[h.e]),t.Bb(22,16384,null,0,h.d,[[4,h.c]],null,null),t.Bb(23,49152,null,0,r.pb,[t.j,t.p,t.F],{interface:[0,"interface"]},null),(l()(),t.Cb(24,0,null,0,2,"ion-select-option",[["value","Two wheeler"]],null,null,null,c.fb,c.z)),t.Bb(25,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Two-wheeler"])),(l()(),t.Cb(27,0,null,0,2,"ion-select-option",[["value","Car"]],null,null,null,c.fb,c.z)),t.Bb(28,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Car"])),(l()(),t.Cb(30,0,null,0,20,"ion-item",[],[[8,"hidden",0]],null,null,c.bb,c.r)),t.Bb(31,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(32,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),t.Bb(33,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Car type"])),(l()(),t.Cb(35,0,null,0,15,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,a=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,36)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,36)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.catagory=e)&&u),"ionChange"===n&&(u=!1!==a.onChange2()&&u),u}),c.gb,c.y)),t.Bb(36,16384,null,0,r.Pb,[t.p],null,null),t.Rb(1024,null,h.b,(function(l){return[l]}),[r.Pb]),t.Bb(38,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,h.c,null,[h.e]),t.Bb(40,16384,null,0,h.d,[[4,h.c]],null,null),t.Bb(41,49152,null,0,r.pb,[t.j,t.p,t.F],{interface:[0,"interface"]},null),(l()(),t.Cb(42,0,null,0,2,"ion-select-option",[["value","sedan"]],null,null,null,c.fb,c.z)),t.Bb(43,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Sedan"])),(l()(),t.Cb(45,0,null,0,2,"ion-select-option",[["value","hatchback"]],null,null,null,c.fb,c.z)),t.Bb(46,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Hatchback"])),(l()(),t.Cb(48,0,null,0,2,"ion-select-option",[["value","suv"]],null,null,null,c.fb,c.z)),t.Bb(49,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["SUV"])),(l()(),t.Cb(51,0,null,0,22,"ion-item",[],[[8,"hidden",0]],null,null,c.bb,c.r)),t.Bb(52,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(53,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),t.Bb(54,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Bike type"])),(l()(),t.Cb(56,0,null,0,15,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,a=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,57)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,57)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.catagory=e)&&u),u}),c.gb,c.y)),t.Bb(57,16384,null,0,r.Pb,[t.p],null,null),t.Rb(1024,null,h.b,(function(l){return[l]}),[r.Pb]),t.Bb(59,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,h.c,null,[h.e]),t.Bb(61,16384,null,0,h.d,[[4,h.c]],null,null),t.Bb(62,49152,null,0,r.pb,[t.j,t.p,t.F],{interface:[0,"interface"]},null),(l()(),t.Cb(63,0,null,0,2,"ion-select-option",[["value","sports"]],null,null,null,c.fb,c.z)),t.Bb(64,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["sports bike"])),(l()(),t.Cb(66,0,null,0,2,"ion-select-option",[["value","moped"]],null,null,null,c.fb,c.z)),t.Bb(67,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["moped"])),(l()(),t.Cb(69,0,null,0,2,"ion-select-option",[["value","bike"]],null,null,null,c.fb,c.z)),t.Bb(70,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["bike"])),(l()(),t.Cb(72,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(73,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(74,0,null,0,36,"ion-item",[],null,null,null,c.bb,c.r)),t.Bb(75,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(76,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),t.Bb(77,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Select Brand"])),(l()(),t.Cb(79,0,null,0,15,"ion-select",[["interface","popover"]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,a=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,80)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,80)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.brand=e)&&u),"ionChange"===n&&(u=!1!==a.sendCardet()&&u),u}),c.gb,c.y)),t.Bb(80,16384,null,0,r.Pb,[t.p],null,null),t.Rb(1024,null,h.b,(function(l){return[l]}),[r.Pb]),t.Bb(82,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,h.c,null,[h.e]),t.Bb(84,16384,null,0,h.d,[[4,h.c]],null,null),t.Bb(85,49152,null,0,r.pb,[t.j,t.p,t.F],{interface:[0,"interface"]},null),(l()(),t.Cb(86,0,null,0,2,"ion-select-option",[["value","hyundai"]],null,null,null,c.fb,c.z)),t.Bb(87,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Hyundai"])),(l()(),t.Cb(89,0,null,0,2,"ion-select-option",[["value","suzuki"]],null,null,null,c.fb,c.z)),t.Bb(90,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Maruti Suzuki"])),(l()(),t.Cb(92,0,null,0,2,"ion-select-option",[["value","honda"]],null,null,null,c.fb,c.z)),t.Bb(93,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Honda"])),(l()(),t.Cb(95,0,null,0,15,"ion-select",[["interface","popover"]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,a=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,96)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,96)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.brand=e)&&u),u}),c.gb,c.y)),t.Bb(96,16384,null,0,r.Pb,[t.p],null,null),t.Rb(1024,null,h.b,(function(l){return[l]}),[r.Pb]),t.Bb(98,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,h.c,null,[h.e]),t.Bb(100,16384,null,0,h.d,[[4,h.c]],null,null),t.Bb(101,49152,null,0,r.pb,[t.j,t.p,t.F],{interface:[0,"interface"]},null),(l()(),t.Cb(102,0,null,0,2,"ion-select-option",[["value","Honda"]],null,null,null,c.fb,c.z)),t.Bb(103,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Honda"])),(l()(),t.Cb(105,0,null,0,2,"ion-select-option",[["value","Bajaj"]],null,null,null,c.fb,c.z)),t.Bb(106,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["bajaj"])),(l()(),t.Cb(108,0,null,0,2,"ion-select-option",[["value","Hero"]],null,null,null,c.fb,c.z)),t.Bb(109,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["hero"])),(l()(),t.Cb(111,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(112,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(113,0,null,0,13,"ion-item",[],null,null,null,c.bb,c.r)),t.Bb(114,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(115,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),t.Bb(116,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Select Model"])),(l()(),t.Cb(118,0,null,0,8,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,a=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,119)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,119)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.model=e)&&u),u}),c.gb,c.y)),t.Bb(119,16384,null,0,r.Pb,[t.p],null,null),t.Rb(1024,null,h.b,(function(l){return[l]}),[r.Pb]),t.Bb(121,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,h.c,null,[h.e]),t.Bb(123,16384,null,0,h.d,[[4,h.c]],null,null),t.Bb(124,49152,null,0,r.pb,[t.j,t.p,t.F],{interface:[0,"interface"]},null),(l()(),t.rb(16777216,null,0,1,null,B)),t.Bb(126,278528,null,0,p.j,[t.X,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Cb(127,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(128,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(129,0,null,0,11,"ion-item",[],null,null,null,c.bb,c.r)),t.Bb(130,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(131,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),t.Bb(132,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Vehicle Number"])),(l()(),t.Cb(134,0,null,0,6,"ion-input",[["placeholder","Eg: GJ-13-CC-710"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,a=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,135)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,135)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.number=e)&&u),u}),c.X,c.q)),t.Bb(135,16384,null,0,r.Qb,[t.p],null,null),t.Rb(1024,null,h.b,(function(l){return[l]}),[r.Qb]),t.Bb(137,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,h.c,null,[h.e]),t.Bb(139,16384,null,0,h.d,[[4,h.c]],null,null),t.Bb(140,49152,null,0,r.I,[t.j,t.p,t.F],{placeholder:[0,"placeholder"]},null),(l()(),t.Cb(141,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(142,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(143,0,null,0,24,"ion-item",[],null,null,null,c.bb,c.r)),t.Bb(144,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(145,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),t.Bb(146,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Parking location"])),(l()(),t.Cb(148,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(149,0,null,0,18,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,a=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,150)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,150)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.area=e)&&u),"ionChange"===n&&(u=!1!==a.onChange()&&u),u}),c.gb,c.y)),t.Bb(150,16384,null,0,r.Pb,[t.p],null,null),t.Rb(1024,null,h.b,(function(l){return[l]}),[r.Pb]),t.Bb(152,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,h.c,null,[h.e]),t.Bb(154,16384,null,0,h.d,[[4,h.c]],null,null),t.Bb(155,49152,null,0,r.pb,[t.j,t.p,t.F],{interface:[0,"interface"]},null),(l()(),t.Cb(156,0,null,0,2,"ion-select-option",[["value","Basement 1"]],null,null,null,c.fb,c.z)),t.Bb(157,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Basement 1"])),(l()(),t.Cb(159,0,null,0,2,"ion-select-option",[["value","Basement 2"]],null,null,null,c.fb,c.z)),t.Bb(160,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Basement 2"])),(l()(),t.Cb(162,0,null,0,2,"ion-select-option",[["value","Ground Floor"]],null,null,null,c.fb,c.z)),t.Bb(163,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Ground Floor"])),(l()(),t.Cb(165,0,null,0,2,"ion-select-option",[["value","4"]],null,null,null,c.fb,c.z)),t.Bb(166,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["Other"])),(l()(),t.rb(16777216,null,0,1,null,y)),t.Bb(169,16384,null,0,p.k,[t.X,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Cb(170,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(171,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(172,0,null,0,23,"ion-item",[],null,null,null,c.bb,c.r)),t.Bb(173,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(174,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),t.Bb(175,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Preferred time"])),(l()(),t.Cb(177,0,null,0,18,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,a=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,178)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,178)._handleChangeEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.time=e)&&u),u}),c.gb,c.y)),t.Bb(178,16384,null,0,r.Pb,[t.p],null,null),t.Rb(1024,null,h.b,(function(l){return[l]}),[r.Pb]),t.Bb(180,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,h.c,null,[h.e]),t.Bb(182,16384,null,0,h.d,[[4,h.c]],null,null),t.Bb(183,49152,null,0,r.pb,[t.j,t.p,t.F],{interface:[0,"interface"]},null),(l()(),t.Cb(184,0,null,0,2,"ion-select-option",[["value","5"]],null,null,null,c.fb,c.z)),t.Bb(185,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["5:00-6:00 AM"])),(l()(),t.Cb(187,0,null,0,2,"ion-select-option",[["value","6"]],null,null,null,c.fb,c.z)),t.Bb(188,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["6:00-7:00 AM"])),(l()(),t.Cb(190,0,null,0,2,"ion-select-option",[["value","7"]],null,null,null,c.fb,c.z)),t.Bb(191,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["7:00-8:00 AM"])),(l()(),t.Cb(193,0,null,0,2,"ion-select-option",[["value","8"]],null,null,null,c.fb,c.z)),t.Bb(194,49152,null,0,r.qb,[t.j,t.p,t.F],{value:[0,"value"]},null),(l()(),t.Ub(-1,0,["8:00-9:00 AM"])),(l()(),t.Cb(196,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(197,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(198,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(199,0,null,0,7,"ion-item",[],null,null,null,c.bb,c.r)),t.Bb(200,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(201,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),t.Bb(202,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,[" Address "])),(l()(),t.Cb(204,0,null,0,2,"ion-button",[["color","danger"],["expand","block"],["size","medium"],["slot","end"],["style","margin-left: auto;margin-right: auto;"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.getLoc()&&u),u}),c.J,c.c)),t.Bb(205,49152,null,0,r.m,[t.j,t.p,t.F],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),t.Ub(-1,0,["Get Location"])),(l()(),t.Cb(207,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(208,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(209,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(210,0,null,0,2,"ion-button",[["class","buttons"],["color","dark"],["expand","block"],["fill","solid"],["shape","round"],["size","medium"],["style","width: 50%;margin-right:25%;margin-left:25%"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.dash()&&u),u}),c.J,c.c)),t.Bb(211,49152,null,0,r.m,[t.j,t.p,t.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),t.Ub(-1,0,["Add More"])),(l()(),t.Cb(213,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(214,0,null,0,2,"ion-button",[["class","buttons"],["color","dark"],["expand","block"],["fill","solid"],["shape","round"],["size","medium"],["style","width: 50%;margin-right:25%;margin-left:25%"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.finaldash()&&u),u}),c.J,c.c)),t.Bb(215,49152,null,0,r.m,[t.j,t.p,t.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),t.Ub(-1,0,["Submit"]))],(function(l,n){var e=n.component;l(n,20,0,e.type),l(n,23,0,"popover"),l(n,25,0,"Two wheeler"),l(n,28,0,"Car"),l(n,38,0,e.catagory),l(n,41,0,"popover"),l(n,43,0,"sedan"),l(n,46,0,"hatchback"),l(n,49,0,"suv"),l(n,59,0,e.catagory),l(n,62,0,"popover"),l(n,64,0,"sports"),l(n,67,0,"moped"),l(n,70,0,"bike"),l(n,82,0,e.brand),l(n,85,0,"popover"),l(n,87,0,"hyundai"),l(n,90,0,"suzuki"),l(n,93,0,"honda"),l(n,98,0,e.brand),l(n,101,0,"popover"),l(n,103,0,"Honda"),l(n,106,0,"Bajaj"),l(n,109,0,"Hero"),l(n,121,0,e.model),l(n,124,0,"popover"),l(n,126,0,e.resp.list),l(n,137,0,e.number),l(n,140,0,"Eg: GJ-13-CC-710"),l(n,152,0,e.area),l(n,155,0,"popover"),l(n,157,0,"Basement 1"),l(n,160,0,"Basement 2"),l(n,163,0,"Ground Floor"),l(n,166,0,"4"),l(n,169,0,4==e.vara),l(n,180,0,e.time),l(n,183,0,"popover"),l(n,185,0,"5"),l(n,188,0,"6"),l(n,191,0,"7"),l(n,194,0,"8"),l(n,205,0,"danger","block","medium"),l(n,211,0,"dark","block","solid","round","medium"),l(n,215,0,"dark","block","solid","round","medium")}),(function(l,n){var e=n.component;l(n,17,0,t.Ob(n,22).ngClassUntouched,t.Ob(n,22).ngClassTouched,t.Ob(n,22).ngClassPristine,t.Ob(n,22).ngClassDirty,t.Ob(n,22).ngClassValid,t.Ob(n,22).ngClassInvalid,t.Ob(n,22).ngClassPending),l(n,30,0,!e.car),l(n,35,0,t.Ob(n,40).ngClassUntouched,t.Ob(n,40).ngClassTouched,t.Ob(n,40).ngClassPristine,t.Ob(n,40).ngClassDirty,t.Ob(n,40).ngClassValid,t.Ob(n,40).ngClassInvalid,t.Ob(n,40).ngClassPending),l(n,51,0,!e.bike),l(n,56,0,t.Ob(n,61).ngClassUntouched,t.Ob(n,61).ngClassTouched,t.Ob(n,61).ngClassPristine,t.Ob(n,61).ngClassDirty,t.Ob(n,61).ngClassValid,t.Ob(n,61).ngClassInvalid,t.Ob(n,61).ngClassPending),l(n,79,0,!e.car,t.Ob(n,84).ngClassUntouched,t.Ob(n,84).ngClassTouched,t.Ob(n,84).ngClassPristine,t.Ob(n,84).ngClassDirty,t.Ob(n,84).ngClassValid,t.Ob(n,84).ngClassInvalid,t.Ob(n,84).ngClassPending),l(n,95,0,!e.bike,t.Ob(n,100).ngClassUntouched,t.Ob(n,100).ngClassTouched,t.Ob(n,100).ngClassPristine,t.Ob(n,100).ngClassDirty,t.Ob(n,100).ngClassValid,t.Ob(n,100).ngClassInvalid,t.Ob(n,100).ngClassPending),l(n,118,0,t.Ob(n,123).ngClassUntouched,t.Ob(n,123).ngClassTouched,t.Ob(n,123).ngClassPristine,t.Ob(n,123).ngClassDirty,t.Ob(n,123).ngClassValid,t.Ob(n,123).ngClassInvalid,t.Ob(n,123).ngClassPending),l(n,134,0,t.Ob(n,139).ngClassUntouched,t.Ob(n,139).ngClassTouched,t.Ob(n,139).ngClassPristine,t.Ob(n,139).ngClassDirty,t.Ob(n,139).ngClassValid,t.Ob(n,139).ngClassInvalid,t.Ob(n,139).ngClassPending),l(n,149,0,t.Ob(n,154).ngClassUntouched,t.Ob(n,154).ngClassTouched,t.Ob(n,154).ngClassPristine,t.Ob(n,154).ngClassDirty,t.Ob(n,154).ngClassValid,t.Ob(n,154).ngClassInvalid,t.Ob(n,154).ngClassPending),l(n,177,0,t.Ob(n,182).ngClassUntouched,t.Ob(n,182).ngClassTouched,t.Ob(n,182).ngClassPristine,t.Ob(n,182).ngClassDirty,t.Ob(n,182).ngClassValid,t.Ob(n,182).ngClassInvalid,t.Ob(n,182).ngClassPending)}))}var k=t.yb("app-addvehicle",s,(function(l){return t.Wb(0,[(l()(),t.Cb(0,0,null,null,1,"app-addvehicle",[],null,null,null,O,m)),t.Bb(1,114688,null,0,s,[C.b,v.m,i,b.a,f.c,o.a,r.Rb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);e.d(n,"AddvehiclePageModuleNgFactory",(function(){return j}));var j=t.zb(g,[],(function(l){return t.Lb([t.Mb(512,t.m,t.kb,[[8,[d.a,k]],[3,t.m],t.D]),t.Mb(4608,p.m,p.l,[t.z,[2,p.s]]),t.Mb(4608,h.g,h.g,[]),t.Mb(4608,r.c,r.c,[t.F,t.g]),t.Mb(4608,r.Ib,r.Ib,[r.c,t.m,t.w]),t.Mb(4608,r.Nb,r.Nb,[r.c,t.m,t.w]),t.Mb(1073742336,p.c,p.c,[]),t.Mb(1073742336,h.f,h.f,[]),t.Mb(1073742336,h.a,h.a,[]),t.Mb(1073742336,r.Gb,r.Gb,[]),t.Mb(1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),t.Mb(1073742336,g,g,[]),t.Mb(1024,v.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);