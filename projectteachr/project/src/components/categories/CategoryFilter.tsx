import React from 'react';
import { type Category } from '../../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: number | null;
  onSelectCategory: (categoryId: number | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          selectedCategory === null
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedCategory === category.id
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}