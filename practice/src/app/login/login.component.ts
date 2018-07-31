import { Component, OnInit } from '@angular/core';

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

  /**
   * エラーメッセージ
   */
  public errorMessage: string = '';

  public login(): void {
    this.errorMessage = '';

    if (this.userId !== 'test') {
      this.errorMessage += 'ユーザーIDまたはパスワードが異なります。';
      return;
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
