import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RegserviceService } from './regservice.service';
import UserResponse from '../message';
import {Storage} from '@ionic/storage';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit, UserResponse {
  phonenumber = '';
  username = '';
  email = '';
  message: any;

  constructor(
    private storage: Storage,
    public alerCtrl: AlertController,
    private router: Router,
    private http: HttpClient,
    private regServ: RegserviceService
  ) { }

  ngOnInit() {
    this.storage.get('activity').then((data)=>{
      console.log(data);
      if(data=='loggedin'){
        this.router.navigateByUrl('/tabs/tabs/dash')
      }
      else if(data=='loggingin'){
        this.router.navigateByUrl('/login')
      }
      else if(data=='registered'){
        this.router.navigateByUrl('/login')
      }
    });
  }
 
  async doAlert(msg: string, btn: string) {
    const alert = await this.alerCtrl.create({
      header: 'Error',
      message: msg,
      buttons: [btn],
    });
    await alert.present();


  }
  async gotoLogin() {

    this.router.navigateByUrl('/login');

  }

  sendotp() {

    const phone = '91' + this.phonenumber;
    const username = this.username;
    const email = this.email;

    if (username.length == 0) {
      this.doAlert('Enter Valid Username!', 'Okay');
      this.username = '';
    } else if (email.length == 0) {
      this.doAlert('Enter Valid Email!', 'Okay');
      this.email = '';
    } else if (phone.length < 12 || phone.length > 12) {
      this.doAlert('Enter Valid Phonenumber!', 'Okay');
      this.phonenumber = '';
    } else {
      this.regServ.setPhone(phone);
      this.regServ.setName(username);
      this.regServ.setEmail(email);
      const data = {
        userName: this.regServ.getName(),
        email: this.regServ.getEmail(), 
        phone: this.regServ.getPhone(),
      };

      console.log(data);
      
      this.http.post<UserResponse>('https://mywash.herokuapp.com/registerotp', data).subscribe(
        (result: UserResponse) => {

          console.log(result.message);
           if (result.message == '2') {
            this.storage.set('email',this.email).then((successData)=>{
              console.log('email stored')});

              this.storage.set('name',this.username).then((successData)=>{
                console.log('name stored')});
  

              this.storage.set('activity','registered').then((successData)=>{
                console.log('activity :stored');
            });
           
            
            this.router.navigateByUrl('/registernew');
          }
          else if (result.message == '1') {
            this.doAlert('Phonenumber Already Registered!', 'Okay');
            this.phonenumber = '';
            
          }
          else if(result.message=='0'){
            this.doAlert('Email Already Registered!', 'Okay');
            this.email = '';
          }
          else{
            console.log('hello');
            this.doAlert('User exists', 'Okay');
            this.phonenumber = '';
          }

        },
        error => {
          console.log(error);
        });

    }
  }

}