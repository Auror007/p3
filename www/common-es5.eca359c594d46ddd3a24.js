(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+veT":function(n,t,e){"use strict";e.d(t,"a",(function(){return w})),e.d(t,"b",(function(){return A})),e.d(t,"c",(function(){return g})),e.d(t,"d",(function(){return y})),e.d(t,"e",(function(){return o}));var l=e("dSyh"),i=e("kBU6");const o=n=>new Promise((t,e)=>{Object(l.m)(()=>{r(n),s(n).then(e=>{e.animation&&e.animation.destroy(),u(n),t(e)},t=>{u(n),e(t)})})}),r=n=>{const t=n.enteringEl,e=n.leavingEl;C(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),y(t,!1),e&&y(e,!1)},s=async n=>{const t=await a(n);return t?c(t,n):d(n)},u=n=>{const t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},a=async n=>{if(n.leavingEl&&n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await e.e(113).then(e.bind(null,"Lu00"))).iosTransitionAnimation:(await e.e(114).then(e.bind(null,"wxTh"))).mdTransitionAnimation},c=async(n,t)=>{let l;await h(t,!0);try{const i=await e.e(5).then(e.bind(null,"gHMO"));l=await i.create(n,t.baseEl,t)}catch(o){l=n(t.baseEl,t)}b(t.enteringEl,t.leavingEl);const i=await m(l,t);return t.progressCallback&&t.progressCallback(void 0),i&&f(t.enteringEl,t.leavingEl),{hasCompleted:i,animation:l}},d=async n=>{const t=n.enteringEl,e=n.leavingEl;return await h(n,!1),b(t,e),f(t,e),{hasCompleted:!0}},h=async(n,t)=>{const e=(void 0!==n.deepWait?n.deepWait:t)?[w(n.enteringEl),w(n.leavingEl)]:[v(n.enteringEl),v(n.leavingEl)];await Promise.all(e),await p(n.viewIsReady,n.enteringEl)},p=async(n,t)=>{n&&await n(t)},m=(n,t)=>{const e=t.progressCallback,l=new Promise(t=>{n.onFinish(e=>{"number"==typeof e?t(1===e):void 0!==n.hasCompleted&&t(n.hasCompleted)})});return e?(n.progressStart(!0),e(n)):n.play(),l},b=(n,t)=>{g(t,i.c),g(n,i.a)},f=(n,t)=>{g(n,i.b),g(t,i.d)},g=(n,t)=>{if(n){const e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}},v=n=>n&&n.componentOnReady?n.componentOnReady():Promise.resolve(),w=async n=>{const t=n;if(t){if(null!=t.componentOnReady&&null!=await t.componentOnReady())return;await Promise.all(Array.from(t.children).map(w))}},y=(n,t)=>{t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},C=(n,t,e)=>{void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")},A=n=>n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n},"7TDh":function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e("ZZ/e");class l{constructor(n,t){this.events=n,this.popoverController=t,this.list=[]}ngOnInit(){}onClick(n){this.popoverController.dismiss(n),console.log("dismissed")}}},DYVS:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e("tqxf");class l{}},Dl6n:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return l})),e.d(t,"d",(function(){return s}));const l=(n,t)=>null!==t.closest(n),i=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,["ion-color-".concat(n)]:!0}:void 0,o=n=>{const t={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>t[n]=!0),t},r=/^[a-z][a-z0-9+\-.]*:/,s=async(n,t,e)=>{if(null!=n&&"#"!==n[0]&&!r.test(n)){const l=document.querySelector("ion-router");if(l)return null!=t&&t.preventDefault(),l.push(n,e)}return!1}},"N+bC":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var l=e("8Y7J");let i=(()=>{class n{constructor(){this.phn={phone:String,otp:String,userName:String,email:String,address:String,lat:Number,lng:Number},this.result={message:Boolean}}setOtp(n){this.phn.otp=n}setPhone(n){this.phn.phone=n}setName(n){this.phn.userName=n}setAddress(n){this.phn.address=n}setEmail(n){this.phn.email=n}setLat(n){this.phn.lat=n}setLng(n){this.phn.lng=n}getAddress(){return this.phn.address}getPhone(){return this.phn.phone}getName(){return this.phn.userName}getEmail(){return this.phn.email}getJson(){return this.phn}}return n.ngInjectableDef=l.Yb({factory:function(){return new n},token:n,providedIn:"root"}),n})()},P8FJ:function(n,t,e){"use strict";var l=e("8Y7J"),i=e("oBZk"),o=e("ZZ/e"),r=e("SVse"),s=e("7TDh");e.d(t,"a",(function(){return d}));var u=l.zb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{margin:auto;padding:initial}"]],data:{}});function a(n){return l.Vb(0,[(n()(),l.Bb(0,0,null,null,6,"ion-list",[["style","margin-bottom: 0%;"]],null,null,null,i.eb,i.w)),l.Ab(1,49152,null,0,o.Q,[l.j,l.p,l.F],null,null),(n()(),l.Bb(2,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.onClick(n.context.$implicit)&&l),l}),i.cb,i.r)),l.Ab(3,49152,null,0,o.J,[l.j,l.p,l.F],{button:[0,"button"]},null),(n()(),l.Bb(4,0,null,0,2,"ion-label",[["style","text-align: center;"]],null,null,null,i.db,i.v)),l.Ab(5,49152,null,0,o.P,[l.j,l.p,l.F],null,null),(n()(),l.Tb(6,0,["",""]))],(function(n,t){n(t,3,0,"")}),(function(n,t){n(t,6,0,t.context.$implicit.vehicleModel)}))}function c(n){return l.Vb(0,[(n()(),l.Bb(0,0,null,null,4,"ion-header",[],null,null,null,i.W,i.o)),l.Ab(1,49152,null,0,o.D,[l.j,l.p,l.F],null,null),(n()(),l.Bb(2,0,null,0,2,"ion-toolbar",[["style","text-align: center;"]],null,null,null,i.pb,i.H)),l.Ab(3,49152,null,0,o.Eb,[l.j,l.p,l.F],null,null),(n()(),l.Tb(-1,0,[" Select Car "])),(n()(),l.Bb(5,0,null,null,3,"ion-content",[],null,null,null,i.S,i.k)),l.Ab(6,49152,null,0,o.w,[l.j,l.p,l.F],null,null),(n()(),l.qb(16777216,null,0,1,null,a)),l.Ab(8,278528,null,0,r.j,[l.X,l.S,l.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,8,0,t.component.list)}),null)}var d=l.xb("app-carpop",s.a,(function(n){return l.Vb(0,[(n()(),l.Bb(0,0,null,null,1,"app-carpop",[],null,null,null,c,u)),l.Ab(1,114688,null,0,s.a,[o.f,o.Ob],null,null)],(function(n,t){n(t,1,0)}),null)}),{list:"list"},{},[])},Vjt6:function(n,t,e){"use strict";var l=e("8Y7J"),i=e("oBZk"),o=e("ZZ/e"),r=e("tqxf"),s=e("IheW"),u=e("xgBC"),a=e("c14U"),c=e("iInd");e.d(t,"a",(function(){return p}));var d=l.zb({encapsulation:0,styles:[["ion-icon[_ngcontent-%COMP%]{font-size:32px;margin-left:5%}"]],data:{}});function h(n){return l.Vb(0,[(n()(),l.Bb(0,0,null,null,11,"ion-header",[],null,null,null,i.W,i.o)),l.Ab(1,49152,null,0,o.D,[l.j,l.p,l.F],null,null),(n()(),l.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.pb,i.H)),l.Ab(3,49152,null,0,o.Eb,[l.j,l.p,l.F],null,null),(n()(),l.Bb(4,0,null,0,1,"ion-icon",[["name","arrow-back-outline"],["size","3"],["slot","start"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.goback()&&l),l}),i.X,i.p)),l.Ab(5,49152,null,0,o.E,[l.j,l.p,l.F],{name:[0,"name"],size:[1,"size"]},null),(n()(),l.Bb(6,0,null,0,2,"ion-title",[],null,null,null,i.ob,i.G)),l.Ab(7,49152,null,0,o.Cb,[l.j,l.p,l.F],null,null),(n()(),l.Tb(-1,0,["Details"])),(n()(),l.Bb(9,0,null,0,2,"ion-button",[["color","danger"],["slot","end"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.fdismiss()&&l),l}),i.K,i.c)),l.Ab(10,49152,null,0,o.m,[l.j,l.p,l.F],{color:[0,"color"]},null),(n()(),l.Tb(-1,0,["View Cart "])),(n()(),l.Bb(12,0,null,null,9,"ion-content",[],null,null,null,i.S,i.k)),l.Ab(13,49152,null,0,o.w,[l.j,l.p,l.F],null,null),(n()(),l.Bb(14,0,null,0,7,"ion-list",[],null,null,null,i.eb,i.w)),l.Ab(15,49152,null,0,o.Q,[l.j,l.p,l.F],null,null),(n()(),l.Bb(16,0,null,0,5,"ion-item",[],null,null,null,i.cb,i.r)),l.Ab(17,49152,null,0,o.J,[l.j,l.p,l.F],null,null),(n()(),l.Bb(18,0,null,0,3,"ion-label",[["text-wrap",""]],null,null,null,i.db,i.v)),l.Ab(19,49152,null,0,o.P,[l.j,l.p,l.F],null,null),l.Ab(20,16384,null,0,o.e,[l.p],null,null),(n()(),l.Bb(21,0,null,0,0,"div",[["style","white-space:pre-line"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),l.Bb(22,0,null,null,15,"ion-footer",[["class","ion-no-border"]],null,null,null,i.U,i.m)),l.Ab(23,49152,null,0,o.B,[l.j,l.p,l.F],null,null),(n()(),l.Bb(24,0,null,0,13,"ion-item",[],null,null,null,i.cb,i.r)),l.Ab(25,49152,null,0,o.J,[l.j,l.p,l.F],null,null),(n()(),l.Bb(26,0,null,0,11,"ion-toolbar",[["style","font-size: medium;"]],null,null,null,i.pb,i.H)),l.Ab(27,49152,null,0,o.Eb,[l.j,l.p,l.F],null,null),(n()(),l.Bb(28,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,i.db,i.v)),l.Ab(29,49152,null,0,o.P,[l.j,l.p,l.F],null,null),(n()(),l.Tb(-1,0,["Price:"])),(n()(),l.Bb(31,0,null,0,2,"ion-label",[],null,null,null,i.db,i.v)),l.Ab(32,49152,null,0,o.P,[l.j,l.p,l.F],null,null),(n()(),l.Tb(33,0,["",""])),(n()(),l.Bb(34,0,null,0,3,"ion-fab-button",[["color","danger"],["size","small"],["slot","end"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.presentPopover()&&l),l}),i.T,i.l)),l.Ab(35,49152,null,0,o.z,[l.j,l.p,l.F],{color:[0,"color"],size:[1,"size"]},null),(n()(),l.Bb(36,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.X,i.p)),l.Ab(37,49152,null,0,o.E,[l.j,l.p,l.F],{name:[0,"name"]},null)],(function(n,t){n(t,5,0,"arrow-back-outline","3"),n(t,10,0,"danger"),n(t,35,0,"danger","small"),n(t,37,0,"add")}),(function(n,t){var e=t.component;n(t,21,0,e.desp),n(t,33,0,e.price)}))}var p=l.xb("app-dashmod",r.a,(function(n){return l.Vb(0,[(n()(),l.Bb(0,0,null,null,1,"app-dashmod",[],null,null,null,h,d)),l.Ab(1,114688,null,0,r.a,[o.Jb,o.Lb,o.f,o.Ob,s.c,u.b,a.a,o.Sb,o.Ib,o.b,c.m],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[])},YtD4:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));const l=n=>{try{if("string"!=typeof n||""===n)return n;const t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,s.forEach(n=>{const e=t.querySelectorAll(n);for(let l=e.length-1;l>=0;l--){const n=e[l];n.parentNode?n.parentNode.removeChild(n):t.removeChild(n);const r=o(n);for(let t=0;t<r.length;t++)i(r[t])}});const l=o(t);for(let n=0;n<l.length;n++)i(l[n]);const r=document.createElement("div");r.appendChild(t);const u=r.querySelector("div");return null!==u?u.innerHTML:r.innerHTML}catch(t){return console.error(t),""}},i=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let e=n.attributes.length-1;e>=0;e--){const t=n.attributes.item(e),l=t.name;if(!r.includes(l.toLowerCase())){n.removeAttribute(l);continue}const i=t.value;null!=i&&i.toLowerCase().includes("javascript:")&&n.removeAttribute(l)}const t=o(n);for(let e=0;e<t.length;e++)i(t[e])},o=n=>null!=n.children?n.children:n.childNodes,r=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},c14U:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var l=e("2Vo4"),i=e("8Y7J");let o=(()=>{class n{constructor(){this.cart=[],this.amount=0,this.cartItemCount=new l.a(0),this.count=0}getCart(){return this.cart}getAmount(){return this.amount}incrementCount(){this.count=this.count+1}decrementCount(){this.count=this.count-1}getCount(){return this.count}addProduct(n){this.cart.push(n),1==n.flag&&this.incrementCount(),this.amount=this.amount+n.price}removeProduct(n){for(let[t,e]of this.cart.entries())e.vehnumber===n.vehnumber&&(this.amount=this.amount-e.price,1==n.flag&&this.decrementCount(),this.cart.splice(t,1))}removeAll(){this.cart=[],this.amount=0,this.count=0}}return n.ngInjectableDef=i.Yb({factory:function(){return new n},token:n,providedIn:"root"}),n})()},m9yc:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return i}));const l=async(n,t,e,l,i)=>{if(n)return n.attachViewToDom(t,e,i,l);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e;return l&&l.forEach(n=>o.classList.add(n)),i&&Object.assign(o,i),t.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},mHYt:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e("7TDh");class l{}},"nN+u":function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return l}));const l=(n,t,e)=>{const l=new MutationObserver(n=>{e(i(n,t))});return l.observe(n,{childList:!0,subtree:!0}),l},i=(n,t)=>{let e;return n.forEach(n=>{for(let l=0;l<n.addedNodes.length;l++)e=o(n.addedNodes[l],t)||e}),e},o=(n,t)=>{if(1===n.nodeType)return(n.tagName===t.toUpperCase()?[n]:Array.from(n.querySelectorAll(t))).find(n=>!0===n.checked)}},opz7:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return l}));const l=()=>{const n=window.TapticEngine;n&&n.selection()},i=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},r=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}},qaSm:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return i}));class l{constructor(n,t){this.x=n,this.y=t}}const i=(n,t,e,l,i)=>{const s=r(n.y,t.y,e.y,l.y,i);return o(n.x,t.x,e.x,l.x,s[0])},o=(n,t,e,l,i)=>i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+l*i))-n*Math.pow(i-1,3),r=(n,t,e,l,i)=>s((l-=i)-3*(e-=i)+3*(t-=i)-(n-=i),3*e-6*t+3*n,3*t-3*n,n).filter(n=>n>=0&&n<=1),s=(n,t,e,l)=>{if(0===n)return((n,t,e)=>{const l=t*t-4*n*e;return l<0?[]:[(-t+Math.sqrt(l))/(2*n),(-t-Math.sqrt(l))/(2*n)]})(t,e,l);const i=(3*(e/=n)-(t/=n)*t)/3,o=(2*t*t*t-9*t*e+27*(l/=n))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];const r=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===r)return[Math.pow(o/2,.5)-t/3];if(r>0)return[Math.pow(-o/2+Math.sqrt(r),1/3)-Math.pow(o/2+Math.sqrt(r),1/3)-t/3];const s=Math.sqrt(Math.pow(-i/3,3)),u=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),a=2*Math.pow(s,1/3);return[a*Math.cos(u/3)-t/3,a*Math.cos((u+2*Math.PI)/3)-t/3,a*Math.cos((u+4*Math.PI)/3)-t/3]}},tqxf:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var l=e("mrSG"),i=(e("ZZ/e"),e("7TDh"));e("c14U");class o{constructor(n,t,e,l,i,o,r,s,u,a,c){this.modalCtrl=n,this.navParams=t,this.events=e,this.popoverController=l,this.http=i,this.storage=o,this.cartService=r,this.toastController=s,this.loadingController=u,this.alerCtrl=a,this.router=c,this.title=t.get("details"),this.price=t.get("price"),this.cat=t.get("vehicleCatagory"),this.id=t.get("packageId"),this.name=t.get("title"),this.time=t.get("duration"),this.flag=t.get("flag"),this.desp=t.get("description")}ngOnInit(){this.presentLoading(),this.storage.get("email").then(n=>{this.email=n,console.log(this.email),this.req={email:this.email,vehicleCatagory:this.cat}}).then(()=>{console.log(this.req),this.http.post("https://mywash.herokuapp.com/service/find",this.req).subscribe(n=>l.__awaiter(this,void 0,void 0,(function*(){console.log(n),this.crt=n})))})}goback(){this.modalCtrl.dismiss({dismissed:!0})}presentLoading(){return l.__awaiter(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({message:"Please wait...",duration:1e3});yield n.present(),console.log("Loading dismissed!")}))}presentPopover(){return l.__awaiter(this,void 0,void 0,(function*(){if(0!=this.crt.length){let n;console.log(this.crt);const t=this.cartService.getCart();console.log(t),null!=t&&t.filter(n=>{this.crt=this.crt.filter(t=>t.number!=n.vehnumber)}),console.log(this.crt);const e=yield this.popoverController.create({component:i.a,componentProps:{list:this.crt},event:n,translucent:!0});return e.onDidDismiss().then(n=>{this.selection=n.data,this.dismiss()}),yield e.present()}this.doAlert("No car of specified category available!","Okay")}))}presentToast(){return l.__awaiter(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"ADDED TO CART.",duration:1500,position:"middle"})).present()}))}dismiss(){const n={id:this.id,name:this.name,time:this.time,vehnumber:this.selection.number,vehname:this.selection.vehicleModel,price:this.price,flag:this.flag,details:this.title};null==n.vehnumber?this.popoverController.dismiss({dismissed:!0}):(this.presentToast(),console.log(n),this.crt=this.crt.filter(n=>n.number!=this.selection.number),console.log(this.crt),this.cartService.addProduct(n))}fdismiss(){this.modalCtrl.dismiss({dismissed:!0}).then(()=>{this.router.navigate(["/cart"])})}doAlert(n,t){return l.__awaiter(this,void 0,void 0,(function*(){const e=yield this.alerCtrl.create({header:"Error",message:n,buttons:[t]});yield e.present()}))}}}}]);