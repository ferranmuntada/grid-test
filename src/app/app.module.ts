import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ndxDataGridComponent } from './shared/ndx-data-grid/ndx-data-grid.component';
import { AppRoutingModule } from './app-routing.module';
import {DxButtonModule, DxDataGridModule} from "devextreme-angular";
import { ndxDataGridColumnComponent } from './shared/ndx-data-grid-column/ndx-data-grid-column.component';


@NgModule({
  declarations: [
    AppComponent,
    ndxDataGridComponent,
    ndxDataGridColumnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxButtonModule
  ],
  providers: [],
  exports: [
    ndxDataGridComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
