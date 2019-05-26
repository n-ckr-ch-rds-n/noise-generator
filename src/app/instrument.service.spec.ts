import { TestBed } from '@angular/core/testing';

import { InstrumentService } from './instrument.service';

describe('InstrumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstrumentService = TestBed.get(InstrumentService);
    expect(service).toBeTruthy();
  });
});
