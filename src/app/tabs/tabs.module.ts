import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TabsPageRoutingModule} from './tabs.router.module';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { DashPage } from '../dash/dash.page';
import { ServicesPage } from '../services/services.page';
import { OfferPage } from '../offer/offer.page';
import { ProfilePage } from '../profile/profile.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TabsPage,
    DashPage,
    ServicesPage,
    OfferPage,
    ProfilePage
  ]
})
export class TabsPageModule {}
