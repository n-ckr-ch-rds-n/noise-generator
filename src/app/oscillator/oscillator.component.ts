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
    if (this.oscillator) { this.oscillator.stop(); }
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

  toggleSwitch(switchedOn: boolean): void {
    switchedOn ? this.startOscillator() : this.stopOscillator();
  }
}
