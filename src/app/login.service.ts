import { Injectable } from '@angular/core';
import { USERS } from './mock-users';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: boolean;
  private users: User[];
  private currentUser: User;

  constructor() {
    this.loggedIn = false;
    this.users = USERS;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
  }

  getAllUsers(): User[] {
    return this.users.slice();
  }

  getUser(id: number): User {
    return this.users[id];
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  clearCurrentUser(): void {
    delete this.currentUser;
  }
}
