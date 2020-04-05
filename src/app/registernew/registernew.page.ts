import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../register/regservice.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    public alerCtrl: AlertController,
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
  async doAlert(msg: string, btn: string) {
    const alert = await this.alerCtrl.create({
      header: 'Error',
      message: msg,
      buttons: [btn],
    });
    await alert.present();


  }
  verify() {
    if(this.otp=='')
    {
      this.doAlert("Enter Otp","Okay");
    }
    else{

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
            this.router.navigate(['/addvehicle'],{replaceUrl:true});
          }
        },
        error => {
          console.log(error);
        });

        }
        else if(result=='loggingin'){
          console.log(data1);
          
          this.http.post<{message:boolean,
          address:string,
        lat:string,
      lng:string}>('https://mywash.herokuapp.com/verifylogin', data1).subscribe(
        (result) => {
           console.log(result);
          if (result.message == true) {
            this.storage.set('activity','loggedin');
            this.storage.set('address',result.message);
            this.storage.set('coords',{lat:result.lat,lng:result.lng});

            this.router.navigate(['/tabs/tabs/dash'],{replaceUrl:true});
          }
          else{
            this.doAlert("Invalid Otp","Re-enter");
            this.otp='';

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
}
