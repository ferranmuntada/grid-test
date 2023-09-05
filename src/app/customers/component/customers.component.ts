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

}
