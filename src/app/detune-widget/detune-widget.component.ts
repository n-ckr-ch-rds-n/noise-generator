import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AudioContext } from 'angular-audio-context';
import { IOscillatorNode, IBaseAudioContext } from 'standardized-audio-context';
import {MatSliderChange} from '@angular/material';


@Component({
  selector: 'app-detune-widget',
  templateUrl: './detune-widget.component.html',
  styleUrls: ['./detune-widget.component.scss']
})
export class DetuneWidgetComponent implements OnInit {

  @Output()
  detuneValue: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  oscillator: IOscillatorNode<IBaseAudioContext>;

  constructor(private audioContext: AudioContext) { }

  ngOnInit() {
  }

  detune(event: MatSliderChange) {
    this.detuneValue.emit(event.value);
    if (this.oscillator) { this.oscillator.detune.setValueAtTime(event.value, this.audioContext.currentTime); }
  }

}
