import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-dealsummary',
  styleUrls: ['./dealsummary.component.scss'],
  templateUrl: './dealsummary.component.html',
})
export class DealSummaryComponent implements OnDestroy {

  temperature: number = 24;
  temperatureOff: boolean = false;
  temperatureMode = 'cool';

  humidity: number = 87;
  humidityOff: boolean = false;
  humidityMode = 'heat';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
