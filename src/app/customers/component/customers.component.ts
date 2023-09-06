import { AfterContentInit, Component, TemplateRef, ViewChild } from '@angular/core';
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
export class CustomersComponent implements AfterContentInit {
  constructor(private customersService: CustomersService) {
  }
  ngAfterContentInit(): void {
    // this.columns.push({
    //   type: "buttons",
    //   cssClass:"borde-editable",
    //   cellTemplate:this.buttonsTemplateRef
    // });
  }
  customers$ :Observable<Customer[]> = this.customersService.getCustomers().pipe();
  columns: Partial<ndxDataGridColumn>[] = CUSTOMERCOLUMNS;
  @ViewChild('buttonsTemplate', { static: true })
  buttonsTemplateRef: TemplateRef<any> | undefined;



  //Desabilito los botones de edición para que vaya por el menu.
  onToolbarPreparing_CustomersGrid($event: any) {
    let toolbarItems = $event.toolbarOptions.items;
    toolbarItems.forEach(function (item: any) {
      item.options = {
        visible: false,
      };
    });
  }
  //Poner clase borde-editable segun si es editable o no la celda
  onCellPrepared_CustomersGrid($event: any) {
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

  myCellTemplateOption($event: any) {
    console.log('myCellTemplateOption', $event);
  }
}
