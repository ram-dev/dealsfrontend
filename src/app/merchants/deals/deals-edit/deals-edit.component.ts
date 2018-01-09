import { Component, OnInit, Inject , ViewChild } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { LocalDataSource } from 'ng2-smart-table';
import { DealsListService } from '../../../@core/data/deals-list.service';
import { OutletService } from '../../../@core/data/outlet.service';
import { MerchantListService } from '../../../@core/data/merchant-list.service';
import { AmenityService } from '../../../@core/data/amenity.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'ngx-deals-edit',
  templateUrl: './deals-edit.component.html',  
  styleUrls: ['./deals-edit.component.scss']  
})
export class DealsEditComponent {
  private params;
  selectedPackage;
  DealType = 'Create';
  dealId : any;
  merchantId : any;
  outLetList : any = [];
  mainCategoryList :any = [];
  subCategoryList : any = [];
  imagesList : any = [];
  categoryList : any= [];
  merchantData :any = {};
  dealForm: FormGroup;
  showMessages: any = {};  
  submitted = false;
  errors: string[] = [];
  messages: string[] = [];  
  daysType = ['Week Days', 'Weekend', 'All Days'];
  amount : any = 0;
  offerTypeList = [
    {name: 'Flat Discount', value: '1'},
    {name: 'Minimum Discount', value: '2'},
    {name: 'Buy/Get Discount', value: '3'},
    {name: 'Package Campaign/Deal', value: '4'},
    
  ];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
  });
  items: TreeviewItem[] = [];  
  values: number[];  
  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[1];
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
   private dealService: DealsListService,
   private outletService : OutletService,
   private merchantService: MerchantListService,
   private amenityService: AmenityService ) 
  { 
    this.params = this.activatedRoute.snapshot.params;
    this.dealId = this.params.id;
    this.merchantId = sessionStorage.getItem('merchantId');
    this.merchantService.getMerchantByMechantId(this.merchantId)
      .subscribe((result) => {
        this.merchantData = result;
        this.outletService.getAllOutletByMechantId(this.merchantId).subscribe( data => {
            if (data instanceof Array) {         
              this.outLetList = data;
            }else{
              var arr = [];
              arr.push(data);   
              this.outLetList = arr;          
            } 
            this.merchantService.getMerchantImages(this.merchantId).subscribe( data => {
                if (data instanceof Array) {         
                  this.imagesList = data;
                }else{
                  var arr = [];
                  arr.push(data);   
                  this.imagesList = arr;          
                } 
                this.amenityService.getAllCategory().subscribe( data => {
                  this.categoryList = data;
                  for(var i=0; i< this.merchantData.categoryId.length; i++){
                    var category = this.merchantData.categoryId[i];
                    for(var k =0 ; k < this.categoryList.length; k++){
                        var cat = this.categoryList[k];
                        if(category == cat._id && cat.parent == null){
                          this.mainCategoryList.push(cat);
                        }else if(category == cat._id && cat.parent != null){
                          this.subCategoryList.push(cat);
                        }
                    }                    
                  }
                  console.log(this.merchantData);
                  console.log(this.outLetList);
                  console.log(this.imagesList);
                  console.log(this.mainCategoryList); 
                  console.log(this.subCategoryList);   
                   this.initForm();
                })
                     
            });       
        });
      })
  }
  
  ngOnInit(){      
    this.initForm();
    if(this.params.id){
     this.DealType = 'Edit';
    }    
  }

  initForm(){
    this.dealForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'mainCategoryId': new FormControl(null, [Validators.required]),        
      'outletIds': new FormControl(null, [Validators.required]),  
      'offertype': new FormControl(null, [Validators.required]),
      'discount': new FormControl(null, [Validators.required]),
      'offertype ': new FormControl(null, [Validators.required]),
      'offer': new FormControl(null, [Validators.required]),
      'offerValidFrom': new FormControl(null, [Validators.required]),
      'offerValidTo': new FormControl(null, [Validators.required]),
      'terms': new FormControl(null, [Validators.required]),
      'images': new FormControl(null, [Validators.required]),
      'subCategoryIds': new FormControl(null),
      'offertype_one': new FormControl(null, [Validators.required]),
      'offertype_two': new FormControl(null, [Validators.required]), 
      'offerDeatils': new FormControl(null, [Validators.required]), 
      'fundAllocation': new FormControl(null, [Validators.required]), 
      'dayAllocationType': new FormControl(this.daysType[0]),
    });
  }

  onSubmit(){
    console.log(this.dealForm.value);
  }  

  offerChange(){   
    this.dealForm.controls['offertype_one'].setValue(null);
    this.dealForm.controls['offertype_two'].setValue(null);    
    console.log('test');
  }

  onSelectedChange(){

  }
}
