import { Injectable } from '@angular/core';
import { IOscillatorNode, IBaseAudioContext, IAudioBufferSourceNode } from 'standardized-audio-context';
import {OscillatorComponent} from './oscillator/oscillator.component';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instrumentBank: Array<OscillatorComponent> = [];
  activeOscillators: Array<Record<string, IOscillatorNode<IBaseAudioContext>>> = [];

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
    console.log(this.activeOscillators);
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
}
