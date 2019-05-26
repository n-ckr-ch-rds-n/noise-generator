import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IOscillatorNode, IBaseAudioContext, TOscillatorType } from 'standardized-audio-context';

@Component({
  selector: 'app-waveform-widget',
  templateUrl: './waveform-widget.component.html',
  styleUrls: ['./waveform-widget.component.scss']
})
export class WaveformWidgetComponent implements OnInit {
  waveTypes: Array<TOscillatorType> = ['sine', 'square', 'sawtooth', 'triangle'];

  @Output()
  selectedWaveType: EventEmitter<TOscillatorType> = new EventEmitter<TOscillatorType>();

  constructor() { }

  ngOnInit() {
  }

  selectWaveform(waveForm: TOscillatorType) {
    if (this.oscillator) { this.oscillator.type = waveForm; }
  }

}
