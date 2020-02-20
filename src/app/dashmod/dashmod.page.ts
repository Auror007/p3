import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams,PopoverController} from '@ionic/angular';
import { CarpopPage } from '../carpop/carpop.page';
import { HttpClient } from '@angular/common/http';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-dashmod',
  templateUrl: './dashmod.page.html',
  styleUrls: ['./dashmod.page.scss'],
})
export class DashmodPage implements OnInit {

  public desp:any;
  public title:any;
  public price:any;

  constructor(
    private modalCtrl:ModalController,
    private navParams: NavParams,
    public popoverController: PopoverController,
    public http:HttpClient
  ) {
    this.desp=navParams.get('description');
    this.title=navParams.get('details');
    this.price=navParams.get('price');

   }

  ngOnInit() {
    
  }

  async presentPopover(ev: any) {
    let cardet:any;
    this.http.post('https://mywash.herokuapp.com/service/find', {email:'meetp6041@gmail.com',vehicleCatagory:'sedan'}).subscribe(
      (result) => {
        cardet={list:result};
      }
      
      );
      cardet={list:['item1','item2','item3']};
    const popover = await this.popoverController.create({
      component: CarpopPage,
      componentProps:cardet,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
