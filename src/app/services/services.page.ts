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
        time:number,
        id:number,
        name:string,
        duration:string,
        expiredate:string,
        details:string
      }>=[];
  public ema:any;
  public index:number=0;
  public time:number;
  public carnum:string;
  @ViewChild('slides',{static:false}) slides;

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
    
  async ngOnInit() {
    this.presentLoading();
    await this.storage.get('email').then((data)=>{
     console.log(data);
     
      this.ema=data;
    });
    
    console.log(this.ema);
    
   await this.http.post<{
    vehicle:Array<{vehicleType:string,brandName:string,vehicleModel:string,number:string,vehicleCatagory:string,prefferedTime:number}>,
    service:Array<{id:number,number:string,expiredate:string}>,
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
        time:element.prefferedTime,
        id:ans1.id,
        name:pac.name,
        duration:pac.duration,
        expiredate:ans1.expiredate,
        details:pac.details
      }

    }

    else{
      a={
        vehicleType:element.vehicleType,
        brandName:element.brandName,
        vehicleModel:element.vehicleModel,
        number:element.number,
        time:element.prefferedTime,
        vehicleCatagory:element.vehicleCatagory,
        id:'0',
        name:'None',
        expiredate0:'0'
      }
    }
    
    

    this.vehicle.push(a);
  });
  
  
  });

  console.log(this.vehicle);
  // this.carnum=this.vehicle[0].number;
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






  slideChanged(){
    this.slides.getActiveIndex().then(index => {
this.index=index;
this.carnum=this.vehicle[this.index].number;
console.log(this.index,this.carnum);

   });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Time Slot',
      buttons: [{
        text: '5:00 - 6:00 AM',
        handler: () => {
          console.log('first clicked');
          this.time=5.5;
          const req={email:this.ema,number:this.carnum,time:this.time}
          console.log(req);
          
      this.http.post('https://mywash.herokuapp.com/uservehicle/time',req).subscribe((res)=>{
          console.log(res);
          this.vehicle[this.index].time=5;

        })


    }
      }, {
        text: '6:00 - 7:00 AM',
        handler: () => {
          console.log('second clicked');
          this.time=6.5;

          this.http.post('https://mywash.herokuapp.com/uservehicle/time',{email:this.ema,number:this.carnum,time:this.time}).subscribe((res)=>{
            this.vehicle[this.index].time=6;

          })



        }
      }, {
        text: '7:00 - 8:00 AM',
        handler: () => {
          console.log('third clicked');
          this.time=7.5;

          this.http.post('https://mywash.herokuapp.com/uservehicle/time',{email:this.ema,number:this.carnum,time:this.time}).subscribe((res)=>{
            this.vehicle[this.index].time=7;

          })

        }
      }, {
        text: '8:00 - 9:00 AM',
        handler: () => {
          console.log('fourth clicked');
          this.time=8.5;


          this.http.post('https://mywash.herokuapp.com/uservehicle/time',{email:this.ema,number:this.carnum,time:this.time}).subscribe((res)=>{
            this.vehicle[this.index].time=8;

          })
        }
      }, {
        text: '9:00 - 10:00 AM',
        handler: () => {
          console.log('fourth clicked');
          this.time=9.5;
          this.http.post('https://mywash.herokuapp.com/uservehicle/time',{email:this.ema,number:this.carnum,time:this.time}).subscribe((res)=>{    
            this.vehicle[this.index].time=9;

                })
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
