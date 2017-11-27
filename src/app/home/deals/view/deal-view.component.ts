import { Component, OnInit, Input } from '@angular/core';
import { Deal } from '../shared/deal.model';


@Component({
  selector: 'deal-view',
  templateUrl: './deal-view.component.html',
  styleUrls: ['./deal-view.component.scss']
})
export class DealViewComponent implements OnInit {
  @Input() product: Deal;
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
