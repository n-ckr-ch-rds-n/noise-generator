import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-on-off-switch',
  templateUrl: './on-off-switch.component.html',
  styleUrls: ['./on-off-switch.component.scss']
})
export class OnOffSwitchComponent implements OnInit {

  @Output()
  switchedOn: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.switchedOn.emit(false);
  }

  toggleSwitch(event: any) {
    this.switchedOn.emit(event.target.checked);
  }

}
