// src/app/dashboard/add-product/page.jsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AddProductPage() {
    const session = await getServerSession(authOptions);

    // If not logged in, redirect to login
    if (!session) {
        redirect('/login');
    }

    return (
        <div className="max-w-xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Add a New Product</h1>

            {/* Product Form */}
            <form className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter product name"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter product description"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter price"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter image link"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}