(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{mE0X:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("mrSG"),o=u("c14U"),i=u("SVse"),r=u("ZZ/e");class b{constructor(l,n,u,t,e){this.cartserv=l,this.http=n,this.router=u,this.storage=t,this.events=e,this.arr=[],this.storage.get("email").then(l=>{this.em=l}),this.storage.get("num").then(l=>{this.num=l})}makeString(){let l="",n="abcdefghijklmnopqrstuvwxyz0123456789";for(let u=0;u<8;u++)l+=n.charAt(Math.floor(Math.random()*n.length));return l}ngOnInit(){this.date=Object(i.q)(new Date,"yyyy/MM/dd","en"),this.tot=this.cartserv.getAmount(),this.cart=this.cartserv.getCart(),console.log(this.cart)}deleteItem(l){this.cartserv.removeProduct(l),this.tot=this.cartserv.getAmount()}add(l){const n={service:l,code:this.arr};console.log(n),this.http.post("https://mywash.herokuapp.com/service/add",n).subscribe(l=>e.__awaiter(this,void 0,void 0,(function*(){console.log(l),this.cartserv.removeAll(),this.tot=0,yield this.events.publish("check1","update"),this.router.navigateByUrl("/tabs/tabs/services")})))}subs(){const l=this.cart.map(l=>{var n=new Date;1==l.flag&&this.arr.push({code:this.makeString(),id:l.id,number:l.vehnumber}),n.setDate(n.getDate()+Number(l.time));const u=Object(i.q)(n,"yyyy/MM/dd","en");return{email:this.em,orderId:this.makeString(),number:l.vehnumber,id:l.id,flag:0,currentdate:this.date,expiredate:u}});console.log(l),RazorpayCheckout.open({description:"Subscription fee",image:"https://i.imgur.com/3g7nmJC.png",currency:"INR",key:"rzp_test_8gpkmLwN2hocfu",amount:100*this.tot,name:"Payment",method:"upi",prefill:{email:this.em,contact:this.num,name:"Carwash"},theme:{color:"#2525f4"},modal:{ondismiss:function(){alert("dismissed")}}},n=>{console.log(n),this.add(l)},l=>{alert(l.description+" (Error "+l.code+")")})}}class c{}var a=u("pMnS"),s=u("oBZk"),p=u("iInd"),m=u("IheW"),h=u("xgBC"),d=t.zb({encapsulation:0,styles:[[""]],data:{}});function j(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,31,"ion-item-sliding",[],null,null,null,s.bb,s.u)),t.Ab(1,49152,null,0,r.O,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,23,"ion-item",[],null,null,null,s.cb,s.r)),t.Ab(3,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,21,"ion-grid",[],null,null,null,s.V,s.n)),t.Ab(5,49152,null,0,r.C,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,4,"ion-row",[],null,null,null,s.fb,s.x)),t.Ab(7,49152,null,0,r.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(8,0,null,0,2,"ion-col",[],null,null,null,s.R,s.j)),t.Ab(9,49152,null,0,r.v,[t.j,t.p,t.F],null,null),(l()(),t.Tb(10,0,[" Service: "," "])),(l()(),t.Bb(11,0,null,0,4,"ion-row",[],null,null,null,s.fb,s.x)),t.Ab(12,49152,null,0,r.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(13,0,null,0,2,"ion-col",[],null,null,null,s.R,s.j)),t.Ab(14,49152,null,0,r.v,[t.j,t.p,t.F],null,null),(l()(),t.Tb(15,0,[" Validity:"," Months "])),(l()(),t.Bb(16,0,null,0,4,"ion-row",[],null,null,null,s.fb,s.x)),t.Ab(17,49152,null,0,r.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(18,0,null,0,2,"ion-col",[],null,null,null,s.R,s.j)),t.Ab(19,49152,null,0,r.v,[t.j,t.p,t.F],null,null),(l()(),t.Tb(20,0,[" Vehicle:"," "," "])),(l()(),t.Bb(21,0,null,0,4,"ion-row",[],null,null,null,s.fb,s.x)),t.Ab(22,49152,null,0,r.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(23,0,null,0,2,"ion-col",[],null,null,null,s.R,s.j)),t.Ab(24,49152,null,0,r.v,[t.j,t.p,t.F],null,null),(l()(),t.Tb(25,0,[" Price:"," "])),(l()(),t.Bb(26,0,null,0,5,"ion-item-options",[["side","start"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteItem(l.context.$implicit)&&t),t}),s.ab,s.t)),t.Ab(27,49152,null,0,r.N,[t.j,t.p,t.F],{side:[0,"side"]},null),(l()(),t.Bb(28,0,null,0,3,"ion-item-option",[["color","danger"]],null,null,null,s.Z,s.s)),t.Ab(29,49152,null,0,r.M,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Bb(30,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,s.X,s.p)),t.Ab(31,49152,null,0,r.E,[t.j,t.p,t.F],{name:[0,"name"]},null)],(function(l,n){l(n,27,0,"start"),l(n,29,0,"danger"),l(n,31,0,"trash")}),(function(l,n){l(n,10,0,n.context.$implicit.details),l(n,15,0,n.context.$implicit.time),l(n,20,0,n.context.$implicit.vehname,n.context.$implicit.vehnumber),l(n,25,0,n.context.$implicit.price)}))}function g(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,13,"ion-header",[],null,null,null,s.W,s.o)),t.Ab(1,49152,null,0,r.D,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,11,"ion-toolbar",[],null,null,null,s.pb,s.H)),t.Ab(3,49152,null,0,r.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,s.L,s.d)),t.Ab(5,49152,null,0,r.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,4,"ion-back-button",[["routerDirection","backward"],["routerLink","/tabs/tabs/services"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Nb(l,8).onClick(u)&&e),"click"===n&&(e=!1!==t.Nb(l,9).onClick()&&e),"click"===n&&(e=!1!==t.Nb(l,10).onClick(u)&&e),e}),s.J,s.b)),t.Ab(7,49152,null,0,r.i,[t.j,t.p,t.F],null,null),t.Ab(8,16384,null,0,r.j,[[2,r.kb],r.Kb],null,null),t.Ab(9,16384,null,0,p.n,[p.m,p.a,[8,null],t.K,t.p],{routerLink:[0,"routerLink"]},null),t.Ab(10,737280,null,0,r.Pb,[i.i,r.Kb,t.p,p.m,[2,p.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.Bb(11,0,null,0,2,"ion-title",[],null,null,null,s.ob,s.G)),t.Ab(12,49152,null,0,r.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Cart"])),(l()(),t.Bb(14,0,null,null,10,"ion-content",[],null,null,null,s.S,s.k)),t.Ab(15,49152,null,0,r.w,[t.j,t.p,t.F],null,null),(l()(),t.Bb(16,0,null,0,4,"ion-item",[],null,null,null,s.cb,s.r)),t.Ab(17,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(18,0,null,0,2,"ion-label",[],null,null,null,s.db,s.v)),t.Ab(19,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Your Order Summary"])),(l()(),t.Bb(21,0,null,0,3,"ion-list",[],null,null,null,s.eb,s.w)),t.Ab(22,49152,null,0,r.Q,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,j)),t.Ab(24,278528,null,0,i.j,[t.X,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Bb(25,0,null,null,15,"ion-footer",[],null,null,null,s.U,s.m)),t.Ab(26,49152,null,0,r.B,[t.j,t.p,t.F],null,null),(l()(),t.Bb(27,0,null,0,13,"ion-grid",[],null,null,null,s.V,s.n)),t.Ab(28,49152,null,0,r.C,[t.j,t.p,t.F],null,null),(l()(),t.Bb(29,0,null,0,11,"ion-row",[],null,null,null,s.fb,s.x)),t.Ab(30,49152,null,0,r.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(31,0,null,0,4,"ion-col",[],null,null,null,s.R,s.j)),t.Ab(32,49152,null,0,r.v,[t.j,t.p,t.F],null,null),(l()(),t.Bb(33,0,null,0,2,"ion-title",[],null,null,null,s.ob,s.G)),t.Ab(34,49152,null,0,r.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Tb(35,0,["Total : ",""])),(l()(),t.Bb(36,0,null,0,4,"ion-col",[],null,null,null,s.R,s.j)),t.Ab(37,49152,null,0,r.v,[t.j,t.p,t.F],null,null),(l()(),t.Bb(38,0,null,0,2,"ion-button",[["color","danger"],["expand","block"]],[[8,"hidden",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.subs()&&t),t}),s.K,s.c)),t.Ab(39,49152,null,0,r.m,[t.j,t.p,t.F],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),t.Tb(-1,0,["Checkout"]))],(function(l,n){var u=n.component;l(n,9,0,"/tabs/tabs/services"),l(n,10,0,"backward"),l(n,24,0,u.cart),l(n,39,0,"danger","block")}),(function(l,n){var u=n.component;l(n,35,0,u.tot),l(n,38,0,!u.tot)}))}function v(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,1,"app-cart",[],null,null,null,g,d)),t.Ab(1,114688,null,0,b,[o.a,m.c,p.m,h.b,r.f],null,null)],(function(l,n){l(n,1,0)}),null)}var A=t.xb("app-cart",b,v,{},{},[]),k=u("s7LF");u.d(n,"CartPageModuleNgFactory",(function(){return f}));var f=t.yb(c,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[a.a,A]],[3,t.m],t.D]),t.Lb(4608,i.m,i.l,[t.z,[2,i.t]]),t.Lb(4608,k.k,k.k,[]),t.Lb(4608,r.c,r.c,[t.F,t.g]),t.Lb(4608,r.Jb,r.Jb,[r.c,t.m,t.w]),t.Lb(4608,r.Ob,r.Ob,[r.c,t.m,t.w]),t.Lb(1073742336,i.c,i.c,[]),t.Lb(1073742336,k.j,k.j,[]),t.Lb(1073742336,k.c,k.c,[]),t.Lb(1073742336,r.Gb,r.Gb,[]),t.Lb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.Lb(1073742336,c,c,[]),t.Lb(1024,p.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);