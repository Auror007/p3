(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{gSbG:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=t("N+bC"),o=t("ZZ/e");class s{constructor(l,n,t,e,u){this.regServ=l,this.http=n,this.router=t,this.nav=e,this.storage=u,this.otp="",this.storage.get("addr").then(l=>{console.log(l),this.address=l,this.regServ.setAddress(this.address)}),this.storage.get("cord").then(l=>{console.log(l),this.lat=l.lat,this.lng=l.lng,this.regServ.setLat(this.lat),this.regServ.setLng(this.lng)})}ngOnInit(){}verify(){const{otp:l}=this;this.regServ.setOtp(l);const n=this.regServ.getJson(),t={email:this.regServ.getEmail(),otp:this.otp};console.log(n);try{this.storage.get("activity").then(l=>{"registered"==l?(console.log(n),this.http.post("https://mywash.herokuapp.com/verifyregister",n).subscribe(l=>{console.log(l),1==l.message&&(this.storage.set("num",n.phone),this.router.navigateByUrl("/addvehicle"))},l=>{console.log(l)})):"loggingin"==l&&(console.log(t),this.http.post("https://mywash.herokuapp.com/verifylogin",t).subscribe(l=>{console.log(l),1==l.message&&(this.storage.set("activity","loggedin"),this.storage.set("address",l.message),this.storage.set("coords",{lat:l.lat,lng:l.lng}),this.router.navigateByUrl("/tabs/tabs/dash"))},l=>{console.log(l)}))})}catch(e){console.dir(e)}}}class i{}var r=t("pMnS"),a=t("oBZk"),b=t("s7LF"),g=t("IheW"),c=t("iInd"),h=t("xgBC"),p=e.Ab({encapsulation:0,styles:[[""]],data:{}});function d(l){return e.Wb(0,[(l()(),e.Cb(0,0,null,null,6,"ion-header",[],null,null,null,a.W,a.o)),e.Bb(1,49152,null,0,o.D,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.pb,a.H)),e.Bb(3,49152,null,0,o.Eb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(4,0,null,0,2,"ion-title",[["align-title","center"]],null,null,null,a.ob,a.G)),e.Bb(5,49152,null,0,o.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Verify OTP"])),(l()(),e.Cb(7,0,null,null,22,"ion-content",[],null,null,null,a.S,a.k)),e.Bb(8,49152,null,0,o.w,[e.j,e.p,e.F],null,null),(l()(),e.Cb(9,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(11,0,null,0,11,"ion-item",[],null,null,null,a.cb,a.r)),e.Bb(12,49152,null,0,o.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(13,0,null,0,2,"ion-label",[["center",""],["position","floating"]],null,null,null,a.db,a.v)),e.Bb(14,49152,null,0,o.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Ub(-1,0,[" CONFIRM OTP "])),(l()(),e.Cb(16,0,null,0,6,"ion-input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==e.Ob(l,17)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Ob(l,17)._handleIonChange(t.target)&&u),"ngModelChange"===n&&(u=!1!==(o.otp=t)&&u),u}),a.Y,a.q)),e.Bb(17,16384,null,0,o.Mb,[e.p],null,null),e.Rb(1024,null,b.c,(function(l){return[l]}),[o.Mb]),e.Bb(19,671744,null,0,b.f,[[8,null],[8,null],[8,null],[6,b.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,b.d,null,[b.f]),e.Bb(21,16384,null,0,b.e,[[4,b.d]],null,null),e.Bb(22,49152,null,0,o.I,[e.j,e.p,e.F],{type:[0,"type"]},null),(l()(),e.Cb(23,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(24,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Cb(25,0,null,0,4,"ion-row",[],null,null,null,a.fb,a.x)),e.Bb(26,49152,null,0,o.lb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(27,0,null,0,2,"ion-button",[["class","buttons"],["color","dark"],["expand","block"],["fill","solid"],["shape","round"],["size","large"],["style","margin-left: 35%;margin-right: 30%;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.verify()&&e),e}),a.K,a.c)),e.Bb(28,49152,null,0,o.m,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Ub(-1,0,["VERIFY"]))],(function(l,n){var t=n.component;l(n,14,0,"floating"),l(n,19,0,t.otp),l(n,22,0,"number"),l(n,28,0,"dark","block","solid","round","large")}),(function(l,n){l(n,16,0,e.Ob(n,21).ngClassUntouched,e.Ob(n,21).ngClassTouched,e.Ob(n,21).ngClassPristine,e.Ob(n,21).ngClassDirty,e.Ob(n,21).ngClassValid,e.Ob(n,21).ngClassInvalid,e.Ob(n,21).ngClassPending)}))}function C(l){return e.Wb(0,[(l()(),e.Cb(0,0,null,null,1,"app-registernew",[],null,null,null,d,p)),e.Bb(1,114688,null,0,s,[u.a,g.c,c.m,o.Kb,h.b],null,null)],(function(l,n){l(n,1,0)}),null)}var m=e.yb("app-registernew",s,C,{},{},[]),v=t("SVse");t.d(n,"RegisternewPageModuleNgFactory",(function(){return f}));var f=e.zb(i,[],(function(l){return e.Lb([e.Mb(512,e.m,e.kb,[[8,[r.a,m]],[3,e.m],e.D]),e.Mb(4608,v.m,v.l,[e.z,[2,v.t]]),e.Mb(4608,b.i,b.i,[]),e.Mb(4608,o.c,o.c,[e.F,e.g]),e.Mb(4608,o.Jb,o.Jb,[o.c,e.m,e.w]),e.Mb(4608,o.Ob,o.Ob,[o.c,e.m,e.w]),e.Mb(1073742336,v.c,v.c,[]),e.Mb(1073742336,b.h,b.h,[]),e.Mb(1073742336,b.a,b.a,[]),e.Mb(1073742336,o.Gb,o.Gb,[]),e.Mb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),e.Mb(1073742336,i,i,[]),e.Mb(1024,c.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);