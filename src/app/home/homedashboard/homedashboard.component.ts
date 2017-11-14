import { Component, OnInit } from '@angular/core';
import { Product } from './shared/product.model';
import { DataService } from './data.service';

import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./homedashboard.component.scss'],
  templateUrl: './homedashboard.component.html',
})
export class HomeDashboardComponent {
  public sliders: Array<any> = [];

  products: Product[];
  originalData: any = [];

  constructor(private dataService: DataService) {
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
      this.originalData = data
      /*this.mainFilter = {
        search: '',
        categories: this.originalData.categories.slice(0),
        customFilter: this.customFilters[0],
        priceFilter: this.priceFilters[0]
      }*/

      //Make a deep copy of the original data to keep it immutable
      this.products = this.originalData.products.slice(0)
      //this.sortProducts('name')
    })
  }
}
