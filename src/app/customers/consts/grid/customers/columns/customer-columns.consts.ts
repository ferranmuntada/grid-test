import { ndxDataGridColumn } from 'src/app/shared/grid/models/columns/ndx-data-grid-column.model';
import { AddressComponent } from '../../../../address/address.component';
import { IdComponent } from '../../../../id/id.component';
import { CustomersService } from '../../../../services/customers.service';

export const CUSTOMERCOLUMNS: Partial<ndxDataGridColumn>[] = [
  {
    name: "ID",
    dataField: "ID",
    caption: "ID",
    dataType: "number",
    alignment: "left",
    allowSorting: false,
    validationRule: {
      required: {},
      stringLength: { min:1, max:3 },
    },
    cellTemplate: 'IdTemplate', // Esto será el identificador para nuestra plantilla personalizada
    loadComponent: IdComponent,
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
    validationRule: {
      required: {},
      stringLength: { min:2, max:400 },
      asyncRule: {
        validationCallback: ($data: any) => { return Promise.resolve(true) },
        message: "bad format companyname"
      }
    }
  },
  {
    name: "Address",
    dataField: "Address",
    caption: "Address",
    dataType: "string",
    cssClass: "",
    allowSorting: true,
    validationRule: {
      required: {},
      stringLength: { min:2, max:400 },
      asyncRule: {
        validationCallback: CustomersService.validateAddress,
        message: "bad format companyname"
      }
    },
    cellTemplate: "AddressTemplate",
    loadComponent: AddressComponent,
    sortOrderChange: CustomersService.sortOrderChangeAddress
  },
  {
    name: "Calculatet",
    caption: "calculateDisplay",
    dataType: "string",
    alignment: "left",
    cssClass: "",
    width: "100",
    allowSorting: true,
    calculateDisplayValue: CustomersService.calculateDisplayValue
  }
];
