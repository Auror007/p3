import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';
import { Events } from '@ionic/angular';


declare var google;


@Component({
  selector: 'app-pickloc',
  templateUrl: './pickloc.page.html',
  styleUrls: ['./pickloc.page.scss'],
})
export class PicklocPage implements OnInit {

  @ViewChild('map',{static:false}) mapElement:ElementRef;
  map:any;
  public detchange:any;
  public marker:any;
  public sear:any;
  public flag:any;

  constructor(
    public router:Router,
    public http:HttpClient,
    public storage:Storage,
    private events:Events
  ) {    
  }

  ngOnInit() {
    
  }


  loadMap(){
    console.log("HELLO");
    
    let latlng=new google.maps.LatLng(23.1005231,72.5934804);
    let mapOptions={
      center:latlng,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
   this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions);
    this.marker = new google.maps.Marker({
    map: this.map,
    position: latlng,
  });

   this.http.get<{results:Array<{geometry:{location:{lat:number,lng:number}}}>}>
   ('https://maps.googleapis.com/maps/api/geocode/json?address='+this.sear+'&key=AIzaSyC2iWI7YzxRXcbcidN7WHfoeF80dEOHU-4',{}).subscribe((res)=>{
     console.log(res);
     this.map.setCenter({lat:res.results[0].geometry.location.lat,lng:res.results[0].geometry.location.lng});
     this.marker.setPosition(this.map.getCenter());


   })
  this.map.addListener('bounds_changed', ()=> {

    this.marker.setPosition(this.map.getCenter());

    });
  
  this.flag=1;
  }
  conf(){
    const abc={
      lat:this.map.getCenter().lat(),
      lng:this.map.getCenter().lng()
    }
    console.log(abc);
    

    this.storage.set('cord',abc).then((res)=>{
       console.log(res);
   });
   this.storage.set('addr',this.sear).then((res)=>{
     console.log(res);
     this.events.publish('addr',this.sear);
     
   })
    
    
  
   
}
}
