import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ndxDataGridColumn } from "../models/columns/ndx-data-grid-column.model";
import { ndxDataGrid } from '../models/options/ndx-data-grid.model';
import { GRID_DEFAULT_OPTIONS } from '../consts/options/grid-default-options.consts';
import { COLUMNS_DEFAULT_OPTIONS } from '../consts/columns/columns-default-options.consts';
@Component({
  selector: 'ndx-data-grid',
  templateUrl: './ndx-data-grid.component.html',
  styleUrls: ['./ndx-data-grid.component.css']
})
export class ndxDataGridComponent {
  @Input() dataSource: any;
  @Input() options: Partial<ndxDataGrid> = {};
  @Input() columns: Partial<ndxDataGridColumn>[] = [];
  @Input() changes: any;
  @Output() changesChange: EventEmitter<any> =
  new EventEmitter<any>();

  defaultOptions = GRID_DEFAULT_OPTIONS;
  columnsDefaultOptions = COLUMNS_DEFAULT_OPTIONS;
  defaultCallback = () => Promise.resolve(true);
  defaultEvent = ($event: any) => {};



  onChangesChange($event: any){
    this.changesChange.emit($event);
  }

}
