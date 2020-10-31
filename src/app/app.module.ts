import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './Components/RxStudy/todo/todo.component';
import { PrimaryDirective } from './Directive/primary-directive.directive';
import { IndexComponent } from './Components/Index/index/index.component';
import { RxStudyService } from './service/rx-study-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './Components/ParentChildStudy/parent/parent.component';
import { ChildComponent } from './Components/ParentChildStudy/child/child.component';
import { Child2Component } from './Components/ParentChildStudy/child2/child2.component';
import { IndexRouteModule } from './Components/Index/index-route/index-route.module';
import { DevexpressComponent } from './Components/devexpress/devexpress.component';
import { DxButtonModule, DxListModule, DxRadioGroupModule, DxRadioGroupComponent, DxTemplateModule } from 'devextreme-angular';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PrimaryDirective,
    IndexComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    DevexpressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    IndexRouteModule,
    DxButtonModule,
    DxListModule,
    DxRadioGroupModule,
    DxTemplateModule,
    AgGridModule.withComponents([])
  ],
  entryComponents: [
    TodoComponent,
    ParentComponent,
    ChildComponent,
    Child2Component
  ],
  providers: [
    RxStudyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
