(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"f+ep":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("mrSG"),i=u("ZZ/e"),o=u("N+bC");class r{constructor(l,n,u,t,e){this.router=l,this.http=n,this.alerCtrl=u,this.regServ=t,this.storage=e,this.email=""}ngOnInit(){}login(){const l=this.email;if(0==l.length)this.doAlert("Enter Valid Email!","Okay");else{this.regServ.setEmail(l),this.http.post("https://mywash.herokuapp.com/profile/userdetails",{email:l}).subscribe(l=>{console.log(l),console.log(l.phone),console.log(l.name),this.storage.set("num",l.phone),this.storage.set("name",l.name)}),this.storage.set("email",this.email);const n={email:this.regServ.getEmail()};console.log(n),this.http.post("https://mywash.herokuapp.com/loginotp",n).subscribe(l=>{console.log(l),1==l.message?(this.router.navigate(["/registernew"],{replaceUrl:!1}),this.storage.set("activity","loggingin").then(l=>{console.log(l)})):(this.doAlert("Not Registered","Register Now"),this.router.navigate(["/register"],{replaceUrl:!0}))},l=>{console.log(l)})}}doAlert(l,n){return e.__awaiter(this,void 0,void 0,(function*(){const u=yield this.alerCtrl.create({header:"Error",message:l,buttons:[n]});yield u.present(),"Enter valid Number"==u.message&&(this.email="")}))}}class b{}var s=u("pMnS"),a=u("oBZk"),c=u("iInd"),g=u("SVse"),p=u("s7LF"),h=u("IheW"),d=u("xgBC"),m=t.Ab({encapsulation:0,styles:[[".buttons[_ngcontent-%COMP%]{width:40%;font-size:18px}ion-title[_ngcontent-%COMP%]{text-align:justify}"]],data:{}});function C(l){return t.Wb(0,[(l()(),t.Cb(0,0,null,null,15,"ion-header",[],null,null,null,a.W,a.o)),t.Bb(1,49152,null,0,i.D,[t.j,t.p,t.F],null,null),(l()(),t.Cb(2,0,null,0,13,"ion-toolbar",[],null,null,null,a.pb,a.H)),t.Bb(3,49152,null,0,i.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Cb(4,0,null,0,11,"ion-toolbar",[],null,null,null,a.pb,a.H)),t.Bb(5,49152,null,0,i.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Cb(6,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,a.L,a.d)),t.Bb(7,49152,null,0,i.n,[t.j,t.p,t.F],null,null),(l()(),t.Cb(8,0,null,0,4,"ion-back-button",[["routerDirection","backward"],["routerLink","/register"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ob(l,10).onClick(u)&&e),"click"===n&&(e=!1!==t.Ob(l,11).onClick()&&e),"click"===n&&(e=!1!==t.Ob(l,12).onClick(u)&&e),e}),a.J,a.b)),t.Bb(9,49152,null,0,i.i,[t.j,t.p,t.F],null,null),t.Bb(10,16384,null,0,i.j,[[2,i.kb],i.Kb],null,null),t.Bb(11,16384,null,0,c.n,[c.m,c.a,[8,null],t.K,t.p],{routerLink:[0,"routerLink"]},null),t.Bb(12,737280,null,0,i.Pb,[g.i,i.Kb,t.p,c.m,[2,c.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.Cb(13,0,null,0,2,"ion-title",[],null,null,null,a.ob,a.G)),t.Bb(14,49152,null,0,i.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,["Login"])),(l()(),t.Cb(16,0,null,null,30,"ion-content",[["padding",""]],null,null,null,a.S,a.k)),t.Bb(17,49152,null,0,i.w,[t.j,t.p,t.F],null,null),t.Bb(18,16384,null,0,i.e,[t.p],null,null),(l()(),t.Cb(19,0,null,0,16,"div",[["class","ion-list"]],null,null,null,null,null)),(l()(),t.Cb(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(22,0,null,null,11,"ion-item",[],null,null,null,a.cb,a.r)),t.Bb(23,49152,null,0,i.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(24,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.db,a.v)),t.Bb(25,49152,null,0,i.P,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Ub(-1,0,[" Enter E-mail "])),(l()(),t.Cb(27,0,null,0,6,"ion-input",[["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Ob(l,28)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Ob(l,28)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.email=u)&&e),e}),a.Y,a.q)),t.Bb(28,16384,null,0,i.Rb,[t.p],null,null),t.Rb(1024,null,p.e,(function(l){return[l]}),[i.Rb]),t.Bb(30,671744,null,0,p.h,[[8,null],[8,null],[8,null],[6,p.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Rb(2048,null,p.f,null,[p.h]),t.Bb(32,16384,null,0,p.g,[[4,p.f]],null,null),t.Bb(33,49152,null,0,i.I,[t.j,t.p,t.F],{type:[0,"type"]},null),(l()(),t.Cb(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(36,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(37,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(38,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(39,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(40,0,null,0,2,"ion-button",[["class","buttons"],["color","dark"],["expand","block"],["fill","solid"],["shape","round"],["size","large"],["style","width: 50%;margin-right:25%;margin-left:25%"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.login()&&t),t}),a.K,a.c)),t.Bb(41,49152,null,0,i.m,[t.j,t.p,t.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),t.Ub(-1,0,["Login"])),(l()(),t.Cb(43,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(44,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(45,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Cb(46,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,11,0,"/register"),l(n,12,0,"backward"),l(n,25,0,"floating"),l(n,30,0,u.email),l(n,33,0,"email"),l(n,41,0,"dark","block","solid","round","large")}),(function(l,n){l(n,27,0,t.Ob(n,32).ngClassUntouched,t.Ob(n,32).ngClassTouched,t.Ob(n,32).ngClassPristine,t.Ob(n,32).ngClassDirty,t.Ob(n,32).ngClassValid,t.Ob(n,32).ngClassInvalid,t.Ob(n,32).ngClassPending)}))}var k=t.yb("app-login",r,(function(l){return t.Wb(0,[(l()(),t.Cb(0,0,null,null,1,"app-login",[],null,null,null,C,m)),t.Bb(1,114688,null,0,r,[c.m,h.c,i.b,o.a,d.b],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);u.d(n,"LoginPageModuleNgFactory",(function(){return f}));var f=t.zb(b,[],(function(l){return t.Lb([t.Mb(512,t.m,t.kb,[[8,[s.a,k]],[3,t.m],t.D]),t.Mb(4608,g.m,g.l,[t.z,[2,g.t]]),t.Mb(4608,p.k,p.k,[]),t.Mb(4608,i.c,i.c,[t.F,t.g]),t.Mb(4608,i.Jb,i.Jb,[i.c,t.m,t.w]),t.Mb(4608,i.Ob,i.Ob,[i.c,t.m,t.w]),t.Mb(1073742336,g.c,g.c,[]),t.Mb(1073742336,p.j,p.j,[]),t.Mb(1073742336,p.c,p.c,[]),t.Mb(1073742336,i.Gb,i.Gb,[]),t.Mb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.Mb(1073742336,b,b,[]),t.Mb(1024,c.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);