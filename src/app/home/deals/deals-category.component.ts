import { Component } from '@angular/core';
import { Deal } from './shared/deal.model';
import { DataService } from './dealdata.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-deal-category',
  styleUrls: ['./deals-category.component.scss'],
  templateUrl: './deals-category.component.html',
})
export class DealsCategoryComponent {
  public sliders: Array<any> = [];
  

  products: Deal[]

  mainFilter: any

  currentSorting: string

  @ViewChild('filtersComponent')
  filtersComponent: FiltersComponent;

  

  sortFilters: any[] = [
    { name:'Name (A to Z)', value:'name' },
    { name:'Discount (low to high)', value:'discountAsc' },
    { name:'Discount (high to low)', value:'discountDes' }
  ]

  customFilters: any[] = [
    { name:'All', value:'all', checked:true },
    { name:'Available', value:'available', checked:false },    
    { name:'Bestoffer', value:'bestseller', checked:false }
  ]

  discountFilters: any[] = [
    { name:'All', value:'all', checked:true },
    { name:'Discount > 30', value:'more_30', checked:false },
    { name:'Discount < 10', value:'less_10', checked:false }
  ]

  originalData: any = [];
  catid: any;
  selected : any = {};
  private  sub: any;

  constructor(private dataService: DataService, private route: ActivatedRoute,
    private router: Router) {


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
         this.sub = this.route.params.subscribe(params => {
          this.catid = +params['id']; // (+) converts string 'id' to a number
        });
  }

  ngOnInit(){   
    this.dataService.getData().then(data => {
      this.originalData = data; 
      let list: any = [];
      if(this.catid){
        this.originalData.categories.forEach(element => {
          if(element.categori_id == this.catid){
            element.checked = true;
            list.push(element);
          }else{
            element.checked = false;
          }
        });
      }else{
        this.originalData.categories.forEach(element => {          
            element.checked = true;          
        });
        list = this.originalData.categories.slice(0);
      }
      
      this.mainFilter = {
        search: '',
        categories: list,
        customFilter: this.customFilters[0],
        discountFilter: this.discountFilters[0]
      }

      //Make a deep copy of the original data to keep it immutable
      this.products = this.originalData.deals.slice(0)
      this.sortProducts('name');
      //this.filtersComponent.reset(this.customFilters, this.discountFilters)
      this.updateProducts({
      type:'category',
      change: 1
    })
      
    })
  }

  ngOnDestroy(){
    if(this.sub != null) {
      this.sub.unsubscribe();
    }    
  }

  onURLChange(url){
    this.dataService.getRemoteData(url).subscribe(data => {
      this.originalData = data
      this.mainFilter = {
        search: '',
        categories: this.originalData.categories.slice(0),
        customFilter: this.customFilters[0],
        discountFilter: this.discountFilters[0]
      }

      //Make a deep copy of the original data to keep it immutable
     // this.products = this.originalData.deals.slice(0)
      this.sortProducts('name')
      this.updateProducts({
      type:'category',
      change: 1
    })
      //this.searchComponent.reset()
      //this.cartService.flushCart()
    })
  }



  onSearchChange(search){
    this.mainFilter.search = search.search
    this.updateProducts({
      type:'search',
      change:search.change
    })
  }

  onFilterChange(data){
    if(data.type == 'category'){
      if(data.isChecked){
        this.mainFilter.categories.push(data.filter)
      }else{
        this.mainFilter.categories = this.mainFilter.categories.filter(category => { return category.categori_id != data.filter.categori_id })
      }
    }else if(data.type == 'custom'){
      this.mainFilter.customFilter = data.filter
    }else if(data.type == 'discount'){
      this.mainFilter.discountFilter = data.filter
    }
    this.updateProducts({
      type:data.type,
      change: data.change
    })
  }

  updateProducts(filter){
    let productsSource = this.originalData.deals
    let prevProducts = this.products
    let filterAllData = true
    if((filter.type=='search' && filter.change == 1) || (filter.type=='category' && filter.change == -1)){
      productsSource = this.products
      filterAllData = false
    }
    
    this.products = productsSource.filter(product => {
      //Filter by search
      if(filterAllData || filter.type=='search'){
        if (!product.name.match(new RegExp(this.mainFilter.search, 'i'))){
          return false;
        }
      }

      //Filter by categories
      if(filterAllData || filter.type=='category'){
        let passCategoryFilter = false
        product.categories.forEach(product_category => {
          if(!passCategoryFilter){
            passCategoryFilter = this.mainFilter.categories.reduce((found, category) => {
                return found || product_category == category.categori_id
            }, false)
          }
        })
        if(!passCategoryFilter){
          return false
        }
      }

      //Filter by custom filters
      if(filterAllData || filter.type=='custom'){
        let passCustomFilter = false
        let customFilter = this.mainFilter.customFilter.value
        if(customFilter == 'all'){
          passCustomFilter = true;
        }else if(customFilter == 'available' && product.available){
          passCustomFilter = true;
        }else if(customFilter == 'unavailable' && !product.available){
          passCustomFilter = true;
        }else if(customFilter == 'bestseller' && product.best_seller){
          passCustomFilter = true;
        }
        if(!passCustomFilter){
          return false
        }
      }

      //Filter by discount filters
      if(filterAllData || filter.type=='discount'){
        let passdiscountFilter = false
        let customFilter = this.mainFilter.discountFilter.value
        let productdiscount = parseFloat(product.discount.replace(/\./g, '').replace(',', '.'))
        if(customFilter == 'all'){
          passdiscountFilter = true;
        }else if(customFilter == 'more_30' && productdiscount > 30){
          passdiscountFilter = true;
        }else if(customFilter == 'less_10' && productdiscount < 10){
          passdiscountFilter = true;
        }
        if(!passdiscountFilter){
          return false
        }
      }

      return true
    })

    //If the number of products increased after the filter has been applied then sort again
    //If the number of products remained equal, there's a high chance that the items have been reordered.
    if(prevProducts.length <= this.products.length && this.products.length>1){
      this.sortProducts(this.currentSorting)
    }

    //These two types of filters usually add new data to the products showcase so a sort is necessary
    if(filter.type == 'custom' || filter.type == 'discount'){
      this.sortProducts(this.currentSorting)
    }
  }

  sortProducts(criteria){
    this.products.sort((a,b) => {
      let discountComparison = parseFloat(a.discount.replace(/\./g, '').replace(',', '.')) - parseFloat(b.discount.replace(/\./g, '').replace(',', '.'))
      if(criteria == 'discountDes'){
        return -discountComparison
      }else if(criteria == 'discountAsc'){
        return  discountComparison
      }else if(criteria == 'name'){
        let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1;
        return 0;
      }else{
        //Keep the same order in case of any unexpected sort criteria
        return -1
      }
    })
    this.currentSorting = criteria
  }
}
