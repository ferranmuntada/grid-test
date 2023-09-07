import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './component/customers.component';
import { gridModule } from '../shared/grid/grid.module';
import { CustomersService } from './services/customers.service';
import { DxButtonModule, DxNumberBoxModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';
import { AddressComponent } from './address/address.component';
import { IdComponent } from './id/id.component';


@NgModule({
  declarations: [
    CustomersComponent,
    AddressComponent,
    IdComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    gridModule,
    DxButtonModule,
    DxTemplateModule,
    DxTextBoxModule,
    DxNumberBoxModule
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule { }
