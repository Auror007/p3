import { Component, OnInit } from '@angular/core';
import {CartService,Product} from '../services/cart.service';
import { ItemsService } from '../items.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {WebIntent} from '@ionic-native/web-intent/ngx';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cart:Array<Product>;
  public tot:number;
  public em:string;
  
  constructor(
    public cartserv:CartService,
    public http:HttpClient,
    public router:Router,
    private webIntent: WebIntent,
    private storage:Storage
  ) {
    
    this.storage.get('email').then((data)=>{
      this.em=data;
    });
   }

  ngOnInit() {
    this.tot=this.cartserv.getAmount();
    this.cart=this.cartserv.getCart();
    console.log(this.cart);
  }


  deleteItem(dat)
  {
    this.cartserv.removeProduct(dat);
    this.tot=this.cartserv.getAmount();
  }

  subs(){
    const req=this.cart.map((item)=>{

      
        return {email:this.em,id: item.id, number:item.vehnumber}
    })
    console.log(req);
   
    this.http.post('https://mywash.herokuapp.com/service/add',req ).subscribe(
      (result) => {
        console.log('added');
      });
  //   this.router.navigateByUrl('/tabs/tabs/services'); 
  
  
    
      const options = {
        action: this.webIntent.ACTION_VIEW,
        url: 'upi://pay?pa=8141630915@paytm&pn=parth_car&tr=lolafkjjnaldjfn&am=1&cu=INR&tn=APP_PAYMENT',
//        type: 'application/vnd.android.package-archive'
      }
      
      this.webIntent.startActivity(options).then(
        (success)=>{
              console.log(success);
              
        },(error)=>
      {
        console.log(error);
      });
    }
}
