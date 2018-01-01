import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { generalService } from './general.service';
@Component({
  selector: 'ngx-merchant-general',
  templateUrl: './general.component.html',
})
export class GeneralComponent {
  config = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: true,
        hasCollapseExpand: true,
        decoupleChildFromParent: true,
        maxHeight: 400
    });
  values: string[]; 
  items: TreeviewItem[];
  constructor(
        private service: generalService
    ) { }

    ngOnInit() {
        this.items = this.service.getCategory();
    }

    onSelectedChange(values: string[]) {
        this.values = values;
        
    }
}
