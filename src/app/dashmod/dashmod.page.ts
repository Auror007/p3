import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams,PopoverController, Events} from '@ionic/angular';
import { CarpopPage } from '../carpop/carpop.page';
import { HttpClient } from '@angular/common/http';
import {Storage} from  '@ionic/storage';
import {CartService} from '../services/cart.service';
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
  public time:any;
  public crt:Array<{vehicleModel:string,number:string}>;
  
  constructor(
    private modalCtrl:ModalController,
    private navParams: NavParams,
    public events:Events,
    public popoverController: PopoverController,
    public http:HttpClient,
    public storage:Storage,
    public cartService:CartService

  ) {
    this.desp=navParams.get('description');
    this.title=navParams.get('details');
    this.price=navParams.get('price');
    this.cat=navParams.get('vehicleCatagory');
    this.id=navParams.get('packageId');
    this.name=navParams.get('title');
    this.time=navParams.get('duration');
    

    this.storage.get('email').then((data)=>{
       this.email=data;

      });

   }

  ngOnInit() {
    let em='parmar.parth97531@gmail.com'
    const req={
                email:em,
                vehicleCatagory:this.cat
              }
            console.log(req);
            
    this.http.post<Array<{vehicleModel:string,number:string}>>('https://mywash.herokuapp.com/service/find',req ).subscribe(
     async (result) => {
       console.log(result);
       
       this.crt=result;
       
       
     });
  }

  async presentPopover() {
   let ev:any;
   
    //  this.http.post<Array<{vehicleModel:string,number:string}>>('https://mywash.herokuapp.com/service/find',req ).subscribe(
    //  async (result) => {
    //    console.log('GOT ANSWER',result)

    //     this.crt=result;
    //     let temp=this.cartService.getCart();
    //   //  console.log(cardet);
    //      this.crt.filter((item)=>{
    //           if(cart's numbers != 
    //      });

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
     // }
      
     // );


    // console.log(result1);
    // const popover = await this.popoverController.create({
    //   component: CarpopPage,
    //  componentProps:result1,
    //   event: ev,
    //   translucent: true
    // });
    // return await popover.present();
  }

  dismiss() {
    const prod={
      id:this.id,
      name: this.name,
      time:this.time,
      vehnumber:this.selection,
      price: this.price,
    }
    if(prod.vehnumber == undefined)
    {
      this.fdismiss();
    }
    else{
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
    });
  }

}
