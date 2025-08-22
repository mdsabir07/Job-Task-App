'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProducts } from '@/context/ProductsContext';

export default function AddProduct() {
  const { addProduct } = useProducts();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',  // <-- Added price here
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: convert price to number
    addProduct({ ...formData, price: parseFloat(formData.price) || 0 });
    router.push('/products'); // redirect to products page
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-4 rounded"
      />

      <textarea
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        min="0"
        step="0.01"
        className="w-full border p-2 mb-4 rounded"
      />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Add Product
      </button>
    </form>
  );
}
