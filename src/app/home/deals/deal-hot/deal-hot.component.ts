import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Deal } from '../../deals/shared/deal.model';
import { DataService } from '../../deals/dealdata.service';
import { Router } from '@angular/router';
import { GeneralService } from '../../../@core/data/general.service';

@Component({
  selector: 'ngx-deal-hot',
  styleUrls: ['./deal-hot.component.scss'],
  templateUrl: './deal-hot.component.html',
})
export class DealHotComponent implements OnDestroy {  

  @Input() catId: string;
  items: Array<any> = [];
  sliderWidth: any ;

  constructor(private dataService: DataService,  private router: Router, private generalService: GeneralService) {
    this.sliderWidth = outerWidth - 80; 
    
  }

  ngOnInit(){
    this.generalService.getDealsByCity(this.generalService.getCityObj()).subscribe( data => {
        var itemList = [];
        for(var i = 0 ; i < data.length ; i++){
          if(data[i].mainCategoryId.indexOf(this.catId) > -1){
            itemList.push(data[i]);
          }
        }        
       
        this.items = itemList;
    });
   
  }

  redirect(pagename: string) {    
    this.router.navigate(['/home/deals/view/'+pagename]);
  }

  ngOnDestroy() {
    
  }

}
