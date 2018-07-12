import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  shoppingCartItems: Product[];
  userName: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.products = PRODUCTS;

    if (this.loginService.getCurrentUser()) {
      this.userName = this.loginService.getCurrentUser().name;
    } else {
      this.userName = 'Guest';
    }
  }
}
