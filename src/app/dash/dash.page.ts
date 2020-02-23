import { Component, OnInit} from '@angular/core';
import { IonSlides,ModalController } from '@ionic/angular';
import {ItemsService} from '../items.service';
import { HttpClient } from '@angular/common/http';
import {DashmodPage} from '../dashmod/dashmod.page';
import {service} from './det.interface';
import {det} from './det.model';
import { ThrowStmt } from '@angular/compiler';
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
    private modal:ModalController
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
                  result[key].packageId,
                  result[key].name,
                  result[key].price,
                  result[key].details,
                  result[key].description,
                  result[key].vehicleCatagory,
                  result[key].vehicleType,
                  result[key].duration
                     )
              );
            }
          }
          console.log(this.array_serv);

        }
    );
  }
   async addCart(packageId){
    
    
    const mod=this.array_serv.find(item => item.packageId==packageId);
    console.log(mod);
    const modal = await this.modal.create({
      component: DashmodPage,
      componentProps: mod
    });
    return await modal.present();
    console.log(this.iserv.getCart());
  }
}
