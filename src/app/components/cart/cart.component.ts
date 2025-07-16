import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;
  itemCount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cart = items;
      this.total = items.reduce((sum, i) =>
        (sum +
          (i.discountPrice ||i.price) *
          (i.quantity || 1)
        ),
        0
      );
       this.itemCount = items.reduce((count, i) => count + (i.quantity || 1), 0);
    });
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
  }
}
