import {Component, Input, OnInit} from '@angular/core';
import {AudioContext} from 'angular-audio-context';
import {IOscillatorNode, IBaseAudioContext, IGainNode, IDelayNode} from 'standardized-audio-context';
import vibrato from 'vibrato';
import {MatSliderChange} from '@angular/material';
import {InstrumentService} from '../instrument.service';

@Component({
  selector: 'app-fx-box',
  templateUrl: './fx-box.component.html',
  styleUrls: ['./fx-box.component.scss']
})
export class FxBoxComponent implements OnInit {
  private delayModule: IDelayNode<IBaseAudioContext>;

  @Input()
  oscillator: IOscillatorNode<IBaseAudioContext>;

  @Input()
  oscillatorNumber: number;

  @Input()
  gainNode: IGainNode<IBaseAudioContext>;

  constructor(private audioContext: AudioContext,
              private instrumentService: InstrumentService) { }

  ngOnInit() { }

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
    if (this.delayModule) { this.delayModule.delayTime.setValueAtTime(event.value, this.audioContext.currentTime); }
  }

  addVibrato(oscillator: any, rate?: number, depth?: number) {
    vibrato(this.audioContext, oscillator.frequency, { rate, depth });
  }

  changeVibratoRate(event: MatSliderChange) {
    this.instrumentService.registerVibratoRate(`oscillator${this.oscillatorNumber}`, event.value);
    if (this.oscillator) { this.addVibrato(this.oscillator, event.value, null); }
  }

  changeVibratoDepth(event: MatSliderChange) {
    this.instrumentService.registerVibratoDepth(`oscillator${this.oscillatorNumber}`, event.value);
    if (this.oscillator) { this.addVibrato(this.oscillator, null, event.value); }
  }

  switchHandler(switchedOn: boolean) {
    switchedOn ? this.addDelay() : this.removeDelay();
  }
}
