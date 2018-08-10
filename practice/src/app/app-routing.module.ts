import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {path:'',component:LoginComponent},
        {path:'menu',component:MenuComponent}
      ]
    )
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
