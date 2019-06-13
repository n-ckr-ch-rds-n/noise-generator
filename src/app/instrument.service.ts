import { Injectable } from '@angular/core';
import { IOscillatorNode, IBaseAudioContext, IAudioBufferSourceNode } from 'standardized-audio-context';
import {OscillatorComponent} from './oscillator/oscillator.component';
import {Instrument} from './instrument';
import {frequencyByKey} from './frequency.by.key';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instrumentBank: Array<Instrument> = [];
  activeOscillators: Array<Record<string, IOscillatorNode<IBaseAudioContext>>> = [];
  fxConfig = {
    oscillator1: {vibratoRate: 0, vibratoDepth: 0},
    oscillator2: {vibratoRate: 0, vibratoDepth: 0},
    oscillator3: {vibratoRate: 0, vibratoDepth: 0}
  };

  constructor() { }

  addInstrumentToBank(instrument: Instrument) {
    this.instrumentBank.push(instrument);
  }

  removeInstrumentFromBank(instrument: Instrument) {
    if (this.instrumentBank) {
      this.instrumentBank = this.instrumentBank
        .filter(inst => inst !== instrument);
    }
  }

  registerOscillator(key: string, oscillator: IOscillatorNode<IBaseAudioContext>) {
    this.activeOscillators.push({[key]: oscillator});
  }

  cleanOscillatorBank(key: string) {
    this.activeOscillators.forEach(oscillator => {
      if (oscillator[key]) {
        oscillator[key].stop();
      }
    });
    this.activeOscillators = this.activeOscillators
      .filter(oscillator => !oscillator[key]);
  }

  registerVibratoRate(oscillatorName: string, value: number) {
    this.fxConfig[oscillatorName].vibratoRate = value;
  }

  registerVibratoDepth(oscillatorName: string, value: number) {
    this.fxConfig[oscillatorName].vibratoDepth = value;
  }

  isValidKey(key: string): boolean {
    return Object.keys(frequencyByKey).includes(key);
  }
}
