import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';

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
    private storage:Storage
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

  

}
