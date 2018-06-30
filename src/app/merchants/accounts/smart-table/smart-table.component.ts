import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MerchantListService } from '../../../@core/data/merchant-list.service';
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
      updated: {
        title: 'Transcation Date',
        type: 'number',
        filter:false,
        valuePrepareFunction: (cell, row) => {          
          var raw = new Date(cell);         
          console.log(raw);
          var date = raw.toLocaleDateString() + ' - '+raw.toLocaleTimeString();
          return date;
        },
      },    
      status: {
        title: 'Status',
        type: 'string',
        filter:false
      },
      type: {
        title: 'Type',
        type: 'string',
        filter:false
      },
      amount: {
        title: 'Amount',
        type: 'string',
        filter:false
      },
      paymentinfo: {
        title: 'Info',
        type: 'string',
        filter:false
      },      
    },
  };
  id :any ;
  params :any;

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: MerchantListService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = sessionStorage.getItem('merchantId');
    this.params = this.activatedRoute.snapshot.params;
    this.service.getMerchantHistory(this.id).subscribe( data => {
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
