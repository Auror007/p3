import { Component, OnInit } from '@angular/core';
import {CartService,Product} from '../services/cart.service';
import { ItemsService } from '../items.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';

declare var RazorpayCheckout:any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cart:Array<Product>;
  public tot:number;
  public num:string;
  public em:string;
  
  constructor(
    public cartserv:CartService,
    public http:HttpClient,
    public router:Router,
    private storage:Storage
  ) {
    
    this.storage.get('email').then((data)=>{
      this.em=data;
    });
    this.storage.get('num').then((data)=>{
      this.num=data;
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
   
    // this.http.post('https://mywash.herokuapp.com/service/add',req ).subscribe(
    //   (result) => {
    //     console.log('added');
    //   });
  //   this.router.navigateByUrl('/tabs/tabs/services'); 
  
  
  this.http.post('https://mywash.herokuapp.com/payment',{amount:this.tot} ).subscribe(
    (result) => {
      console.log(result);
    });
    

    var options = {
      description: 'Subscription fee',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: "INR", // your 3 letter currency code
      key:"rzp_test_8gpkmLwN2hocfu" , // your Key Id from Razorpay dashboard
      amount: this.tot*100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Payment',
      method:"upi",
      prefill: {
        email: this.em,
        contact: this.num,
        name: 'Carwash'
      },
      theme: {
        color: '#2525f4'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      console.log(payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
    this.router.navigateByUrl('/tabs/tabs/services');

   }
}
