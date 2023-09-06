import { CheckboxComponent } from 'src/app/shared/checkbox/checkbox.component';
import { ndxAsyncRule } from './../../../shared/grid/ndx-data-grid-column/ndx-data-grid-column.model';

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
    cellTemplate: 'custom', // Esto será el identificador para nuestra plantilla personalizada
    loadComponent: CheckboxComponent,
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
    cellTemplate: 'custom', // Esto será el identificador para nuestra plantilla personalizada
    loadComponent: CheckboxComponent,
    validationRule: {
      required: true,
      stringLength: 200,
      asyncRule: {
        callback: () => { return Promise.resolve(true) },
        message: "bad format companyname"
      }
    }
  }
];
