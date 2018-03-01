import { Component, OnInit, Input } from '@angular/core';
import { Deal } from '../shared/deal.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GeneralService } from '../../../@core/data/general.service';

@Component({
  selector: 'deal-view',
  templateUrl: './deal-view.component.html',
  styleUrls: ['./deal-view.component.scss']
})
export class DealViewComponent implements OnInit {
  @Input() product: Deal;
  public sliders: Array<any> = []; 
  params : any;
  dealId :  any;
  dealSource : any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private generalService: GeneralService) {
    this.params = this.activatedRoute.snapshot.params;
    this.dealId = this.params.id;
    
  }

  ngOnInit() {
    this.generalService.getDealsByID(this.dealId).subscribe((data)=>{
    
      this.dealSource = data;
        this.dealSource.outletList = data.outletIds[0];
        this.dealSource.lat = Number(this.dealSource.outletList.latitude);
        this.dealSource.lng = Number(this.dealSource.outletList.longitude);
      
      this.sliders = data.images;
    })
  }

}
