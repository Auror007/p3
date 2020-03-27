import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  public em:string; 
  public flag=0;
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
    private http:HttpClient,
    private storage:Storage,
    public loadingController: LoadingController

  ) {
    
    }

  ngOnInit() {
    this.presentLoading(1000);
    this.storage.get('email').then((data)=>{
      this.em=data;
    }).then(()=>{
      console.log(this.em);
    this.http.post<Array<{package:Array<{packageId:number,name:string,price:number,duration:string}>,
    customer:Array<{brandName:string,vehicleModel:string,number:string}>}>>('https://mywash.herokuapp.com/profile/history',{email:this.em}).subscribe(
       
    (result) => 
          {
            console.log(result);
            if(result.length==0){
              this.flag=1;
            }
            
            else{
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
            }
            
          },
        error => {
          console.log(error);
        });

    });
    
  }

  async presentLoading(time) {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: time,
    });
    await loading.present();
    console.log('Loading dismissed!');
  }

}
