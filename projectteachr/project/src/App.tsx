import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { ProductCard } from './components/products/ProductCard';
import { CategoryFilter } from './components/categories/CategoryFilter';
import { useProducts } from './hooks/useProducts';
import { type Product } from './types';

function App() {
  const { products, loading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', product);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.id === selectedCategory)
    : products;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;