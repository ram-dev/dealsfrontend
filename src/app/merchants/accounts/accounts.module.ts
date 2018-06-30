import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AccountsRoutingModule, routedComponents } from './accounts-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { TreeviewModule } from 'ngx-treeview';
import { MerchantListService } from '../../@core/data/merchant-list.service';

@NgModule({
  imports: [
    ThemeModule,
    AccountsRoutingModule,
    Ng2SmartTableModule,
    TreeviewModule.forRoot()
  ],
  declarations: [
    routedComponents,
  ],
  providers: [
    SmartTableService,
    MerchantListService
  ],
})
export class AccountsModule { }
