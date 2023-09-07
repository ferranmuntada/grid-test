import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ndxDataGridColumn } from "../models/options/ndx-data-grid-column.model";
import { ndxDataGrid, ndxFilterRow, ndxKeyboardNavigation, ndxPaging, ndxSorting } from '../models/columns/ndx-data-grid.model';
@Component({
  selector: 'ndx-data-grid',
  templateUrl: './ndx-data-grid.component.html',
  styleUrls: ['./ndx-data-grid.component.css']
})
export class ndxDataGridComponent {
  @Input() dataSource: any;
  @Input() options: Partial<ndxDataGrid> = {};
  @Input() columns: Partial<ndxDataGridColumn>[] = [];

  defaultFocusedRowIndex = 0;
  defaultShowColumnLines = true;
  defaultShowRowLines = true;
  defaultShowBorders = true;
  defaultRowAlternationEnabled = true;
  defaultAllowColumnResizing = true;
  defaultAllowColumnReordering = true;
  defaultColumnResizingMode = "nextColumn";
  defaultRepaintChangesOnly = true;
  defaultRemoteOperations = "{ groupPaging: true }"
  defaultWidth = "auto"
  defaultHeight = "auto"
  defaultCallback = () => Promise.resolve(true);
  defaultEvent = ($event: any) => {};

  defaultPaging: ndxPaging = {
    enabled: true,
    pageIndex: 0,
    pageSize: 20
  }
  defaultSorting: Partial<ndxSorting> = {
    mode: 'multiple'
  }
  defaultKeyboardNavigation: ndxKeyboardNavigation = {
    editOnKeyPress: false,
    enabled: true,
    enterKeyAction: "moveFocus",
    enterKeyDirection: "row"
    }
  defaultFilterRow: Partial<ndxFilterRow> = {
    visible: true
  }


  constructor() {}

}
