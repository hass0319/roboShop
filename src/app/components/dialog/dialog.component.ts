import { Product } from '../../models/product';
import { Component, ViewChild, ElementRef,
    Input, Output, EventEmitter,
    OnChanges, SimpleChanges
  } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})

export class DialogComponent implements OnChanges{
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  @Input() open = false;
  @Input() product!: Product;
  @Input() added = false;
  @Output() closed = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<Event>();

  ngOnChanges(changes: SimpleChanges) {
    if (this.dialog) {
      if (changes['open']) {
        if (this.open) this.dialog.nativeElement.showModal();
        else this.dialog.nativeElement.close();
      }
    }
  }

  onAddToCartBtn(event: Event) {
    event.stopPropagation();
  }

  closeModal() {
    this.dialog.nativeElement.close();
    this.closed.emit();
  }
}
