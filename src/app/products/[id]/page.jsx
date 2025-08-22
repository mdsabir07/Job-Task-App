'use client';

import { useProducts } from '@/context/ProductsContext';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetails({ params }) {
  const { id } = params;
  const { products } = useProducts();

  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  return (
    <div className="max-w-3xl mx-auto shadow mt-10 px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-6" />
      <p className="mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-blue-600 mb-6">${product.price}</p>
      <Link href="/products" className="text-blue-500 hover:underline">
        ← Back to products
      </Link>
    </div>
  );
}
