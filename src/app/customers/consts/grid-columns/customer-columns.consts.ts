import { CheckboxComponent } from 'src/app/shared/checkbox/checkbox.component';
import { ndxAsyncRule } from '../../../shared/grid/ndx-data-grid/ndx-data-grid-column.model';
import { AddressComponent } from '../../address/address.component';
import { IdComponent } from '../../id/id.component';

export const CUSTOMERCOLUMNS = [
  {
    name: "ID",
    dataField: "ID",
    caption: "ID",
    dataType: "number",
    alignment: "left",
    cssClass: "",
    width: "100",
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
        callback: () => { return Promise.resolve(true) },
        message: "bad format companyname"
      }
    }
  },
  {
    name: "Address",
    dataField: "Address",
    caption: "Address",
    dataType: "string",
    alignment: "left",
    cssClass: "",
    width: "100",
    allowSorting: false,
    validationRule: {
      required: true,
      stringLength: 200,
      asyncRule: {
        callback: () => { return Promise.resolve(true) },
        message: "bad format companyname"
      }
    },
    cellTemplate: "AddressTemplate",
    loadComponent: AddressComponent
  }
];
