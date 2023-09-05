import { Component } from '@angular/core';
import { ndxDataGridColumn } from "../../shared/grid/ndx-data-grid-column/ndx-data-grid-column.model";
import { CustomersService } from "../services/customers.service";
import { Customer } from '../interfaces/customer.interface';
import { Observable } from "rxjs";
import { CUSTOMERCOLUMNS } from '../consts/grid-columns/customer-columns.consts';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  constructor(private customersService: CustomersService) {
  }
  customers$ :Observable<Customer[]> = this.customersService.getCustomers().pipe();
  columns: ndxDataGridColumn[] = CUSTOMERCOLUMNS;


    //Desabilito los botones de edición para que vaya por el menu.
    onToolbarPreparing_CustomersGrid(e: any) {
      let toolbarItems = e.toolbarOptions.items;
      toolbarItems.forEach(function (item: any) {
        item.options = {
          visible: false,
        };
      });
    }
    //Poner clase borde-editable segun si es editable o no la celda
    onCellPreparing_CustomersGrid($event: any) {
      const columnaCodigo: number = 0;
      if ($event?.rowType === 'data' && $event.columnIndex === columnaCodigo) {
        const clase: string = $event?.cellElement?.className;
        if ($event.row.isNewRow) {
          $event.cellElement.className = clase + ' borde-editable';
        }
      }
    }
    //Desabilito la modificación del campo codigo
    onEditorPreparing_CustomersGrid($event: any) {
      if ($event.parentType === 'dataRow' && $event.dataField === 'codigo') {
        if ($event.row.isNewRow) {
          $event.editorOptions.disabled = false;
        } else {
          $event.editorOptions.disabled = true;
        }
      }
    }
}
