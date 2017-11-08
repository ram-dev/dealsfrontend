import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { DealsListService } from '../../../@core/data/deals-list.service';

@Component({
  selector: 'ngx-deals-list',
  templateUrl: './deals-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
    nb-card-body{
      tr.ng2-smart-filters th{
        padding:0;
      }
    } 

  `],
})
export class DealsListComponent {

  settings = {   
    actions: {
      edit: false, 
      delete: false,
      add:false      
    },
    columns: {
     id: {
        title: 'ID',
        type: 'number',
        filter:false 
      },
      startDate: {
        title: 'Start Date',
        type: 'string',
        filter:false 
      },
      endDate: {
        title: 'End Date',
        type: 'string',
        filter:false 
      },
      category: {
        title: 'Category',
        type: 'string',
        filter:false 
      },
      currentBalance: {
        title: 'Balance',
        type: 'string',
        filter:false 
      },
      createDate: {
        title: 'Create Date',
        type: 'string',
        filter:false 
      },
      previewDeal:{
        title: 'Preview Deal',
        type: 'html',
        filter:false 
      },
      status:{
        title: 'Status',
        type: 'string',
        filter:false 
      },
      actions: //or something
      {
        title:'Actions',
        type:'html',
        valuePrepareFunction:(cell,row)=>{         
          return `<div class="btn-group">
          <a title="Edit" class="btn btn-primary btn-icon" href="/#/merchants/deals/edit/${row.id}"> 
          <i class="nb-edit"></i> 
          <a title="Add Coupon" class="btn btn-success btn-icon" href="/#/merchants/deals/addcoupon/${row.id}">
           <i class="nb-plus"></i>
           </a></div>`
        },
        filter:false       
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: DealsListService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
