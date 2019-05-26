import {Component, Input, OnInit} from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { IOscillatorNode, IBaseAudioContext, IGainNode } from 'standardized-audio-context';
import {InstrumentService} from '../instrument.service';

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

  constructor(private audioContext: AudioContext,
              private instrumentService: InstrumentService) { }

  ngOnInit() {
    this.gainNode = this.audioContext.createGain();
  }

  startOscillator() {
    this.oscillator.start();
  }

  stopOscillator(): void {
    if (this.oscillator) { this.oscillator.stop(); }
  }

  connectOscillatorToSpeakers(): void {
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
  }

  play() {
    this.oscillator = this.audioContext.createOscillator();
    this.connectOscillatorToSpeakers();
    this.startOscillator();
  }

  stop() {
    this.stopOscillator();
  }

  switchHandler(switchedOn: boolean): void {
    if (switchedOn) {
      this.instrumentService.addOscillatorToBank(this);
    } else {
      this.instrumentService.removeOscillatorFromBank(this);
    }
  }
}
