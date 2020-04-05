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
        details:string,
        description:string,
        brandName:string,
        vehicleModel:string,
        number:string,
        code:string
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
    this.http.post<Array<
    {
      package:Array<{packageId:number,name:string,price:number,details:string,description:string,duration:string}>,
      customer:Array<{brandName:string,vehicleModel:string,number:string}>,  
      code:Array<{code:string}>
    }
  >
  >('https://mywash.herokuapp.com/profile/history',{email:this.em}).subscribe(
       
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
                    var details=arr.package[0].details;
                    var description=arr.package[0].description;
                    var brandName=arr.customer[0].brandName;
                    var vehicleModel=arr.customer[0].vehicleModel;
                    var number=arr.customer[0].number;
                    var code;
                    if(arr.code.length==0){
                       code=0;
                    }
                    else{
                       code=arr.code[0].code;

                    }
                   const it={
                    packageId:packageId,
                    name:name,
                    price:price,
                    duration:duration,
                    details:details,
                    description:description,
                    brandName:brandName,
                    vehicleModel:vehicleModel,
                    number:number,
                    code:code
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
