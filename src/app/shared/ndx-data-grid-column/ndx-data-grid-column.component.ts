import {Component, Input} from '@angular/core';
import {ndxDataGridColumn, ndxDataTypes, ndxValidationRules} from "./ndx-data-grid-column.model";

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
    dataType : "string",
    alignment : "left",
    cssClass : "",
    width : "auto",
    allowSorting : false,
    validationRule : {}
  }
  @Input() column =  this.initColumn;

}
