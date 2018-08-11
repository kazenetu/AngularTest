import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {path:'',component:LoginComponent},
        {path:'menu',component:MenuComponent},
        {path:'**',component:ErrorComponent}
      ]
    )
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
