import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {det} from '../dash/det.model';
import {DashmodPage} from '../dashmod/dashmod.page';




@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  public array_serv :Array<det>=[];

  constructor(
    private http:HttpClient,
    private modal:ModalController
    ) { }

  ngOnInit() {
    
    this.http.get<{[key:number]:det}>('https://mywash.herokuapp.com/package/offer', {}).subscribe(
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
  }


}
