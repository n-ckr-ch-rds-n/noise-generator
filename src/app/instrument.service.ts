import { Injectable } from '@angular/core';
import { IOscillatorNode, IBaseAudioContext, IAudioBufferSourceNode } from 'standardized-audio-context';
import {OscillatorComponent} from './oscillator/oscillator.component';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instrumentBank: Array<OscillatorComponent> = [];
  activeOscillators: Array<Record<string, IOscillatorNode<IBaseAudioContext>>> = [];
  fxConfig = {
    oscillator1: {vibratoRate: 0, vibratoDepth: 0},
    oscillator2: {vibratoRate: 0, vibratoDepth: 0},
    oscillator3: {vibratoRate: 0, vibratoDepth: 0}
  };

  constructor() { }

  addOscillatorToBank(oscillatorComponent: OscillatorComponent) {
    this.instrumentBank.push(oscillatorComponent);
  }

  removeOscillatorFromBank(oscillatorComponent: OscillatorComponent) {
    if (this.instrumentBank) {
      this.instrumentBank = this.instrumentBank
        .filter(instrument => instrument !== oscillatorComponent);
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
}
