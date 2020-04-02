import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams,PopoverController, Events} from '@ionic/angular';
import { CarpopPage } from '../carpop/carpop.page';
import { HttpClient } from '@angular/common/http';
import {Storage} from  '@ionic/storage';
import {CartService} from '../services/cart.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashmod',
  templateUrl: './dashmod.page.html',
  styleUrls: ['./dashmod.page.scss'],
})
export class DashmodPage implements OnInit {

  public desp:any;
  public title:any;
  public price:any;
  public cat :any;
  public email:any;
  public selection:any;
  public id:number;
  public name:any;
  public time:number;
  public crt:Array<{vehicleModel:string,number:string}>;
  public req:any;
  public flag:number;
  
  constructor(
    private modalCtrl:ModalController,
    private navParams: NavParams,
    public events:Events,
    public popoverController: PopoverController,
    public http:HttpClient,
    public storage:Storage,
    public cartService:CartService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alerCtrl: AlertController,
    public router:Router


  ) {
    this.desp=navParams.get('description');
    this.title=navParams.get('details');
    this.price=navParams.get('price');
    this.cat=navParams.get('vehicleCatagory');
    this.id=navParams.get('packageId');
    this.name=navParams.get('title');
    this.time=navParams.get('duration');
    this.flag=navParams.get('flag');

 
   }

  ngOnInit() {
    this.presentLoading();

    this.storage.get('email').then((data)=>{
      this.email=data;
      console.log(this.email);
       this.req={
        email:this.email,
        vehicleCatagory:this.cat
      }
      
     }).then(()=>{
      console.log(this.req);
      this.http.post<Array<{vehicleModel:string,number:string}>>('https://mywash.herokuapp.com/service/find',this.req ).subscribe(
        async (result) => {

          console.log(result);
          this.crt=result;

        });
     });

     
    
            
  
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 1000,
    });
    await loading.present();

    //const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentPopover() {


   if(this.crt.length==0){

     this.doAlert("No car of specified category available!","Okay");
   }
   else{
    let ev:any;
    console.log(this.crt);

      const rem=this.cartService.getCart();
     
      console.log(rem);
   if(rem!=undefined){
        //  console.log(rem.find((x)=>{ if(x.vehnumber==="GJ-13-CC-1"){
        //     return x.vehnumber
        //  }
        // }) );
rem.filter((item1)=>{
 
  this.crt=this.crt.filter((item)=>{
    return item.number!= item1.vehnumber

  })
})
     
   }
  
      console.log(this.crt);
      
        const popover = await this.popoverController.create({
          component: CarpopPage,
          componentProps:{
            'list':this.crt,
          }
          ,
          event: ev,
          translucent: true
        });

        popover.onDidDismiss().then((result) => {
          this.selection=result.data;
          this.dismiss();
        });
        return await popover.present();
   }
   
   
    
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'ADDED TO CART.',
      duration: 1500,
      position:'middle'
    });
    toast.present();
  }
  dismiss() {
    const prod={
      id:this.id,
      name: this.name,
      time:this.time,
      vehnumber:this.selection,
      price: this.price,
      flag:this.flag
    }
    if(prod.vehnumber == undefined)
    {
      this.popoverController.dismiss({
        'dismissed': true
      })
    }
    else{
    
    this.presentToast();
    console.log(prod);
    this.crt=this.crt.filter((item)=>{
      return item.number!=this.selection

    });
    console.log(this.crt);
    this.cartService.addProduct(prod);
  }
  }

  fdismiss()
  {
    this.modalCtrl.dismiss({
      'dismissed': true
    }).then(()=>{
      this.router.navigate(['/cart']);

    });
  }

  async doAlert(msg: string, btn: string) {
    const alert = await this.alerCtrl.create({
      header: 'Error',
      message: msg,
      buttons: [btn],
    });
    await alert.present();


  }

}
