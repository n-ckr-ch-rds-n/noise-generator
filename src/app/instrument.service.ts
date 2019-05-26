import { Injectable } from '@angular/core';
import { IOscillatorNode, IBaseAudioContext, IAudioBufferSourceNode } from 'standardized-audio-context';
import {OscillatorComponent} from './oscillator/oscillator.component';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instrumentBank: Array<OscillatorComponent> = [];
  activeOscillators: Array<IOscillatorNode<IBaseAudioContext>> = [];

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

  registerOscillator(oscillator: IOscillatorNode<IBaseAudioContext>) {
    this.activeOscillators.push(oscillator);
  }

  cleanOscillatorBank() {
    this.activeOscillators.forEach(oscillator => {
      oscillator.stop();
    });
    this.activeOscillators = [];
  }
}
