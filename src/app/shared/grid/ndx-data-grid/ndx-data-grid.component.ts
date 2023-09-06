import { AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ndxDataGridColumn } from "../ndx-data-grid-column/ndx-data-grid-column.model";
@Component({
  selector: 'ndx-data-grid',
  templateUrl: './ndx-data-grid.component.html',
  styleUrls: ['./ndx-data-grid.component.css']
})
export class ndxDataGridComponent {
  @Input() dataSource: any;
  @Input() columns: Partial<ndxDataGridColumn>[] = [];

  defaultCallback = () => Promise.resolve(true);
  /** end prueba */

  @Output() toolbarPreparing: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() editorPreparing: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() cellPrepared: EventEmitter<any> =
    new EventEmitter<any>();

  constructor() { }

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
