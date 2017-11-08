import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./homedashboard.component.scss'],
  templateUrl: './homedashboard.component.html',
})
export class HomeDashboardComponent {
  public sliders: Array<any> = [];

  constructor() {
    this.sliders.push({
            imagePath: 'assets/images/camera1.jpg',
            label: 'First slide label',
            text: 'First'
        }, {
            imagePath: 'assets/images/camera2.jpg',
            label: 'Second slide label',
            text: 'Second'
        }, {
            imagePath: 'assets/images/camera3.jpg',
            label: 'Third slide label',
            text: 'Third'
        });
  }

  ngOnInit() {

  }
}
