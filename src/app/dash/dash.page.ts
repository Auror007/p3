import { Component, OnInit} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import {ItemsService} from '../items.service';
import { HttpClient } from '@angular/common/http';
import {service} from './det.interface';
import {det} from './det.model';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit{
  slideData = [{ image: "https://mywash.herokuapp.com/image/img.png" },{ image: "https://mywash.herokuapp.com/image/img1.png" }]  
  slideOptsOne = {
    initialSlide: 0,
    speed:2000
   };
   
  public array_serv :Array<det>=[];
   
  constructor(
    private iserv:ItemsService,
    private http:HttpClient,
    ){

    }
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }
    ngOnInit()
  {    //  const array_serv=[];

    this.http.get<{[key:number]:det}>('https://mywash.herokuapp.com/package/show', {}).subscribe(
        (result) => {

          console.log(result);

          for (const key in result) {
            if(result.hasOwnProperty(key)){
              this.array_serv.push(
                new det(
                  result[key].id,
                  result[key].name,
                  result[key].price,
                  result[key].details,
                  result[key].description,
                  result[key].catagory,
                  result[key].duration
                     )
              );
            }
          }
          console.log(this.array_serv);

        }
    );
  }
  addCart(){
    const dat={
      number:5223,
      serviceName:'Premium1',
      timeCost:'10min',
      vehicleType:'Sedan',
      details:'1 Exterior wash + 2 Weekly Interior Wash',
      price:550,
      validTime:'3 Months',
    }
    
    this.iserv.addtoCart(dat);
    console.log(this.iserv.getCart());
  }
}
