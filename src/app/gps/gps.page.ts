import { Component, OnInit,ViewChild, AfterViewInit} from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


declare var google;

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit,AfterViewInit {

 
 
  @ViewChild('map',{static:false}) mapEle:ElementRef; 
    map: any;
  currentMapTrack = null;
 
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
 
  positionSubscription: Subscription;
 
  constructor(
    public navCtrl: NavController, 
    private plt: Platform, 
    public geolocation: Geolocation,
    private storage: Storage) {}
  
    
  
    ngOnInit()
  {
    console.log("BYE");
    this.plt.ready().then(() => {
     // this.loadHistoricRoutes();
 
      let mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      };
      this.map = new google.maps.Map(this.mapEle.nativeElement, mapOptions);
      
     
      this.geolocation.getCurrentPosition().then((pos) => {
        let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(latLng);
        this.map.setZoom(15);
      })
    
      });
  }

  ngAfterViewInit() {
    
   
  }

  
  // startTracking()
  //   {
  //     this.isTracking = true;
  //     this.trackedRoute = [];
   
  //     let watch = this.geolocation.watchPosition();
  //     watch.subscribe((data) => {
  //         setTimeout(() => {
  //           this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
  //           this.redrawPath(this.trackedRoute);
  //         }, 0);
  //       });
   
  //   }
   
  //   redrawPath(path) {
  //     if (this.currentMapTrack) {
  //       this.currentMapTrack.setMap(null);
  //     }
   
  //     if (path.length > 1) {
  //       this.currentMapTrack = new google.maps.Polyline({
  //         path: path,
  //         geodesic: true,
  //         strokeColor: '#ff00ff',
  //         strokeOpacity: 1.0,
  //         strokeWeight: 3
  //       });
  //       this.currentMapTrack.setMap(this.map);
  //     }
  //   }

  //   stopTracking() {
  //     let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
  //     this.previousTracks.push(newRoute);
  //     this.storage.set('routes', this.previousTracks);
     
  //     this.isTracking = false;
  //     this.positionSubscription.unsubscribe();
  //     this.currentMapTrack.setMap(null);
  //   }
     
  //   showHistoryRoute(route) {
  //     this.redrawPath(route);
  //   }
  
  
  //   loadHistoricRoutes() {
  //     this.storage.get('routes').then(data => {
  //       if (data) {
  //         this.previousTracks = data;
  //       }
  //     });
  //   } 


}
