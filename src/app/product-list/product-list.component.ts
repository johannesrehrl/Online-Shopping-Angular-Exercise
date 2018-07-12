import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  // Adding a product from the list to the cart.
  addToCart(id: number): void{
    this.productService.getShoppingCart().push(this.products[id]);
    alert(this.products[id].name + ' added to your cart!');
  }

}
