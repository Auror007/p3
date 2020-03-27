import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../register/regservice.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { setIonicClasses } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import UserResponse from '../message';
import { NavController } from '@ionic/angular';
import {Storage}from '@ionic/storage';

@Component({
  selector: 'app-registernew',
  templateUrl: './registernew.page.html',
  styleUrls: ['./registernew.page.scss'],
})


export class RegisternewPage implements OnInit, UserResponse {

  otp: string = '';
  message: any;
  address:string;
  lat:string;
  lng:string;

  constructor(
    private regServ: RegserviceService,
    private http: HttpClient,
    private router: Router,
    private nav:NavController,
    private storage:Storage
  ) {
    this.storage.get('addr').then((data)=>{
    console.log(data);
    this.address=data; //static because this page is hit only after registration
    //this.email='parmar.parth97531@gmail.com'
    this.regServ.setAddress(this.address);
  });
  this.storage.get('cord').then((data)=>{
    console.log(data);
    this.lat=data.lat;
    this.lng=data.lng; //static because this page is hit only after registration
    //this.email='parmar.parth97531@gmail.com'
    this.regServ.setLat(this.lat);
    this.regServ.setLng(this.lng);
  });
 }

  ngOnInit() {
    
  }

  verify() {

    const { otp } = this;
    this.regServ.setOtp(otp);
    const data = this.regServ.getJson();
    const data1={
      email:this.regServ.getEmail(),
      otp:this.otp
    }
    console.log(data);
    try {
      
      
      this.storage.get('activity').then((result)=>{
        if(result=='registered'){
          console.log(data);
          
          this.http.post('https://mywash.herokuapp.com/verifyregister', data).subscribe(
        (result: UserResponse) => {
           console.log(result);
          if (result.message == true) {
            this.storage.set('num',data.phone);
            this.router.navigateByUrl('/addvehicle');
          }
        },
        error => {
          console.log(error);
        });

        }
        else if(result=='loggingin'){
          console.log(data1);
          
          this.http.post('https://mywash.herokuapp.com/verifylogin', data1).subscribe(
        (result: UserResponse) => {
           console.log(result);
          if (result.message == true) {
            this.storage.set('activity','loggedin');
            this.router.navigateByUrl('/tabs/tabs/dash');
          }
        },
        error => {
          console.log(error);
        });
         
        }
      });

      
    } catch (err) {
      console.dir(err);
    }
  }
}
