import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Customer } from '../interfaces/customer.interface';
import { CUSTOMERS } from '../consts/mocks/customer.const';



@Injectable()
export class CustomersService {
customers: Customer[] = CUSTOMERS

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }

  static validateAddress = ($data: any) => {
    console.log('validateAddress recibe ', $data);
    return Promise.resolve(true);
  };

  static sortOrderChangeAddress = ($data: any) => {
    console.log('sortOrderChangeAddress recibe ', $data);
  };

  static calculateDisplayValue = ($data: any) : any => {
    //console.log('calculateDisplayValue recibe ', $data);
    return ` "$" + ${$data?.CompanyName}`;
  };

    //Desabilito los botones de edición para que vaya por el menu.
    static onToolbarPreparing_CustomersGrid($event: any) {
      console.log('onToolbarPreparing_CustomersGrid', $event);
      let toolbarItems = $event.toolbarOptions.items;
      toolbarItems.forEach(function (item: any) {
        item.options = {
          visible: false,
        };
      });
    }
    //Poner clase borde-editable segun si es editable o no la celda
    static onCellPrepared_CustomersGrid($event: any) {
      const columnaCodigo: number = 0;
      if ($event?.rowType === 'data' && $event.columnIndex === columnaCodigo) {
        const clase: string = $event?.cellElement?.className;
        if ($event.row.isNewRow) {
          $event.cellElement.className = clase + ' borde-editable';
        }
      }
    }
    //Desabilito la modificación del campo codigo
    static onEditorPreparing_CustomersGrid($event: any) {
      if ($event.parentType === 'dataRow' && $event.dataField === 'codigo') {
        if ($event.row.isNewRow) {
          $event.editorOptions.disabled = false;
        } else {
          $event.editorOptions.disabled = true;
        }
      }
    }
}
