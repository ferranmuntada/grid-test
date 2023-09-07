import { CustomersService } from 'src/app/customers/services/customers.service';
export const CUSTOMEROPTIONS = {
  keyExpr: 'ID',
  width: "900",
  height: "800",
  onToolbarPreparing: CustomersService.onToolbarPreparing_CustomersGrid,
  onEditorPreparing: CustomersService.onEditorPreparing_CustomersGrid,
  onCellPrepared: CustomersService.onCellPrepared_CustomersGrid,
  paging: {enabled: true, pageSize: 6},
  filterRow: {visible: false}
  /*
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
 */
}

