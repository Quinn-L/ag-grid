// Type definitions for ag-grid v6.4.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { RenderedCell } from "./renderedCell";
import { RowNode } from "../entities/rowNode";
import { RowRenderer } from "./rowRenderer";
import { Column } from "../entities/column";
export declare class RenderedRow {
    static EVENT_RENDERED_ROW_REMOVED: string;
    private gridOptionsWrapper;
    private columnController;
    private $compile;
    private mainEventService;
    private context;
    private focusedCellController;
    private cellRendererService;
    private gridPanel;
    private ePinnedLeftRow;
    private ePinnedRightRow;
    private eBodyRow;
    private eFullWidthRow;
    private eAllRowContainers;
    private fullWidthRowComponent;
    private renderedCells;
    private scope;
    private rowNode;
    private rowIndex;
    private fullWidthRow;
    private fullWidthCellRenderer;
    private fullWidthCellRendererParams;
    private parentScope;
    private rowRenderer;
    private eBodyContainer;
    private eBodyContainerDF;
    private eFullWidthContainer;
    private ePinnedLeftContainer;
    private ePinnedLeftContainerDF;
    private ePinnedRightContainer;
    private ePinnedRightContainerDF;
    private destroyFunctions;
    private renderedRowEventService;
    private editingRow;
    private initialised;
    constructor(parentScope: any, rowRenderer: RowRenderer, eBodyContainer: HTMLElement, eBodyContainerDF: DocumentFragment, eFullWidthContainer: HTMLElement, ePinnedLeftContainer: HTMLElement, ePinnedLeftContainerDF: DocumentFragment, ePinnedRightContainer: HTMLElement, ePinnedRightContainerDF: DocumentFragment, node: RowNode, rowIndex: number);
    private setupRowContainers();
    private addDomData(eRowContainer);
    private setupFullWidthContainers();
    private addMouseWheelListenerToFullWidthRow();
    private setupFullWidthGroupContainers();
    private setupNormalContainers();
    init(): void;
    stopRowEditing(cancel: boolean): void;
    stopEditing(cancel?: boolean): void;
    startRowEditing(keyPress?: number, charPress?: string, sourceRenderedCell?: RenderedCell): void;
    private setEditingRow(value);
    private addDataChangedListener();
    private angular1Compile(element);
    private addColumnListener();
    private onDisplayedColumnsChanged(event);
    private onVirtualColumnsChanged(event);
    private onGridColumnsChanged();
    private refreshCellsIntoRow();
    private removeRenderedCells(colIds);
    private ensureCellInCorrectRow(renderedCell);
    private getOrCreateCell(column);
    private onRowSelected();
    private addRowSelectedListener();
    onMouseEvent(eventName: string, mouseEvent: MouseEvent): void;
    private addHoverFunctionality();
    private addHoverClass(hover);
    private addCellFocusedListener();
    forEachRenderedCell(callback: (renderedCell: RenderedCell) => void): void;
    private addNodeDataChangedListener();
    private setTopAndHeightCss();
    private addRowIds();
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    getRenderedCellForColumn(column: Column): RenderedCell;
    getCellForCol(column: Column): HTMLElement;
    destroy(): void;
    private destroyScope();
    isDataInList(rows: any[]): boolean;
    isGroup(): boolean;
    private refreshFullWidthComponent();
    private createFullWidthComponent();
    private destroyFullWidthComponent();
    private createFullWidthParams(eRow);
    private createGroupSpanningEntireRowCell(padding);
    private createChildScopeOrNull(data);
    private addStyleFromRowStyle();
    private addStyleFromRowStyleFunc();
    private createParams();
    private createEvent(event, eventSource);
    private createRowContainer(eParentDF, eParent);
    private onRowDblClick(event);
    onRowClick(event: MouseEvent): void;
    getRowNode(): any;
    refreshCells(colIds: string[], animate: boolean): void;
    private addClassesFromRowClassFunc();
    private addGridClasses();
    private addClassesFromRowClass();
}
