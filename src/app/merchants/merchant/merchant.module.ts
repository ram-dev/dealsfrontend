import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { MerchantRoutingModule, routedComponents } from './merchant-routing.module';
import { ImageUploadModule } from "angular2-image-upload";
import { DealsListService } from '../../@core/data/deals-list.service';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  imports: [
    ThemeModule,
    MerchantRoutingModule,
    Ng2SmartTableModule,
    MultiselectDropdownModule,
    ImageUploadModule.forRoot(),    
  ],
  declarations: [
    routedComponents,
  ],
  providers: [
    DealsListService
  ],
})
export class MerchantModule {

}
