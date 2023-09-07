import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ndxDataGridComponent } from './ndx-data-grid/ndx-data-grid.component';
import {DxButtonModule, DxDataGridModule } from "devextreme-angular";
import { RendererComponent } from './renderer-component/renderer-component.component';



@NgModule({
  declarations: [
    ndxDataGridComponent,
    RendererComponent,
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
  ],
  exports: [
    ndxDataGridComponent,
    RendererComponent
  ]
})
export class gridModule { }
