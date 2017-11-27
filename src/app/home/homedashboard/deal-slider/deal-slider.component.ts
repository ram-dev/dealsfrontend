import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Deal } from '../../deals/shared/deal.model';
import { DataService } from '../../deals/dealdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-deal-slider',
  styleUrls: ['./deal-slider.component.scss'],
  templateUrl: './deal-slider.component.html',
})
export class DealSliderComponent implements OnDestroy {  

  @Input() catId: number;
  items: Array<any> = [];
  sliderWidth: any ;

  constructor(private dataService: DataService, private router: Router) {
    this.sliderWidth = outerWidth - 80; 
    
  }

  ngOnInit(){
    this.dataService.getData().then(data => {      
      this.items = data.deals;  
    })
  }

  redirect(pagename: string) {    
    this.router.navigate(['/home/deals/view/'+pagename]);
  }
  ngOnDestroy() {
    
  }

}
