function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"F/Pw":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("mrSG"),o=u("ZZ/e"),r=function(){function l(n,u,e){_classCallCheck(this,l),this.http=n,this.storage=u,this.loadingController=e,this.resp=[]}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.presentLoading(),this.storage.get("email").then((function(n){l.em=n})).then((function(){console.log(l.em),l.http.post("https://mywash.herokuapp.com/profile/history",{email:l.em}).subscribe((function(n){console.log(n);var u=!0,e=!1,t=void 0;try{for(var o,r=n[Symbol.iterator]();!(u=(o=r.next()).done);u=!0){var i=o.value;l.resp.push({packageId:i.package[0].packageId,name:i.package[0].name,price:i.package[0].price,duration:i.package[0].duration,brandName:i.customer[0].brandName,vehicleModel:i.customer[0].vehicleModel,number:i.customer[0].number})}}catch(c){e=!0,t=c}finally{try{u||null==r.return||r.return()}finally{if(e)throw t}}console.log(l.resp)}),(function(l){console.log(l)}))}))}},{key:"presentLoading",value:function(){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.loadingController.create({message:"Please wait...",duration:2e3});case 2:return n=l.sent,l.next=5,n.present();case 5:console.log("Loading dismissed!");case 6:case"end":return l.stop()}}),l,this)})))}}]),l}(),i=function l(){_classCallCheck(this,l)},c=u("pMnS"),a=u("oBZk"),b=u("iInd"),s=u("SVse"),p=u("IheW"),d=u("xgBC"),f=e.Ab({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{width:100%}"]],data:{}});function m(l){return e.Wb(0,[(l()(),e.Cb(0,0,null,null,31,"ion-list",[],null,null,null,a.eb,a.w)),e.Bb(1,49152,null,0,o.Q,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,29,"ion-item",[],null,null,null,a.cb,a.r)),e.Bb(3,49152,null,0,o.J,[e.j,e.p,e.F],null,null),(l()(),e.Cb(4,0,null,0,27,"ion-card",[["color","dark"]],null,null,null,a.Q,a.e)),e.Bb(5,49152,null,0,o.o,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Cb(6,0,null,0,25,"ion-grid",[],null,null,null,a.V,a.n)),e.Bb(7,49152,null,0,o.C,[e.j,e.p,e.F],null,null),(l()(),e.Cb(8,0,null,0,7,"ion-row",[],null,null,null,a.fb,a.x)),e.Bb(9,49152,null,0,o.lb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(10,0,null,0,2,"ion-col",[],null,null,null,a.R,a.j)),e.Bb(11,49152,null,0,o.v,[e.j,e.p,e.F],null,null),(l()(),e.Ub(12,0,[" Service "," "])),(l()(),e.Cb(13,0,null,0,2,"ion-col",[],null,null,null,a.R,a.j)),e.Bb(14,49152,null,0,o.v,[e.j,e.p,e.F],null,null),(l()(),e.Ub(15,0,[" PackageID: "," "])),(l()(),e.Cb(16,0,null,0,7,"ion-row",[],null,null,null,a.fb,a.x)),e.Bb(17,49152,null,0,o.lb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(18,0,null,0,2,"ion-col",[],null,null,null,a.R,a.j)),e.Bb(19,49152,null,0,o.v,[e.j,e.p,e.F],null,null),(l()(),e.Ub(20,0,[" Duration: "," "])),(l()(),e.Cb(21,0,null,0,2,"ion-col",[],null,null,null,a.R,a.j)),e.Bb(22,49152,null,0,o.v,[e.j,e.p,e.F],null,null),(l()(),e.Ub(23,0,[" Price : "," "])),(l()(),e.Cb(24,0,null,0,7,"ion-row",[],null,null,null,a.fb,a.x)),e.Bb(25,49152,null,0,o.lb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(26,0,null,0,2,"ion-col",[],null,null,null,a.R,a.j)),e.Bb(27,49152,null,0,o.v,[e.j,e.p,e.F],null,null),(l()(),e.Ub(28,0,[" Vehicle: "," "," "])),(l()(),e.Cb(29,0,null,0,2,"ion-col",[],null,null,null,a.R,a.j)),e.Bb(30,49152,null,0,o.v,[e.j,e.p,e.F],null,null),(l()(),e.Ub(31,0,[" Number: "," "]))],(function(l,n){l(n,5,0,"dark")}),(function(l,n){l(n,12,0,n.context.$implicit.name),l(n,15,0,n.context.$implicit.packageId),l(n,20,0,n.context.$implicit.duration),l(n,23,0,n.context.$implicit.price),l(n,28,0,n.context.$implicit.brandName,n.context.$implicit.vehicleModel),l(n,31,0,n.context.$implicit.number)}))}function h(l){return e.Wb(0,[(l()(),e.Cb(0,0,null,null,15,"ion-header",[],null,null,null,a.W,a.o)),e.Bb(1,49152,null,0,o.D,[e.j,e.p,e.F],null,null),(l()(),e.Cb(2,0,null,0,13,"ion-header",[["translucent",""]],null,null,null,a.W,a.o)),e.Bb(3,49152,null,0,o.D,[e.j,e.p,e.F],{translucent:[0,"translucent"]},null),(l()(),e.Cb(4,0,null,0,11,"ion-toolbar",[],null,null,null,a.pb,a.H)),e.Bb(5,49152,null,0,o.Eb,[e.j,e.p,e.F],null,null),(l()(),e.Cb(6,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,a.L,a.d)),e.Bb(7,49152,null,0,o.n,[e.j,e.p,e.F],null,null),(l()(),e.Cb(8,0,null,0,4,"ion-back-button",[["routerDirection","backward"],["routerLink","/tabs/tabs/profile"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ob(l,10).onClick(u)&&t),"click"===n&&(t=!1!==e.Ob(l,11).onClick()&&t),"click"===n&&(t=!1!==e.Ob(l,12).onClick(u)&&t),t}),a.J,a.b)),e.Bb(9,49152,null,0,o.i,[e.j,e.p,e.F],null,null),e.Bb(10,16384,null,0,o.j,[[2,o.kb],o.Kb],null,null),e.Bb(11,16384,null,0,b.n,[b.m,b.a,[8,null],e.K,e.p],{routerLink:[0,"routerLink"]},null),e.Bb(12,737280,null,0,o.Pb,[s.i,o.Kb,e.p,b.m,[2,b.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.Cb(13,0,null,0,2,"ion-title",[],null,null,null,a.ob,a.G)),e.Bb(14,49152,null,0,o.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Ub(-1,0,["Orders"])),(l()(),e.Cb(16,0,null,null,3,"ion-content",[],null,null,null,a.S,a.k)),e.Bb(17,49152,null,0,o.w,[e.j,e.p,e.F],null,null),(l()(),e.rb(16777216,null,0,1,null,m)),e.Bb(19,278528,null,0,s.j,[e.X,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,3,0,""),l(n,11,0,"/tabs/tabs/profile"),l(n,12,0,"backward"),l(n,19,0,u.resp)}),null)}var C=e.yb("app-orders",r,(function(l){return e.Wb(0,[(l()(),e.Cb(0,0,null,null,1,"app-orders",[],null,null,null,h,f)),e.Bb(1,114688,null,0,r,[p.c,d.b,o.Ib],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=u("s7LF");u.d(n,"OrdersPageModuleNgFactory",(function(){return g}));var g=e.zb(i,[],(function(l){return e.Lb([e.Mb(512,e.m,e.kb,[[8,[c.a,C]],[3,e.m],e.D]),e.Mb(4608,s.m,s.l,[e.z,[2,s.t]]),e.Mb(4608,k.g,k.g,[]),e.Mb(4608,o.c,o.c,[e.F,e.g]),e.Mb(4608,o.Jb,o.Jb,[o.c,e.m,e.w]),e.Mb(4608,o.Ob,o.Ob,[o.c,e.m,e.w]),e.Mb(1073742336,s.c,s.c,[]),e.Mb(1073742336,k.f,k.f,[]),e.Mb(1073742336,k.a,k.a,[]),e.Mb(1073742336,o.Gb,o.Gb,[]),e.Mb(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),e.Mb(1073742336,i,i,[]),e.Mb(1024,b.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);