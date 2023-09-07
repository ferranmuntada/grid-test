import { AddressComponent } from '../../../../address/address.component';
import { IdComponent } from '../../../../id/id.component';
import { CustomersService } from '../../../../services/customers.service';

export const CUSTOMERCOLUMNS = [
  {
    name: "ID",
    dataField: "ID",
    caption: "ID",
    dataType: "number",
    alignment: "left",

    allowSorting: false,
    validationRule: {
      required: true,
      stringLength: 2
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
      required: true,
      stringLength: 200,
      asyncRule: {
        callback: ($data: any) => { return Promise.resolve(true) },
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
      required: true,
      stringLength: 200,
      asyncRule: {
        callback: CustomersService.validateAddress,
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
