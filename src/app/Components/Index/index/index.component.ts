import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimaryDirective } from 'src/app/Directive/primary-directive.directive';
import { TodoComponent } from '../../RxStudy/todo/todo.component';
import { ParentComponent } from '../../ParentChildStudy/parent/parent.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild(PrimaryDirective) dynamicComponentLoader: PrimaryDirective;
  constructor() { }

  ngOnInit() {
  }

  componentChange(value: string) {
    let target = null;
    switch (value) {
      case "RxjsStudy":
        target = TodoComponent;
        break;
      case "ParentChild":
        target = ParentComponent;
        break;
    }
    this.dynamicComponentLoader.changeComponent(target, null);
  }
}
