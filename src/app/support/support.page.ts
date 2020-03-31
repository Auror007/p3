import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  messages=[
    {
      user:'You',
      createdAt:155409085600,
      msg:'Hey whats up mate?'
    },
    {
      user:'Bot',
      createdAt:155409085600,
      msg:'Ceiling'
    }, {
      user:'You',
      createdAt:155409085600,
      msg:'You f*****g donkey!'
    }
  ];


 constructor(
    private http:HttpClient
  ) { }
 
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
//
}
