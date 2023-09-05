import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ndxDataGridComponent } from './ndx-data-grid.component';

describe('DxDataGridComponent', () => {
  let component: ndxDataGridComponent;
  let fixture: ComponentFixture<ndxDataGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ndxDataGridComponent]
    });
    fixture = TestBed.createComponent(ndxDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
