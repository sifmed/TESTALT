export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}