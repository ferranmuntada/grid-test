import { ndxDataTypes } from "src/app/shared/grid/ndx-data-grid-column/ndx-data-grid-column.model";

export const CUSTOMERCOLUMNS = [
  {
    name: "ID",
    dataField: "ID",
    caption: "ID",
    dataType: ndxDataTypes.STRING,
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
    dataType: ndxDataTypes.STRING,
    alignment: "left",
    cssClass: "",
    width: "100",
    allowSorting: false,
    validationRule: {}
  }
];
