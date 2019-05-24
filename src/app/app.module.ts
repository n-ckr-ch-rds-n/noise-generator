import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AudioContextModule} from 'angular-audio-context';
import {FormsModule} from '@angular/forms';
import {OscillatorComponent} from './oscillator/oscillator.component';
import { WaveformWidgetComponent } from './waveform-widget/waveform-widget.component';
import { FrequencyWidgetComponent } from './frequency-widget/frequency-widget.component';
import { NoiseGeneratorComponent } from './noise-generator/noise-generator.component';
import { NoiseMachineComponent } from './noise-machine/noise-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    OscillatorComponent,
    WaveformWidgetComponent,
    FrequencyWidgetComponent,
    NoiseGeneratorComponent,
    NoiseMachineComponent
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
