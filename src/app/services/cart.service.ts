import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private _cartSubject$ = new BehaviorSubject<Product[]>(this.getCartFromStorage());
  cart$ = this._cartSubject$.asObservable();
  cartCount$ = this.cart$.pipe(
    map(cart => cart.length)
  );

  addToCart (product: Product){
    const currentCart = this.getCartFromStorage();
    const existingProductIndex = currentCart.findIndex(item => item.id === product.id);

    if (existingProductIndex > -1) {
      // If product already exists, update its quantity
      currentCart[existingProductIndex].quantity = (currentCart[existingProductIndex].quantity || 1) + 1;
    } else {
      // If product does not exist, add it
      currentCart.push(product);
    }

    localStorage.setItem('robot-cart', JSON.stringify(currentCart));
    this._cartSubject$.next(currentCart);
  }


  private getCartFromStorage(): Product[] {
    return JSON.parse(localStorage.getItem('robot-cart') || '[]');
  }

}

//  private getCartFromStorage(): Product[] {
//     const cartJson = localStorage.getItem('cart');
//     return cartJson ? JSON.parse(cartJson) as Product[] : [];
//   }
