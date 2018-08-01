import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {path:'',component:LoginComponent}
      ]
    )
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
