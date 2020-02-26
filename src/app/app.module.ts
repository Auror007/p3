import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {environment} from '../environments/environment';

import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),AngularFireAuthModule,AngularFirestoreModule,
     HttpClientModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    Geolocation
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
