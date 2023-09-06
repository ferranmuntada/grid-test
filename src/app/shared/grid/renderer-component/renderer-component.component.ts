import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-renderer-component',
  templateUrl: './renderer-component.component.html',
  styleUrls: ['./renderer-component.component.css'],
})
export class RendererComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @Input() cell: any;
  @Input() column: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.customCellTemplate();
  }


  customCellTemplate() {
    if(this.cell.component) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(this.column.loadComponent);
      if (factory != undefined) {
        let cm = this.viewContainerRef.createComponent(factory);
        (cm.instance as any).data = this.cell;
      }

      this.cdRef.detectChanges();
    }
  }
}
