import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 cursor-pointer" />
            <h1 className="ml-4 text-xl font-semibold text-gray-800">E-Commerce</h1>
          </div>
          <div className="flex items-center">
            <button className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}