import {Component} from '@angular/core';
import {Customer, CustomersService} from "../services/customers.service";
import {Observable} from "rxjs";
import {ndxDataGridColumn} from "../../shared/ndx-data-grid-column/ndx-data-grid-column.model";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  constructor(private customersService: CustomersService) {
  }
  customers$ :Observable<Customer[]> = this.customersService.getCustomers().pipe();
  columns: ndxDataGridColumn[] = [
    {
      name: "ID",
      dataField: "ID",
      caption: "ID",
      dataType: "number",
      alignment: "left",
      cssClass: "",
      width: "100",
      allowSorting: false,
      validationRule: {}
    },
    {
    name: "CompanyName",
    dataField: "CompanyName",
    caption: "CompanyName",
    dataType: "string",
    alignment: "left",
    cssClass: "",
    width: "100",
    allowSorting: false,
    validationRule: {}
  } ];


}
