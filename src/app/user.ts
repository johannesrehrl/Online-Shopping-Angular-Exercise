export class User {
  id: number;
  name: string;
  password: string;
  admin: boolean;

  constructor(id: number, name: string, password: string, admin: boolean) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.admin = admin;
  }

  logIn(name: string, password: string): boolean {
      if (this.name === name && this.password === password) {
        return true;
      } else {
        return false;
      }
  }
}
