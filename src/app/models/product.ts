export interface Product {
  id: number;
  name: string;
  description: string;
  category: 'Heads' | 'Arms' | 'Torsos' | 'Bases';
  price: number;
  discountPrice?: number;
  quantity?: number;
  imageUrl: string;
  imageUrl2?: string;
}
