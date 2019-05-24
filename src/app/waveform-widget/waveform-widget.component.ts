import {Component, Input, OnInit} from '@angular/core';
import { IOscillatorNode, IBaseAudioContext } from 'standardized-audio-context';

@Component({
  selector: 'app-waveform-widget',
  templateUrl: './waveform-widget.component.html',
  styleUrls: ['./waveform-widget.component.scss']
})
export class WaveformWidgetComponent implements OnInit {

  @Input()
  oscillator: IOscillatorNode<IBaseAudioContext>;

  constructor() { }

  ngOnInit() {
  }

  selectWaveform(event: any) {
    if (this.oscillator) { this.oscillator.type = event.target.value; }
  }

}
