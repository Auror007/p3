import { Component, OnInit, Input } from '@angular/core';
import {PopoverController, Events } from '@ionic/angular';

@Component({
  selector: 'app-carpop',
  templateUrl: './carpop.page.html',
  styleUrls: ['./carpop.page.scss'],
})
export class CarpopPage implements OnInit {

  
  @Input() list:Array<Object>=[];


  constructor(
    public events:Events,
    public popoverController: PopoverController,
  ) {     

  }
  ngOnInit() {
  }

    onClick(val)
    {
      this.popoverController.dismiss(val);
      console.log("dismissed");
      
    }
    

  }



