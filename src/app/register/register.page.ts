import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RegserviceService } from './regservice.service';
import UserResponse from '../message';



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
    //  public afAuth: AngularFireAuth,
    public alerCtrl: AlertController,
    private router: Router,
    private http: HttpClient,
    private regServ: RegserviceService
  ) { }

  ngOnInit() {
  }
  /* async register() {
     const {username, pass, cpassword} = this;
     const options = {
       email: username,
       password: pass,
     };

     try {

       this.http.post('https://mywash.herokuapp.com/add', options).subscribe(
         result => {
         console.log(result);
         this.router.navigate(['/login']);
       },
       error => {
         console.log(error);
       });


     } catch (err) {
       console.dir(err);
     }

   }*/


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
      // https://mywash.herokuapp.com/package
      //
      //
      this.http.post<UserResponse>('http://192.168.25.230:3000/registerotp', data).subscribe(
        (result: UserResponse) => {
          console.log(result);
          if (result.message == true) {
            this.router.navigateByUrl('/registernew');
          } else {
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
