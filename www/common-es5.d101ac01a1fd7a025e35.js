function _slicedToArray(n,e){return _arrayWithHoles(n)||_iterableToArrayLimit(n,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(n,e){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],r=!0,i=!1,l=void 0;try{for(var u,o=n[Symbol.iterator]();!(r=(u=o.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(a){i=!0,l=a}finally{try{r||null==o.return||o.return()}finally{if(i)throw l}}return t}}function _arrayWithHoles(n){if(Array.isArray(n))return n}function _defineProperty(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+veT":function(n,e,t){"use strict";t.d(e,"a",(function(){return y})),t.d(e,"b",(function(){return k})),t.d(e,"c",(function(){return v})),t.d(e,"d",(function(){return w})),t.d(e,"e",(function(){return l}));var r=t("dSyh"),i=t("kBU6"),l=function(n){return new Promise((function(e,t){Object(r.m)((function(){u(n),o(n).then((function(t){t.animation&&t.animation.destroy(),a(n),e(t)}),(function(e){a(n),t(e)}))}))}))},u=function(n){var e=n.enteringEl,t=n.leavingEl;C(e,t,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),t&&w(t,!1)},o=function(n){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(s(n));case 2:return e=t.sent,t.abrupt("return",e?c(e,n):f(n));case 4:case"end":return t.stop()}}))},a=function(n){var e=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},s=function(n){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.leavingEl||!n.animated||0===n.duration){e.next=16;break}if(!n.animationBuilder){e.next=5;break}e.t0=n.animationBuilder,e.next=15;break;case 5:if("ios"!==n.mode){e.next=11;break}return e.next=8,regeneratorRuntime.awrap(t.e(112).then(t.bind(null,"Lu00")));case 8:e.t1=e.sent.iosTransitionAnimation,e.next=14;break;case 11:return e.next=13,regeneratorRuntime.awrap(t.e(113).then(t.bind(null,"wxTh")));case 13:e.t1=e.sent.mdTransitionAnimation;case 14:e.t0=e.t1;case 15:return e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}))},c=function(n,e){var r,i,l;return regeneratorRuntime.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,regeneratorRuntime.awrap(d(e,!0));case 2:return u.prev=2,u.next=5,regeneratorRuntime.awrap(t.e(5).then(t.bind(null,"gHMO")));case 5:return i=u.sent,u.next=8,regeneratorRuntime.awrap(i.create(n,e.baseEl,e));case 8:r=u.sent,u.next=14;break;case 11:u.prev=11,u.t0=u.catch(2),r=n(e.baseEl,e);case 14:return b(e.enteringEl,e.leavingEl),u.next=17,regeneratorRuntime.awrap(h(r,e));case 17:return l=u.sent,u.abrupt("return",(e.progressCallback&&e.progressCallback(void 0),l&&m(e.enteringEl,e.leavingEl),{hasCompleted:l,animation:r}));case 19:case"end":return u.stop()}}),null,null,[[2,11]])},f=function(n){var e,t;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.enteringEl,t=n.leavingEl,r.next=3,regeneratorRuntime.awrap(d(n,!1));case 3:return b(e,t),m(e,t),r.abrupt("return",{hasCompleted:!0});case 6:case"end":return r.stop()}}))},d=function(n,e){var t;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=(void 0!==n.deepWait?n.deepWait:e)?[y(n.enteringEl),y(n.leavingEl)]:[g(n.enteringEl),g(n.leavingEl)],r.next=3,regeneratorRuntime.awrap(Promise.all(t));case 3:return r.next=5,regeneratorRuntime.awrap(p(n.viewIsReady,n.enteringEl));case 5:case"end":return r.stop()}}))},p=function(n,e){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=n,!t.t0){t.next=4;break}return t.next=4,regeneratorRuntime.awrap(n(e));case 4:case"end":return t.stop()}}))},h=function(n,e){var t=e.progressCallback,r=new Promise((function(e){n.onFinish((function(t){"number"==typeof t?e(1===t):void 0!==n.hasCompleted&&e(n.hasCompleted)}))}));return t?(n.progressStart(!0),t(n)):n.play(),r},b=function(n,e){v(e,i.c),v(n,i.a)},m=function(n,e){v(n,i.b),v(e,i.d)},v=function(n,e){if(n){var t=new CustomEvent(e,{bubbles:!1,cancelable:!1});n.dispatchEvent(t)}},g=function(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()},y=function n(e){var t;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t=e)){r.next=12;break}if(r.t0=null!=t.componentOnReady,!r.t0){r.next=8;break}return r.next=6,regeneratorRuntime.awrap(t.componentOnReady());case 6:r.t1=r.sent,r.t0=null!=r.t1;case 8:if(!r.t0){r.next=10;break}return r.abrupt("return");case 10:return r.next=12,regeneratorRuntime.awrap(Promise.all(Array.from(t.children).map(n)));case 12:case"end":return r.stop()}}))},w=function(n,e){e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},C=function(n,e,t){void 0!==n&&(n.style.zIndex="back"===t?"99":"101"),void 0!==e&&(e.style.zIndex="100")},k=function(n){return n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n}},"7TDh":function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t("ZZ/e");var r=function(){function n(e,t){_classCallCheck(this,n),this.events=e,this.popoverController=t,this.list=[]}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"onClick",value:function(n){this.popoverController.dismiss(n.number),console.log("dismissed")}}]),n}()},DYVS:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t("tqxf");var r=function n(){_classCallCheck(this,n)}},Dl6n:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return r})),t.d(e,"d",(function(){return o}));var r=function(n,e){return null!==e.closest(n)},i=function(n){return"string"==typeof n&&n.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(n),!0):void 0},l=function(n){var e={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return e[n]=!0})),e},u=/^[a-z][a-z0-9+\-.]*:/,o=function(n,e,t){var r;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(null==n||"#"===n[0]||u.test(n)){i.next=4;break}if(!(r=document.querySelector("ion-router"))){i.next=4;break}return i.abrupt("return",(null!=e&&e.preventDefault(),r.push(n,t)));case 4:return i.abrupt("return",!1);case 5:case"end":return i.stop()}}))}},"N+bC":function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t("8Y7J"),i=function(){var n=function(){function n(){_classCallCheck(this,n),this.phn={phone:String,otp:String,userName:String,email:String,address:String,lat:Number,lng:Number},this.result={message:Boolean}}return _createClass(n,[{key:"setOtp",value:function(n){this.phn.otp=n}},{key:"setPhone",value:function(n){this.phn.phone=n}},{key:"setName",value:function(n){this.phn.userName=n}},{key:"setAddress",value:function(n){this.phn.address=n}},{key:"setEmail",value:function(n){this.phn.email=n}},{key:"setLat",value:function(n){this.phn.lat=n}},{key:"setLng",value:function(n){this.phn.lng=n}},{key:"getAddress",value:function(){return this.phn.address}},{key:"getPhone",value:function(){return this.phn.phone}},{key:"getName",value:function(){return this.phn.userName}},{key:"getEmail",value:function(){return this.phn.email}},{key:"getJson",value:function(){return this.phn}}]),n}();return n.ngInjectableDef=r.Zb({factory:function(){return new n},token:n,providedIn:"root"}),n}()},P8FJ:function(n,e,t){"use strict";var r=t("8Y7J"),i=t("oBZk"),l=t("ZZ/e"),u=t("SVse"),o=t("7TDh");t.d(e,"a",(function(){return f}));var a=r.Ab({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{margin:auto;padding:initial}"]],data:{}});function s(n){return r.Wb(0,[(n()(),r.Cb(0,0,null,null,6,"ion-list",[["style","margin-bottom: 0%;"]],null,null,null,i.eb,i.w)),r.Bb(1,49152,null,0,l.Q,[r.j,r.p,r.F],null,null),(n()(),r.Cb(2,0,null,0,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.onClick(n.context.$implicit)&&r),r}),i.cb,i.r)),r.Bb(3,49152,null,0,l.J,[r.j,r.p,r.F],{button:[0,"button"]},null),(n()(),r.Cb(4,0,null,0,2,"ion-label",[["style","text-align: center;"]],null,null,null,i.db,i.v)),r.Bb(5,49152,null,0,l.P,[r.j,r.p,r.F],null,null),(n()(),r.Ub(6,0,["",""]))],(function(n,e){n(e,3,0,"")}),(function(n,e){n(e,6,0,e.context.$implicit.vehicleModel)}))}function c(n){return r.Wb(0,[(n()(),r.Cb(0,0,null,null,4,"ion-header",[],null,null,null,i.W,i.o)),r.Bb(1,49152,null,0,l.D,[r.j,r.p,r.F],null,null),(n()(),r.Cb(2,0,null,0,2,"ion-toolbar",[["style","text-align: center;"]],null,null,null,i.pb,i.H)),r.Bb(3,49152,null,0,l.Eb,[r.j,r.p,r.F],null,null),(n()(),r.Ub(-1,0,[" Select Car "])),(n()(),r.Cb(5,0,null,null,3,"ion-content",[],null,null,null,i.S,i.k)),r.Bb(6,49152,null,0,l.w,[r.j,r.p,r.F],null,null),(n()(),r.rb(16777216,null,0,1,null,s)),r.Bb(8,278528,null,0,u.j,[r.X,r.S,r.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,e){n(e,8,0,e.component.list)}),null)}var f=r.yb("app-carpop",o.a,(function(n){return r.Wb(0,[(n()(),r.Cb(0,0,null,null,1,"app-carpop",[],null,null,null,c,a)),r.Bb(1,114688,null,0,o.a,[l.f,l.Ob],null,null)],(function(n,e){n(e,1,0)}),null)}),{list:"list"},{},[])},Vjt6:function(n,e,t){"use strict";var r=t("8Y7J"),i=t("oBZk"),l=t("ZZ/e"),u=t("tqxf"),o=t("IheW"),a=t("xgBC"),s=t("c14U");t.d(e,"a",(function(){return d}));var c=r.Ab({encapsulation:0,styles:[[""]],data:{}});function f(n){return r.Wb(0,[(n()(),r.Cb(0,0,null,null,9,"ion-header",[],null,null,null,i.W,i.o)),r.Bb(1,49152,null,0,l.D,[r.j,r.p,r.F],null,null),(n()(),r.Cb(2,0,null,0,7,"ion-toolbar",[],null,null,null,i.pb,i.H)),r.Bb(3,49152,null,0,l.Eb,[r.j,r.p,r.F],null,null),(n()(),r.Cb(4,0,null,0,2,"ion-title",[],null,null,null,i.ob,i.G)),r.Bb(5,49152,null,0,l.Cb,[r.j,r.p,r.F],null,null),(n()(),r.Ub(-1,0,["Details"])),(n()(),r.Cb(7,0,null,0,2,"ion-button",[["color","danger"],["slot","end"]],null,[[null,"click"]],(function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.fdismiss()&&r),r}),i.K,i.c)),r.Bb(8,49152,null,0,l.m,[r.j,r.p,r.F],{color:[0,"color"]},null),(n()(),r.Ub(-1,0,["Close "])),(n()(),r.Cb(10,0,null,null,13,"ion-content",[],null,null,null,i.S,i.k)),r.Bb(11,49152,null,0,l.w,[r.j,r.p,r.F],null,null),(n()(),r.Cb(12,0,null,0,11,"ion-list",[],null,null,null,i.eb,i.w)),r.Bb(13,49152,null,0,l.Q,[r.j,r.p,r.F],null,null),(n()(),r.Cb(14,0,null,0,4,"ion-item",[],null,null,null,i.cb,i.r)),r.Bb(15,49152,null,0,l.J,[r.j,r.p,r.F],null,null),(n()(),r.Cb(16,0,null,0,2,"ion-label",[],null,null,null,i.db,i.v)),r.Bb(17,49152,null,0,l.P,[r.j,r.p,r.F],null,null),(n()(),r.Ub(18,0,["",""])),(n()(),r.Cb(19,0,null,0,4,"ion-item",[],null,null,null,i.cb,i.r)),r.Bb(20,49152,null,0,l.J,[r.j,r.p,r.F],null,null),(n()(),r.Cb(21,0,null,0,2,"ion-label",[],null,null,null,i.db,i.v)),r.Bb(22,49152,null,0,l.P,[r.j,r.p,r.F],null,null),(n()(),r.Ub(23,0,["",""])),(n()(),r.Cb(24,0,null,null,15,"ion-footer",[["class","ion-no-border"]],null,null,null,i.U,i.m)),r.Bb(25,49152,null,0,l.B,[r.j,r.p,r.F],null,null),(n()(),r.Cb(26,0,null,0,13,"ion-item",[],null,null,null,i.cb,i.r)),r.Bb(27,49152,null,0,l.J,[r.j,r.p,r.F],null,null),(n()(),r.Cb(28,0,null,0,11,"ion-toolbar",[["style","font-size: medium;"]],null,null,null,i.pb,i.H)),r.Bb(29,49152,null,0,l.Eb,[r.j,r.p,r.F],null,null),(n()(),r.Cb(30,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,i.db,i.v)),r.Bb(31,49152,null,0,l.P,[r.j,r.p,r.F],null,null),(n()(),r.Ub(-1,0,["Price:"])),(n()(),r.Cb(33,0,null,0,2,"ion-label",[],null,null,null,i.db,i.v)),r.Bb(34,49152,null,0,l.P,[r.j,r.p,r.F],null,null),(n()(),r.Ub(35,0,["",""])),(n()(),r.Cb(36,0,null,0,3,"ion-fab-button",[["color","danger"],["size","small"],["slot","end"]],null,[[null,"click"]],(function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.presentPopover()&&r),r}),i.T,i.l)),r.Bb(37,49152,null,0,l.z,[r.j,r.p,r.F],{color:[0,"color"],size:[1,"size"]},null),(n()(),r.Cb(38,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.X,i.p)),r.Bb(39,49152,null,0,l.E,[r.j,r.p,r.F],{name:[0,"name"]},null)],(function(n,e){n(e,8,0,"danger"),n(e,37,0,"danger","small"),n(e,39,0,"add")}),(function(n,e){var t=e.component;n(e,18,0,t.title),n(e,23,0,t.desp),n(e,35,0,t.price)}))}var d=r.yb("app-dashmod",u.a,(function(n){return r.Wb(0,[(n()(),r.Cb(0,0,null,null,1,"app-dashmod",[],null,null,null,f,c)),r.Bb(1,114688,null,0,u.a,[l.Jb,l.Lb,l.f,l.Ob,o.c,a.b,s.a,l.Sb,l.Ib,l.b],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[])},YtD4:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r=function(n){try{if("string"!=typeof n||""===n)return n;var e=document.createDocumentFragment(),t=document.createElement("div");e.appendChild(t),t.innerHTML=n,o.forEach((function(n){for(var t=e.querySelectorAll(n),r=t.length-1;r>=0;r--){var u=t[r];u.parentNode?u.parentNode.removeChild(u):e.removeChild(u);for(var o=l(u),a=0;a<o.length;a++)i(o[a])}}));for(var r=l(e),u=0;u<r.length;u++)i(r[u]);var a=document.createElement("div");a.appendChild(e);var s=a.querySelector("div");return null!==s?s.innerHTML:a.innerHTML}catch(c){return console.error(c),""}},i=function n(e){if(!e.nodeType||1===e.nodeType){for(var t=e.attributes.length-1;t>=0;t--){var r=e.attributes.item(t),i=r.name;if(u.includes(i.toLowerCase())){var o=r.value;null!=o&&o.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}else e.removeAttribute(i)}for(var a=l(e),s=0;s<a.length;s++)n(a[s])}},l=function(n){return null!=n.children?n.children:n.childNodes},u=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},c14U:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var r=t("2Vo4"),i=t("8Y7J"),l=function(){var n=function(){function n(){_classCallCheck(this,n),this.cart=[],this.amount=0,this.cartItemCount=new r.a(0)}return _createClass(n,[{key:"getCart",value:function(){return this.cart}},{key:"getAmount",value:function(){return this.amount}},{key:"addProduct",value:function(n){this.cart.push(n),this.amount=this.amount+n.price}},{key:"removeProduct",value:function(n){var e=!0,t=!1,r=void 0;try{for(var i,l=this.cart.entries()[Symbol.iterator]();!(e=(i=l.next()).done);e=!0){var u=_slicedToArray(i.value,2),o=u[0],a=u[1];a.vehnumber===n.vehnumber&&(this.amount=this.amount-a.price,this.cart.splice(o,1))}}catch(s){t=!0,r=s}finally{try{e||null==l.return||l.return()}finally{if(t)throw r}}}},{key:"removeAll",value:function(){this.cart=[]}}]),n}();return n.ngInjectableDef=i.Zb({factory:function(){return new n},token:n,providedIn:"root"}),n}()},m9yc:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return i}));var r=function(n,e,t,r,i){var l;return regeneratorRuntime.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(!n){u.next=2;break}return u.abrupt("return",n.attachViewToDom(e,t,i,r));case 2:if("string"==typeof t||t instanceof HTMLElement){u.next=4;break}throw new Error("framework delegate is missing");case 4:if(l="string"==typeof t?e.ownerDocument&&e.ownerDocument.createElement(t):t,r&&r.forEach((function(n){return l.classList.add(n)})),i&&Object.assign(l,i),e.appendChild(l),u.t0=l.componentOnReady,!u.t0){u.next=12;break}return u.next=12,regeneratorRuntime.awrap(l.componentOnReady());case 12:return u.abrupt("return",l);case 13:case"end":return u.stop()}}))},i=function(n,e){if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},mHYt:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t("7TDh");var r=function n(){_classCallCheck(this,n)}},"nN+u":function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return r}));var r=function(n,e,t){var r=new MutationObserver((function(n){t(i(n,e))}));return r.observe(n,{childList:!0,subtree:!0}),r},i=function(n,e){var t;return n.forEach((function(n){for(var r=0;r<n.addedNodes.length;r++)t=l(n.addedNodes[r],e)||t})),t},l=function(n,e){if(1===n.nodeType)return(n.tagName===e.toUpperCase()?[n]:Array.from(n.querySelectorAll(e))).find((function(n){return!0===n.checked}))}},opz7:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return u})),t.d(e,"d",(function(){return r}));var r=function(){var n=window.TapticEngine;n&&n.selection()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},l=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},u=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}},qaSm:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return i}));var r=function n(e,t){_classCallCheck(this,n),this.x=e,this.y=t},i=function(n,e,t,r,i){var o=u(n.y,e.y,t.y,r.y,i);return l(n.x,e.x,t.x,r.x,o[0])},l=function(n,e,t,r,i){return i*(3*e*Math.pow(i-1,2)+i*(-3*t*i+3*t+r*i))-n*Math.pow(i-1,3)},u=function(n,e,t,r,i){return o((r-=i)-3*(t-=i)+3*(e-=i)-(n-=i),3*t-6*e+3*n,3*e-3*n,n).filter((function(n){return n>=0&&n<=1}))},o=function(n,e,t,r){if(0===n)return function(n,e,t){var r=e*e-4*n*t;return r<0?[]:[(-e+Math.sqrt(r))/(2*n),(-e-Math.sqrt(r))/(2*n)]}(e,t,r);var i=(3*(t/=n)-(e/=n)*e)/3,l=(2*e*e*e-9*e*t+27*(r/=n))/27;if(0===i)return[Math.pow(-l,1/3)];if(0===l)return[Math.sqrt(-i),-Math.sqrt(-i)];var u=Math.pow(l/2,2)+Math.pow(i/3,3);if(0===u)return[Math.pow(l/2,.5)-e/3];if(u>0)return[Math.pow(-l/2+Math.sqrt(u),1/3)-Math.pow(l/2+Math.sqrt(u),1/3)-e/3];var o=Math.sqrt(Math.pow(-i/3,3)),a=Math.acos(-l/(2*Math.sqrt(Math.pow(-i/3,3)))),s=2*Math.pow(o,1/3);return[s*Math.cos(a/3)-e/3,s*Math.cos((a+2*Math.PI)/3)-e/3,s*Math.cos((a+4*Math.PI)/3)-e/3]}},tqxf:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var r=t("mrSG"),i=(t("ZZ/e"),t("7TDh"));t("c14U");var l=function(){function n(e,t,r,i,l,u,o,a,s,c){_classCallCheck(this,n),this.modalCtrl=e,this.navParams=t,this.events=r,this.popoverController=i,this.http=l,this.storage=u,this.cartService=o,this.toastController=a,this.loadingController=s,this.alerCtrl=c,this.desp=t.get("description"),this.title=t.get("details"),this.price=t.get("price"),this.cat=t.get("vehicleCatagory"),this.id=t.get("packageId"),this.name=t.get("title"),this.time=t.get("duration")}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.presentLoading(),this.storage.get("email").then((function(e){n.email=e,console.log(n.email),n.req={email:n.email,vehicleCatagory:n.cat}})).then((function(){console.log(n.req),n.http.post("https://mywash.herokuapp.com/service/find",n.req).subscribe((function(e){return r.__awaiter(n,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e),this.crt=e;case 1:case"end":return n.stop()}}),n,this)})))}))}))}},{key:"presentLoading",value:function(){return r.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({message:"Please wait...",duration:1e3});case 2:return e=n.sent,n.next=5,e.present();case 5:console.log("Loading dismissed!");case 6:case"end":return n.stop()}}),n,this)})))}},{key:"presentPopover",value:function(){return r.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,t,r=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0==this.crt.length){n.next=11;break}return console.log(this.crt),e=this.cartService.getCart(),console.log(e),null!=e&&e.filter((function(n){r.crt=r.crt.filter((function(e){return e.number!=n.vehnumber}))})),console.log(this.crt),n.next=6,this.popoverController.create({component:i.a,componentProps:{list:this.crt},event:void 0,translucent:!0});case 6:return(t=n.sent).onDidDismiss().then((function(n){r.selection=n.data,r.dismiss()})),n.next=10,t.present();case 10:return n.abrupt("return",n.sent);case 11:this.doAlert("No car of specified category available!","Okay");case 12:case"end":return n.stop()}}),n,this)})))}},{key:"presentToast",value:function(){return r.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:"ADDED TO CART.",duration:1500,position:"middle"});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"dismiss",value:function(){var n=this,e={id:this.id,name:this.name,time:this.time,vehnumber:this.selection,price:this.price};null==e.vehnumber?this.fdismiss():(this.presentToast(),console.log(e),this.crt=this.crt.filter((function(e){return e.number!=n.selection})),console.log(this.crt),this.cartService.addProduct(e))}},{key:"fdismiss",value:function(){this.modalCtrl.dismiss({dismissed:!0})}},{key:"doAlert",value:function(n,e){return r.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alerCtrl.create({header:"Error",message:n,buttons:[e]});case 2:return r=t.sent,t.next=5,r.present();case 5:case"end":return t.stop()}}),t,this)})))}}]),n}()}}]);