import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product {
    id: number;
    name: string;
    time:number;
    vehnumber:string;
    price: number;
    
  }
  @Injectable({
    providedIn: 'root'
  })
  export class CartService {
   
    private cart = [];
    private amount=0;
    private cartItemCount = new BehaviorSubject(0);
   
    constructor() {}
   
    getCart() {
      return this.cart;
    }
    getAmount() {
      return this.amount;
    }
   
  
  
    addProduct(product){
        this.cart.push(product);
        this.amount=this.amount+product.price;
    }

    removeProduct(product) {
      for (let [index, p] of this.cart.entries()) {
        if (p.vehnumber === product.vehnumber) {
          this.amount=this.amount-p.price;
          
          this.cart.splice(index, 1);
        }
      }
    }
    removeAll(){
      this.cart=[];
    }
  }