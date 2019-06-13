import { Component, OnInit } from '@angular/core';
import {AudioContext, IAudioBuffer, IAudioContext,
  IAudioBufferSourceNode, IBaseAudioContext, IBiquadFilterNode} from 'standardized-audio-context';
import {MatSliderChange} from '@angular/material';
import {InstrumentService} from '../instrument.service';
import {Instrument} from '../instrument';

@Component({
  selector: 'app-noise-machine',
  templateUrl: './noise-machine.component.html',
  styleUrls: ['./noise-machine.component.scss']
})
export class NoiseMachineComponent extends Instrument implements OnInit {
  audioContext: IAudioContext;
  whiteNoise: IAudioBufferSourceNode<IBaseAudioContext>;
  filter: IBiquadFilterNode<IBaseAudioContext>;

  constructor(public instrumentService: InstrumentService) {
    super(instrumentService);
  }

  ngOnInit() {
    this.audioContext = new AudioContext();
    this.initialiseFilter();
  }

  initialiseFilter(): void {
    this.filter = this.audioContext.createBiquadFilter();
    this.filter.type = 'lowpass';
  }

  generateNoise() {
    this.whiteNoise = this.audioContext.createBufferSource();
    this.whiteNoise.buffer = this.createNoiseBuffer();
    this.whiteNoise.loop = true;
    this.whiteNoise.start(0);
    this.whiteNoise.connect(this.filter);
    this.filter.connect(this.audioContext.destination);
  }

  createNoiseBuffer(): IAudioBuffer {
    const bufferSize = 2 * this.audioContext.sampleRate;
    const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    return noiseBuffer;
  }

  stop(): void {
    if (this.whiteNoise) { this.whiteNoise.stop(); }
  }

  setFilterFrequency(event: MatSliderChange) {
    this.filter.frequency.setValueAtTime(event.value, this.audioContext.currentTime);
  }

  switchHandler(switchedOn: boolean): void {
    if (switchedOn) {
      this.instrumentService.addInstrumentToBank(this);
    } else {
      this.instrumentService.removeInstrumentFromBank(this);
    }
  }

  play() {
    this.generateNoise();
  }
}
