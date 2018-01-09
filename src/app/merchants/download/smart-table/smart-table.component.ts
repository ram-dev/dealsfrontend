import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DealsListService } from '../../../@core/data/deals-list.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

  settings = {
    actions:{
      add:false,
      edit:false,
      delete: false
    },    
    columns: {
      id: {
        title: 'Deal ID',
        type: 'number',
        filter:false
      },
      firstName: {
        title: 'Deal Name',
        type: 'string',
        filter:false
      },
      lastName: {
        title: 'Contact Name',
        type: 'string',
        filter:false
      },
      username: {
        title: 'Contact Number',
        type: 'string',
        filter:false
      },
      email: {
        title: 'Coupon Code',
        type: 'string',
        filter:false
      },
      age: {
        title: 'Date',
        type: 'number',
        filter:false
      },
    },
  };
  id :any ;
  params :any;

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: DealsListService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = sessionStorage.getItem('merchantId');
    this.params = this.activatedRoute.snapshot.params;
    this.service.getAllDownloadDealByMechantId(this.id).subscribe( data => {
        if (data instanceof Array) {         
          this.source.load(data);
        }else{
          var arr = [];
          arr.push(data);          
          this.source.load(arr);
        }        
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
