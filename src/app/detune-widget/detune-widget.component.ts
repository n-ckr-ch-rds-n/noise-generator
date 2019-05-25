import {Component, Input, OnInit} from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { IOscillatorNode, IBaseAudioContext } from 'standardized-audio-context';


@Component({
  selector: 'app-detune-widget',
  templateUrl: './detune-widget.component.html',
  styleUrls: ['./detune-widget.component.scss']
})
export class DetuneWidgetComponent implements OnInit {

  @Input()
  oscillator: IOscillatorNode<IBaseAudioContext>;

  constructor(private audioContext: AudioContext) { }

  ngOnInit() {
  }

  detune(event: any) {
    this.oscillator.detune.setValueAtTime(event.target.valueAsNumber, this.audioContext.currentTime);
  }

}
