import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  cart=[]
  servicename:any;
  timecost:any;
  vehicleType:any;
  details:any;
  price:any;
  validtime:any;

  addtoCart(data){
    // this.servicename=data.servicename;
    // this.timecost=data.timecost;
    // this.vehicleType=data.vehicleType;
    // this.details=data.details;
    // this.price=data.price;
    // this.validtime=data.validtime;
    this.cart.push(data);
  }

  getCart(){
    return this.cart;
  }
}
