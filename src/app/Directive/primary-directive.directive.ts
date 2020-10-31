import { Directive, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TodoComponent } from '../Components/RxStudy/todo/todo.component';
import { ParentComponent } from '../Components/ParentChildStudy/parent/parent.component';

@Directive({
  selector: '[appPrimaryDirective]'
})
export class PrimaryDirective {
  public viewContainerRef = this._viewContainerRef;
  constructor(private _viewContainerRef: ViewContainerRef,
    private componenFactoryResolver: ComponentFactoryResolver) {
  }

  changeComponent(component: any, InComeData: any) {
    const componentFactory = this.componenFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    switch (component) {
      case TodoComponent:
        (<TodoComponent>componentRef.instance).Data = InComeData;
        break;
        case ParentComponent:
        (<ParentComponent>componentRef.instance).Data = InComeData;
        break;
    }
  }
}
