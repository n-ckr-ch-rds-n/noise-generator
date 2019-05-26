import {Component, Input, OnInit} from '@angular/core';
import {AudioContext} from 'angular-audio-context';
import {IOscillatorNode, IBaseAudioContext, IGainNode, IDelayNode} from 'standardized-audio-context';
import vibrato from 'vibrato';
import {MatSliderChange} from '@angular/material';

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
  gainNode: IGainNode<IBaseAudioContext>;

  constructor(private audioContext: AudioContext) { }

  ngOnInit() {
    this.addVibrato(0, 0);
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
    if (this.delayModule) { this.delayModule.delayTime.setValueAtTime(event.value, this.audioContext.currentTime); }
  }

  addVibrato(rate?: number, depth?: number) {
    if (this.oscillator) { vibrato(this.audioContext, this.oscillator.frequency, { rate, depth }); }
  }

  changeVibratoRate(event: MatSliderChange) {
    this.addVibrato(event.value, null);
  }

  changeVibratoDepth(event: MatSliderChange) {
    this.addVibrato(null, event.value);
  }

  switchHandler(switchedOn: boolean) {
    switchedOn ? this.addDelay() : this.removeDelay();
  }
}
