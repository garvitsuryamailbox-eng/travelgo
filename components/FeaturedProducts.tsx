'use client';

import React, { useState } from 'react';
import { Star, ShoppingCart, Zap, Check } from 'lucide-react';
import InstantCheckoutModal from './InstantCheckoutModal';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: string;
  tag?: string;
  inStock: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AeroSound Ultra Wireless ANC Headphones',
    category: 'Audio',
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: '1.2k',
    tag: '50% OFF',
    inStock: true,
  },
  {
    id: '2',
    name: 'Lumix Pro 4K HDR Smart Action Camera',
    category: 'Cameras',
    price: 249.00,
    originalPrice: 320.00,
    rating: 4.8,
    reviews: '850',
    tag: 'BESTSELLER',
    inStock: true,
  },
  {
    id: '3',
    name: 'PulseTrack GPS Smartwatch Series 7',
    category: 'Wearables',
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviews: '2.4k',
    tag: 'HOT DEAL',
    inStock: true,
  },
  {
    id: '4',
    name: 'NovaBook Aluminum Laptop Stand Pro',
    category: 'Accessories',
    price: 39.50,
    originalPrice: 59.00,
    rating: 4.9,
    reviews: '620',
    inStock: true,
  },
];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Audio', 'Wearables', 'Cameras', 'Accessories'];

  const filtered =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-16 bg-[#0c0f1d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Popular Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              Trending Products
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Select any item to simulate instant checkout with UPI, Card, or COD demo payments.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-black'
                    : 'bg-[#131827] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-[#131827] border border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Product Image Placeholder Box */}
                <div className="relative h-48 w-full rounded-2xl bg-[#1c1b2e] flex items-center justify-center mb-4">
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-rose-600 text-white font-black text-[10px] uppercase">
                      {product.tag}
                    </span>
                  )}
                  <span className="text-3xl">📦</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-xs text-amber-400 font-bold mb-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-500 font-normal">({product.reviews})</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm text-white line-clamp-2 mb-2">
                  {product.name}
                </h3>
              </div>

              {/* Price & Buy Now */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-4">
                <div>
                  <span className="text-lg font-black text-white">${product.price.toFixed(2)}</span>
                  <span className="text-xs text-slate-500 line-through block">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instant Checkout Modal */}
      {selectedProduct && (
        <InstantCheckoutModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          item={{
            title: selectedProduct.name,
            category: selectedProduct.category,
            originalPrice: Math.round(selectedProduct.originalPrice * 85),
            discountedPrice: Math.round(selectedProduct.price * 85),
            dates: 'In Stock · Free Express Delivery',
            location: 'Official Store Warranty',
          }}
        />
      )}
    </section>
  );
}
