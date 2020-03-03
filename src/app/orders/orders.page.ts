import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  public resp:Array<
    {
        packageId:number,
        name:string,
        price:number,
        duration:string,
        brandName:string,
        vehicleModel:string,
        number:string
      }>=[];

    
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    
    this.http.post<Array<{package:Array<{packageId:number,name:string,price:number,duration:string}>,
    customer:Array<{brandName:string,vehicleModel:string,number:string}>}>>('https://mywash.herokuapp.com/profile/history',{email:'parmar.parth97531@gmail.com'}).subscribe(
        (result) => 
          {
            for (const arr of result)    
                {   
                    var packageId=arr.package[0].packageId;
                    var name=arr.package[0].name;
                    var price=arr.package[0].price;
                    var duration=arr.package[0].duration;
                    var brandName=arr.customer[0].brandName;
                    var vehicleModel=arr.customer[0].vehicleModel;
                    var number=arr.customer[0].number;
                   const it={
                    packageId:packageId,
                    name:name,
                    price:price,
                    duration:duration,
                    brandName:brandName,
                    vehicleModel:vehicleModel,
                    number:number
                  }
                    
                  this.resp.push(it);
                }
                console.log(this.resp);

            
          },
        error => {
          console.log(error);
        });
  }

}
