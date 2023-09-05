import {Component, Input} from '@angular/core';
import { ndxDataGridColumn, ndxDataTypes } from "../ndx-data-grid-column/ndx-data-grid-column.model";
@Component({
  selector: 'ndx-data-grid',
  templateUrl: './ndx-data-grid.component.html',
  styleUrls: ['./ndx-data-grid.component.css']
})
export class ndxDataGridComponent {
  @Input() dataSource: any;
  @Input() columns: ndxDataGridColumn[] = [{
  name: "",
  dataField: "",
  caption: "",
  dataType: ndxDataTypes.STRING,
  alignment: "left",
  cssClass: "",
  width: "100",
  allowSorting: false,
  validationRule: {}
} ];


}
