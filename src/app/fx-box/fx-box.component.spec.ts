import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxBoxComponent } from './fx-box.component';

describe('FxBoxComponent', () => {
  let component: FxBoxComponent;
  let fixture: ComponentFixture<FxBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
