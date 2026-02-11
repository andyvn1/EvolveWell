'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard, { type Product } from '@/components/ProductCard';
import { products } from '@/lib/mockData';

export default function ShopPage() {
  const productsData: Product[] = products.map((prod) => ({
    id: prod.id,
    name: prod.name,
    price: prod.price,
    imageUrl: prod.imageUrl,
    category: prod.category,
  }));

  const categories = Array.from(new Set(productsData.map((p) => p.category))).sort();

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-12 text-white sm:py-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold sm:text-4xl">Home Gym Equipment</h1>
            <p className="mt-2 opacity-90">Build your fitness space with essential gear.</p>
          </div>
        </section>

        {/* Products by Category */}
        {categories.map((category) => {
          const categoryProducts = productsData.filter((p) => p.category === category);
          return (
            <section key={category} className="border-b border-gray-200 bg-white px-4 py-16 sm:py-20 last:border-0">
              <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="bg-blue-50 px-4 py-12">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-gray-600">
              Questions? <a href="#support" className="font-semibold text-blue-600 hover:text-blue-700">Contact us</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
