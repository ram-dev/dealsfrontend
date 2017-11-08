import { NgModule } from '@angular/core';

import { MerchantsComponent } from './merchants.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MerchantsRoutingModule } from './merchants-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { AuthGuard } from '.././_guards';

const MERCHANTS_COMPONENTS = [
  MerchantsComponent,
];

@NgModule({
  imports: [
    MerchantsRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    MERCHANTS_COMPONENTS,
  ],
  providers:[
  AuthGuard,
  ]
})
export class MerchantsModule {
}
