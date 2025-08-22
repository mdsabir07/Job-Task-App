import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Smart Watch',
    description: 'A feature-rich smart watch with fitness tracking.',
    price: '$99',
    image: '/imgs/watch.jpg',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'High-quality sound with noise cancellation.',
    price: '$129',
    image: '/imgs/headphones.jpg',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with deep bass and waterproof design.',
    price: '$79',
    image: '/imgs/speaker.jpg',
  },
  {
    id: 4,
    name: 'Smartphone Stand',
    description: 'Adjustable stand compatible with all phone sizes.',
    price: '$15',
    image: '/imgs/stand.jpg',
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {product.description}
                </p>
                <p className="text-blue-600 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
