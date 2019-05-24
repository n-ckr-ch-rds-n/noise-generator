import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseMachineComponent } from './noise-machine.component';

describe('NoiseMachineComponent', () => {
  let component: NoiseMachineComponent;
  let fixture: ComponentFixture<NoiseMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiseMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiseMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
