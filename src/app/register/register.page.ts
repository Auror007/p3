import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RegserviceService } from './regservice.service';
import UserResponse from '../message';
import {Storage} from '@ionic/storage';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit, UserResponse {
  val='valid';
  phonenumber = '';
  username = '';
  email = '';
  addr='';
  message: any;
  emailPattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';
 	
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
        this.router.navigate(['/tabs/tabs/dash'],{replaceUrl:true});
      }
      else if(data=='loggingin'){
        this.router.navigate(['/login'],{replaceUrl:true});
      }
      else if(data=='registered'){
        this.router.navigate(['/login'],{replaceUrl:true});
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

    this.router.navigate(['/login'],{replaceUrl:true});

  }
  // pickloc(){
  //   this.router.navigateByUrl('/pickloc');

  // }

  async sendotp() {
    var flag;
   await this.storage.get('addr').then((res)=>{
      console.log(res);
      
      flag=res;
    })
    
    const phone = '91' + this.phonenumber;
    const username = this.username;
    const email = this.email;
    const  regexp = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
   console.log(regexp.test(email));
   


    if (username.length == 0) {
      this.doAlert('Enter Valid Username!', 'Okay');
      this.username = '';

    } else if (!regexp.test(email)) {
      //regex email
      this.doAlert('Enter Valid Email!', 'Okay');
      this.email = '';
    } else if (phone.length < 12 || phone.length > 12) {
      this.doAlert('Enter Valid Phonenumber!', 'Okay');
      this.phonenumber = '';
      console.log(this.val);
      
      
    }
     else if (flag==null ) {
      console.log(flag);
       this.doAlert('Select Address!', 'Okay');
       }
       
    else {

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
           
            
            this.router.navigate(['/registernew'],{replaceUrl:true});
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
  viewval(){
    
  }
}