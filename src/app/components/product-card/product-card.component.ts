import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input() product!:Product;

  ngOnInit(): void { };

  addToCart(product:Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to your cart!`);

    setTimeout( alert, 2000)
  }


}
