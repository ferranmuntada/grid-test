import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ndxDataGridColumnComponent } from './ndx-data-grid-column/ndx-data-grid-column.component';
import { ndxDataGridComponent } from './ndx-data-grid/ndx-data-grid.component';
import {DxButtonModule, DxDataGridModule } from "devextreme-angular";
import { RendererComponent } from './renderer-component/renderer-component.component';
import { CheckboxModule } from '../checkbox/checkbox.module';


@NgModule({
  declarations: [
    ndxDataGridComponent,
    ndxDataGridColumnComponent,
    RendererComponent,
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    CheckboxModule
  ],
  exports: [
    ndxDataGridComponent,
    ndxDataGridColumnComponent,
    RendererComponent
  ]
})
export class gridModule { }
