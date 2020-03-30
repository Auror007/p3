import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  public em:any;
  public no:any;
  public name:any;
  constructor(
    private navCtrl:NavController,
    private storage:Storage,
    private router:Router,
    private http:HttpClient,
    public alertController: AlertController,

    ) { 
      this.storage.get('email').then((data)=>{
        this.em=data;
      });
      this.storage.get('num').then((data)=>{
        console.log(data);
        this.no=data;
      });
      this.storage.get('name').then((data)=>{
        console.log(data);
        
        this.name=data;
      });
    
    }


  ngOnInit() {
   

  
  }

  logout(){
    this.storage.set('activity','logged out').then((successData)=>{
      console.log("Logging out!");
     this.router.navigateByUrl('/register');
  });
 
  }
  call() {
    let tel_number = '9879178177  '
    window.open(`tel:${tel_number}`, '_system')
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: ' <h3>Do you really want to delete your account?</h3>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Delete');
            this.http.post('https://mywash.herokuapp.com/deleteacc',{email:this.em}).subscribe((res)=>{
              console.log(res);
              
            })
            this.storage.clear();
            this.router.navigateByUrl('/register');
          }
        }
      ]
    });

    await alert.present();
  }

  

}
