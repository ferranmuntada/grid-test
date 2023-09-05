export type ndxDataTypes = "string" | "number" | "date";

export type ndxAsyncRule = {
  callback: () => Promise<boolean>;
  message: string;
}
export type ndxValidationRules = {
  required: boolean;
  stringLength:  Date | number ;
  asyncRule: ndxAsyncRule;
}

export type ndxDataGridColumn = {
  name: string;
  dataField: string;
  caption: string;
  dataType: ndxDataTypes;
  alignment: string;
  cssClass: string;
  width: string;
  allowSorting: boolean
  validationRule: Partial<ndxValidationRules>;
}
