function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var o=n[u];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,o.key,o)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{swWB:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),t=(u("gcOT"),u("lJxs")),e=function(){function l(n,u){_classCallCheck(this,l),this.afAuth=n,this.afs=u,this.user=null,this.markers=[],this.isTracking=!1,this.anonLogin()}return _createClass(l,[{key:"ionViewWillEnter",value:function(){this.loadMap()}},{key:"loadMap",value:function(){var l={center:new google.maps.LatLng(51.9090902,7,6673267),zoom:5,mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(this.mapElement.nativeElement,l)}},{key:"anonLogin",value:function(){var l=this;this.afAuth.auth.signInAnonymously().then((function(n){console.log(n),l.user=n})).then((function(){l.findloc()}))}},{key:"findloc",value:function(){var l=this;console.log("loc called"),this.locationsCollection=this.afs.collection("locations/cleaner1/track",(function(l){return l.orderBy("timestamp","desc")})),this.locations=this.locationsCollection.snapshotChanges().pipe(Object(t.a)((function(l){return l.map((function(l){var n=l.payload.doc.data();return Object.assign({id:l.payload.doc.id},n)}))}))),this.locations.subscribe((function(n){console.log("paused",n),setTimeout((function(){console.log("update called"),l.markers.map((function(l){return l.setMap(null)})),l.markers=[];var u=new google.maps.LatLng(n[0].lat,n[0].lng);l.map.setCenter(u),l.map.setZoom(14);var o=new google.maps.Marker({map:l.map,position:u});l.markers.push(o)}),2e3)}))}},{key:"deleteLocation",value:function(l){this.locationsCollection.doc(l.id).delete()}}]),l}(),i=function l(){_classCallCheck(this,l)},a=u("pMnS"),c=u("oBZk"),r=u("ZZ/e"),s=u("SVse"),b=u("irV9"),p=u("Xr7G"),m=o.Ab({encapsulation:0,styles:[["#map[_ngcontent-%COMP%]{width:100%;height:300px}"]],data:{}});function f(l){return o.Wb(0,[(l()(),o.Cb(0,0,null,null,16,"ion-item-sliding",[],null,null,null,c.ab,c.u)),o.Bb(1,49152,null,0,r.O,[o.j,o.p,o.F],null,null),(l()(),o.Cb(2,0,null,0,8,"ion-item",[],null,null,null,c.bb,c.r)),o.Bb(3,49152,null,0,r.J,[o.j,o.p,o.F],null,null),(l()(),o.Cb(4,0,null,0,6,"ion-label",[["text-wrap",""]],null,null,null,c.cb,c.v)),o.Bb(5,49152,null,0,r.P,[o.j,o.p,o.F],null,null),o.Bb(6,16384,null,0,r.e,[o.p],null,null),(l()(),o.Ub(7,0,[" Lat: "," Lng: "," "])),(l()(),o.Cb(8,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),o.Ub(9,null,[" "," "])),o.Qb(10,2),(l()(),o.Cb(11,0,null,0,5,"ion-item-options",[["side","start"]],null,null,null,c.Z,c.t)),o.Bb(12,49152,null,0,r.N,[o.j,o.p,o.F],{side:[0,"side"]},null),(l()(),o.Cb(13,0,null,0,3,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.deleteLocation(l.context.$implicit)&&o),o}),c.Y,c.s)),o.Bb(14,49152,null,0,r.M,[o.j,o.p,o.F],{color:[0,"color"]},null),(l()(),o.Cb(15,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,c.W,c.p)),o.Bb(16,49152,null,0,r.E,[o.j,o.p,o.F],{name:[0,"name"]},null)],(function(l,n){l(n,12,0,"start"),l(n,14,0,"danger"),l(n,16,0,"trash")}),(function(l,n){l(n,7,0,n.context.$implicit.lat,n.context.$implicit.lng);var u=o.Vb(n,9,0,l(n,10,0,o.Ob(n.parent.parent,0),n.context.$implicit.timestamp,"short"));l(n,9,0,u)}))}function d(l){return o.Wb(0,[(l()(),o.Cb(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),o.Cb(1,0,null,null,4,"ion-item",[],null,null,null,c.bb,c.r)),o.Bb(2,49152,null,0,r.J,[o.j,o.p,o.F],null,null),(l()(),o.Cb(3,0,null,0,2,"ion-label",[],null,null,null,c.cb,c.v)),o.Bb(4,49152,null,0,r.P,[o.j,o.p,o.F],null,null),(l()(),o.Ub(5,0,["User ID: ",""])),(l()(),o.Cb(6,0,null,null,4,"ion-list",[],null,null,null,c.db,c.w)),o.Bb(7,49152,null,0,r.Q,[o.j,o.p,o.F],null,null),(l()(),o.rb(16777216,null,0,2,null,f)),o.Bb(9,278528,null,0,s.j,[o.X,o.S,o.x],{ngForOf:[0,"ngForOf"]},null),o.Pb(131072,s.b,[o.j])],(function(l,n){var u=n.component;l(n,9,0,o.Vb(n,9,0,o.Ob(n,10).transform(u.locations)))}),(function(l,n){l(n,5,0,n.component.user.uid)}))}function g(l){return o.Wb(0,[o.Pb(0,s.e,[o.z]),o.Sb(671088640,1,{mapElement:0}),(l()(),o.Cb(2,0,null,null,6,"ion-header",[],null,null,null,c.V,c.o)),o.Bb(3,49152,null,0,r.D,[o.j,o.p,o.F],null,null),(l()(),o.Cb(4,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,c.nb,c.G)),o.Bb(5,49152,null,0,r.Eb,[o.j,o.p,o.F],{color:[0,"color"]},null),(l()(),o.Cb(6,0,null,0,2,"ion-title",[],null,null,null,c.mb,c.F)),o.Bb(7,49152,null,0,r.Cb,[o.j,o.p,o.F],null,null),(l()(),o.Ub(-1,0,[" Live Tracking "])),(l()(),o.Cb(9,0,null,null,4,"ion-content",[],null,null,null,c.R,c.k)),o.Bb(10,49152,null,0,r.w,[o.j,o.p,o.F],null,null),(l()(),o.Cb(11,0,[[1,0],["map",1]],0,0,"div",[["id","map"]],[[8,"hidden",0]],null,null,null,null)),(l()(),o.rb(16777216,null,0,1,null,d)),o.Bb(13,16384,null,0,s.k,[o.X,o.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,5,0,"primary"),l(n,13,0,u.user)}),(function(l,n){l(n,11,0,!n.component.user)}))}var h=o.yb("app-gps",e,(function(l){return o.Wb(0,[(l()(),o.Cb(0,0,null,null,1,"app-gps",[],null,null,null,g,m)),o.Bb(1,49152,null,0,e,[b.a,p.a],null,null)],null,null)}),{},{},[]),C=u("s7LF"),v=u("iInd");u.d(n,"GpsPageModuleNgFactory",(function(){return k}));var k=o.zb(i,[],(function(l){return o.Lb([o.Mb(512,o.m,o.kb,[[8,[a.a,h]],[3,o.m],o.D]),o.Mb(4608,s.m,s.l,[o.z,[2,s.s]]),o.Mb(4608,C.g,C.g,[]),o.Mb(4608,r.c,r.c,[o.F,o.g]),o.Mb(4608,r.Ib,r.Ib,[r.c,o.m,o.w]),o.Mb(4608,r.Nb,r.Nb,[r.c,o.m,o.w]),o.Mb(1073742336,s.c,s.c,[]),o.Mb(1073742336,C.f,C.f,[]),o.Mb(1073742336,C.a,C.a,[]),o.Mb(1073742336,r.Gb,r.Gb,[]),o.Mb(1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),o.Mb(1073742336,i,i,[]),o.Mb(1024,v.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);