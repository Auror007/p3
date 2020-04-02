import { Component, ViewChild, ElementRef } from '@angular/core';
import {Plugins, GeolocationPluginWeb} from '@capacitor/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';

const {Geolocation} =Plugins;

 declare var google;

@Component({
  selector: 'app-gps',
  templateUrl: 'gps.page.html',
  styleUrls: ['gps.page.scss'],
})
export class GpsPage {
  locations:Observable<any>;
  locationsCollection: AngularFirestoreCollection<any>;
  user=null;
  public phone:number;
  public email:string;
  @ViewChild('map',{static:false}) mapElement:ElementRef;
  map:any;
  markers=[];
  isTracking = false;
  watch: string;
  constructor(
    private afAuth:AngularFireAuth,
    private afs:AngularFirestore,
    private http:HttpClient,
    private storage:Storage
    ) {
      
    this.anonLogin();
  }

  ionViewWillEnter(){
    this.storage.get('email').then((res)=>{
      this.email=res;
      console.log(this.email);
      
      this.http.post<{data:{cleaner_name:string,cleaner_phone:number}}>('https://mywash.herokuapp.com/batch/track',{email:this.email}).subscribe((res)=>{
        console.log(res);
        if(res.data!=null)
        {
          
        this.user=res.data.cleaner_name;
        this.phone=res.data.cleaner_phone;
        }
        else{
          console.log('null');
         

        }
        
      })
      this.loadMap();
    })
    
  }
  loadMap(){
    let latlng=new google.maps.LatLng(51.9090902,7,6673267);

    let mapOptions={
      center:latlng,
      zoom:5,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions);
  }
  call() {
    let tel_number = this.phone;
    window.open(`tel:${tel_number}`, '_system')
  }
  anonLogin(){
    //email auth
    this.afAuth.auth.signInAnonymously().then(user=>{
      console.log(user);
      
    }).then(()=>{
      this.findloc();
    });
  }


  findloc(){

    console.log("loc called");
    
      this.locationsCollection=this.afs.collection(
        `locations/cleaner1/track`,
        ref=>ref.orderBy('timestamp',"desc")
      );
      
      this.locations = this.locationsCollection.snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
 
      this.locations.subscribe(locations => {
        console.log("paused",locations);

        setTimeout(()=>{
          console.log("update called");
    
          this.markers.map(marker => marker.setMap(null));
          this.markers = [];
          // for (let loc of locations) {
            let latLng = new google.maps.LatLng(locations[0].lat, locations[0].lng);
            this.map.setCenter(latLng);
            this.map.setZoom(14);
            
            let marker = new google.maps.Marker({
              map: this.map,
             // animation: google.maps.Animation.DROP,
              position: latLng
            });
            this.markers.push(marker);
        },2000);
      });

  }

  // Delete a location from Firebase
  deleteLocation(pos) {
    this.locationsCollection.doc(pos.id).delete();

  }
   
  // Redraw all markers on the map
  // updateMap(locations) {
  //   // Remove all current marker
  //   console.log("update called");
    
  //   this.markers.map(marker => marker.setMap(null));
  //   this.markers = [];
  //   // for (let loc of locations) {
  //     let latLng = new google.maps.LatLng(locations[0].lat, locations[0].lng);
  //     this.map.setCenter(latLng);
  //     this.map.setZoom(14);
      
  //     let marker = new google.maps.Marker({
  //       map: this.map,
  //       animation: google.maps.Animation.DROP,
  //       position: latLng
  //     });
  //     this.markers.push(marker);
  //     this.findloc();
  //     setTimeout(()=>{this.findloc();},10000);
  //   // }
  // }
}
