function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{qq66:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=e("mrSG"),i=e("ZZ/e"),o=e("N+bC"),r=function(){function l(n,e,u,t,i){_classCallCheck(this,l),this.storage=n,this.alerCtrl=e,this.router=u,this.http=t,this.regServ=i,this.val="valid",this.phonenumber="",this.username="",this.email="",this.addr="",this.emailPattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.storage.get("activity").then((function(n){console.log(n),"loggedin"==n?l.router.navigateByUrl("/tabs/tabs/dash"):"loggingin"==n?l.router.navigateByUrl("/login"):"registered"==n&&l.router.navigateByUrl("/login")}))}},{key:"doAlert",value:function(l,n){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function e(){var u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alerCtrl.create({header:"Error",message:l,buttons:[n]});case 2:return u=e.sent,e.next=5,u.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"gotoLogin",value:function(){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:this.router.navigateByUrl("/login");case 1:case"end":return l.stop()}}),l,this)})))}},{key:"sendotp",value:function(){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n,e,u,t,i,o,r=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.storage.get("addr").then((function(l){console.log(l),n=l}));case 2:e="91"+this.phonenumber,u=this.username,t=this.email,i=new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),console.log(i.test(t)),0==u.length?(this.doAlert("Enter Valid Username!","Okay"),this.username=""):i.test(t)?e.length<12||e.length>12?(this.doAlert("Enter Valid Phonenumber!","Okay"),this.phonenumber="",console.log(this.val)):null==n?(console.log(n),this.doAlert("Select Address!","Okay")):(this.regServ.setPhone(e),this.regServ.setName(u),this.regServ.setEmail(t),o={userName:this.regServ.getName(),email:this.regServ.getEmail(),phone:this.regServ.getPhone()},console.log(o),this.http.post("https://mywash.herokuapp.com/registerotp",o).subscribe((function(l){console.log(l.message),"2"==l.message?(r.storage.set("email",r.email).then((function(l){console.log("email stored")})),r.storage.set("name",r.username).then((function(l){console.log("name stored")})),r.storage.set("activity","registered").then((function(l){console.log("activity :stored")})),r.router.navigateByUrl("/registernew")):"1"==l.message?(r.doAlert("Phonenumber Already Registered!","Okay"),r.phonenumber=""):"0"==l.message?(r.doAlert("Email Already Registered!","Okay"),r.email=""):(console.log("hello"),r.doAlert("User exists","Okay"),r.phonenumber="")}),(function(l){console.log(l)}))):(this.doAlert("Enter Valid Email!","Okay"),this.email="");case 4:case"end":return l.stop()}}),l,this)})))}},{key:"viewval",value:function(){}}]),l}(),a=function l(){_classCallCheck(this,l)},s=e("pMnS"),b=e("oBZk"),c=e("s7LF"),g=e("SVse"),d=e("iInd"),p=e("xgBC"),h=e("IheW"),m=u.Ab({encapsulation:0,styles:[[".buttons[_ngcontent-%COMP%]{width:40%;margin-left:6%;font-size:18px}ion-button.buttons1[_ngcontent-%COMP%]{margin-left:6%;font-size:18px;width:88%;border-radius:50px}ion-title[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function f(l){return u.Wb(0,[(l()(),u.Cb(0,0,null,null,1,"div",[["style","font-size: small;color: red;margin-left:5%;"]],null,[[null,"change"]],(function(l,n,e){var u=!0;return"change"===n&&(u=!1!==l.component.viewval()&&u),u}),null,null)),(l()(),u.Ub(-1,null,[" Email not valid "]))],null,null)}function C(l){return u.Wb(0,[(l()(),u.Cb(0,0,null,null,6,"ion-header",[],null,null,null,b.W,b.o)),u.Bb(1,49152,null,0,i.D,[u.j,u.p,u.F],null,null),(l()(),u.Cb(2,0,null,0,4,"ion-toolbar",[],null,null,null,b.pb,b.H)),u.Bb(3,49152,null,0,i.Eb,[u.j,u.p,u.F],null,null),(l()(),u.Cb(4,0,null,0,2,"ion-title",[["align-title","center"]],null,null,null,b.ob,b.G)),u.Bb(5,49152,null,0,i.Cb,[u.j,u.p,u.F],null,null),(l()(),u.Ub(-1,0,["Register"])),(l()(),u.Cb(7,0,null,null,72,"ion-content",[["padding",""]],null,null,null,b.S,b.k)),u.Bb(8,49152,null,0,i.w,[u.j,u.p,u.F],null,null),u.Bb(9,16384,null,0,i.e,[u.p],null,null),(l()(),u.Cb(10,0,null,0,69,"div",[["class","ion-list"]],null,null,null,null,null)),(l()(),u.Cb(11,0,null,null,13,"ion-item",[],null,null,null,b.cb,b.r)),u.Bb(12,49152,null,0,i.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(13,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(15,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,b.db,b.v)),u.Bb(16,49152,null,0,i.P,[u.j,u.p,u.F],{position:[0,"position"]},null),(l()(),u.Ub(-1,0,[" Name "])),(l()(),u.Cb(18,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,19)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,19)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.username=e)&&t),t}),b.Y,b.q)),u.Bb(19,16384,null,0,i.Rb,[u.p],null,null),u.Rb(1024,null,c.c,(function(l){return[l]}),[i.Rb]),u.Bb(21,671744,null,0,c.f,[[8,null],[8,null],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,c.d,null,[c.f]),u.Bb(23,16384,null,0,c.e,[[4,c.d]],null,null),u.Bb(24,49152,null,0,i.I,[u.j,u.p,u.F],{type:[0,"type"]},null),(l()(),u.Cb(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(26,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(27,0,null,null,13,"ion-item",[["class","input-cover"]],null,null,null,b.cb,b.r)),u.Bb(28,49152,null,0,i.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(29,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,b.db,b.v)),u.Bb(30,49152,null,0,i.P,[u.j,u.p,u.F],{position:[0,"position"]},null),(l()(),u.Ub(-1,0,[" Email "])),(l()(),u.Cb(32,0,null,0,8,"ion-input",[["type","email"]],[[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,35)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,35)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.email=e)&&t),"change"===n&&(t=!1!==i.viewval()&&t),t}),b.Y,b.q)),u.Bb(33,540672,null,0,c.g,[],{pattern:[0,"pattern"]},null),u.Rb(1024,null,c.b,(function(l){return[l]}),[c.g]),u.Bb(35,16384,null,0,i.Rb,[u.p],null,null),u.Rb(1024,null,c.c,(function(l){return[l]}),[i.Rb]),u.Bb(37,671744,[["val",4]],0,c.f,[[8,null],[6,c.b],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,c.d,null,[c.f]),u.Bb(39,16384,null,0,c.e,[[4,c.d]],null,null),u.Bb(40,49152,null,0,i.I,[u.j,u.p,u.F],{pattern:[0,"pattern"],type:[1,"type"]},null),(l()(),u.rb(16777216,null,null,1,null,f)),u.Bb(42,16384,null,0,g.k,[u.X,u.S],{ngIf:[0,"ngIf"]},null),(l()(),u.Cb(43,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(44,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(45,0,null,null,11,"ion-item",[],null,null,null,b.cb,b.r)),u.Bb(46,49152,null,0,i.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(47,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,b.db,b.v)),u.Bb(48,49152,null,0,i.P,[u.j,u.p,u.F],{position:[0,"position"]},null),(l()(),u.Ub(-1,0,[" Phonenumber "])),(l()(),u.Cb(50,0,null,0,6,"ion-input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Ob(l,51)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Ob(l,51)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.phonenumber=e)&&t),t}),b.Y,b.q)),u.Bb(51,16384,null,0,i.Mb,[u.p],null,null),u.Rb(1024,null,c.c,(function(l){return[l]}),[i.Mb]),u.Bb(53,671744,null,0,c.f,[[8,null],[8,null],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,c.d,null,[c.f]),u.Bb(55,16384,null,0,c.e,[[4,c.d]],null,null),u.Bb(56,49152,null,0,i.I,[u.j,u.p,u.F],{type:[0,"type"]},null),(l()(),u.Cb(57,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(58,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(59,0,null,null,9,"ion-item",[],null,null,null,b.cb,b.r)),u.Bb(60,49152,null,0,i.J,[u.j,u.p,u.F],null,null),(l()(),u.Cb(61,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,b.db,b.v)),u.Bb(62,49152,null,0,i.P,[u.j,u.p,u.F],{position:[0,"position"]},null),(l()(),u.Ub(-1,0,[" Address "])),(l()(),u.Cb(64,0,null,0,4,"ion-button",[["routerDirection","forward"],["routerLink","/pickloc"],["slot","end"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Ob(l,66).onClick()&&t),"click"===n&&(t=!1!==u.Ob(l,67).onClick(e)&&t),t}),b.K,b.c)),u.Bb(65,49152,null,0,i.m,[u.j,u.p,u.F],{routerDirection:[0,"routerDirection"]},null),u.Bb(66,16384,null,0,d.n,[d.m,d.a,[8,null],u.K,u.p],{routerLink:[0,"routerLink"]},null),u.Bb(67,737280,null,0,i.Pb,[g.i,i.Kb,u.p,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),u.Ub(-1,0,["Select Location"])),(l()(),u.Cb(69,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(70,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Cb(71,0,null,null,7,"ion-row",[],null,null,null,b.fb,b.x)),u.Bb(72,49152,null,0,i.lb,[u.j,u.p,u.F],null,null),(l()(),u.Cb(73,0,null,0,2,"ion-button",[["class","buttons"],["color","dark"],["expand","block"],["fill","solid"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.sendotp()&&u),u}),b.K,b.c)),u.Bb(74,49152,null,0,i.m,[u.j,u.p,u.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),u.Ub(-1,0,["Register"])),(l()(),u.Cb(76,0,null,0,2,"ion-button",[["class","buttons"],["color","danger"],["expand","block"],["fill","solid"],["shape","round"],["size","large"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.gotoLogin()&&u),u}),b.K,b.c)),u.Bb(77,49152,null,0,i.m,[u.j,u.p,u.F],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),u.Ub(-1,0,["Login"])),(l()(),u.Cb(79,0,null,null,0,"br",[],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,16,0,"floating"),l(n,21,0,e.username),l(n,24,0,"text"),l(n,30,0,"floating"),l(n,33,0,e.emailPattern),l(n,37,0,e.email),l(n,40,0,e.emailPattern,"email"),l(n,42,0,null==u.Ob(n,37).errors?null:u.Ob(n,37).errors.pattern),l(n,48,0,"floating"),l(n,53,0,e.phonenumber),l(n,56,0,"number"),l(n,62,0,"fixed"),l(n,65,0,"forward"),l(n,66,0,"/pickloc"),l(n,67,0,"forward"),l(n,74,0,"dark","block","solid","round","large"),l(n,77,0,"danger","block","solid","round","large")}),(function(l,n){l(n,18,0,u.Ob(n,23).ngClassUntouched,u.Ob(n,23).ngClassTouched,u.Ob(n,23).ngClassPristine,u.Ob(n,23).ngClassDirty,u.Ob(n,23).ngClassValid,u.Ob(n,23).ngClassInvalid,u.Ob(n,23).ngClassPending),l(n,32,0,u.Ob(n,33).pattern?u.Ob(n,33).pattern:null,u.Ob(n,39).ngClassUntouched,u.Ob(n,39).ngClassTouched,u.Ob(n,39).ngClassPristine,u.Ob(n,39).ngClassDirty,u.Ob(n,39).ngClassValid,u.Ob(n,39).ngClassInvalid,u.Ob(n,39).ngClassPending),l(n,50,0,u.Ob(n,55).ngClassUntouched,u.Ob(n,55).ngClassTouched,u.Ob(n,55).ngClassPristine,u.Ob(n,55).ngClassDirty,u.Ob(n,55).ngClassValid,u.Ob(n,55).ngClassInvalid,u.Ob(n,55).ngClassPending)}))}var v=u.yb("app-register",r,(function(l){return u.Wb(0,[(l()(),u.Cb(0,0,null,null,1,"app-register",[],null,null,null,C,m)),u.Bb(1,114688,null,0,r,[p.b,i.b,d.m,h.c,o.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);e.d(n,"RegisterPageModuleNgFactory",(function(){return B}));var B=u.zb(a,[],(function(l){return u.Lb([u.Mb(512,u.m,u.kb,[[8,[s.a,v]],[3,u.m],u.D]),u.Mb(4608,g.m,g.l,[u.z,[2,g.t]]),u.Mb(4608,c.i,c.i,[]),u.Mb(4608,i.c,i.c,[u.F,u.g]),u.Mb(4608,i.Jb,i.Jb,[i.c,u.m,u.w]),u.Mb(4608,i.Ob,i.Ob,[i.c,u.m,u.w]),u.Mb(1073742336,g.c,g.c,[]),u.Mb(1073742336,c.h,c.h,[]),u.Mb(1073742336,c.a,c.a,[]),u.Mb(1073742336,i.Gb,i.Gb,[]),u.Mb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),u.Mb(1073742336,a,a,[]),u.Mb(1024,d.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);