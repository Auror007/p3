import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams,PopoverController, Events} from '@ionic/angular';
import { CarpopPage } from '../carpop/carpop.page';
import { HttpClient } from '@angular/common/http';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import {Storage} from  '@ionic/storage';

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

  
  constructor(
    private modalCtrl:ModalController,
    private navParams: NavParams,
    public events:Events,
    public popoverController: PopoverController,
    public http:HttpClient,
    public storage:Storage

  ) {
    this.desp=navParams.get('description');
    this.title=navParams.get('details');
    this.price=navParams.get('price');
    this.cat=navParams.get('vehicleCatagory');
    
    events.subscribe('added', () => {
        this.dismiss();
    });

    this.storage.get('email').then((data)=>{
       this.email=data;

      });

   }

  ngOnInit() {
    
  }

  async presentPopover() {
   let ev:any;
    const req={
                email:this.email,
                vehicleCatagory:this.cat
              }
            console.log(req);
     this.http.post('https://mywash.herokuapp.com/service/find',req ).subscribe(
     async (result) => {
       console.log('GOT ANSWER')
        // const cardet={list:result};
        const popover = await this.popoverController.create({
          component: CarpopPage,
         componentProps:{list:result},
          event: ev,
          translucent: true
        });
        return await popover.present();
      }
      
      );


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
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
