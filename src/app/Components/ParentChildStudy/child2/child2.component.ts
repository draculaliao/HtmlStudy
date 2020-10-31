import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() Value1: string;
  @Input() Value2: string;
  @Input() Value3: string;

  constructor() { }

  ngOnInit() {
  }

  getOutput1Value(Value: string) {
    this.Value1 = Value;
  }

}
