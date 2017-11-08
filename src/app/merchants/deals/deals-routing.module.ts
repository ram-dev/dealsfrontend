import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealsComponent } from './deals.component';
import { DealsListComponent } from './deals-list/deals-list.component';
import { DealsEditComponent } from './deals-edit/deals-edit.component';


const routes: Routes = [{
  path: '',
  component: DealsComponent,
  children: [{
    path: 'list',
    component: DealsListComponent,
  },{
    path: 'edit',
    component: DealsEditComponent,
  },{
    path: 'edit/:id',
    component: DealsEditComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealsRoutingModule { }

export const routedComponents = [
  DealsComponent,
  DealsListComponent,
  DealsEditComponent
];
