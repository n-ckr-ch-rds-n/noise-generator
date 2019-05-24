import {Component, Input, OnInit} from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { IOscillatorNode, IBaseAudioContext, IGainNode, IDelayNode } from 'standardized-audio-context';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss']
})
export class OscillatorComponent implements OnInit {
  private oscillator: IOscillatorNode<IBaseAudioContext>;
  private gainNode: IGainNode<IBaseAudioContext>;
  private delayModule: IDelayNode<IBaseAudioContext>;

  @Input()
  number: number;

  constructor(private audioContext: AudioContext) { }

  ngOnInit() {
  }

  startOscillator() {
    this.stopOscillator();
    this.createOscillator();
    this.oscillator.start();
  }

  stopOscillator(): void {
    if (this.oscillator) { this.oscillator.stop(); } ;
  }

  createOscillator(): void {
    this.oscillator = this.audioContext.createOscillator();
    this.createGainNode(this.oscillator);
    this.gainNode.connect(this.audioContext.destination);
  }

  createGainNode(oscillator: IOscillatorNode<IBaseAudioContext>) {
    this.gainNode = this.audioContext.createGain();
    oscillator.connect(this.gainNode);
  }

  selectWaveform(event: any) {
    if (this.oscillator) { this.oscillator.type = event.target.value; }
  }

  changeFrequency(event: any) {
    this.oscillator.frequency.setValueAtTime(event.target.valueAsNumber, this.audioContext.currentTime);
  }

  changeVolume(event: any) {
    if (this.oscillator) { this.gainNode.gain.setValueAtTime(event.target.valueAsNumber, this.audioContext.currentTime) };
  }

  detune(event: any) {
    this.oscillator.detune.setValueAtTime(event.target.valueAsNumber, this.audioContext.currentTime);
  }

  addDelay() {
    this.removeDelay();
    if (this.oscillator) {
      this.delayModule = this.audioContext.createDelay();
      this.oscillator.connect(this.delayModule);
      this.delayModule.connect(this.gainNode);
    }
  }

  removeDelay() {
    if (this.delayModule) { this.delayModule.disconnect(); }
  }

  setDelayTime(event: any) {
    this.delayModule.delayTime.setValueAtTime(event.target.valueAsNumber, this.audioContext.currentTime);
  }

  toggleSwitch(event: any) {
    event.target.checked ? this.startOscillator() : this.stopOscillator();
  }
}
