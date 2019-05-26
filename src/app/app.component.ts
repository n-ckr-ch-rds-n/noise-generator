import {Component, HostListener} from '@angular/core';
import {InstrumentService} from './instrument.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NOIZZOR';

  constructor(private instrumentService: InstrumentService) {}

  @HostListener('document:keydown', ['$event'])
  onKeyDown(keydown: KeyboardEvent) {
    this.playActiveInstruments(keydown);
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(keyup: KeyboardEvent) {
    this.stopActiveNodes(keyup);
  }

  playActiveInstruments(keydown: KeyboardEvent) {
    for (const instrument of this.instrumentService.instrumentBank) {
      instrument.play();
    }
  }

  stopActiveNodes(keyup: KeyboardEvent) {
    for (const instrument of this.instrumentService.instrumentBank) {
      instrument.stop();
    }
  }
}
