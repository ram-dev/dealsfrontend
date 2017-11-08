import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DealsListService } from '../../../@core/data/deals-list.service';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'ngx-deals-edit',
  templateUrl: './deals-edit.component.html',  
  styleUrls: ['./deals-edit.component.scss']  
})
export class DealsEditComponent {
  private params;
  private offerType = 1;
  private DealType = 'Create';
  private matDatepicker;
  // Default selection
optionsOutletModel: number[] = [2,3,4,6];

// Settings configuration
mySettings: IMultiSelectSettings = {    
    buttonClasses: 'btn btn-hero-secondary',  
    dynamicTitleMaxItems:4  
};

// Text configuration
myTexts: IMultiSelectTexts = {
   
};

// Labels / Parents
myOptionsOutlet: IMultiSelectOption[] = [    
    { id: 2, name: 'Volvo', parentId: 1 },
    { id: 3, name: 'Honda', parentId: 1 },
    { id: 4, name: 'BMW', parentId: 1 },   
    { id: 6, name: 'Blue', parentId: 5 },
    { id: 7, name: 'Red', parentId: 5 },
    { id: 8, name: 'White', parentId: 5 }
];
  

  constructor(private activatedRoute: ActivatedRoute) { 
    this.params = this.activatedRoute.snapshot.params;
    console.log(this.params.id);    
  }
  
  ngOnInit(){
   console.log(this.params.id);
   if(this.params.id){
     this.DealType = 'Edit';
   }
    
  }

  
}
