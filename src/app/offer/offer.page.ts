import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  constructor(
    private iserv:ItemsService,
    private http:HttpClient
    ) { }

  ngOnInit() {
  }

  addCart(){
    const dat={
      number:123,
      serviceName:'Offer1',
      timeCost:'10min',
      vehicleType:'Sedan + Bike',
      details:'1 Exterior wash + 2 Weekly Interior Wash',
      price:750,
      validTime:'2.5 Months',

    }
    
    this.iserv.addtoCart(dat);
    console.log(this.iserv.getCart());
    const data=this.iserv.getCart();
    this.http.post('https://mywash.herokuapp.com/service/add', data).subscribe(
        (result) => 
          {
          console.log(result);
        },
        error => {
          console.log(error);
        });
  }

}
