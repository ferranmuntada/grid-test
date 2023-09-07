import { AfterContentInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { ndxDataGridColumn } from "../../shared/grid/models/options/ndx-data-grid-column.model";
import { CustomersService } from "../services/customers.service";
import { Customer } from '../interfaces/customer.interface';
import { Observable } from "rxjs";
import { CUSTOMERCOLUMNS } from '../consts/grid/customers/columns/customer-columns.consts';
import { ndxDataGrid } from 'src/app/shared/grid/models/columns/ndx-data-grid.model';
import { CUSTOMEROPTIONS } from '../consts/grid/customers/options/customer-options.consts';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  constructor(private customersService: CustomersService) {
  }

  customers$ :Observable<Customer[]> = this.customersService.getCustomers().pipe();
  options: Partial<ndxDataGrid> = CUSTOMEROPTIONS;
  columns: Partial<ndxDataGridColumn>[] = CUSTOMERCOLUMNS;

}
