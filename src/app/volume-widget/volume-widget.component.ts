import {Component, Input } from '@angular/core';
import {IOscillatorNode, IBaseAudioContext, IGainNode} from 'standardized-audio-context';
import {AudioContext} from 'angular-audio-context';
import {MatSliderChange} from '@angular/material';

@Component({
  selector: 'app-volume-widget',
  templateUrl: './volume-widget.component.html',
  styleUrls: ['./volume-widget.component.scss']
})
export class VolumeWidgetComponent {

  @Input()
  oscillator: IOscillatorNode<IBaseAudioContext>;

  @Input()
  gainNode: IGainNode<IBaseAudioContext>;

  constructor(private audioContext: AudioContext) { }

  changeVolume(event: MatSliderChange) {
    if (this.oscillator) { this.gainNode.gain.setValueAtTime(event.value, this.audioContext.currentTime); }
  }
}
