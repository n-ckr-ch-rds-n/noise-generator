import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetuneWidgetComponent } from './detune-widget.component';

describe('DetuneWidgetComponent', () => {
  let component: DetuneWidgetComponent;
  let fixture: ComponentFixture<DetuneWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetuneWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetuneWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
