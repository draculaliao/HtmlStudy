import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() Output1Event = new EventEmitter();
  @Output() Output2Event = new EventEmitter();
  @Output() Output3Event = new EventEmitter();
  Output1: string;
  Output2: string;
  Output3: string;
  constructor() { }

  ngOnInit() {
  }

  fireOutput1Event(vaule: string) {
    this.Output1Event.emit(vaule);
  }

}
