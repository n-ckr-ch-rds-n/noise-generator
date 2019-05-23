import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorShellComponent } from './generator-shell.component';

describe('GeneratorShellComponent', () => {
  let component: GeneratorShellComponent;
  let fixture: ComponentFixture<GeneratorShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
