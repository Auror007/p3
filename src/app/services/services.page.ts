import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  @ViewChild(IonSlides,{static: false}) slides: IonSlides;
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Time Slot',
      buttons: [{
        text: '5:00 - 6:00 AM',
        handler: () => {
          console.log('first clicked');
        }
      }, {
        text: '6:00 - 7:00 AM',
        handler: () => {
          console.log('second clicked');
        }
      }, {
        text: '7:00 - 8:00 AM',
        handler: () => {
          console.log('third clicked');
        }
      }, {
        text: '8:00 - 9:00 AM',
        handler: () => {
          console.log('fourth clicked');
        }
      }, {
        text: 'Cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

 
}
