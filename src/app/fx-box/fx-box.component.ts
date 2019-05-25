import {Component, Input} from '@angular/core';
import {AudioContext} from 'angular-audio-context';
import {IOscillatorNode, IBaseAudioContext, IGainNode, IDelayNode} from 'standardized-audio-context';
import vibrato from 'vibrato';

@Component({
  selector: 'app-fx-box',
  templateUrl: './fx-box.component.html',
  styleUrls: ['./fx-box.component.scss']
})
export class FxBoxComponent {
  private delayModule: IDelayNode<IBaseAudioContext>;

  @Input()
  oscillator: IOscillatorNode<IBaseAudioContext>;

  @Input()
  gainNode: IGainNode<IBaseAudioContext>;

  constructor(private audioContext: AudioContext) { }

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
    if (this.delayModule) { this.delayModule.delayTime.setValueAtTime(event.target.valueAsNumber, this.audioContext.currentTime); }
  }

  addVibrato() {
    vibrato(this.audioContext, this.oscillator.frequency, { rate: 4, depth: 16 });
  }
}
