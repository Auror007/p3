import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DetailsService} from './details.service';
import { HttpClient } from '@angular/common/http';
import {Geolocation} from '@ionic-native/geolocation/ngx'; 
import {RegserviceService} from '../register/regservice.service';
import {Storage} from '@ionic/storage';
import UserResponse from '../message';

interface Cardetails{
  list: [],
}

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.page.html',
  styleUrls: ['./addvehicle.page.scss'],
})


export class AddvehiclePage implements OnInit {
  public area: any;
  public type: any;
  public brand:any;
  public vehform:any;

  public model:any;
  public number:any;
  public time:any;

  public catagory:any;
  public lat:any;
  public lng:any;
 resp={
    list:[]
 };
  car: number;
  bike: any;
  // value: number;
  vara:any;

  

  
  constructor(    
    private storage: Storage,
    private router: Router,
    private detServ: DetailsService,
    private regServ: RegserviceService,
    private http: HttpClient,
    private geolocation: Geolocation


    ) { 
      this.vara=0;
    }
  
  ngOnInit() {
    this.storage.get('email').then((data)=>{
      console.log(data);
      this.detServ.setEmail(data);

    });
  }
  dash(){
    this.detServ.setEmail('parmar.parth97531@gmail.com');
    this.detServ.setModel(this.model);
    this.detServ.setNumber(this.number);
    this.detServ.setParkingarea(this.area);
    this.detServ.setprefferedTime(this.time);

    const data=this.detServ.getDet();
    console.log(data);
    this.http.post<UserResponse>('https://mywash.herokuapp.com/uservehicle/addvehicle',data).subscribe(
      (result:UserResponse) => 
        {
          console.log(result);
          if(result.message==true){

            //clear inputs and scroll to top
          }
          else if(result.message==false){
            //alert and clear  relavent inputs

          }
        },
      error => {
        console.log(error);
      });
  }

  
finaldash(){
  this.detServ.setModel(this.model);
  this.detServ.setNumber(this.number);
  this.detServ.setParkingarea(this.area);
  this.detServ.setprefferedTime(this.time);
  const data=this.detServ.getDet();
  console.log(data);
  this.http.post<UserResponse>('https://mywash.herokuapp.com/uservehicle/addvehicle',data).subscribe(
    (result:UserResponse) => 
      {

        if(result.message==true){
          this.router.navigateByUrl('/tabs');

       }
       else if(result.message==false){

        //alert and clear  relavent inputs

      }
      },
    error => {
      console.log(error);
    });
}

  onChange() {
  
    if (this.area == '4') {
      this.vara=4;
      this.area=undefined;
     }
    else{
      //this.vara=this.area;
    }
    

  }
  addArea(data){
    this.area=data; 
  }

  onChange1(type) {
    console.log(this.type);
    this.detServ.setType(this.type);
    if (this.type == "Car") {

      this.car = 1;
      this.bike = 0;
    } else {
      this.bike = 1;
      this.car = 0;
    }
  }

  sendCardet()
  {
    this.detServ.setCategory(this.catagory);
    this.detServ.setBrand(this.brand);
    const data=this.detServ.getCardet();
    console.log(this.detServ.getCardet());
    this.http.post<Cardetails>('https://mywash.herokuapp.com/uservehicle/findModel',data).subscribe(
      (result) => 
        {
          console.log(result.list);
          this.resp.list=result.list;
        },
      error => {
        console.log(error);
      });
  }

  getLoc(){

   const options= {maximumAge: 1000, timeout: 5000,
      enableHighAccuracy: true }
    this.geolocation.getCurrentPosition(options).then((resp) => {
            this.lat=resp.coords.latitude
            this.lng=resp.coords.longitude
            const loc={
              lat:this.lat,
              long:this.lng
            }
            console.log(loc);
            this.detServ.setLoc(loc);
            
            },(er)=>{
              console.log(er);
              alert('Can not retrieve Location')
            }).catch((error) => {
            alert('Error getting location - '+JSON.stringify(error))
            });
            const loc={
              lat:this.lat,
              long:this.lng
            }
            console.log(loc);
            this.detServ.setLoc(loc);
           
  }
}
