import {InstrumentService} from './instrument.service';

export class Instrument {
  constructor(public instrumentService: InstrumentService) {}
  stop(key: string): void {}
  play(key: string): void {}
}
