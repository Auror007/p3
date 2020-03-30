import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { LoadingController ,Events} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  public  vehicle:Array<
      {
        vehicleType:string,
        brandName:string,
        vehicleModel:string,
        number:string,
        vehicleCatagory:string,
        id:number,
        name:string,
        duration:string
      }>=[];
  public ema:any;
  @ViewChild(IonSlides,{static: false}) slides: IonSlides;
  constructor(
    public actionSheetController: ActionSheetController,
    public router:Router,
    private http:HttpClient,
    public storage:Storage,
    public loadingController: LoadingController,
    public events:Events
    ) { 
      this.events.subscribe('check1', (data)=>{
        console.log(data);
        if(data=='update')
        { 
          this.vehicle=[];
          this.ngOnInit();
        }
      }
        )
       
      }
    
        
        //    console.log(this.ema);
           
        // await this.http.post<{
        //    vehicle:Array<{vehicleType:string,brandName:string,vehicleModel:string,number:string,vehicleCatagory:string}>,
        //    service:Array<{id:number,number:string}>,
        //    package:Array<{name:string,duration:string,packageId:number}>
        //  }>('https://mywash.herokuapp.com/uservehicle/getvehicle',{email:this.ema}).subscribe((result)=>{
         
        //  console.log(result);
         
         
          
        //  result.vehicle.forEach(element => {
        //    const ans1=result.service.find(x => x.number===element.number)
        //    let pac:any;
        //    let a:any
        //    if(ans1!=undefined){
             
        //       pac= result.package.find(x=>x.packageId===ans1.id)
        //        a={
        //        vehicleType:element.vehicleType,
        //        brandName:element.brandName,
        //        vehicleModel:element.vehicleModel,
        //        number:element.number,
        //        vehicleCatagory:element.vehicleCatagory,
        //        id:ans1.id,
        //        name:pac.name,
        //        duration:pac.duration
        //      }
       
        //    }
       
        //    else{
        //      a={
        //        vehicleType:element.vehicleType,
        //        brandName:element.brandName,
        //        vehicleModel:element.vehicleModel,
        //        number:element.number,
        //        vehicleCatagory:element.vehicleCatagory,
        //        id:'0',
        //        name:'None',
        //        duration:'None'
        //      }
        //    }
           
           
       
        //    this.vehicle.push(a);
        //  });
         
         
        //  });
       
        //  console.log(this.vehicle);
        // }
        
       

  async ngOnInit() {
    this.presentLoading();
    await this.storage.get('email').then((data)=>{
     console.log(data);
     
      this.ema=data;
    });
    
    console.log(this.ema);
    
  this.http.post<{
    vehicle:Array<{vehicleType:string,brandName:string,vehicleModel:string,number:string,vehicleCatagory:string}>,
    service:Array<{id:number,number:string}>,
    package:Array<{name:string,duration:string,packageId:number}>
  }>('https://mywash.herokuapp.com/uservehicle/getvehicle',{email:this.ema}).subscribe((result)=>{
  
  console.log(result);
  
  
   
  result.vehicle.forEach(element => {
    const ans1=result.service.find(x => x.number===element.number)
    let pac:any;
    let a:any
    if(ans1!=undefined){
      
       pac= result.package.find(x=>x.packageId===ans1.id)
        a={
        vehicleType:element.vehicleType,
        brandName:element.brandName,
        vehicleModel:element.vehicleModel,
        number:element.number,
        vehicleCatagory:element.vehicleCatagory,
        id:ans1.id,
        name:pac.name,
        duration:pac.duration
      }

    }

    else{
      a={
        vehicleType:element.vehicleType,
        brandName:element.brandName,
        vehicleModel:element.vehicleModel,
        number:element.number,
        vehicleCatagory:element.vehicleCatagory,
        id:'0',
        name:'None',
        duration:'None'
      }
    }
    
    

    this.vehicle.push(a);
  });
  
  
  });

  console.log(this.vehicle);

  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 1500,
    });
    await loading.present();
    console.log('Loading dismissed!');
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
