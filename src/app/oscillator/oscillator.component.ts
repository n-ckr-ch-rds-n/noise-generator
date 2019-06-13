import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { IOscillatorNode, IBaseAudioContext, IGainNode, TOscillatorType } from 'standardized-audio-context';
import {InstrumentService} from '../instrument.service';
import {frequencyByKey} from '../frequency.by.key';
import {FxBoxComponent} from '../fx-box/fx-box.component';
import {Instrument} from '../instrument';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss']
})
export class OscillatorComponent extends Instrument implements OnInit {
  public oscillator: IOscillatorNode<IBaseAudioContext>;
  public gainNode: IGainNode<IBaseAudioContext>;
  waveType: TOscillatorType;
  detuneValue = 0;

  @Input()
  number: number;

  @ViewChild(FxBoxComponent)
  fxBox: FxBoxComponent;

  constructor(private audioContext: AudioContext, public instrumentService: InstrumentService) {
    super(instrumentService);
  }

  ngOnInit() { }

  startOscillator(): void {
    this.oscillator.start();
  }

  stopOscillator(key: string): void {
    this.instrumentService.cleanOscillatorBank(key);
  }

  connectOscillatorToSpeakers(): void {
    this.gainNode = this.audioContext.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
  }

  configureOscillator(key: string): void {
    this.oscillator.type = this.waveType;
    this.setFrequency(key);
    this.configureEffects();
  }

  configureEffects() {
    const oscillatorName = `oscillator${this.number}`;
    this.fxBox.addVibrato(this.oscillator, this.instrumentService.fxConfig[oscillatorName].vibratoRate,
      this.instrumentService.fxConfig[oscillatorName].vibratoDepth);
  }

  setFrequency(key: string) {
    this.oscillator.frequency.setValueAtTime(frequencyByKey[key], this.audioContext.currentTime);
    this.oscillator.detune.setValueAtTime(this.detuneValue, this.audioContext.currentTime);
  }

  play(key: string): void {
    if (this.instrumentService.isValidKey(key)) {
      this.oscillator = this.audioContext.createOscillator();
      this.instrumentService.registerOscillator(key, this.oscillator);
      this.configureOscillator(key);
      this.connectOscillatorToSpeakers();
      this.startOscillator();
    }
  }

  stop(key: string) {
    this.stopOscillator(key);
  }

  switchHandler(switchedOn: boolean): void {
    if (switchedOn) {
      this.instrumentService.addInstrumentToBank(this);
    } else {
      this.instrumentService.removeInstrumentFromBank(this);
    }
  }
}
