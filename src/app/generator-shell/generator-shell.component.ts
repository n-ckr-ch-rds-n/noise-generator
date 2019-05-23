import { Component, OnInit } from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { IOscillatorNode, IBaseAudioContext, IGainNode } from 'standardized-audio-context';

@Component({
  selector: 'app-generator-shell',
  templateUrl: './generator-shell.component.html',
  styleUrls: ['./generator-shell.component.scss']
})
export class GeneratorShellComponent implements OnInit {
  oscillator: IOscillatorNode<IBaseAudioContext>;
  private gainNode: IGainNode<IBaseAudioContext>;

  constructor(private audioContext: AudioContext) { }

  ngOnInit() {
  }

  startOscillator() {
    this.createOscillator();
    this.oscillator.start();
  }

  stopOscillator(): void {
    this.oscillator.stop();
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
    this.gainNode.gain.setValueAtTime(event.target.valueAsNumber, this.audioContext.currentTime);
  }
}
