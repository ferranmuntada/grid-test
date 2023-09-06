import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './component/customers.component';
import { gridModule } from '../shared/grid/grid.module';
import { CustomersService } from './services/customers.service';
import { DxButtonModule, DxTemplateModule } from 'devextreme-angular';
import { CheckboxModule } from '../shared/checkbox/checkbox.module';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    gridModule,
    DxButtonModule,
    DxTemplateModule,
    CheckboxModule
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule { }
