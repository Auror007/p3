(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{NmYi:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=e("mrSG");let a=(()=>{class l{constructor(){this.details={email:String,vehicleType:String,brandName:String,vehicleModel:String,vehicleCatagory:String,number:String,parkingarea:String,address:String,lat:Number,lng:Number,prefferedTime:Number,flag:0}}setEmail(l){this.details.email=l}setType(l){this.details.vehicleType=l}setBrand(l){this.details.brandName=l}setModel(l){this.details.vehicleModel=l}setCategory(l){this.details.vehicleCatagory=l}setParkingarea(l){this.details.parkingarea=l}setNumber(l){this.details.number=l}setAddress(l){this.details.address=l}setLat(l){this.details.lat=l}setLng(l){this.details.lng=l}setprefferedTime(l){this.details.prefferedTime=l}getCardet(){return{brand:this.details.brandName,catagory:this.details.vehicleCatagory}}getDet(){return this.details}}return l.ngInjectableDef=u.Zb({factory:function(){return new l},token:l,providedIn:"root"}),l})();var i=e("gTw3"),o=e("N+bC"),b=e("ZZ/e");class s{constructor(l,n,e,u,t,a,i,o,b){this.storage=l,this.router=n,this.detServ=e,this.alerCtrl=u,this.regServ=t,this.http=a,this.geolocation=i,this.toastController=o,this.events=b,this.time=-1,this.resp={list:[]},this.vara=0,this.storage.get("email").then(l=>{console.log(l),this.email=l}),this.storage.get("addr").then(l=>{console.log(l),this.address=l}),this.storage.get("cord").then(l=>{console.log(l),this.lat=l.lat,this.lng=l.lng})}ngOnInit(){}validate(){""==this.model||""==this.number||""==this.area||-1==this.time||""==this.brand||""==this.catagory||""==this.type?this.doAlert("Please fill all values!","Okay"):this.dash()}validat(){""==this.model||""==this.number||""==this.area||-1==this.time||""==this.brand||""==this.catagory||""==this.type?this.doAlert("Please fill all values!","Okay"):this.finaldash()}doAlert(l,n){return t.__awaiter(this,void 0,void 0,(function*(){const e=yield this.alerCtrl.create({header:"Error",message:l,buttons:[n]});yield e.present()}))}dash(){this.detServ.setEmail(this.email),this.detServ.setModel(this.model),this.detServ.setNumber(this.number),this.detServ.setParkingarea(this.area),this.detServ.setprefferedTime(this.time),this.detServ.setBrand(this.brand),this.detServ.setCategory(this.catagory),this.detServ.setType(this.type),this.detServ.setAddress(this.address),this.detServ.setLat(this.lat),this.detServ.setLng(this.lng);const l=this.detServ.getDet();console.log(l),this.http.post("https://mywash.herokuapp.com/uservehicle/addvehicle",l).subscribe(l=>{console.log(l),1==l.message&&(this.area="",this.type="",this.brand="",this.model="",this.number="",this.time=0,this.catagory="",this.pageTop.scrollToTop())},l=>{console.log(l)})}finaldash(){this.detServ.setEmail(this.email),this.detServ.setModel(this.model),this.detServ.setNumber(this.number),this.detServ.setParkingarea(this.area),this.detServ.setprefferedTime(this.time),this.detServ.setBrand(this.brand),this.detServ.setCategory(this.catagory),this.detServ.setType(this.type),this.detServ.setLat(this.lat),this.detServ.setLng(this.lng),this.detServ.setAddress(this.address);const l=this.detServ.getDet();console.log(l),this.http.post("https://mywash.herokuapp.com/uservehicle/addvehicle",l).subscribe(l=>{console.log(l),1==l.message&&(this.storage.set("activity","loggedin"),this.area="",this.type="",this.brand="",this.model="",this.number="",this.time=0,this.catagory="",this.events.publish("check1","update"),this.router.navigate(["/tabs/tabs/dash"],{replaceUrl:!0}))},l=>{console.log(l)})}onChange(){"4"==this.area&&(this.vara=4,this.area=void 0)}addArea(l){this.area=l}onChange1(l){console.log(this.type),this.detServ.setType(this.type),"Car"==this.type?(this.car=1,this.bike=0):(this.bike=1,this.car=0)}onChange2(){this.brand="",this.model=""}presentToast(){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Your location has been saved!",duration:2e3})).present()}))}sendCardet(){this.detServ.setCategory(this.catagory),this.detServ.setBrand(this.brand);const l=this.detServ.getCardet();console.log(this.detServ.getCardet()),this.http.post("https://mywash.herokuapp.com/uservehicle/findModel",l).subscribe(l=>{console.log(l.list),this.resp.list=l.list},l=>{console.log(l)})}}class r{}var d=e("pMnS"),h=e("oBZk"),g=e("s7LF"),c=e("SVse"),p=e("xgBC"),C=e("iInd"),v=e("IheW"),m=u.Ab({encapsulation:0,styles:[[""]],data:{}});function B(l){return u.Wb(0,[(l()(),u.Cb(0,0,null,null,2,"ion-select-option",[],null,null,null,h.hb,h.A)),u.Bb(1,49152,null,0,b.qb,[u.j,u.p,u.F],null,null),(l()(),u.Ub(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit)}))}function f(l){return u.Wb(0,[(l()(),u.Cb(0,0,null,null,11,"ion-item",[],null,null,null,h.cb,h.r)),u.Bb(1,49152,null,0,b.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(2,0,null,0,2,"ion-label",[],null,null,null,h.db,h.v)),u.Bb(3,49152,null,0,b.P,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Specify location"])),(l()(),u.Cb(5,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,6)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,6)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(a.area=e)&&t),t}),h.Y,h.q)),u.Bb(6,16384,null,0,b.Rb,[u.p],null,null),u.Rb(1024,null,g.e,(function(l){return[l]}),[b.Rb]),u.Bb(8,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,g.f,null,[g.h]),u.Bb(10,16384,null,0,g.g,[[4,g.f]],null,null),u.Bb(11,49152,null,0,b.I,[u.j,u.p,u.F],{type:[0,"type"]},null)],(function(l,n){l(n,8,0,n.component.area),l(n,11,0,"text")}),(function(l,n){l(n,5,0,u.Ob(n,10).ngClassUntouched,u.Ob(n,10).ngClassTouched,u.Ob(n,10).ngClassPristine,u.Ob(n,10).ngClassDirty,u.Ob(n,10).ngClassValid,u.Ob(n,10).ngClassInvalid,u.Ob(n,10).ngClassPending)}))}function O(l){return u.Wb(0,[u.Sb(671088640,1,{pageTop:0}),(l()(),u.Cb(1,0,null,null,6,"ion-header",[],null,null,null,h.W,h.o)),u.Bb(2,49152,null,0,b.D,[u.j,u.p,u.F],null,null),(l()(),u.Cb(3,0,null,0,4,"ion-toolbar",[],null,null,null,h.pb,h.H)),u.Bb(4,49152,null,0,b.Eb,[u.j,u.p,u.F],null,null),(l()(),u.Cb(5,0,null,0,2,"ion-title",[["style","text-align:center;"]],null,null,null,h.ob,h.G)),u.Bb(6,49152,null,0,b.Cb,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Details"])),(l()(),u.Cb(8,0,null,null,203,"ion-content",[],null,null,null,h.S,h.k)),u.Bb(9,49152,[[1,4],["pageTop",4]],0,b.w,[u.j,u.p,u.F],null,null),(l()(),u.Cb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(12,0,null,0,17,"ion-item",[],null,null,null,h.cb,h.r)),u.Bb(13,49152,null,0,b.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(14,0,null,0,2,"ion-label",[],null,null,null,h.db,h.v)),u.Bb(15,49152,null,0,b.P,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Vehicle type "])),(l()(),u.Cb(17,0,null,0,12,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,18)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,18)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(a.type=e)&&t),"ionChange"===n&&(t=!1!==a.onChange1(a.type)&&t),t}),h.ib,h.z)),u.Bb(18,16384,null,0,b.Qb,[u.p],null,null),u.Rb(1024,null,g.e,(function(l){return[l]}),[b.Qb]),u.Bb(20,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,g.f,null,[g.h]),u.Bb(22,16384,null,0,g.g,[[4,g.f]],null,null),u.Bb(23,49152,null,0,b.pb,[u.j,u.p,u.F],{interface:[0,"interface"]},null),(l()(),u.Cb(24,0,null,0,2,"ion-select-option",[["value","Two wheeler"]],null,null,null,h.hb,h.A)),u.Bb(25,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Two-wheeler"])),(l()(),u.Cb(27,0,null,0,2,"ion-select-option",[["value","Car"]],null,null,null,h.hb,h.A)),u.Bb(28,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Car"])),(l()(),u.Cb(30,0,null,0,20,"ion-item",[],[[8,"hidden",0]],null,null,h.cb,h.r)),u.Bb(31,49152,null,0,b.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(32,0,null,0,2,"ion-label",[],null,null,null,h.db,h.v)),u.Bb(33,49152,null,0,b.P,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Car type"])),(l()(),u.Cb(35,0,null,0,15,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,36)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,36)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(a.catagory=e)&&t),"ionChange"===n&&(t=!1!==a.onChange2()&&t),t}),h.ib,h.z)),u.Bb(36,16384,null,0,b.Qb,[u.p],null,null),u.Rb(1024,null,g.e,(function(l){return[l]}),[b.Qb]),u.Bb(38,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,g.f,null,[g.h]),u.Bb(40,16384,null,0,g.g,[[4,g.f]],null,null),u.Bb(41,49152,null,0,b.pb,[u.j,u.p,u.F],{interface:[0,"interface"]},null),(l()(),u.Cb(42,0,null,0,2,"ion-select-option",[["value","sedan"]],null,null,null,h.hb,h.A)),u.Bb(43,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Sedan"])),(l()(),u.Cb(45,0,null,0,2,"ion-select-option",[["value","hatchback"]],null,null,null,h.hb,h.A)),u.Bb(46,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Hatchback"])),(l()(),u.Cb(48,0,null,0,2,"ion-select-option",[["value","suv"]],null,null,null,h.hb,h.A)),u.Bb(49,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["SUV"])),(l()(),u.Cb(51,0,null,0,22,"ion-item",[],[[8,"hidden",0]],null,null,h.cb,h.r)),u.Bb(52,49152,null,0,b.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(53,0,null,0,2,"ion-label",[],null,null,null,h.db,h.v)),u.Bb(54,49152,null,0,b.P,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Bike type"])),(l()(),u.Cb(56,0,null,0,15,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,57)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,57)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(a.catagory=e)&&t),t}),h.ib,h.z)),u.Bb(57,16384,null,0,b.Qb,[u.p],null,null),u.Rb(1024,null,g.e,(function(l){return[l]}),[b.Qb]),u.Bb(59,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,g.f,null,[g.h]),u.Bb(61,16384,null,0,g.g,[[4,g.f]],null,null),u.Bb(62,49152,null,0,b.pb,[u.j,u.p,u.F],{interface:[0,"interface"]},null),(l()(),u.Cb(63,0,null,0,2,"ion-select-option",[["value","sports"]],null,null,null,h.hb,h.A)),u.Bb(64,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["sports bike"])),(l()(),u.Cb(66,0,null,0,2,"ion-select-option",[["value","moped"]],null,null,null,h.hb,h.A)),u.Bb(67,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["moped"])),(l()(),u.Cb(69,0,null,0,2,"ion-select-option",[["value","bike"]],null,null,null,h.hb,h.A)),u.Bb(70,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["bike"])),(l()(),u.Cb(72,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(73,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(74,0,null,0,36,"ion-item",[],null,null,null,h.cb,h.r)),u.Bb(75,49152,null,0,b.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(76,0,null,0,2,"ion-label",[],null,null,null,h.db,h.v)),u.Bb(77,49152,null,0,b.P,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Select Brand"])),(l()(),u.Cb(79,0,null,0,15,"ion-select",[["interface","popover"]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,80)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,80)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(a.brand=e)&&t),"ionChange"===n&&(t=!1!==a.sendCardet()&&t),t}),h.ib,h.z)),u.Bb(80,16384,null,0,b.Qb,[u.p],null,null),u.Rb(1024,null,g.e,(function(l){return[l]}),[b.Qb]),u.Bb(82,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,g.f,null,[g.h]),u.Bb(84,16384,null,0,g.g,[[4,g.f]],null,null),u.Bb(85,49152,null,0,b.pb,[u.j,u.p,u.F],{interface:[0,"interface"]},null),(l()(),u.Cb(86,0,null,0,2,"ion-select-option",[["value","hyundai"]],null,null,null,h.hb,h.A)),u.Bb(87,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Hyundai"])),(l()(),u.Cb(89,0,null,0,2,"ion-select-option",[["value","suzuki"]],null,null,null,h.hb,h.A)),u.Bb(90,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Maruti Suzuki"])),(l()(),u.Cb(92,0,null,0,2,"ion-select-option",[["value","honda"]],null,null,null,h.hb,h.A)),u.Bb(93,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Honda"])),(l()(),u.Cb(95,0,null,0,15,"ion-select",[["interface","popover"]],[[8,"hidden",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,96)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,96)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(a.brand=e)&&t),t}),h.ib,h.z)),u.Bb(96,16384,null,0,b.Qb,[u.p],null,null),u.Rb(1024,null,g.e,(function(l){return[l]}),[b.Qb]),u.Bb(98,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,g.f,null,[g.h]),u.Bb(100,16384,null,0,g.g,[[4,g.f]],null,null),u.Bb(101,49152,null,0,b.pb,[u.j,u.p,u.F],{interface:[0,"interface"]},null),(l()(),u.Cb(102,0,null,0,2,"ion-select-option",[["value","Honda"]],null,null,null,h.hb,h.A)),u.Bb(103,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Honda"])),(l()(),u.Cb(105,0,null,0,2,"ion-select-option",[["value","Bajaj"]],null,null,null,h.hb,h.A)),u.Bb(106,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["bajaj"])),(l()(),u.Cb(108,0,null,0,2,"ion-select-option",[["value","Hero"]],null,null,null,h.hb,h.A)),u.Bb(109,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["hero"])),(l()(),u.Cb(111,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(112,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(113,0,null,0,13,"ion-item",[],null,null,null,h.cb,h.r)),u.Bb(114,49152,null,0,b.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(115,0,null,0,2,"ion-label",[],null,null,null,h.db,h.v)),u.Bb(116,49152,null,0,b.P,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Select Model"])),(l()(),u.Cb(118,0,null,0,8,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,119)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,119)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(a.model=e)&&t),t}),h.ib,h.z)),u.Bb(119,16384,null,0,b.Qb,[u.p],null,null),u.Rb(1024,null,g.e,(function(l){return[l]}),[b.Qb]),u.Bb(121,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,g.f,null,[g.h]),u.Bb(123,16384,null,0,g.g,[[4,g.f]],null,null),u.Bb(124,49152,null,0,b.pb,[u.j,u.p,u.F],{interface:[0,"interface"]},null),(l()(),u.rb(16777216,null,0,1,null,B)),u.Bb(126,278528,null,0,c.j,[u.X,u.S,u.x],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Cb(127,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(128,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(129,0,null,0,11,"ion-item",[],null,null,null,h.cb,h.r)),u.Bb(130,49152,null,0,b.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(131,0,null,0,2,"ion-label",[],null,null,null,h.db,h.v)),u.Bb(132,49152,null,0,b.P,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Vehicle Number"])),(l()(),u.Cb(134,0,null,0,6,"ion-input",[["placeholder","Eg: GJ-13-CC-710"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,135)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,135)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(a.number=e)&&t),t}),h.Y,h.q)),u.Bb(135,16384,null,0,b.Rb,[u.p],null,null),u.Rb(1024,null,g.e,(function(l){return[l]}),[b.Rb]),u.Bb(137,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,g.f,null,[g.h]),u.Bb(139,16384,null,0,g.g,[[4,g.f]],null,null),u.Bb(140,49152,null,0,b.I,[u.j,u.p,u.F],{placeholder:[0,"placeholder"]},null),(l()(),u.Cb(141,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(142,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(143,0,null,0,24,"ion-item",[],null,null,null,h.cb,h.r)),u.Bb(144,49152,null,0,b.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(145,0,null,0,2,"ion-label",[],null,null,null,h.db,h.v)),u.Bb(146,49152,null,0,b.P,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Parking location"])),(l()(),u.Cb(148,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(149,0,null,0,18,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,150)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,150)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(a.area=e)&&t),"ionChange"===n&&(t=!1!==a.onChange()&&t),t}),h.ib,h.z)),u.Bb(150,16384,null,0,b.Qb,[u.p],null,null),u.Rb(1024,null,g.e,(function(l){return[l]}),[b.Qb]),u.Bb(152,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,g.f,null,[g.h]),u.Bb(154,16384,null,0,g.g,[[4,g.f]],null,null),u.Bb(155,49152,null,0,b.pb,[u.j,u.p,u.F],{interface:[0,"interface"]},null),(l()(),u.Cb(156,0,null,0,2,"ion-select-option",[["value","Basement 1"]],null,null,null,h.hb,h.A)),u.Bb(157,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Basement 1"])),(l()(),u.Cb(159,0,null,0,2,"ion-select-option",[["value","Basement 2"]],null,null,null,h.hb,h.A)),u.Bb(160,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Basement 2"])),(l()(),u.Cb(162,0,null,0,2,"ion-select-option",[["value","Ground Floor"]],null,null,null,h.hb,h.A)),u.Bb(163,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Ground Floor"])),(l()(),u.Cb(165,0,null,0,2,"ion-select-option",[["value","4"]],null,null,null,h.hb,h.A)),u.Bb(166,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["Other"])),(l()(),u.rb(16777216,null,0,1,null,f)),u.Bb(169,16384,null,0,c.k,[u.X,u.S],{ngIf:[0,"ngIf"]},null),(l()(),u.Cb(170,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(171,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(172,0,null,0,26,"ion-item",[],null,null,null,h.cb,h.r)),u.Bb(173,49152,null,0,b.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(174,0,null,0,2,"ion-label",[],null,null,null,h.db,h.v)),u.Bb(175,49152,null,0,b.P,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Preferred time"])),(l()(),u.Cb(177,0,null,0,21,"ion-select",[["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,178)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,178)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(a.time=e)&&t),t}),h.ib,h.z)),u.Bb(178,16384,null,0,b.Qb,[u.p],null,null),u.Rb(1024,null,g.e,(function(l){return[l]}),[b.Qb]),u.Bb(180,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,g.f,null,[g.h]),u.Bb(182,16384,null,0,g.g,[[4,g.f]],null,null),u.Bb(183,49152,null,0,b.pb,[u.j,u.p,u.F],{interface:[0,"interface"]},null),(l()(),u.Cb(184,0,null,0,2,"ion-select-option",[["value","5"]],null,null,null,h.hb,h.A)),u.Bb(185,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["5:00-6:00 AM"])),(l()(),u.Cb(187,0,null,0,2,"ion-select-option",[["value","6"]],null,null,null,h.hb,h.A)),u.Bb(188,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["6:00-7:00 AM"])),(l()(),u.Cb(190,0,null,0,2,"ion-select-option",[["value","7"]],null,null,null,h.hb,h.A)),u.Bb(191,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["7:00-8:00 AM"])),(l()(),u.Cb(193,0,null,0,2,"ion-select-option",[["value","8"]],null,null,null,h.hb,h.A)),u.Bb(194,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["8:00-9:00 AM"])),(l()(),u.Cb(196,0,null,0,2,"ion-select-option",[["value","9"]],null,null,null,h.hb,h.A)),u.Bb(197,49152,null,0,b.qb,[u.j,u.p,u.F],{value:[0,"value"]},null),(l()(),u.Ub(-1,0,["9:00-10:00 AM"])),(l()(),u.Cb(199,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(200,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(201,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(202,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(203,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(204,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(205,0,null,0,2,"ion-button",[["class","buttons"],["color","dark"],["expand","block"],["fill","solid"],["shape","round"],["size","medium"],["style","width: 50%;margin-right:25%;margin-left:25%"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.validate()&&u),u}),h.K,h.c)),u.Bb(206,49152,null,0,b.m,[u.j,u.p,u.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),u.Ub(-1,0,["Add More"])),(l()(),u.Cb(208,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(209,0,null,0,2,"ion-button",[["class","buttons"],["color","dark"],["expand","block"],["fill","solid"],["shape","round"],["size","medium"],["style","width: 50%;margin-right:25%;margin-left:25%"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.validat()&&u),u}),h.K,h.c)),u.Bb(210,49152,null,0,b.m,[u.j,u.p,u.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),u.Ub(-1,0,["Submit"]))],(function(l,n){var e=n.component;l(n,20,0,e.type),l(n,23,0,"popover"),l(n,25,0,"Two wheeler"),l(n,28,0,"Car"),l(n,38,0,e.catagory),l(n,41,0,"popover"),l(n,43,0,"sedan"),l(n,46,0,"hatchback"),l(n,49,0,"suv"),l(n,59,0,e.catagory),l(n,62,0,"popover"),l(n,64,0,"sports"),l(n,67,0,"moped"),l(n,70,0,"bike"),l(n,82,0,e.brand),l(n,85,0,"popover"),l(n,87,0,"hyundai"),l(n,90,0,"suzuki"),l(n,93,0,"honda"),l(n,98,0,e.brand),l(n,101,0,"popover"),l(n,103,0,"Honda"),l(n,106,0,"Bajaj"),l(n,109,0,"Hero"),l(n,121,0,e.model),l(n,124,0,"popover"),l(n,126,0,e.resp.list),l(n,137,0,e.number),l(n,140,0,"Eg: GJ-13-CC-710"),l(n,152,0,e.area),l(n,155,0,"popover"),l(n,157,0,"Basement 1"),l(n,160,0,"Basement 2"),l(n,163,0,"Ground Floor"),l(n,166,0,"4"),l(n,169,0,4==e.vara),l(n,180,0,e.time),l(n,183,0,"popover"),l(n,185,0,"5"),l(n,188,0,"6"),l(n,191,0,"7"),l(n,194,0,"8"),l(n,197,0,"9"),l(n,206,0,"dark","block","solid","round","medium"),l(n,210,0,"dark","block","solid","round","medium")}),(function(l,n){var e=n.component;l(n,17,0,u.Ob(n,22).ngClassUntouched,u.Ob(n,22).ngClassTouched,u.Ob(n,22).ngClassPristine,u.Ob(n,22).ngClassDirty,u.Ob(n,22).ngClassValid,u.Ob(n,22).ngClassInvalid,u.Ob(n,22).ngClassPending),l(n,30,0,!e.car),l(n,35,0,u.Ob(n,40).ngClassUntouched,u.Ob(n,40).ngClassTouched,u.Ob(n,40).ngClassPristine,u.Ob(n,40).ngClassDirty,u.Ob(n,40).ngClassValid,u.Ob(n,40).ngClassInvalid,u.Ob(n,40).ngClassPending),l(n,51,0,!e.bike),l(n,56,0,u.Ob(n,61).ngClassUntouched,u.Ob(n,61).ngClassTouched,u.Ob(n,61).ngClassPristine,u.Ob(n,61).ngClassDirty,u.Ob(n,61).ngClassValid,u.Ob(n,61).ngClassInvalid,u.Ob(n,61).ngClassPending),l(n,79,0,!e.car,u.Ob(n,84).ngClassUntouched,u.Ob(n,84).ngClassTouched,u.Ob(n,84).ngClassPristine,u.Ob(n,84).ngClassDirty,u.Ob(n,84).ngClassValid,u.Ob(n,84).ngClassInvalid,u.Ob(n,84).ngClassPending),l(n,95,0,!e.bike,u.Ob(n,100).ngClassUntouched,u.Ob(n,100).ngClassTouched,u.Ob(n,100).ngClassPristine,u.Ob(n,100).ngClassDirty,u.Ob(n,100).ngClassValid,u.Ob(n,100).ngClassInvalid,u.Ob(n,100).ngClassPending),l(n,118,0,u.Ob(n,123).ngClassUntouched,u.Ob(n,123).ngClassTouched,u.Ob(n,123).ngClassPristine,u.Ob(n,123).ngClassDirty,u.Ob(n,123).ngClassValid,u.Ob(n,123).ngClassInvalid,u.Ob(n,123).ngClassPending),l(n,134,0,u.Ob(n,139).ngClassUntouched,u.Ob(n,139).ngClassTouched,u.Ob(n,139).ngClassPristine,u.Ob(n,139).ngClassDirty,u.Ob(n,139).ngClassValid,u.Ob(n,139).ngClassInvalid,u.Ob(n,139).ngClassPending),l(n,149,0,u.Ob(n,154).ngClassUntouched,u.Ob(n,154).ngClassTouched,u.Ob(n,154).ngClassPristine,u.Ob(n,154).ngClassDirty,u.Ob(n,154).ngClassValid,u.Ob(n,154).ngClassInvalid,u.Ob(n,154).ngClassPending),l(n,177,0,u.Ob(n,182).ngClassUntouched,u.Ob(n,182).ngClassTouched,u.Ob(n,182).ngClassPristine,u.Ob(n,182).ngClassDirty,u.Ob(n,182).ngClassValid,u.Ob(n,182).ngClassInvalid,u.Ob(n,182).ngClassPending)}))}function y(l){return u.Wb(0,[(l()(),u.Cb(0,0,null,null,1,"app-addvehicle",[],null,null,null,O,m)),u.Bb(1,114688,null,0,s,[p.b,C.m,a,b.b,o.a,v.c,i.a,b.Sb,b.f],null,null)],(function(l,n){l(n,1,0)}),null)}var j=u.yb("app-addvehicle",s,y,{},{},[]);e.d(n,"AddvehiclePageModuleNgFactory",(function(){return F}));var F=u.zb(r,[],(function(l){return u.Lb([u.Mb(512,u.m,u.kb,[[8,[d.a,j]],[3,u.m],u.D]),u.Mb(4608,c.m,c.l,[u.z,[2,c.t]]),u.Mb(4608,g.k,g.k,[]),u.Mb(4608,b.c,b.c,[u.F,u.g]),u.Mb(4608,b.Jb,b.Jb,[b.c,u.m,u.w]),u.Mb(4608,b.Ob,b.Ob,[b.c,u.m,u.w]),u.Mb(1073742336,c.c,c.c,[]),u.Mb(1073742336,g.j,g.j,[]),u.Mb(1073742336,g.c,g.c,[]),u.Mb(1073742336,b.Gb,b.Gb,[]),u.Mb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),u.Mb(1073742336,r,r,[]),u.Mb(1024,C.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);