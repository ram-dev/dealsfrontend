import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeDashboardModule } from './homedashboard/homedashboard.module';
import { DealsCategoryModule } from './deals/deals-category.module';
import { HomeRoutingModule } from './home-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { GeneralService } from '../@core/data/general.service';

import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

const HOME_COMPONENTS = [
  HomeComponent,
];

@NgModule({
  imports: [
    HomeRoutingModule,
    ThemeModule,
    HomeDashboardModule,
    DealsCategoryModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
  ],
  declarations: [
    HOME_COMPONENTS,
  ],
  providers:[
    GeneralService
  ]
})
export class HomeModule {
}
