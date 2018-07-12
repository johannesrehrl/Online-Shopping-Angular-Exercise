import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { SHOPPINGCART } from './shoppingCart';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getShoppingCart(): Product[] {
    return SHOPPINGCART;
  }
}
