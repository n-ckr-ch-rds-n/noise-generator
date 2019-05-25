import { Component, OnInit } from '@angular/core';
import {AudioContext, IAudioContext} from 'standardized-audio-context';

@Component({
  selector: 'app-noise-machine',
  templateUrl: './noise-machine.component.html',
  styleUrls: ['./noise-machine.component.scss']
})
export class NoiseMachineComponent implements OnInit {
  audioContext: IAudioContext;

  constructor() { }

  ngOnInit() {
    this.audioContext = new AudioContext();
  }

  generateNoise() {
    const bufferSize = 2 * this.audioContext.sampleRate;
    const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.audioContext.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;
    whiteNoise.start(0);

    whiteNoise.connect(this.audioContext.destination);
  }


}
