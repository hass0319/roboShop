import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  category: string = 'all';

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  filterCategory(categ: string){
    this.category = categ;
    this.products = this.productService.getProducts(categ);
  }
}
