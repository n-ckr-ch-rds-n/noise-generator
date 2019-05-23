import { Component, OnInit } from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { IOscillatorNode, IBaseAudioContext, TOscillatorType } from 'standardized-audio-context';

@Component({
  selector: 'app-generator-shell',
  templateUrl: './generator-shell.component.html',
  styleUrls: ['./generator-shell.component.scss']
})
export class GeneratorShellComponent implements OnInit {
  oscillator: IOscillatorNode<IBaseAudioContext>;
  oscillatorType: TOscillatorType;

  constructor(private audioContext: AudioContext) { }

  ngOnInit() {
  }

  startOscillator() {
    this.createOscillator();
    this.oscillator.start();
  }

  stopOscillator() {
    this.oscillator.stop();
  }

  createOscillator() {
    this.oscillator = this.audioContext.createOscillator();
    if (this.oscillatorType) this.oscillator.type = this.oscillatorType;
    this.oscillator.connect(this.audioContext.destination);
  }

  selectWaveform(waveForm: TOscillatorType) {
    if (this.oscillator) {
      this.oscillator.type = this.oscillatorType;
    }
  }

  changeFrequency(event: any) {
    console.log(event.target.valueAsNumber);
    this.oscillator.frequency.setValueAtTime(event.target.valueAsNumber, this.audioContext.currentTime);
  }
}
