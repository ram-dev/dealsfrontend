import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { DealsRoutingModule, routedComponents } from './deals-routing.module';
import { DealsListService } from '../../@core/data/deals-list.service';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  imports: [
    ThemeModule,
    DealsRoutingModule,
    Ng2SmartTableModule,
    TreeviewModule.forRoot() 
  ],
  declarations: [
    routedComponents,
  ],
  providers: [
    DealsListService,
  ],
})
export class DealsModule { }
