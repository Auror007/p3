import { Component, OnInit } from '@angular/core';
import {CartService,Product} from '../services/cart.service';
import { ItemsService } from '../items.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cart:Array<Product>;
  public tot:number;
  constructor(
    public cartserv:CartService,
    public http:HttpClient,
    public router:Router
  ) { }

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
        return { id: item.id, number:item.vehnumber}
    })
    console.log(req);
    
    this.http.post('https://mywash.herokuapp.com/service/add',req ).subscribe(
      (result) => {
        console.log('added');
        
      });
      this.router.navigateByUrl('/tabs/tabs/services');  }
}
