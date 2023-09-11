import { ndxDataGrid } from 'src/app/shared/grid/models/options/ndx-data-grid.model';

  //Desabilito los botones de edición para que vaya por el menu.
  const toolbarPreparing_CustomersGrid = ($event: any) => {
    console.log('onToolbarPreparing_CustomersGrid not needed , equals to defaultOptions!!', $event);
    let toolbarItems = $event.toolbarOptions.items;
    toolbarItems.forEach(function (item: any) {
      item.options = {
        visible: false,
      };
    });
  };

export const CUSTOMEROPTIONS: Partial<ndxDataGrid> = {
  keyExpr: 'ID',
  width: "900",
  height: "800",
  onToolbarPreparing: toolbarPreparing_CustomersGrid,
  paging: {enabled: true, pageSize: 6},
  filterRow: {visible: false},
  editing: {allowAdding: true, allowUpdating: true, allowDeleting: true}
}

