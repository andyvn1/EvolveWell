import Image from 'next/image';
import { products } from '@/lib/data/products';
import StarRating from '@/components/StarRating';
import { formatCurrency } from '@/lib/utils/format';
import { ShoppingCart, Package } from 'lucide-react';

export default function ShopPage() {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
        <p className="text-xl text-gray-600">
          Quality fitness equipment and supplements to support your training
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-white px-4 py-2 rounded-lg font-semibold text-gray-900">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                {product.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="flex items-center space-x-2 mb-3">
                <StarRating rating={product.rating} size={14} />
                <span className="text-xs text-gray-600">({product.reviewCount})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  {formatCurrency(product.price)}
                </span>
                {product.inStock ? (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                    <ShoppingCart size={16} className="mr-1" />
                    Add
                  </button>
                ) : (
                  <button disabled className="px-4 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed">
                    Unavailable
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Banner */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
        <Package size={48} className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Free Shipping on Orders Over $50</h2>
        <p className="text-blue-100">
          Get your fitness gear delivered right to your door with fast, reliable shipping
        </p>
      </div>
    </div>
  );
}
