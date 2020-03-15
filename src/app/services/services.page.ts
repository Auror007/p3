import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  @ViewChild(IonSlides,{static: false}) slides: IonSlides;
  constructor(
    public actionSheetController: ActionSheetController,
    public router:Router,
    private http:HttpClient
    ) { }

  ngOnInit() {
    const  vehicle:Array<
      {
        vehicleType:string,
        brandName:string,
        vehicleModel:string,
        number:string,
        vehicleCatagory:string
      }>=[];
  this.http.post<{
    vehicle:Array<{vehicleType:string,brandName:string,vehicleModel:string,number:string,vehicleCatagory:string}>,
    service:Array<{id:number,number:string}>,
    package:Array<{name:string,duration:string,packageId:number}>
  }>('https://mywash.herokuapp.com/uservehicle/getvehicle',{email:'meetp6041@gmail.com'}).subscribe((result)=>{
  
  
  console.log(result);
   
  result.vehicle.forEach(element => {
    const ans1=result.service.find(x => x.number===element.number)
    if(ans1!=undefined){
      console.log(ans1);
      
        console.log(      
          result.package.find(x=>x.packageId===ans1.id)
        );
      
    }
    
    const a={
      vehicleType:element.vehicleType,
      brandName:element.brandName,
      vehicleModel:element.vehicleModel,
      number:element.number,
      vehicleCatagory:element.vehicleCatagory
    }
    console.log(a);

    vehicle.push(a);
  });
  
  
  });


  }

  gotoCart(){
    this.router.navigateByUrl('/cart');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Time Slot',
      buttons: [{
        text: '5:00 - 6:00 AM',
        handler: () => {
          console.log('first clicked');
        }
      }, {
        text: '6:00 - 7:00 AM',
        handler: () => {
          console.log('second clicked');
        }
      }, {
        text: '7:00 - 8:00 AM',
        handler: () => {
          console.log('third clicked');
        }
      }, {
        text: '8:00 - 9:00 AM',
        handler: () => {
          console.log('fourth clicked');
        }
      }, {
        text: 'Cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

 
}
