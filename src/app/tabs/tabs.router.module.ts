import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { DashPage } from '../dash/dash.page';
import { OfferPage } from '../offer/offer.page';
import { ProfilePage } from '../profile/profile.page';
import { ServicesPage } from '../services/services.page';


const routes1: Routes = [

  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dash',
        children: [
          {
            path: '',
            component: DashPage,
          }
        ]
      },

      {
        path: 'offer',
        children: [
          {
            path: '',
            component: OfferPage,
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: ProfilePage,
          }
        ]
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            component: ServicesPage,
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/dash',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/dash',
    pathMatch: 'full'
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes1)
  ],
  exports: [RouterModule]
})

export class TabsPageRoutingModule {}


