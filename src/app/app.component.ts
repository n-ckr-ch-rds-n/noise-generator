import {Component, HostListener} from '@angular/core';
import {InstrumentService} from './instrument.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NOIZZOR';
  keyDown = false;

  constructor(private instrumentService: InstrumentService) {}

  @HostListener('document:keydown', ['$event'])
  onKeyDown(keydown: KeyboardEvent) {
    if (!this.keyDown) {
      this.keyDown = true;
      this.playActiveInstruments(keydown);
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(keyup: KeyboardEvent) {
    this.keyDown = false;
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
