import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyWidgetComponent } from './frequency-widget.component';

describe('FrequencyWidgetComponent', () => {
  let component: FrequencyWidgetComponent;
  let fixture: ComponentFixture<FrequencyWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
