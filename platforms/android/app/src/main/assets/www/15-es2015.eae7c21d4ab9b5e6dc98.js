(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{NmYi:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("mrSG");let a=(()=>{class l{constructor(){this.details={email:String,vehicleType:String,brandName:String,vehicleModel:String,vehicleCatagory:String,number:String,parkingarea:String,longitude:String,latitude:String,prefferedTime:String,flag:0}}setEmail(l){this.details.email=l}setType(l){this.details.vehicleType=l}setBrand(l){this.details.brandName=l}setModel(l){this.details.vehicleModel=l}setCategory(l){this.details.vehicleCatagory=l}setParkingarea(l){this.details.parkingarea=l}setNumber(l){this.details.number=l}setLoc(l){this.details.latitude=l.lat,this.details.longitude=l.long}setprefferedTime(l){this.details.prefferedTime=l}getCardet(){return{brand:this.details.brandName,catagory:this.details.vehicleCatagory}}getDet(){return this.details}}return l.ngInjectableDef=e.Zb({factory:function(){return new l},token:l,providedIn:"root"}),l})();var i=u("gTw3"),o=u("N+bC"),b=u("ZZ/e");class r{constructor(l,n,u,e,t,a,i){this.storage=l,this.router=n,this.detServ=u,this.regServ=e,this.http=t,this.geolocation=a,this.toastController=i,this.resp={list:[]},this.vara=0,this.storage.get("email").then(l=>{console.log(l),this.email="parmar.parth97531@gmail.com"})}ngOnInit(){}dash(){this.detServ.setEmail(this.email),this.detServ.setModel(this.model),this.detServ.setNumber(this.number),this.detServ.setParkingarea(this.area),this.detServ.setprefferedTime(this.time),this.detServ.setBrand(this.brand),this.detServ.setCategory(this.catagory),this.detServ.setType(this.type);const l=this.detServ.getDet();console.log(l),this.http.post("https://mywash.herokuapp.com/uservehicle/addvehicle",l).subscribe(l=>{console.log(l),1==l.message&&(this.area="",this.type="",this.brand="",this.model="",this.number="",this.time="",this.catagory="",this.lat="",this.lng="",this.pageTop.scrollToTop())},l=>{console.log(l)})}finaldash(){this.detServ.setEmail(this.email),this.detServ.setModel(this.model),this.detServ.setNumber(this.number),this.detServ.setParkingarea(this.area),this.detServ.setprefferedTime(this.time),this.detServ.setBrand(this.brand),this.detServ.setCategory(this.catagory),this.detServ.setType(this.type);const l=this.detServ.getDet();console.log(l),this.http.post("https://mywash.herokuapp.com/uservehicle/addvehicle",l).subscribe(l=>{console.log(l),1==l.message&&this.router.navigateByUrl("/tabs")},l=>{console.log(l)})}onChange(){"4"==this.area&&(this.vara=4,this.area=void 0)}addArea(l){this.area=l}onChange1(l){console.log(this.type),this.detServ.setType(this.type),"Car"==this.type?(this.car=1,this.bike=0):(this.bike=1,this.car=0)}onChange2(){this.brand="",this.model=""}presentToast(){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Your location has been saved!",duration:2e3})).present()}))}sendCardet(){this.detServ.setCategory(this.catagory),this.detServ.setBrand(this.brand);const l=this.detServ.getCardet();console.log(this.detServ.getCardet()),this.http.post("https://mywash.herokuapp.com/uservehicle/findModel",l).subscribe(l=>{console.log(l.list),this.resp.list=l.list},l=>{console.log(l)})}getLoc(){this.geolocation.getCurrentPosition({maximumAge:1e3,timeout:5e3,enableHighAccuracy:!0}).then(l=>{this.lat=l.coords.latitude,this.lng=l.coords.longitude;const n={lat:this.lat,long:this.lng};console.log(n),this.detServ.setLoc(n)},l=>{console.log(l),alert("Can not retrieve Location")}).catch(l=>{alert("Error getting location - "+JSON.stringify(l))});const l={lat:this.lat,long:this.lng};console.log(l),this.detServ.setLoc(l),this.presentToast()}}class s{}var g=u("pMnS"),d=u("oBZk"),c=u("s7LF"),h=u("SVse"),p=u("xgBC"),C=u("iInd"),v=u("IheW"),m=e.Ab({encapsulation:0,styles:[[""]],data:{}});function B(l){return e.Wb(0,[(l()(),e.Cb(0,0,null,null,2,"ion-select-option",[],null,null,null,d.fb,d.z)),e.Bb(1,49152,null,0,b.qb,[e.j,e.p,e.F],null,null),(l()(),e.Ub(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit)}))}function f(l){return e.Wb(0,[(l()(),e.Cb(0,0,null,null,11,"ion-item",[],null,null,null,d.bb,d.r)),e.Bb(1,49152,null,0,b.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,2,"ion-label",[],null,null,null,d.cb,d.v)),e.Bb(3,49152,null,0,b.P,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Specify location"])),(l()(),e.Cb(5,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,6)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,6)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.area=u)&&t),t}),d.X,d.q)),e.Bb(6,16384,null,0,b.Qb,[e.p],null,null),e.Rb(1024,null,c.b,(function(l){return[l]}),[b.Qb]),e.Bb(8,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,c.c,null,[c.e]),e.Bb(10,16384,null,0,c.d,[[4,c.c]],null,null),e.Bb(11,49152,null,0,b.I,[e.j,e.p,e.F],{type:[0,"type"]},null)],(function(l,n){l(n,8,0,n.component.area),l(n,11,0,"text")}),(function(l,n){l(n,5,0,e.Ob(n,10).ngClassUntouched,e.Ob(n,10).ngClassTouched,e.Ob(n,10).ngClassPristine,e.Ob(n,10).ngClassDirty,e.Ob(n,10).ngClassValid,e.Ob(n,10).ngClassInvalid,e.Ob(n,10).ngClassPending)}))}function O(l){return e.Wb(0,[e.Sb(671088640,1,{pageTop:0}),(l()(),e.Cb(1,0,null,null,6,"ion-header",[],null,null,null,d.V,d.o)),e.Bb(2,49152,null,0,b.D,[e.j,e.p,e.F],null,null),(l()(),e.Cb(3,0,null,0,4,"ion-toolbar",[],null,null,null,d.nb,d.G)),e.Bb(4,49152,null,0,b.Eb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(5,0,null,0,2,"ion-title",[["style","text-align:center;"]],null,null,null,d.mb,d.F)),e.Bb(6,49152,null,0,b.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Details"])),(l()(),e.Cb(8,0,null,null,211,"ion-content",[],null,null,null,d.R,d.k)),e.Bb(9,49152,[[1,4],["pageTop",4]],0,b.w,[e.j,e.p,e.F],null,null),(l()(),e.Cb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(12,0,null,0,17,"ion-item",[],null,null,null,d.bb,d.r)),e.Bb(13,49152,null,0,b.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(14,0,null,0,2,"ion-label",[],null,null,null,d.cb,d.v)),e.Bb(15,49152,null,0,b.P,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Vehicle type "])),(l()(),e.Cb(17,0,null,0,12,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,18)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,18)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.type=u)&&t),"ionChange"===n&&(t=!1!==a.onChange1(a.type)&&t),t}),d.gb,d.y)),e.Bb(18,16384,null,0,b.Pb,[e.p],null,null),e.Rb(1024,null,c.b,(function(l){return[l]}),[b.Pb]),e.Bb(20,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,c.c,null,[c.e]),e.Bb(22,16384,null,0,c.d,[[4,c.c]],null,null),e.Bb(23,49152,null,0,b.pb,[e.j,e.p,e.F],{interface:[0,"interface"]},null),(l()(),e.Cb(24,0,null,0,2,"ion-select-option",[["value","Two wheeler"]],null,null,null,d.fb,d.z)),e.Bb(25,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Two-wheeler"])),(l()(),e.Cb(27,0,null,0,2,"ion-select-option",[["value","Car"]],null,null,null,d.fb,d.z)),e.Bb(28,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Car"])),(l()(),e.Cb(30,0,null,0,20,"ion-item",[],[[8,"hidden",0]],null,null,d.bb,d.r)),e.Bb(31,49152,null,0,b.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(32,0,null,0,2,"ion-label",[],null,null,null,d.cb,d.v)),e.Bb(33,49152,null,0,b.P,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Car type"])),(l()(),e.Cb(35,0,null,0,15,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,36)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,36)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.catagory=u)&&t),"ionChange"===n&&(t=!1!==a.onChange2()&&t),t}),d.gb,d.y)),e.Bb(36,16384,null,0,b.Pb,[e.p],null,null),e.Rb(1024,null,c.b,(function(l){return[l]}),[b.Pb]),e.Bb(38,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,c.c,null,[c.e]),e.Bb(40,16384,null,0,c.d,[[4,c.c]],null,null),e.Bb(41,49152,null,0,b.pb,[e.j,e.p,e.F],{interface:[0,"interface"]},null),(l()(),e.Cb(42,0,null,0,2,"ion-select-option",[["value","sedan"]],null,null,null,d.fb,d.z)),e.Bb(43,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Sedan"])),(l()(),e.Cb(45,0,null,0,2,"ion-select-option",[["value","hatchback"]],null,null,null,d.fb,d.z)),e.Bb(46,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Hatchback"])),(l()(),e.Cb(48,0,null,0,2,"ion-select-option",[["value","suv"]],null,null,null,d.fb,d.z)),e.Bb(49,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["SUV"])),(l()(),e.Cb(51,0,null,0,22,"ion-item",[],[[8,"hidden",0]],null,null,d.bb,d.r)),e.Bb(52,49152,null,0,b.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(53,0,null,0,2,"ion-label",[],null,null,null,d.cb,d.v)),e.Bb(54,49152,null,0,b.P,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Bike type"])),(l()(),e.Cb(56,0,null,0,15,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,57)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,57)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.catagory=u)&&t),t}),d.gb,d.y)),e.Bb(57,16384,null,0,b.Pb,[e.p],null,null),e.Rb(1024,null,c.b,(function(l){return[l]}),[b.Pb]),e.Bb(59,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,c.c,null,[c.e]),e.Bb(61,16384,null,0,c.d,[[4,c.c]],null,null),e.Bb(62,49152,null,0,b.pb,[e.j,e.p,e.F],{interface:[0,"interface"]},null),(l()(),e.Cb(63,0,null,0,2,"ion-select-option",[["value","sports"]],null,null,null,d.fb,d.z)),e.Bb(64,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["sports bike"])),(l()(),e.Cb(66,0,null,0,2,"ion-select-option",[["value","moped"]],null,null,null,d.fb,d.z)),e.Bb(67,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["moped"])),(l()(),e.Cb(69,0,null,0,2,"ion-select-option",[["value","bike"]],null,null,null,d.fb,d.z)),e.Bb(70,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["bike"])),(l()(),e.Cb(72,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(73,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(74,0,null,0,36,"ion-item",[],null,null,null,d.bb,d.r)),e.Bb(75,49152,null,0,b.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(76,0,null,0,2,"ion-label",[],null,null,null,d.cb,d.v)),e.Bb(77,49152,null,0,b.P,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Select Brand"])),(l()(),e.Cb(79,0,null,0,15,"ion-select",[["interface","popover"]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,80)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,80)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.brand=u)&&t),"ionChange"===n&&(t=!1!==a.sendCardet()&&t),t}),d.gb,d.y)),e.Bb(80,16384,null,0,b.Pb,[e.p],null,null),e.Rb(1024,null,c.b,(function(l){return[l]}),[b.Pb]),e.Bb(82,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,c.c,null,[c.e]),e.Bb(84,16384,null,0,c.d,[[4,c.c]],null,null),e.Bb(85,49152,null,0,b.pb,[e.j,e.p,e.F],{interface:[0,"interface"]},null),(l()(),e.Cb(86,0,null,0,2,"ion-select-option",[["value","hyundai"]],null,null,null,d.fb,d.z)),e.Bb(87,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Hyundai"])),(l()(),e.Cb(89,0,null,0,2,"ion-select-option",[["value","suzuki"]],null,null,null,d.fb,d.z)),e.Bb(90,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Maruti Suzuki"])),(l()(),e.Cb(92,0,null,0,2,"ion-select-option",[["value","honda"]],null,null,null,d.fb,d.z)),e.Bb(93,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Honda"])),(l()(),e.Cb(95,0,null,0,15,"ion-select",[["interface","popover"]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,96)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,96)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.brand=u)&&t),t}),d.gb,d.y)),e.Bb(96,16384,null,0,b.Pb,[e.p],null,null),e.Rb(1024,null,c.b,(function(l){return[l]}),[b.Pb]),e.Bb(98,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,c.c,null,[c.e]),e.Bb(100,16384,null,0,c.d,[[4,c.c]],null,null),e.Bb(101,49152,null,0,b.pb,[e.j,e.p,e.F],{interface:[0,"interface"]},null),(l()(),e.Cb(102,0,null,0,2,"ion-select-option",[["value","Honda"]],null,null,null,d.fb,d.z)),e.Bb(103,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Honda"])),(l()(),e.Cb(105,0,null,0,2,"ion-select-option",[["value","Bajaj"]],null,null,null,d.fb,d.z)),e.Bb(106,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["bajaj"])),(l()(),e.Cb(108,0,null,0,2,"ion-select-option",[["value","Hero"]],null,null,null,d.fb,d.z)),e.Bb(109,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["hero"])),(l()(),e.Cb(111,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(112,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(113,0,null,0,13,"ion-item",[],null,null,null,d.bb,d.r)),e.Bb(114,49152,null,0,b.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(115,0,null,0,2,"ion-label",[],null,null,null,d.cb,d.v)),e.Bb(116,49152,null,0,b.P,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Select Model"])),(l()(),e.Cb(118,0,null,0,8,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,119)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,119)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.model=u)&&t),t}),d.gb,d.y)),e.Bb(119,16384,null,0,b.Pb,[e.p],null,null),e.Rb(1024,null,c.b,(function(l){return[l]}),[b.Pb]),e.Bb(121,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,c.c,null,[c.e]),e.Bb(123,16384,null,0,c.d,[[4,c.c]],null,null),e.Bb(124,49152,null,0,b.pb,[e.j,e.p,e.F],{interface:[0,"interface"]},null),(l()(),e.rb(16777216,null,0,1,null,B)),e.Bb(126,278528,null,0,h.j,[e.X,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Cb(127,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(128,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(129,0,null,0,11,"ion-item",[],null,null,null,d.bb,d.r)),e.Bb(130,49152,null,0,b.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(131,0,null,0,2,"ion-label",[],null,null,null,d.cb,d.v)),e.Bb(132,49152,null,0,b.P,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Vehicle Number"])),(l()(),e.Cb(134,0,null,0,6,"ion-input",[["placeholder","Eg: GJ-13-CC-710"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,135)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,135)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.number=u)&&t),t}),d.X,d.q)),e.Bb(135,16384,null,0,b.Qb,[e.p],null,null),e.Rb(1024,null,c.b,(function(l){return[l]}),[b.Qb]),e.Bb(137,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,c.c,null,[c.e]),e.Bb(139,16384,null,0,c.d,[[4,c.c]],null,null),e.Bb(140,49152,null,0,b.I,[e.j,e.p,e.F],{placeholder:[0,"placeholder"]},null),(l()(),e.Cb(141,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(142,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(143,0,null,0,24,"ion-item",[],null,null,null,d.bb,d.r)),e.Bb(144,49152,null,0,b.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(145,0,null,0,2,"ion-label",[],null,null,null,d.cb,d.v)),e.Bb(146,49152,null,0,b.P,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Parking location"])),(l()(),e.Cb(148,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(149,0,null,0,18,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,150)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,150)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.area=u)&&t),"ionChange"===n&&(t=!1!==a.onChange()&&t),t}),d.gb,d.y)),e.Bb(150,16384,null,0,b.Pb,[e.p],null,null),e.Rb(1024,null,c.b,(function(l){return[l]}),[b.Pb]),e.Bb(152,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,c.c,null,[c.e]),e.Bb(154,16384,null,0,c.d,[[4,c.c]],null,null),e.Bb(155,49152,null,0,b.pb,[e.j,e.p,e.F],{interface:[0,"interface"]},null),(l()(),e.Cb(156,0,null,0,2,"ion-select-option",[["value","Basement 1"]],null,null,null,d.fb,d.z)),e.Bb(157,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Basement 1"])),(l()(),e.Cb(159,0,null,0,2,"ion-select-option",[["value","Basement 2"]],null,null,null,d.fb,d.z)),e.Bb(160,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Basement 2"])),(l()(),e.Cb(162,0,null,0,2,"ion-select-option",[["value","Ground Floor"]],null,null,null,d.fb,d.z)),e.Bb(163,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Ground Floor"])),(l()(),e.Cb(165,0,null,0,2,"ion-select-option",[["value","4"]],null,null,null,d.fb,d.z)),e.Bb(166,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Other"])),(l()(),e.rb(16777216,null,0,1,null,f)),e.Bb(169,16384,null,0,h.k,[e.X,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Cb(170,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(171,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(172,0,null,0,26,"ion-item",[],null,null,null,d.bb,d.r)),e.Bb(173,49152,null,0,b.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(174,0,null,0,2,"ion-label",[],null,null,null,d.cb,d.v)),e.Bb(175,49152,null,0,b.P,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Preferred time"])),(l()(),e.Cb(177,0,null,0,21,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==e.Ob(l,178)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ob(l,178)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.time=u)&&t),t}),d.gb,d.y)),e.Bb(178,16384,null,0,b.Pb,[e.p],null,null),e.Rb(1024,null,c.b,(function(l){return[l]}),[b.Pb]),e.Bb(180,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,c.c,null,[c.e]),e.Bb(182,16384,null,0,c.d,[[4,c.c]],null,null),e.Bb(183,49152,null,0,b.pb,[e.j,e.p,e.F],{interface:[0,"interface"]},null),(l()(),e.Cb(184,0,null,0,2,"ion-select-option",[["value","1"]],null,null,null,d.fb,d.z)),e.Bb(185,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["5:00-6:00 AM"])),(l()(),e.Cb(187,0,null,0,2,"ion-select-option",[["value","2"]],null,null,null,d.fb,d.z)),e.Bb(188,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["6:00-7:00 AM"])),(l()(),e.Cb(190,0,null,0,2,"ion-select-option",[["value","3"]],null,null,null,d.fb,d.z)),e.Bb(191,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["7:00-8:00 AM"])),(l()(),e.Cb(193,0,null,0,2,"ion-select-option",[["value","4"]],null,null,null,d.fb,d.z)),e.Bb(194,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["8:00-9:00 AM"])),(l()(),e.Cb(196,0,null,0,2,"ion-select-option",[["value","5"]],null,null,null,d.fb,d.z)),e.Bb(197,49152,null,0,b.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(-1,0,["Any"])),(l()(),e.Cb(199,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(200,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(201,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(202,0,null,0,7,"ion-item",[],null,null,null,d.bb,d.r)),e.Bb(203,49152,null,0,b.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(204,0,null,0,2,"ion-label",[],null,null,null,d.cb,d.v)),e.Bb(205,49152,null,0,b.P,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,[" Address "])),(l()(),e.Cb(207,0,null,0,2,"ion-button",[["color","danger"],["expand","block"],["size","medium"],["slot","end"],["style","margin-left: auto;margin-right: auto;"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getLoc()&&e),e}),d.J,d.c)),e.Bb(208,49152,null,0,b.m,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),e.Ub(-1,0,["Get Location"])),(l()(),e.Cb(210,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(211,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(212,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(213,0,null,0,2,"ion-button",[["class","buttons"],["color","dark"],["expand","block"],["fill","solid"],["shape","round"],["size","medium"],["style","width: 50%;margin-right:25%;margin-left:25%"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.dash()&&e),e}),d.J,d.c)),e.Bb(214,49152,null,0,b.m,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Ub(-1,0,["Add More"])),(l()(),e.Cb(216,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(217,0,null,0,2,"ion-button",[["class","buttons"],["color","dark"],["expand","block"],["fill","solid"],["shape","round"],["size","medium"],["style","width: 50%;margin-right:25%;margin-left:25%"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.finaldash()&&e),e}),d.J,d.c)),e.Bb(218,49152,null,0,b.m,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Ub(-1,0,["Submit"]))],(function(l,n){var u=n.component;l(n,20,0,u.type),l(n,23,0,"popover"),l(n,25,0,"Two wheeler"),l(n,28,0,"Car"),l(n,38,0,u.catagory),l(n,41,0,"popover"),l(n,43,0,"sedan"),l(n,46,0,"hatchback"),l(n,49,0,"suv"),l(n,59,0,u.catagory),l(n,62,0,"popover"),l(n,64,0,"sports"),l(n,67,0,"moped"),l(n,70,0,"bike"),l(n,82,0,u.brand),l(n,85,0,"popover"),l(n,87,0,"hyundai"),l(n,90,0,"suzuki"),l(n,93,0,"honda"),l(n,98,0,u.brand),l(n,101,0,"popover"),l(n,103,0,"Honda"),l(n,106,0,"Bajaj"),l(n,109,0,"Hero"),l(n,121,0,u.model),l(n,124,0,"popover"),l(n,126,0,u.resp.list),l(n,137,0,u.number),l(n,140,0,"Eg: GJ-13-CC-710"),l(n,152,0,u.area),l(n,155,0,"popover"),l(n,157,0,"Basement 1"),l(n,160,0,"Basement 2"),l(n,163,0,"Ground Floor"),l(n,166,0,"4"),l(n,169,0,4==u.vara),l(n,180,0,u.time),l(n,183,0,"popover"),l(n,185,0,"1"),l(n,188,0,"2"),l(n,191,0,"3"),l(n,194,0,"4"),l(n,197,0,"5"),l(n,208,0,"danger","block","medium"),l(n,214,0,"dark","block","solid","round","medium"),l(n,218,0,"dark","block","solid","round","medium")}),(function(l,n){var u=n.component;l(n,17,0,e.Ob(n,22).ngClassUntouched,e.Ob(n,22).ngClassTouched,e.Ob(n,22).ngClassPristine,e.Ob(n,22).ngClassDirty,e.Ob(n,22).ngClassValid,e.Ob(n,22).ngClassInvalid,e.Ob(n,22).ngClassPending),l(n,30,0,!u.car),l(n,35,0,e.Ob(n,40).ngClassUntouched,e.Ob(n,40).ngClassTouched,e.Ob(n,40).ngClassPristine,e.Ob(n,40).ngClassDirty,e.Ob(n,40).ngClassValid,e.Ob(n,40).ngClassInvalid,e.Ob(n,40).ngClassPending),l(n,51,0,!u.bike),l(n,56,0,e.Ob(n,61).ngClassUntouched,e.Ob(n,61).ngClassTouched,e.Ob(n,61).ngClassPristine,e.Ob(n,61).ngClassDirty,e.Ob(n,61).ngClassValid,e.Ob(n,61).ngClassInvalid,e.Ob(n,61).ngClassPending),l(n,79,0,!u.car,e.Ob(n,84).ngClassUntouched,e.Ob(n,84).ngClassTouched,e.Ob(n,84).ngClassPristine,e.Ob(n,84).ngClassDirty,e.Ob(n,84).ngClassValid,e.Ob(n,84).ngClassInvalid,e.Ob(n,84).ngClassPending),l(n,95,0,!u.bike,e.Ob(n,100).ngClassUntouched,e.Ob(n,100).ngClassTouched,e.Ob(n,100).ngClassPristine,e.Ob(n,100).ngClassDirty,e.Ob(n,100).ngClassValid,e.Ob(n,100).ngClassInvalid,e.Ob(n,100).ngClassPending),l(n,118,0,e.Ob(n,123).ngClassUntouched,e.Ob(n,123).ngClassTouched,e.Ob(n,123).ngClassPristine,e.Ob(n,123).ngClassDirty,e.Ob(n,123).ngClassValid,e.Ob(n,123).ngClassInvalid,e.Ob(n,123).ngClassPending),l(n,134,0,e.Ob(n,139).ngClassUntouched,e.Ob(n,139).ngClassTouched,e.Ob(n,139).ngClassPristine,e.Ob(n,139).ngClassDirty,e.Ob(n,139).ngClassValid,e.Ob(n,139).ngClassInvalid,e.Ob(n,139).ngClassPending),l(n,149,0,e.Ob(n,154).ngClassUntouched,e.Ob(n,154).ngClassTouched,e.Ob(n,154).ngClassPristine,e.Ob(n,154).ngClassDirty,e.Ob(n,154).ngClassValid,e.Ob(n,154).ngClassInvalid,e.Ob(n,154).ngClassPending),l(n,177,0,e.Ob(n,182).ngClassUntouched,e.Ob(n,182).ngClassTouched,e.Ob(n,182).ngClassPristine,e.Ob(n,182).ngClassDirty,e.Ob(n,182).ngClassValid,e.Ob(n,182).ngClassInvalid,e.Ob(n,182).ngClassPending)}))}function y(l){return e.Wb(0,[(l()(),e.Cb(0,0,null,null,1,"app-addvehicle",[],null,null,null,O,m)),e.Bb(1,114688,null,0,r,[p.b,C.m,a,o.a,v.c,i.a,b.Rb],null,null)],(function(l,n){l(n,1,0)}),null)}var F=e.yb("app-addvehicle",r,y,{},{},[]);u.d(n,"AddvehiclePageModuleNgFactory",(function(){return j}));var j=e.zb(s,[],(function(l){return e.Lb([e.Mb(512,e.m,e.kb,[[8,[g.a,F]],[3,e.m],e.D]),e.Mb(4608,h.m,h.l,[e.z,[2,h.s]]),e.Mb(4608,c.g,c.g,[]),e.Mb(4608,b.c,b.c,[e.F,e.g]),e.Mb(4608,b.Ib,b.Ib,[b.c,e.m,e.w]),e.Mb(4608,b.Nb,b.Nb,[b.c,e.m,e.w]),e.Mb(1073742336,h.c,h.c,[]),e.Mb(1073742336,c.f,c.f,[]),e.Mb(1073742336,c.a,c.a,[]),e.Mb(1073742336,b.Gb,b.Gb,[]),e.Mb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),e.Mb(1073742336,s,s,[]),e.Mb(1024,C.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);