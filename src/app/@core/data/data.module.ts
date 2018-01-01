import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';
import { PlayerService } from './player.service';

const SERVICES = [
  ApiService,
  UserService,
  ElectricityService,
  StateService,
  SmartTableService,
  PlayerService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        SERVICES,
      ],
    };
  }
}
