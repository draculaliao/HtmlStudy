import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { TodoComponent } from '../../RxStudy/todo/todo.component';
import { ParentComponent } from '../../ParentChildStudy/parent/parent.component';
import * as CryptoJS from 'crypto-js';
import { DevexpressComponent } from '../../devexpress/devexpress.component';


const password: string = "0919038908";
const index: string = "index";
const AESindex: string = CryptoJS.AES.encrypt(index.trim(), password.trim()).toString();

const routes: Routes = [
  {
    path: 'index', component: IndexComponent, children:
      [
        { path: 'RxStudy', component: TodoComponent},
        { path: 'ParentChildStudy', component: ParentComponent},
        { path: 'DevExpressStudy', component: DevexpressComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRouteRoutingModule { }
