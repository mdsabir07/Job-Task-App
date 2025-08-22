'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProducts } from '@/context/ProductsContext';
import toast from 'react-hot-toast'; // <== import toast

export default function AddProduct() {
  const { addProduct } = useProducts();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    toast.success('Product added successfully!');  // <== show toast
    router.push('/products'); // redirect to products page
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>

      {/* ...inputs for name, description, image, price */}

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
        className="w-full border p-2 mb-4 rounded"
      />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Add Product
      </button>
    </form>
  );
}
