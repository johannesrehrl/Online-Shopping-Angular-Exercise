import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItems: Product[];
  totalPrice: number;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.shoppingCartItems = this.productService.getShoppingCart();

    this.totalPrice = 0;

    for (let i = 0; i < this.shoppingCartItems.length; i++) {
      this.totalPrice += this.shoppingCartItems[i].price;
    }
  }

  // Remove item from shopping cart by id.
  removeItem(id: number): void {
    delete this.productService.getShoppingCart()[id];
  }
}
