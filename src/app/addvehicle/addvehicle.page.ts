import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {DetailsService} from './details.service';
import { HttpClient } from '@angular/common/http';
import {Geolocation} from '@ionic-native/geolocation/ngx'; 
import {RegserviceService} from '../register/regservice.service';
import {Storage} from '@ionic/storage';
import UserResponse from '../message';
import { AlertController } from '@ionic/angular';
import { ToastController,Events } from '@ionic/angular';
import {IonContent} from '@ionic/angular';
import {Platform} from '@ionic/angular';


interface Cardetails{
  list: [],
}

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.page.html',
  styleUrls: ['./addvehicle.page.scss'],
})


export class AddvehiclePage implements OnInit {
  @ViewChild('pageTop',{static:false}) pageTop: IonContent;
  public area: any;
  public type: any;
  public brand:any;
  public email:any;
  public model:any;
  public number:any;
  public time=-1;
  public lat:number;
  public lng:number;
  public catagory:any;
  public address:any;
 resp={
    list:[]
 };
  car: number;
  bike: any;
  vara:any;
  subscribe:any;

  

  
  constructor(    
    private storage: Storage,
    private router: Router,
    private detServ: DetailsService,
    public alerCtrl: AlertController,

    private regServ: RegserviceService,
    private http: HttpClient,
    private geolocation: Geolocation,
    public toastController: ToastController,
    public events:Events,
    private platform:Platform



    ) { 
      this.vara=0;
      
      this.subscribe=this.platform.backButton.subscribeWithPriority(6666666,()=>{
        if(this.constructor.name=="DashPage"){
              navigator['app'].exitApp();
          }
      })
      this.storage.get('email').then((data)=>{
        console.log(data);
        this.email=data; //static because this page is hit only after registration
        //this.email='parmar.parth97531@gmail.com'
      });
      this.storage.get('addr').then((data)=>{
        console.log(data);
        this.address=data; //static because this page is hit only after registration
        //this.email='parmar.parth97531@gmail.com'
      });
      this.storage.get('cord').then((data)=>{
        console.log(data);
        this.lat=data.lat;
        this.lng=data.lng; //static because this page is hit only after registration
        //this.email='parmar.parth97531@gmail.com'
      });
      
    }
  
  ngOnInit() {
    
  }

validate(){
  if(this.model=='' ||this.number=='' || this.area=='' || this.time==-1|| this.brand=='' || this.catagory==''
  || this.type==''){
    this.doAlert("Please fill all values!","Okay");


  }
  else{
    this.dash();

  }

}
validat(){
  if(this.model=='' ||this.number=='' || this.area=='' || this.time==-1|| this.brand=='' || this.catagory==''
  || this.type==''){
    this.doAlert("Please fill all values!","Okay");

  }
  else{

    this.finaldash();
  }

}
 
async doAlert(msg: string, btn: string) {
  const alert = await this.alerCtrl.create({
    header: 'Error',
    message: msg,
    buttons: [btn],
  });
  await alert.present();


}

  dash(){

    this.detServ.setEmail(this.email);
    this.detServ.setModel(this.model);
    this.detServ.setNumber(this.number);
    this.detServ.setParkingarea(this.area);
    this.detServ.setprefferedTime(this.time);
    this.detServ.setBrand(this.brand);
    this.detServ.setCategory(this.catagory);
    this.detServ.setType(this.type);
    this.detServ.setAddress(this.address);
    this.detServ.setLat(this.lat);
    this.detServ.setLng(this.lng);

    const data=this.detServ.getDet();
    console.log(data);
    this.http.post<UserResponse>('https://mywash.herokuapp.com/uservehicle/addvehicle',data).subscribe(
      (result:UserResponse) => 
        {
          console.log(result);
          if(result.message==true){
            this.area='';
            this.type='';
            this.brand='';
            this.model='';
            this.number='';
            this.time=0;
            this.catagory='';
            this.pageTop.scrollToTop();

          }
          else if(result.message==false){
            //alert and clear  relavent inputs

          }
        },
      error => {
        console.log(error);
      });
  }

  
finaldash(){
  this.detServ.setEmail(this.email);
  this.detServ.setModel(this.model);
  this.detServ.setNumber(this.number);
  this.detServ.setParkingarea(this.area);
  this.detServ.setprefferedTime(this.time);
  this.detServ.setBrand(this.brand);
  this.detServ.setCategory(this.catagory);
  this.detServ.setType(this.type);
  this.detServ.setLat(this.lat);
  this.detServ.setLng(this.lng);
  this.detServ.setAddress(this.address);

  const data=this.detServ.getDet();
  console.log(data);
  this.http.post<UserResponse>('https://mywash.herokuapp.com/uservehicle/addvehicle',data).subscribe(
    (result:UserResponse) => 
      {
        console.log(result);
        if(result.message==true){
          this.storage.set('activity','loggedin');
          this.area='';
            this.type='';
            this.brand='';
            this.model='';
            this.number='';
            this.time=0;
            this.catagory='';
            this.events.publish('check1','update');
          this.router.navigate(['/tabs/tabs/dash'],{replaceUrl:true});

       }
       else if(result.message==false){

        //alert and clear  relavent inputs

      }
      },
    error => {
      console.log(error);
    });
}

  onChange() {
  
    if (this.area == '4') {
      this.vara=4;
      this.area=undefined;
     }
    else{
      //this.vara=this.area;
    }
    

  }
  addArea(data){
    this.area=data; 
  }

  onChange1(type) {
    console.log(this.type);
    this.detServ.setType(this.type);
    if (this.type == "Car") {

      this.car = 1;
      this.bike = 0;
    } else {
      this.bike = 1;
      this.car = 0;
    }
  }
  onChange2(){
    this.brand='';
    this.model='';
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your location has been saved!',
      duration: 2000
    });
    toast.present();
  }

  sendCardet()
  {
    this.detServ.setCategory(this.catagory);
    this.detServ.setBrand(this.brand);
    const data=this.detServ.getCardet();
    console.log(this.detServ.getCardet());
    this.http.post<Cardetails>('https://mywash.herokuapp.com/uservehicle/findModel',data).subscribe(
      (result) => 
        {
          console.log(result.list);
          this.resp.list=result.list;
        },
      error => {
        console.log(error);
      });
  }

 
}
