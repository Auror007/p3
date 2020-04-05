import { Component, OnInit } from '@angular/core';
import {CartService,Product} from '../services/cart.service';
import { ItemsService } from '../items.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';
import { formatDate } from '@angular/common';
import { Events } from '@ionic/angular';
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
  public date:string;
  public arr:Array<{code:string,id:number,number:string}>=[];
    makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 8; i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }

    return outString;
  }
  constructor(
    public cartserv:CartService,
    public http:HttpClient,
    public router:Router,
    private storage:Storage,
    public events:Events
  ) {
    
    this.storage.get('email').then((data)=>{
      this.em=data;
    });
    this.storage.get('num').then((data)=>{
      this.num=data;
    });
   }

  ngOnInit() {
    this.date=formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.tot=this.cartserv.getAmount();
    
    this.cart=this.cartserv.getCart();
    console.log(this.cart);
  }


  deleteItem(dat)
  {
    this.cartserv.removeProduct(dat);
    this.tot=this.cartserv.getAmount();
  }


  add(req){
       
    const reqmod={service:req,code:this.arr};
    console.log(reqmod);

    this.http.post('https://mywash.herokuapp.com/service/add',reqmod).subscribe(
      async (result) => {
         console.log(result);
         this.cartserv.removeAll(); //working or not
         this.tot=0;
        await this.events.publish('check1','update');
 
         this.router.navigateByUrl('/tabs/tabs/services');
 
       });

    
  }
  subs(){
    
    const req=this.cart.map((item)=>{

        var dte=new Date(); 
      
        if(item.flag==1){
          this.arr.push({code:this.makeString(),id:item.id,number:item.vehnumber})
        }
        dte.setDate(dte.getDate() + Number(item.time));
        //console.log(dte);
        const fexp=formatDate(dte, 'yyyy/MM/dd', 'en');
        // console.log(fexp);
       
          return {
            
            email:this.em,
            orderId:this.makeString(),
            number:item.vehnumber,
            id: item.id,
            flag:0,
            currentdate:this.date,
            expiredate:fexp
            
          }

        
    })
    console.log(req);
   
    //this.router.navigateByUrl('/tabs/tabs/services'); 
  
  
  // this.http.post('https://mywash.herokuapp.com/payment',{amount:this.tot} ).subscribe(
  //   (result) => {
  //     console.log(result);
  //   });
    

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


    RazorpayCheckout.open(options, (payment_id) =>{
      console.log(payment_id);
   
      this.add(req);
    }, (error) =>{
      alert(error.description + ' (Error ' + error.code + ')');
    });
    // this.router.navigateByUrl('/tabs/tabs/services');

   }
}
