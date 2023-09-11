export type ndxSorting = {
  ascendingText: string,
  clearText: string,
  descendingText: string,
  mode: string,
  showSortIndexes: boolean
}

export type ndxPaging = {
  enabled: boolean;
  pageIndex: number;
  pageSize: number;
}

export type ndxKeyboardNavigation = {
  editOnKeyPress: boolean,
  enabled: boolean,
  enterKeyAction: string,
  enterKeyDirection: string
  }

export type ndxFilterRow = {
  visible: boolean
}

export type ndxExport = {
  allowExportSelectedData: boolean,
  enabled: boolean,
}

export type ndxSelection =  {
  allowSelectAll: boolean,
  deferred: boolean,
  mode: string,
  selectAllMode: string,
  showCheckBoxesMode: string
}

export type ndxEditing = {
  mode: string,
  allowAdding: boolean,
  allowDeleting: boolean,
  allowUpdating: boolean,
  useIcons: boolean,
  selectTextOnEditStart: boolean
}

export type ndxDataGrid = {
  keyExpr: string;
  focusedRowEnabled: boolean;
  focusedRowIndex: number;
  autoNavigateToFocusedRow: boolean;
  showColumnLines: boolean;
  showRowLines: boolean;
  showBorders: boolean;
  rowAlternationEnabled: boolean;
  allowColumnResizing: boolean;
  allowColumnReordering: boolean;
  columnResizingMode: string;
  repaintChangesOnly: boolean;
  remoteOperations: string;
  width: string;
  height: string;
  onToolbarPreparing: ($data: any) => void;
  onEditorPreparing: ($data: any) => void;
  onCellPrepared: ($data: any) => void;
  sorting: Partial<ndxSorting>;
  paging: Partial<ndxPaging>;
  keyboardNavigation: Partial<ndxKeyboardNavigation>;
  filterRow: Partial<ndxFilterRow>;
  export: Partial<ndxExport>;
  selection: Partial<ndxSelection>;
  editing: Partial<ndxEditing>;
}
