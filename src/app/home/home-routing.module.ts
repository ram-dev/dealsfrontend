import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeDashboardComponent } from './homedashboard/homedashboard.component';
import { DealsCategoryComponent } from './deals/deals-category.component';
import { DealViewComponent } from './deals/view/deal-view.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
  {    
    path: 'index',
    component: HomeDashboardComponent
  },
  {
    path: 'deals',    
    component: DealsCategoryComponent
  },
  {
    path: 'deals-food/:id',    
    component: DealsCategoryComponent
  },
  {
    path: 'deals-wellness/:id',    
    component: DealsCategoryComponent
  },
  {
    path: 'deals-spa/:id',    
    component: DealsCategoryComponent
  },
  {
    path: 'deals-entertainment/:id',    
    component: DealsCategoryComponent
  },
  {
    path: 'deals-travel/:id',    
    component: DealsCategoryComponent
  },
  {
    path: 'deals-shopping/:id',    
    component: DealsCategoryComponent
  },
  {
    path:"deals/view/:id",
    component:DealViewComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
