import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router,private splash:SplashScreen) { 
    this.splash.show();
    //this.splash.hide();
  }

  
  ngOnInit() {
   
  }
   proceed() {
     this.router.navigate(['/register']);
   }

}
