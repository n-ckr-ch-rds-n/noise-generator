import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveformWidgetComponent } from './waveform-widget.component';

describe('WaveformWidgetComponent', () => {
  let component: WaveformWidgetComponent;
  let fixture: ComponentFixture<WaveformWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaveformWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveformWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
