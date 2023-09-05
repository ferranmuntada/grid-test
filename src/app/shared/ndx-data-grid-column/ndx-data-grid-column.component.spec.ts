import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ndxDataGridColumnComponent } from './ndx-data-grid-column.component';

describe('DxDataGridColumnComponent', () => {
  let component: ndxDataGridColumnComponent;
  let fixture: ComponentFixture<ndxDataGridColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ndxDataGridColumnComponent]
    });
    fixture = TestBed.createComponent(ndxDataGridColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
