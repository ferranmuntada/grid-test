import {Component, Input} from '@angular/core';
import {ndxDataGridColumn} from "./ndx-data-grid-column.model";

@Component({
  selector: 'ndx-data-grid-column',
  templateUrl: './ndx-data-grid-column.component.html',
  styleUrls: ['./ndx-data-grid-column.component.css']
})
export class ndxDataGridColumnComponent {
  initColumn: Partial<ndxDataGridColumn> = {
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

  defaultCallback = () => Promise.resolve(true);

}
