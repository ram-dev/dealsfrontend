import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MerchantsComponent } from './merchants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '.././_guards/index';

const routes: Routes = [{
  path: '',
  component: MerchantsComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent, canActivate :[AuthGuard]
  },  {
    path: 'deals',
    canActivate :[AuthGuard],
    loadChildren: './deals/deals.module#DealsModule',
  },
  {
    path: 'download',
    canActivate :[AuthGuard],
    loadChildren: './download/download.module#DownloadModule',
  },
  {
    path: 'profile',
    canActivate :[AuthGuard],
    loadChildren: './profile/profile.module#ProfileModule',
  },
  {
    path: 'merchant',
    canActivate :[AuthGuard],
    loadChildren: './merchant/merchant.module#MerchantModule',
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantsRoutingModule {
}
