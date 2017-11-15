import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../shared/category.model'

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input()
  categories: Category[]

  @Input()
  customFilters: any[]

  @Input()
  discountFilters: any[]

  @Output()
  onFilterChange = new EventEmitter<any>()


  showFilters: boolean = true

  sideShown: boolean = false

  constructor() { }

  ngOnInit() {
  }

  reset(customFilters, discountFilters){
    this.customFilters = customFilters
    this.discountFilters = discountFilters
    this.showFilters = false
    setTimeout(() => {
      this.showFilters = true
    });
  }

  onInputChange($event, filter, type){
    let change = $event.target.checked ? 1: -1
    this.onFilterChange.emit({
      type: type,
      filter: filter,
      isChecked: $event.target.checked,
      change: change
    })
  }
}
