import { TemplateRef, Type } from "@angular/core";
/*
export enum ndxDataTypes {
   STRING = "string",
   BUTTONS = "buttons"
  };
*/
export type ndxStringLengthRule = {
  ignoreEmptyValue: boolean;
  min: number;
  max: number;
  message: string;
  trim: boolean;
}

export type ndxRequiredRule = {
  message: string;
  trim: boolean;
}

export type ndxAsyncRule = {
  ignoreEmptyValue: boolean;
  message: string;
  reevaluate: boolean;
  validationCallback: ($data: any) => Promise<boolean>;
}

export type ndxValidationRules = {
  required: Partial<ndxRequiredRule>;
  stringLength:  Partial<ndxStringLengthRule>;
  asyncRule: Partial<ndxAsyncRule>;
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
  loadComponent: Type<any>;
  sortOrderChange: ($data: any) => void;
  calculateDisplayValue: ($data: any) => any;
}
