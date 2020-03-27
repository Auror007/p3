function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var t=n[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{swWB:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=(u("gcOT"),u("lJxs")),e=function(){function l(n,u,t,o){var e=this;_classCallCheck(this,l),this.afAuth=n,this.afs=u,this.http=t,this.storage=o,this.user=null,this.markers=[],this.isTracking=!1,this.storage.get("email").then((function(l){e.email=l})),this.anonLogin()}return _createClass(l,[{key:"ionViewWillEnter",value:function(){this.http.post("https://mywash.herokuapp.com/batch/track",{email:this.email}).subscribe((function(l){console.log(l)})),this.loadMap()}},{key:"loadMap",value:function(){var l={center:new google.maps.LatLng(51.9090902,7,6673267),zoom:5,mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(this.mapElement.nativeElement,l)}},{key:"anonLogin",value:function(){var l=this;this.afAuth.auth.signInAnonymously().then((function(n){console.log(n),l.user=n})).then((function(){l.findloc()}))}},{key:"findloc",value:function(){var l=this;console.log("loc called"),this.locationsCollection=this.afs.collection("locations/cleaner1/track",(function(l){return l.orderBy("timestamp","desc")})),this.locations=this.locationsCollection.snapshotChanges().pipe(Object(o.a)((function(l){return l.map((function(l){var n=l.payload.doc.data();return Object.assign({id:l.payload.doc.id},n)}))}))),this.locations.subscribe((function(n){console.log("paused",n),setTimeout((function(){console.log("update called"),l.markers.map((function(l){return l.setMap(null)})),l.markers=[];var u=new google.maps.LatLng(n[0].lat,n[0].lng);l.map.setCenter(u),l.map.setZoom(14);var t=new google.maps.Marker({map:l.map,position:u});l.markers.push(t)}),2e3)}))}},{key:"deleteLocation",value:function(l){this.locationsCollection.doc(l.id).delete()}}]),l}(),i=function l(){_classCallCheck(this,l)},a=u("pMnS"),c=u("oBZk"),r=u("ZZ/e"),s=u("SVse"),b=u("iInd"),p=u("irV9"),m=u("Xr7G"),h=u("IheW"),f=u("xgBC"),d=t.Ab({encapsulation:0,styles:[["#map[_ngcontent-%COMP%]{width:100%;height:300px}"]],data:{}});function g(l){return t.Wb(0,[(l()(),t.Cb(0,0,null,null,16,"ion-item-sliding",[],null,null,null,c.bb,c.u)),t.Bb(1,49152,null,0,r.O,[t.j,t.p,t.F],null,null),(l()(),t.Cb(2,0,null,0,8,"ion-item",[],null,null,null,c.cb,c.r)),t.Bb(3,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(4,0,null,0,6,"ion-label",[["text-wrap",""]],null,null,null,c.db,c.v)),t.Bb(5,49152,null,0,r.P,[t.j,t.p,t.F],null,null),t.Bb(6,16384,null,0,r.e,[t.p],null,null),(l()(),t.Ub(7,0,[" Lat: "," Lng: "," "])),(l()(),t.Cb(8,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.Ub(9,null,[" "," "])),t.Qb(10,2),(l()(),t.Cb(11,0,null,0,5,"ion-item-options",[["side","start"]],null,null,null,c.ab,c.t)),t.Bb(12,49152,null,0,r.N,[t.j,t.p,t.F],{side:[0,"side"]},null),(l()(),t.Cb(13,0,null,0,3,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteLocation(l.context.$implicit)&&t),t}),c.Z,c.s)),t.Bb(14,49152,null,0,r.M,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Cb(15,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,c.X,c.p)),t.Bb(16,49152,null,0,r.E,[t.j,t.p,t.F],{name:[0,"name"]},null)],(function(l,n){l(n,12,0,"start"),l(n,14,0,"danger"),l(n,16,0,"trash")}),(function(l,n){l(n,7,0,n.context.$implicit.lat,n.context.$implicit.lng);var u=t.Vb(n,9,0,l(n,10,0,t.Ob(n.parent.parent,0),n.context.$implicit.timestamp,"short"));l(n,9,0,u)}))}function k(l){return t.Wb(0,[(l()(),t.Cb(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t.Cb(1,0,null,null,4,"ion-item",[],null,null,null,c.cb,c.r)),t.Bb(2,49152,null,0,r.J,[t.j,t.p,t.F],null,null),(l()(),t.Cb(3,0,null,0,2,"ion-label",[],null,null,null,c.db,c.v)),t.Bb(4,49152,null,0,r.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(5,0,["User ID: ",""])),(l()(),t.Cb(6,0,null,null,4,"ion-list",[],null,null,null,c.eb,c.w)),t.Bb(7,49152,null,0,r.Q,[t.j,t.p,t.F],null,null),(l()(),t.rb(16777216,null,0,2,null,g)),t.Bb(9,278528,null,0,s.j,[t.X,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),t.Pb(131072,s.b,[t.j])],(function(l,n){var u=n.component;l(n,9,0,t.Vb(n,9,0,t.Ob(n,10).transform(u.locations)))}),(function(l,n){l(n,5,0,n.component.user.uid)}))}function C(l){return t.Wb(0,[t.Pb(0,s.e,[t.z]),t.Sb(671088640,1,{mapElement:0}),(l()(),t.Cb(2,0,null,null,13,"ion-header",[],null,null,null,c.W,c.o)),t.Bb(3,49152,null,0,r.D,[t.j,t.p,t.F],null,null),(l()(),t.Cb(4,0,null,0,11,"ion-toolbar",[],null,null,null,c.pb,c.H)),t.Bb(5,49152,null,0,r.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Cb(6,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,c.L,c.d)),t.Bb(7,49152,null,0,r.n,[t.j,t.p,t.F],null,null),(l()(),t.Cb(8,0,null,0,4,"ion-back-button",[["routerDirection","backward"],["routerLink","/tabs/tabs/services"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ob(l,10).onClick(u)&&o),"click"===n&&(o=!1!==t.Ob(l,11).onClick()&&o),"click"===n&&(o=!1!==t.Ob(l,12).onClick(u)&&o),o}),c.J,c.b)),t.Bb(9,49152,null,0,r.i,[t.j,t.p,t.F],null,null),t.Bb(10,16384,null,0,r.j,[[2,r.kb],r.Kb],null,null),t.Bb(11,16384,null,0,b.n,[b.m,b.a,[8,null],t.K,t.p],{routerLink:[0,"routerLink"]},null),t.Bb(12,737280,null,0,r.Pb,[s.i,r.Kb,t.p,b.m,[2,b.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.Cb(13,0,null,0,2,"ion-title",[],null,null,null,c.ob,c.G)),t.Bb(14,49152,null,0,r.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Ub(-1,0,[" Live Tracking "])),(l()(),t.Cb(16,0,null,null,4,"ion-content",[],null,null,null,c.S,c.k)),t.Bb(17,49152,null,0,r.w,[t.j,t.p,t.F],null,null),(l()(),t.Cb(18,0,[[1,0],["map",1]],0,0,"div",[["id","map"]],[[8,"hidden",0]],null,null,null,null)),(l()(),t.rb(16777216,null,0,1,null,k)),t.Bb(20,16384,null,0,s.k,[t.X,t.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,11,0,"/tabs/tabs/services"),l(n,12,0,"backward"),l(n,20,0,u.user)}),(function(l,n){l(n,18,0,!n.component.user)}))}var v=t.yb("app-gps",e,(function(l){return t.Wb(0,[(l()(),t.Cb(0,0,null,null,1,"app-gps",[],null,null,null,C,d)),t.Bb(1,49152,null,0,e,[p.a,m.a,h.c,f.b],null,null)],null,null)}),{},{},[]),B=u("s7LF");u.d(n,"GpsPageModuleNgFactory",(function(){return w}));var w=t.zb(i,[],(function(l){return t.Lb([t.Mb(512,t.m,t.kb,[[8,[a.a,v]],[3,t.m],t.D]),t.Mb(4608,s.m,s.l,[t.z,[2,s.t]]),t.Mb(4608,B.i,B.i,[]),t.Mb(4608,r.c,r.c,[t.F,t.g]),t.Mb(4608,r.Jb,r.Jb,[r.c,t.m,t.w]),t.Mb(4608,r.Ob,r.Ob,[r.c,t.m,t.w]),t.Mb(1073742336,s.c,s.c,[]),t.Mb(1073742336,B.h,B.h,[]),t.Mb(1073742336,B.a,B.a,[]),t.Mb(1073742336,r.Gb,r.Gb,[]),t.Mb(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),t.Mb(1073742336,i,i,[]),t.Mb(1024,b.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);