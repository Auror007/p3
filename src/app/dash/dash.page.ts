import { Component, OnInit} from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit{

  slideData = [{ image: "http://mywash.herokuapp.com/image/img.png" },{ image: "http://mywash.herokuapp.com/image/img1.png" }]  
  slideOptsOne = {
    initialSlide: 0,
    speed:2000
   };
  constructor(){}
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }
    ngOnInit()
  {
   
  }

}
