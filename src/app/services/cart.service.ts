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
    map(
      cart => cart.reduce(
        (count, item) =>
          count + (item.quantity || 1), 0)
    )
  );

  addToCart (product: Product){
    const currentCart = this.getCartFromStorage();
    const existingProductIndex = currentCart.findIndex(item => item.id === product.id);

    if (existingProductIndex > -1) {
      // If product already exists, update its quantity
      currentCart[existingProductIndex].quantity = (currentCart[existingProductIndex].quantity || 1) + 1;
    } else {
      // If product does not exist, add it
      currentCart.push({ ...product, quantity: 1 });
    }
    this.setCart(currentCart);
  }

  changeQuantity(productId: number, change: number) {
    const currentCart = this.getCartFromStorage();
    const index = currentCart.findIndex(item => item.id === productId);

    if (index > -1) {
      const item = currentCart[index];
      const newQty = (item.quantity || 1) + change;
      if (newQty > 0) {
        currentCart[index].quantity = newQty;
      } else {
        // Remove if qty is zero
        currentCart.splice(index, 1);
      }
      this.setCart(currentCart);
    }
  }

  removeFromCart(productId: number) {
    const cart = this._cartSubject$.value.filter(p => p.id !== productId);
    this.setCart(cart);
  }

  private getCartFromStorage(): Product[] {
    return JSON.parse(localStorage.getItem('robot-cart') || '[]');
  }

  private setCart(cart: Product[]) {
    localStorage.setItem('robot-cart', JSON.stringify(cart));
    this._cartSubject$.next(cart);
  }
}
