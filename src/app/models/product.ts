export interface Product {
  id: number;
  name: string;
  description: string;
  category: 'Heads' | 'Arms' | 'Torsos' | 'Bases';
  price: number;
  discountPrice?: number;
  imageUrl: string;
  quantity?: number;
}
