import { NgModule } from '@angular/core';

import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { HttpModule, JsonpModule } from '@angular/http';

import { ThemeModule } from '../../@theme/theme.module';
import { HomeDashboardComponent } from './homedashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { DealSummaryComponent } from './dealsummary/dealsummary.component';
import { DealSummarychartsPieComponent } from './dealsummary/dealsummary-chart/dealsummary-chart.component';
import { DownloadGraphComponent } from './downloadgraph/downloadgraph.component';
import { DownloadGraphChartComponent } from './downloadgraph/downloadgraph-chart/downloadgraph-chart.component';
import { DealSliderComponent } from './deal-slider/deal-slider.component';
import { GeneralService } from '../../@core/data/general.service';


import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../deals/dealdata.service';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    NgxChartsModule,
    ChartModule,    
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
  ],
  declarations: [
    HomeDashboardComponent,
    StatusCardComponent,    
    DealSummaryComponent,
    DownloadGraphComponent,
    DownloadGraphChartComponent,
    DealSummarychartsPieComponent,
    DealSliderComponent  
  ],
  providers: [
    DataService,
    GeneralService
  ],
})
export class HomeDashboardModule { }
