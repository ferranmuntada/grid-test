import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ndxDataGridColumn } from "../models/options/ndx-data-grid-column.model";
import { ndxDataGrid, ndxEditing, ndxExport, ndxFilterRow, ndxKeyboardNavigation, ndxPaging, ndxSelection, ndxSorting } from '../models/columns/ndx-data-grid.model';
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
  defaultExport: ndxExport = {
    enabled: false,
    allowExportSelectedData: false
  }
  defaultSelection: ndxSelection = {
    allowSelectAll: true,
    deferred: true,
    mode: "none",
    selectAllMode: "allPages",
    showCheckBoxesMode: "onClick"
  }
  defaultEditing: ndxEditing = {
    mode: "batch",
    allowAdding: false,
    allowDeleting: false,
    allowUpdating: false,
    useIcons: false,
    selectTextOnEditStart: true
  }

  onChangesChange($event: any){
    this.changesChange.emit($event);
  }

}
