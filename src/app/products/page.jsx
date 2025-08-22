'use client';

import { useProducts } from '@/context/ProductsContext';
import Link from 'next/link';

export default function ProductsPage() {
  const { products } = useProducts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="font-bold text-blue-600 mt-2">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="inline-block mt-4 text-sm text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}