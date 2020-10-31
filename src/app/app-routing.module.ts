import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as CryptoJS from 'crypto-js';

const password: string = "0919038908";
const index: string = "index";
const AESindex: string = CryptoJS.AES.encrypt(index.trim(), password.trim()).toString()


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // enableTracing: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
