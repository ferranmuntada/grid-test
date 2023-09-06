import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererComponentComponent } from './renderer-component.component';

describe('RendererComponentComponent', () => {
  let component: RendererComponentComponent;
  let fixture: ComponentFixture<RendererComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendererComponentComponent]
    });
    fixture = TestBed.createComponent(RendererComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
