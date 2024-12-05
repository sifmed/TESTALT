import React from 'react';
import { type Product } from '../../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category.name}</p>
          </div>
          <span className="text-lg font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}