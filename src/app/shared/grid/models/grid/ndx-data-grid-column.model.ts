import { Type } from "@angular/core";
/*
export enum ndxDataTypes {
   STRING = "string",
   BUTTONS = "buttons"
  };
*/
export type ndxCallbackEvent = ($event: any) => void;

export type ndxAsyncRule = {
  callback: ($data: any) => Promise<boolean>;
  message: string;
}
export type ndxValidationRules = {
  required: boolean;
  stringLength:  Date | number ;
  asyncRule: ndxAsyncRule;
}

export type ndxDataGridColumn = {
  name: string;
  type: string;
  dataField: string;
  caption: string;
  dataType: string;
  alignment: string;
  cssClass: string;
  width: string;
  allowSorting: boolean;
  validationRule: Partial<ndxValidationRules>;
  cellTemplate: string;
  loadComponent?: Type<any>;
  sortOrderChange: ($data: any) => void;
  calculateDisplayValue: ($data: any) => any;
}
