import {Component, Input, OnInit} from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { IOscillatorNode, IBaseAudioContext, IGainNode, TOscillatorType } from 'standardized-audio-context';
import {InstrumentService} from '../instrument.service';
import {frequencyByKey} from '../frequency.by.key';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss']
})
export class OscillatorComponent implements OnInit {
  private oscillator: IOscillatorNode<IBaseAudioContext>;
  private gainNode: IGainNode<IBaseAudioContext>;
  waveType: TOscillatorType;

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

  stopOscillator(key: string): void {
    this.instrumentService.cleanOscillatorBank(key);
  }

  connectOscillatorToSpeakers(): void {
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination as IBaseAudioContext);
  }

  configureOscillator(key: string) {
    this.oscillator.type = this.waveType;
    this.oscillator.frequency.setValueAtTime(frequencyByKey[key], this.audioContext.currentTime);
  }

  play(key: string): void {
    if (this.isValidKey(key)) {
      this.oscillator = this.audioContext.createOscillator();
      this.instrumentService.registerOscillator(key, this.oscillator);
      this.configureOscillator(key);
      this.connectOscillatorToSpeakers();
      this.startOscillator();
    }
  }

  isValidKey(key: string): boolean {
    return Object.keys(frequencyByKey).includes(key);
  }

  stop(key: string) {
    this.stopOscillator(key);
  }

  switchHandler(switchedOn: boolean): void {
    if (switchedOn) {
      this.instrumentService.addOscillatorToBank(this);
    } else {
      this.instrumentService.removeOscillatorFromBank(this);
    }
  }
}
