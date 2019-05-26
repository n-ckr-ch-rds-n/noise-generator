import { Injectable } from '@angular/core';
import { IOscillatorNode, IBaseAudioContext, IAudioBufferSourceNode } from 'standardized-audio-context';
import {OscillatorComponent} from './oscillator/oscillator.component';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instrumentBank: Array<any> = [];

  constructor() { }

  addOscillatorToBank(oscillator: OscillatorComponent) {
    this.instrumentBank.push(oscillator);
  }

  removeOscillatorFromBank(oscillator: OscillatorComponent) {
    if (this.instrumentBank) {
      this.instrumentBank = this.instrumentBank
        .filter(instrument => instrument !== oscillator);
    }
  }
}
