import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  details={
    email: String,
    vehicleType:String,
    brandName: String,
    vehicleModel:String,
    vehicleCatagory:String,
    number:String,
    parkingarea:String,
    longitude:String,
    latitude:String,
    prefferedTime:Number,
    flag:0
}

  
  constructor() { }
  public setEmail(data){
    this.details.email = data;
  }
  public setType(data){
    this.details.vehicleType = data;
  }
 
  public setBrand(data){
    this.details.brandName = data;
  }
  public setModel(data){
    this.details.vehicleModel=data;
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
      brand:this.details.brandName,
      catagory:this.details.vehicleCatagory,
    }
   
    return cardet
  }

  public getDet(){
        return this.details
  }

}
