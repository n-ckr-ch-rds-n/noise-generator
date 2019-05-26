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
import { OnOffSwitchComponent } from './on-off-switch/on-off-switch.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    OscillatorComponent,
    WaveformWidgetComponent,
    FrequencyWidgetComponent,
    NoiseMachineComponent,
    DetuneWidgetComponent,
    VolumeWidgetComponent,
    FxBoxComponent,
    OnOffSwitchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AudioContextModule.forRoot('balanced'),
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
