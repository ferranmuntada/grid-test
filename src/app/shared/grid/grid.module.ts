import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ndxDataGridColumnComponent } from './ndx-data-grid-column/ndx-data-grid-column.component';
import { ndxDataGridComponent } from './ndx-data-grid/ndx-data-grid.component';
import {DxButtonModule, DxDataGridModule } from "devextreme-angular";


@NgModule({
  declarations: [
    ndxDataGridComponent,
    ndxDataGridColumnComponent

  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,

  ],
  exports: [
    ndxDataGridComponent,
    ndxDataGridColumnComponent
  ]
})
export class gridModule { }
