import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { RegserviceService } from '../register/regservice.service';
import UserResponse from '../message';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit, UserResponse {

  phonenumber = '';
  message: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    public alerCtrl: AlertController,
    private regServ: RegserviceService) { }

  ngOnInit() {

  }
  dash() {
    this.router.navigateByUrl('/addvehicle');
  }
  login() {

    const phone = '91' + this.phonenumber;
    if (phone.length < 12 || phone.length > 12) {
      this.doAlert('Enter Valid Phonenumber!', 'Okay');
    } else {
      this.regServ.setPhone(phone);
      const data = {
        phone: this.regServ.getPhone()
      };


      //check is user already logged in then route directly to dash else to registration pages
      console.log(data);
      this.http.post('http://192.168.25.230:3000/loginotp', data).subscribe(
        ( result: UserResponse) => 
          {
          console.log(result);
          if (result.message == true) {
            this.router.navigateByUrl('/registernew');
          } else {
            this.doAlert('Not Registered', 'Register Now');
            this.router.navigateByUrl('/register');
          }
        },
        error => {
          console.log(error);
        });
    }
  }
  /*async login()
   {
     const options={
       email: this.username,
       password: this.pass
     };

     try {
       this.http.post('https://mywash.herokuapp.com/auth', options).subscribe(
         result => {

         if (result == "user doesn't exist") {
           this.doAlert( "Username Incorrect" , "Retype" );
   } else if(result == 'wrong password') {
           this.doAlert( 'Password Incorrect' , 'Retype' );
    } else {
     this.router.navigateByUrl('/dash');
     }

       },
       error => {
         this.doAlert('HELLO ERROR','OKAY');
       });

     } catch (err) {
       console.dir(err)
     }
   }*/
  async doAlert(msg: string, btn: string) {
    const alert = await this.alerCtrl.create({
      header: 'Error',
      message: msg,
      buttons: [btn],
    });
    await alert.present();
    if (alert.message == 'Enter valid Number') {
      this.phonenumber = '';
    }

  }

}
