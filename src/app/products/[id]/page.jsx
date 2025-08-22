'use client';

import { useProducts } from '@/context/ProductsContext';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductDetails() {
  const { products } = useProducts();
  const { id } = useParams();

  // convert id to string for safe comparison
  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
        <Link href="/products" className="text-blue-500 mt-4 block hover:underline">
          Go back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-blue-600 mb-6">${product.price}</p>
      <Link href="/products" className="text-blue-500 hover:underline">
        ← Back to products
      </Link>
    </div>
  );
}
