import { Injectable } from '@angular/core';
import { IOscillatorNode, IBaseAudioContext, IAudioBufferSourceNode } from 'standardized-audio-context';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instrumentBank: Array<IOscillatorNode<IBaseAudioContext> | IAudioBufferSourceNode<IBaseAudioContext>> = [];

  constructor() { }

  addOscillatorToBank(oscillator: IOscillatorNode<IBaseAudioContext>) {
    this.instrumentBank.push(oscillator);
  }

  removeOscillatorFromBank(oscillator: IOscillatorNode<IBaseAudioContext>) {
    if (this.instrumentBank) {
      this.instrumentBank = this.instrumentBank
        .filter(instrument => instrument !== oscillator);
    }
  }
}
