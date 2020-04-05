import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit {

  public em:string; 
  public flag=0;
  public resp:Array<
    {
        
      }>=[];



  constructor(
    public http:HttpClient,
    public storage:Storage
  ) { 
    
  }
  

  async ngOnInit() {


 await   this.storage.get('email').then((res)=>{
      this.em=res;
    });
    console.log(this.em);
    
    this.http.post('https://mywash.herokuapp.com/profile/history  ',{email:this.em}).subscribe((res)=>{
      console.log(res);
      
    },(error)=>{
      console.log(error);

    })
  }


}
