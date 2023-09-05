import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './component/customers.component';
import {AppModule} from "../app.module";


@NgModule({
  declarations: [
    CustomersComponent
  ],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        AppModule
    ]
})
export class CustomersModule { }
