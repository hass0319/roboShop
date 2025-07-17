import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: "arms",
      description: "one long arm",
      category: 'Arms',
      price: 1222.5,
      discountPrice: 1000,
      imageUrl: "#",
      imageUrl2: "#",
    },
    {
      id: 2,
      name: "heads",
      description: "one long head",
      category: 'Heads',
      price: 1222.5,
      discountPrice: 1000,
      imageUrl: "#",
    },
    {
      id: 3,
      name: "torsos",
      description: "one long torso",
      category: 'Torsos',
      price: 1222.5,
      discountPrice: 1000,
      imageUrl: "#",
      imageUrl2: "#",
    },
    {
      id: 4,
      name: "bases",
      description: "one long base",
      category: 'Bases',
      price: 1222.5,
      discountPrice: 1000,
      imageUrl: "#",
      imageUrl2: "#",
    },
    {
      id: 5,
      name: "arms",
      description: "multi function Arm",
      category: 'Arms',
      price: 1222.5,
      imageUrl: "#",
      imageUrl2: "#",
    },
    {
      id: 6,
      name: "heads",
      description: "Big Head",
      category: 'Heads',
      price: 1222.5,
      discountPrice: 1000,
      imageUrl: "#",
      imageUrl2: "#",
      quantity: 1
    },
    {
      id: 7,
      name: "torsos",
      description: "high quality torso",
      category: 'Torsos',
      price: 1222.5,
      imageUrl: "#",
      imageUrl2: "#",
    },
    {
      id: 8,
      name: "bases",
      description: "frontal base",
      category: 'Bases',
      price: 1222.5,
      discountPrice: 1000,
      imageUrl: "#",
      imageUrl2: "#",
    }
  ];

  constructor() { }

  getProducts(category?: string) {
    if (!category || category === 'All') {
      return this.products;
    } else {
      return this.products.filter(
        p => {
          return p.category.toLowerCase() === category.toLowerCase()
        }
      );
    }
  }

  getProductsById (id:number) {
    return this.products.find(p => p.id === id);
  }
}
