import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams} from '@ionic/angular';

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
    private navParams: NavParams
  ) {
    this.desp=navParams.get('description');
    this.title=navParams.get('details');
    this.price=navParams.get('price');

   }

  ngOnInit() {
    
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
