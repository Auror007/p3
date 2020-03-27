import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {
  phn={
    phone: String,
    otp: String,
    userName: String,
    email: String,
    address:String,
    lat:Number,
    lng:Number
  }
  result={
    message: Boolean,
  }
  constructor() { }
  public setOtp(data){
    this.phn.otp = data;
  }
  public setPhone(data){
    this.phn.phone = data;
  }

  public setName(data){
    this.phn.userName = data;
  }

  public setAddress(data){
    this.phn.address = data;
  }

  public setEmail(data){
    this.phn.email = data;
  }
  public setLat(data){
    this.phn.lat = data;
  }
  public setLng(data){
    this.phn.lng = data;
  }

  public getAddress(){
    return this.phn.address;
  }
  public getPhone()
  {
    return this.phn.phone;
  }
 
  public getName()
  {
    return this.phn.userName;
  }
 
  public getEmail()
  {
    return this.phn.email;
  }
  

  public getJson()
  {
    return this.phn;
  }
}
