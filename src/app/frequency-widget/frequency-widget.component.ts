import {Component, Input, OnInit} from '@angular/core';
import { IOscillatorNode, IBaseAudioContext } from 'standardized-audio-context';
import {AudioContext} from 'angular-audio-context';

@Component({
  selector: 'app-frequency-widget',
  templateUrl: './frequency-widget.component.html',
  styleUrls: ['./frequency-widget.component.scss']
})
export class FrequencyWidgetComponent implements OnInit {

  @Input()
  oscillator: IOscillatorNode<IBaseAudioContext>;

  constructor(private audioContext: AudioContext) { }

  ngOnInit() {
  }

  changeFrequency(event: any) {
    if (this.oscillator) { this.oscillator.frequency.setValueAtTime(event.target.valueAsNumber, this.audioContext.currentTime); }
  }

}
