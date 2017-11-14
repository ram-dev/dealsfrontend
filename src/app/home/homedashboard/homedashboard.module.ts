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
import { ShowcaseComponent } from './showcase/showcase.component';
import { ProductComponent } from './product/product.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';

import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './data.service';

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
    ShowcaseComponent,
    ProductComponent,
    ProductThumbnailComponent,
  ],
  providers: [
    DataService,    
  ],
})
export class HomeDashboardModule { }
