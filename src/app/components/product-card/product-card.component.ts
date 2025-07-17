import { Component, OnInit, Input, HostListener } from '@angular/core';
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
  imageIndex = 0;
  added = false;
  showModal = false;

  ngOnInit(): void { };

  onAddToCartBtn(event: Event) {
    event.stopPropagation();
    this.addToCart();
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.added = true;

    setTimeout( () => this.added = false, 1300)
  }

  showAltImage() {
    if(this.product.imageUrl2) {
      this.imageIndex = 1;
    }
  }

  showMainImage() {
    this.imageIndex = 0;
  }

  openModal(event: MouseEvent) {
    if(!(event.target as HTMLElement).closest('button')){
      this.showModal = true;
      this.imageIndex = 0;
      event?.stopPropagation();
    }
  }

  closeModal() {
    this.showModal = false;
  }

  @HostListener('document:keydown.escape', [])
  onEsc() {
    if(this.showModal) this.closeModal();
  }
}
