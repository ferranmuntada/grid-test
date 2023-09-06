import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ndxDataGridColumn } from "../ndx-data-grid-column/ndx-data-grid-column.model";
@Component({
  selector: 'ndx-data-grid',
  templateUrl: './ndx-data-grid.component.html',
  styleUrls: ['./ndx-data-grid.component.css']
})
export class ndxDataGridComponent {
  @Input() dataSource: any;
  @Input() columns: Partial<ndxDataGridColumn>[] = [{
  name: "",
  dataField: "",
  caption: "",
  dataType: "string",
  alignment: "left",
  cssClass: "",
  width: "100",
  allowSorting: false,
  validationRule: {}
} ];
  /** prueba columna fija*/
  //column: ndxDataGridColumn = CUSTOMERCOLUMNS[0];
  defaultCallback = () => Promise.resolve(true);
  /** end prueba */

  @Output() toolbarPreparing: EventEmitter<any> =
  new EventEmitter<any>();
  @Output() editorPreparing: EventEmitter<any> =
  new EventEmitter<any>();
  @Output() cellPrepared: EventEmitter<any> =
  new EventEmitter<any>();

  onToolbarPreparing($event: any) {
    this.toolbarPreparing.emit($event);
  }

  onEditorPreparing($event: any) {
    this.editorPreparing.emit($event);
  }

  onCellPrepared($event: any) {
    this.cellPrepared.emit($event);
  }


}
