import { Component, OnInit } from '@angular/core';
import { NavParams,PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-carpop',
  templateUrl: './carpop.page.html',
  styleUrls: ['./carpop.page.scss'],
})
export class CarpopPage implements OnInit {
  public array_serv :Array<string>=[];


  constructor(
    public navParams:NavParams,
    public popoverController: PopoverController,
  ) { }

  ngOnInit() {
    
    console.log(this.navParams.get('list'));
   this.array_serv=this.navParams.get('list');
//     for (const car in result) {
// //      this.array_serv.push();
//       console.log(result[car]);
// }
    }

    onClick(val)
    {
      console.log(val);
      this.popoverController.dismiss();
    }
    

  }



