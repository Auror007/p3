import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashmodPage } from './dashmod.page';
import { CarpopPageModule } from '../carpop/carpop.module';

const routes: Routes = [
  {
    path: '',
    component: DashmodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarpopPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashmodPage]
})
export class DashmodPageModule {}
