import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'registernew', loadChildren: './registernew/registernew.module#RegisternewPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'addvehicle', loadChildren: './addvehicle/addvehicle.module#AddvehiclePageModule' },
 // { path: 'gps', loadChildren: './gps/gps.module#GpsPageModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  { path: 'support', loadChildren: './support/support.module#SupportPageModule' },
  { path: 'policy', loadChildren: './policy/policy.module#PolicyPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
