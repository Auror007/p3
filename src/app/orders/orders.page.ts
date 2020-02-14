import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.post('https://mywash.herokuapp.com/service/show',{}).subscribe(
        ( result) => 
          {
          console.log(result);
          
        },
        error => {
          console.log(error);
        });
  }

}
