import {Component, Input, OnInit} from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { IOscillatorNode, IBaseAudioContext, IGainNode, TOscillatorType } from 'standardized-audio-context';
import {InstrumentService} from '../instrument.service';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss']
})
export class OscillatorComponent implements OnInit {
  private oscillator: IOscillatorNode<IBaseAudioContext>;
  private gainNode: IGainNode<IBaseAudioContext>;
  private waveType: TOscillatorType;

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
    this.instrumentService.cleanOscillatorBank();
  }

  connectOscillatorToSpeakers(): void {
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination as IBaseAudioContext);
  }

  configureOscillator() {
    this.oscillator.type = this.waveType;
  }

  play() {
    this.oscillator = this.audioContext.createOscillator();
    this.instrumentService.registerOscillator(this.oscillator);
    this.configureOscillator();
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
