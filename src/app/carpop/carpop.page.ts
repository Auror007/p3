import { Component, OnInit } from '@angular/core';
import { NavParams,PopoverController, Events } from '@ionic/angular';
@Component({
  selector: 'app-carpop',
  templateUrl: './carpop.page.html',
  styleUrls: ['./carpop.page.scss'],
})
export class CarpopPage implements OnInit {
  public array_serv :Array<string>=[];


  constructor(
    public events:Events,
    public navParams:NavParams,
    public popoverController: PopoverController,
  ) { }

  ngOnInit() {
    
    console.log(this.navParams.get('list'));
   this.array_serv=this.navParams.get('list');

    }

    onClick(val)
    {
      console.log(val);
      this.popoverController.dismiss();
      this.events.publish('added');

      

    }
    

  }



