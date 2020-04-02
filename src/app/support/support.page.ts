import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IonContent } from '@ionic/angular';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  messages=[];
  public email:string;
  public num:string;
  public order:string='not-applicable';
  public comp:string;
  public type:string;

 constructor(
    private http:HttpClient,
    private storage:Storage
  ) {
    this.storage.get('email').then((res)=>{
      this.email=res;
    });
    this.storage.get('num').then((res)=>{
      this.num=res;
    });
   }
 
  currentUser='You';
  newMsg='';
  @ViewChild(IonContent,{static:false}) content:IonContent 
  ngOnInit() {
  
  
  }

  sendMessage(){

    this.messages.push({
      user:'You',
      createdAt:new Date().getTime(),
      msg:this.newMsg
    });
    this.http.post<{response:string}>('https://mywash.herokuapp.com/chat',{input:this.newMsg}).subscribe((res)=>{
const reply=res.response; 
console.log(reply);

//text.split(" ")[0]
if(this.newMsg=='service' || this.newMsg=='tech'){
this.type=this.newMsg;
if(this.newMsg=='tech'){
  this.order='not-applicable';
}
}
if(reply=='What is your complaint?'){
  const x=this.newMsg.split(" ")[1];  
  this.order=x;
  }
if(reply=='Thank you! We are working on this right away.'){
  this.comp=this.newMsg;
  const req={ 
    email:this.email,
    num:this.num,
    orderno:this.order,
    type:this.type,
    complaint:this.comp
  };
  console.log(req);
  
  this.http.post('https://mywash.herokuapp.com/sheet/write',req).subscribe((res)=>{
    console.log(res);
  })  
}
this.newMsg='';
this.messages.push({
  user:'Bot',
  createdAt:new Date().getTime(),
  msg:reply
});
setTimeout(()=>{
  this.content.scrollToBottom(200);

});

    })
    setTimeout(()=>{
      this.content.scrollToBottom(200);

    });
  }
}
