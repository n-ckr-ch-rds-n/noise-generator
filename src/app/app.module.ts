import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeneratorShellComponent } from './generator-shell/generator-shell.component';
import {AudioContextModule} from 'angular-audio-context';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorShellComponent
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
