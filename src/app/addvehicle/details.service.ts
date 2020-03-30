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
    address:String,
    lat:Number,
    lng:Number,
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
  public setAddress(data){
    this.details.address=data;
  }
  public setLat(data){
    this.details.lat = data;
  }
  public setLng(data){
    this.details.lng = data;
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
