import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  @ViewChild(IonSlides,{static: false}) slides: IonSlides;
  constructor() { }

  ngOnInit() {
    this.slides.startAutoplay();
    this.slides.options({speed:400});
  }
 
}
