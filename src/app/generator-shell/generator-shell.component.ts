import { Component, OnInit } from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { IOscillatorNode, IBaseAudioContext } from 'standardized-audio-context';

@Component({
  selector: 'app-generator-shell',
  templateUrl: './generator-shell.component.html',
  styleUrls: ['./generator-shell.component.scss']
})
export class GeneratorShellComponent implements OnInit {
  oscillator: IOscillatorNode<IBaseAudioContext>;

  constructor(private audioContext: AudioContext) { }

  ngOnInit() {
  }

  startOscillator() {
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.connect(this.audioContext.destination);
    this.oscillator.start();
  }

  stopOscillator() {
    this.oscillator.stop();
  }

}
