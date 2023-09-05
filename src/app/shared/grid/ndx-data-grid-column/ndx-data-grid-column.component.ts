import {Component, Input} from '@angular/core';
import {ndxDataGridColumn, ndxDataTypes} from "./ndx-data-grid-column.model";

@Component({
  selector: 'ndx-data-grid-column',
  templateUrl: './ndx-data-grid-column.component.html',
  styleUrls: ['./ndx-data-grid-column.component.css']
})
export class ndxDataGridColumnComponent {
  initColumn: ndxDataGridColumn = {
    name : "",
    dataField : "",
    caption : "",
    dataType : ndxDataTypes.STRING,
    alignment : "left",
    cssClass : "",
    width : "auto",
    allowSorting : false,
    validationRule : {}
  }
  @Input() column =  this.initColumn;

  defaultCallback = () => Promise.resolve(true);

}
