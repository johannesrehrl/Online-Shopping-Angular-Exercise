import {Component, OnInit} from '@angular/core';
import { LoginService } from './login.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
    this.users = this.loginService.getAllUsers();
  }

  logout(): void {
    this.loginService.clearCurrentUser();
    this.loginService.setLoggedIn(false);
  }
}
