import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AudioContextModule} from 'angular-audio-context';
import {FormsModule} from '@angular/forms';
import {OscillatorComponent} from './oscillator/oscillator.component';

@NgModule({
  declarations: [
    AppComponent,
    OscillatorComponent
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
