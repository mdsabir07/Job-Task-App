'use client';

import { useProducts } from '@/context/ProductsContext';
import Hero from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  const { products } = useProducts();
  const topProducts = products.slice(0, 3);

  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <section className="max-w-6xl mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {topProducts.map((product) => (
              <div key={product.id} className="rounded shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm">{product.description}</p>
                  <p className="font-bold text-blue-600 mt-2">${product.price}</p>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}