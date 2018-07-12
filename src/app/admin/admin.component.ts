import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ProductService } from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private unique: boolean;
  private deleted: boolean;

  constructor(public loginService: LoginService, public productService: ProductService) { }

  ngOnInit() { }

  addProduct(name: string, price: number,): void {
    this.unique = true;

    // Checks if a product with the same name already exists.
    for (let i = 0; i < this.productService.getProducts().length; i++) {
      if (name === this.productService.getProducts()[i].name) {
        this.unique = false;
      }
    }

    // Adding product if it meets the requirements.
    if (name && price && this.unique) {
      this.productService.getProducts().push(
        new Product(this.productService.getProducts()[this.productService.getProducts().length - 1].id + 1, name, price)
      );

      alert('Product added!');
    } else {
      alert('Failed to create Product! Try again.');
    }
  }

  deleteProduct(name: string, password: string): void {
    this.deleted = false;

    // Deleting product if the password matches and a correct name was entered.
    if (password === this.loginService.getCurrentUser().password) {
      for (let i = 0; i < this.productService.getProducts().length; i++) {
        if (this.productService.getProducts()[i].name === name) {
          delete this.productService.getProducts()[i];
          this.deleted = true;
          alert('Product deleted!');
        }
      }
    } else {
      alert('Failed to delete Product! Try again.');
    }

    if (this.deleted === false) {
      alert('Failed to delete Product! Try again.');
    }
  }
}
