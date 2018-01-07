import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DealsListService } from '../../../../@core/data/deals-list.service';

@Component({
  selector: 'ngx-merchant-outlets',
  template: `
     <div style="margin-bottom:10px;"> 
    <a href="/#/merchants/merchant/outlets/edit" class="btn btn-outline-success btn-sm"><i class="nb-plus"></i> Create Outlets</a>
   </div>
    <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)">
    </ng2-smart-table> 
  `,
})
export class OutletsComponent { 
  settings = {   
    actions: {
      edit: false, 
      delete: false,
      add:false      
    },
    columns: {     
      name: {
        title: 'Name',
        type: 'string',
        filter:false 
      }, 
      phone1: {
        title: 'Call On',
        type: 'string',
        filter:false,
         valuePrepareFunction: (cell, row) => {           
          return row.contacts.phone1;
        },
      }, 
      phone2: {
        title: 'SMS On',
        type: 'string',
        filter:false,
         valuePrepareFunction: (cell, row) => { 
          return row.contacts.phone2;
        },
      }, 
      address: {
        title: 'Full Address',
        type: 'html',
        filter:false,
         valuePrepareFunction: (cell, row) => { 
          var add =  row.contacts.address+' <br> '+row.contacts.city+' <br> '+row.contacts.state +' <br> '+row.contacts.country + ' - '+row.contacts.zip;
          return add;
        },
      },           
      latitude: {
        title: 'Lat Long',
        type: 'string',
        valuePrepareFunction: (cell, row) => {           
          return row.latitude +' , ' +row.longitude ;
        },
        filter:false 
      },      
      actions: //or something
      {
        title:'Actions',
        type:'html',
        valuePrepareFunction:(cell,row)=>{         
          return `<div class="btn-group">
          <a title="Edit" class="btn btn-primary btn-icon" href="/#/merchants/merchant/outlets/edit/${row._id}"> 
          <i class="nb-edit"></i> 
          <a title="Delete" class="btn btn-danger btn-icon" href="/#/merchants/merchant/outlets/delete/${row._id}">
           <i class="nb-trash"></i>
           </a></div>`
        },
        filter:false       
      },
    },
  }; 
  id :any ;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: DealsListService) {
    this.id = localStorage.getItem('merchantId');
    this.service.getAllOutletByMechantId(this.id).subscribe( data => {
        console.log(data);
        this.source.load(data);
    });
    /*var data1 = [
      {
        "_id":"1",
        "merchantId":"5a3a462aedcaf65ddcdc9a08",
        "name": "third 34",
        "userId": "5a3a462aedcaf65ddcdc9a06",
        "latitude":"22.34",
        "longitude":"11.43",
        "contacts":{
          "address":"432 ola road",
          "zip":"323131",
          "city":"Bangalore",
          "state":"Karnataka",
          "country":"India",
          "locality":"Begur",
          "phone1":"9876543210",
          "phone2":"8876543210"
        }
      }
    ];*/    
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

