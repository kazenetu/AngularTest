import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * ユーザーID
   */
  public userId: string = '';

  /**
   * パスワード
   */
  public password: string = '';

  public login(): void {
    this.parent.errorMessage = '';

    if (this.userId !== 'test') {
      this.parent.errorMessage += 'ユーザーIDまたはパスワードが異なります。';
      return;
    }

    this.router.navigate(['menu']);
  }

  constructor(private parent: AppComponent, private router:Router) { }

  ngOnInit() {
  }

}
