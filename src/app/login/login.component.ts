import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

  logIn(name: string, password: string): void {
    for (let i = 0; i < this.loginService.getAllUsers().length; i++) {
      if (this.loginService.getAllUsers()[i].logIn(name, password)) {
        this.loginService.setCurrentUser(this.loginService.getAllUsers()[i]);
        this.loginService.setLoggedIn(true);
      }
    }
  }
}
