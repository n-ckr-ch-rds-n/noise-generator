import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AudioContextModule} from 'angular-audio-context';
import {FormsModule} from '@angular/forms';
import {OscillatorComponent} from './oscillator/oscillator.component';
import { WaveformWidgetComponent } from './waveform-widget/waveform-widget.component';
import { FrequencyWidgetComponent } from './frequency-widget/frequency-widget.component';
import { NoiseMachineComponent } from './noise-machine/noise-machine.component';
import { DetuneWidgetComponent } from './detune-widget/detune-widget.component';
import { VolumeWidgetComponent } from './volume-widget/volume-widget.component';
import { FxBoxComponent } from './fx-box/fx-box.component';

@NgModule({
  declarations: [
    AppComponent,
    OscillatorComponent,
    WaveformWidgetComponent,
    FrequencyWidgetComponent,
    NoiseMachineComponent,
    DetuneWidgetComponent,
    VolumeWidgetComponent,
    FxBoxComponent
  ],
  imports: [
    BrowserModule,
    AudioContextModule.forRoot('balanced'),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
