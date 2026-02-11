'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-40 w-full bg-gray-200">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{product.category}</p>
        <h3 className="mt-2 text-base font-semibold text-gray-900">{product.name}</h3>

        {/* Price & CTA */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900">${product.price}</div>
          <a
            href="#shop"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            Shop
          </a>
        </div>
      </div>
    </div>
  );
}
