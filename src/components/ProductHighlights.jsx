'use client';
import { useProducts } from '@/context/ProductsContext';

export default function ProductHighlights() {
  const { products } = useProducts();

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Product Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
