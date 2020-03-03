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
  constructor(
    private regServ: RegserviceService,
    private http: HttpClient,
    private router: Router,
    private nav:NavController,
    private storage:Storage
  ) { }

  ngOnInit() {
  }

  verify() {

    const { otp } = this;
    this.regServ.setOtp(otp);
    const data = this.regServ.getJson();
    console.log(data);
    try {
      
      
      this.storage.get('activity').then((data)=>{
        if(data=='registered'){

          this.http.post('https://mywash.herokuapp.com/verifyregister', data).subscribe(
        (result: UserResponse) => {
           console.log(result);
          if (result.message == true) {
            this.router.navigateByUrl('/addvehicle');
          }
        },
        error => {
          console.log(error);
        });

        }
        else if(data=='loggingin'){
          this.http.post('https://mywash.herokuapp.com/verifylogin', data).subscribe(
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
