import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noise-generator';

  @HostListener('document:keydown', ['$event'])
  onKeyDown(keydown: KeyboardEvent) {
    console.log('keydown', keydown);
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(keyup: KeyboardEvent) {
    console.log('keyup', keyup);
  }
}
