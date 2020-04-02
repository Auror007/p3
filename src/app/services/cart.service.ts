import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product {
    id: number;
    name: string;
    time:number;
    vehnumber:string;
    price: number;
    flag:number;
    
  }
  @Injectable({
    providedIn: 'root'
  })
  export class CartService {
   
    private cart = [];
    private amount=0;
    private cartItemCount = new BehaviorSubject(0);
    private count=0;
    constructor() {}
   
    getCart() {
      return this.cart;
    }
    getAmount() {
      return this.amount;
    }
   
    incrementCount(){
      this.count=this.count+1;
    }
    decrementCount(){
      this.count=this.count-1;
    }
    getCount(){
      return this.count;
    }
  
  
    addProduct(product){
        this.cart.push(product);
        if(product.flag==1){
          this.incrementCount();
        }
        this.amount=this.amount+product.price;
    }

    removeProduct(product) {
      for (let [index, p] of this.cart.entries()) {
        if (p.vehnumber === product.vehnumber) {
          this.amount=this.amount-p.price;
          if(product.flag==1){
            this.decrementCount();
          }
          this.cart.splice(index, 1);
        }
      }
    }
    removeAll(){
      this.cart=[];
      this.amount=0;
      this.count=0;
    }
  }