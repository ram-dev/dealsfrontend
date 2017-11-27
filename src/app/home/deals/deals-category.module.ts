import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { HttpModule, JsonpModule } from '@angular/http';

import { ThemeModule } from '../../@theme/theme.module';
import { DealsCategoryComponent } from './deals-category.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ProductComponent } from './product/product.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { FiltersComponent } from './filters/filters.component';
import { SortFiltersComponent } from './sort-filters/sort-filters.component';
import { DealViewComponent } from './view/deal-view.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { DealHotComponent } from './deal-hot/deal-hot.component';


import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './dealdata.service';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    NgxChartsModule,
    ChartModule,    
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    AgmCoreModule.forRoot(),
    ShareButtonsModule.forRoot(),
  ],
  declarations: [
    DealsCategoryComponent,
    ShowcaseComponent,
    ProductComponent,
    FiltersComponent,
    SortFiltersComponent,
    ProductThumbnailComponent,
    DealViewComponent,
    GmapsComponent,
    DealHotComponent,
  ],
  providers: [
    DataService
  ],
})
export class DealsCategoryModule {

}
