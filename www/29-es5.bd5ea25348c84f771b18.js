function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{gSbG:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=e("N+bC"),o=e("ZZ/e"),i=function(){function l(n,e,t,u,o){var i=this;_classCallCheck(this,l),this.regServ=n,this.http=e,this.router=t,this.nav=u,this.storage=o,this.otp="",this.storage.get("addr").then((function(l){console.log(l),i.address=l,i.regServ.setAddress(i.address)})),this.storage.get("cord").then((function(l){console.log(l),i.lat=l.lat,i.lng=l.lng,i.regServ.setLat(i.lat),i.regServ.setLng(i.lng)}))}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"verify",value:function(){var l=this,n=this.otp;this.regServ.setOtp(n);var e=this.regServ.getJson(),t={email:this.regServ.getEmail(),otp:this.otp};console.log(e);try{this.storage.get("activity").then((function(n){"registered"==n?(console.log(e),l.http.post("https://mywash.herokuapp.com/verifyregister",e).subscribe((function(n){console.log(n),1==n.message&&(l.storage.set("num",e.phone),l.router.navigateByUrl("/addvehicle"))}),(function(l){console.log(l)}))):"loggingin"==n&&(console.log(t),l.http.post("https://mywash.herokuapp.com/verifylogin",t).subscribe((function(n){console.log(n),1==n.message&&(l.storage.set("activity","loggedin"),l.storage.set("address",n.message),l.storage.set("coords",{lat:n.lat,lng:n.lng}),l.router.navigateByUrl("/tabs/tabs/dash"))}),(function(l){console.log(l)})))}))}catch(u){console.dir(u)}}}]),l}(),r=function l(){_classCallCheck(this,l)},s=e("pMnS"),a=e("oBZk"),b=e("s7LF"),c=e("IheW"),g=e("iInd"),p=e("xgBC"),h=t.Ab({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Wb(0,[(l()(),t.Cb(0,0,null,null,6,"ion-header",[],null,null,null,a.W,a.o)),t.Bb(1,49152,null,0,o.D,[t.j,t.p,t.F],null,null),(l()(),t.Cb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.pb,a.H)),t.Bb(3,49152,null,0,o.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Cb(4,0,null,0,2,"ion-title",[["align-title","center"]],null,null,null,a.ob,a.G)),t.Bb(5,49152,null,0,o.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Verify OTP"])),(l()(),t.Cb(7,0,null,null,22,"ion-content",[],null,null,null,a.S,a.k)),t.Bb(8,49152,null,0,o.w,[t.j,t.p,t.F],null,null),(l()(),t.Cb(9,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(11,0,null,0,11,"ion-item",[],null,null,null,a.cb,a.r)),t.Bb(12,49152,null,0,o.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(13,0,null,0,2,"ion-label",[["center",""],["position","floating"]],null,null,null,a.db,a.v)),t.Bb(14,49152,null,0,o.P,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Ub(-1,0,[" CONFIRM OTP "])),(l()(),t.Cb(16,0,null,0,6,"ion-input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Ob(l,17)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ob(l,17)._handleIonChange(e.target)&&u),"ngModelChange"===n&&(u=!1!==(o.otp=e)&&u),u}),a.Y,a.q)),t.Bb(17,16384,null,0,o.Mb,[t.p],null,null),t.Rb(1024,null,b.c,(function(l){return[l]}),[o.Mb]),t.Bb(19,671744,null,0,b.f,[[8,null],[8,null],[8,null],[6,b.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,b.d,null,[b.f]),t.Bb(21,16384,null,0,b.e,[[4,b.d]],null,null),t.Bb(22,49152,null,0,o.I,[t.j,t.p,t.F],{type:[0,"type"]},null),(l()(),t.Cb(23,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(24,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(25,0,null,0,4,"ion-row",[],null,null,null,a.fb,a.x)),t.Bb(26,49152,null,0,o.lb,[t.j,t.p,t.F],null,null),(l()(),t.Cb(27,0,null,0,2,"ion-button",[["class","buttons"],["color","dark"],["expand","block"],["fill","solid"],["shape","round"],["size","large"],["style","margin-left: 35%;margin-right: 30%;"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.verify()&&t),t}),a.K,a.c)),t.Bb(28,49152,null,0,o.m,[t.j,t.p,t.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),t.Ub(-1,0,["VERIFY"]))],(function(l,n){var e=n.component;l(n,14,0,"floating"),l(n,19,0,e.otp),l(n,22,0,"number"),l(n,28,0,"dark","block","solid","round","large")}),(function(l,n){l(n,16,0,t.Ob(n,21).ngClassUntouched,t.Ob(n,21).ngClassTouched,t.Ob(n,21).ngClassPristine,t.Ob(n,21).ngClassDirty,t.Ob(n,21).ngClassValid,t.Ob(n,21).ngClassInvalid,t.Ob(n,21).ngClassPending)}))}var f=t.yb("app-registernew",i,(function(l){return t.Wb(0,[(l()(),t.Cb(0,0,null,null,1,"app-registernew",[],null,null,null,d,h)),t.Bb(1,114688,null,0,i,[u.a,c.c,g.m,o.Kb,p.b],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),C=e("SVse");e.d(n,"RegisternewPageModuleNgFactory",(function(){return v}));var v=t.zb(r,[],(function(l){return t.Lb([t.Mb(512,t.m,t.kb,[[8,[s.a,f]],[3,t.m],t.D]),t.Mb(4608,C.m,C.l,[t.z,[2,C.t]]),t.Mb(4608,b.i,b.i,[]),t.Mb(4608,o.c,o.c,[t.F,t.g]),t.Mb(4608,o.Jb,o.Jb,[o.c,t.m,t.w]),t.Mb(4608,o.Ob,o.Ob,[o.c,t.m,t.w]),t.Mb(1073742336,C.c,C.c,[]),t.Mb(1073742336,b.h,b.h,[]),t.Mb(1073742336,b.a,b.a,[]),t.Mb(1073742336,o.Gb,o.Gb,[]),t.Mb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),t.Mb(1073742336,r,r,[]),t.Mb(1024,g.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);