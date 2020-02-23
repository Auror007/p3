import { Component, OnInit } from '@angular/core';
import { NavParams,PopoverController, Events } from '@ionic/angular';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-carpop',
  templateUrl: './carpop.page.html',
  styleUrls: ['./carpop.page.scss'],
})
export class CarpopPage implements OnInit {
  public array_serv :Array<string>=[];
  list;

  constructor(
    public events:Events,
    public navParams:NavParams,
    public popoverController: PopoverController,
  ) { }

  ngOnInit() {
    
    console.log(`$list`);
  //  this.array_serv=this.navParams.get('list');
   

    }

    onClick(val)
    {
      console.log(val);
      this.popoverController.dismiss();
      this.events.publish('added');
    }
    

  }



