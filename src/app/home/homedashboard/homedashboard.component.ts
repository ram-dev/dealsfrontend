import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Deal } from '../deals/shared/deal.model';
import { DataService } from '../deals/dealdata.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./homedashboard.component.scss'],
  templateUrl: './homedashboard.component.html',
})
export class HomeDashboardComponent {
  sliders: Array<any> = [];
  items: Array<any> = []
  products: Deal[]
  sliderWidth: any ;

  constructor(private dataService: DataService) {
    this.sliderWidth = outerWidth - 80;   
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

  ngOnInit(){
    this.dataService.getData().then(data => {      
      this.items = data.deals;  
    })
  }
}
