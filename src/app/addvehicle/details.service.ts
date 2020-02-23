import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  details={
    email: String,
    vechicleType:String,
    brand: String,
    model:String,
    vehicleCatagory:String,
    number:String,
    parkingarea:String,
    longitude:String,
    latitude:String,
    prefferedTime:String
}

  
  constructor() { }
  public setEmail(data){
    this.details.email = data;
  }
  public setType(data){
    this.details.vechicleType = data;
  }
 
  public setBrand(data){
    this.details.brand = data;
  }
  public setModel(data){
    this.details.model=data;
  }
  public setCategory(data){
    this.details.vehicleCatagory=data;
  }
  public setParkingarea(data){
    this.details.parkingarea=data;
  }
  public setNumber(data){
    this.details.number=data;
  }
  public setLoc(data){
    this.details.latitude=data.lat;
    this.details.longitude=data.long;
  }
  public setprefferedTime(data){
    this.details.prefferedTime=data;
  }
  public getCardet(){
    const cardet={
      brand:this.details.brand,
      catagory:this.details.vehicleCatagory,
    }
   
    return cardet
  }

  public getDet(){
        return this.details
  }

}
