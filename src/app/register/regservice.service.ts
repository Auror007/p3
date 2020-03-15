import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {
  phn={
    phone: String,
    otp: String,
    userName: String,
    email: String
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
  public getPhone()
  {
    return this.phn.phone;
  }
 
  public setName(data){
    this.phn.userName = data;
  }
  public getName()
  {
    return this.phn.userName;
  }
  public setEmail(data){
    this.phn.email = data;
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
