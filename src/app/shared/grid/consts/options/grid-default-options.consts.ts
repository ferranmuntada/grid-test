
const defaultToolbarPreparing = ($event: any): void => {
  let toolbarItems = $event.toolbarOptions.items;
  toolbarItems.forEach(function (item: any) {
    item.options = {
      visible: false,
    };
  });
}

export const GRID_DEFAULT_OPTIONS = {
  focusedRowIndex: 0,
  showColumnLines: true,
  showRowLines: true,
  showBorders: true,
  rowAlternationEnabled: true,
  allowColumnResizing: true,
  allowColumnReordering: true,
  columnResizingMode: 'nextColumn',
  repaintChangesOnly: true,
  remoteOperations: '{ groupPaging: true }',
  width: 'auto',
  height: 'auto',
  sorting: {
    mode: 'multiple'
  },
  onToolbarPreparing: defaultToolbarPreparing,
  onEditorPreparing: ($data: any) => {},
  onCellPrepared: ($data: any) => {},
  paging: {
    enabled: true,
    pageIndex: 0,
    pageSize: 20
  },
  keyboardNavigation: {
    editOnKeyPress: false,
    enabled: true,
    enterKeyAction: "moveFocus",
    enterKeyDirection: "row"
  },
  filterRow: {
    visible: true
  },
  export: {
    enabled: false,
    allowExportSelectedData: false
  },
  selection: {
    allowSelectAll: true,
    deferred: true,
    mode: 'none',
    selectAllMode: 'allPages',
    showCheckBoxesMode: 'onClick'
  },
  editing: {
    mode: 'batch',
    allowAdding: false,
    allowDeleting: false,
    allowUpdating: false,
    useIcons: true,
    selectTextOnEditStart: true
  },
  loadPanel: {
    enabled: false
  },
  scrolling: {
    useNative: false,
    showScrollbar: 'never'
  }
}

