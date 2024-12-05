import { type Product, type Category } from '../types';

// Simulated data for demonstration
const categories: Category[] = [
  { id: 1, name: 'Electronics', description: 'Electronic devices and accessories' },
  { id: 2, name: 'Clothing', description: 'Fashion and apparel' },
  { id: 3, name: 'Books', description: 'Books and literature' },
];

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    category: categories[0],
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
  {
    id: 2,
    name: 'Cotton T-Shirt',
    description: 'Comfortable cotton t-shirt in various colors',
    price: 29.99,
    category: categories[1],
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
  },
  {
    id: 3,
    name: 'Programming Guide',
    description: 'Comprehensive programming guide for beginners',
    price: 49.99,
    category: categories[2],
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
  },
];

export async function fetchProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return products;
}

export async function fetchCategories(): Promise<Category[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return categories;
}