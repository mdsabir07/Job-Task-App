export default function Hero() {
    return (
        <section className="dark:bg-gray-900 min-h-[60vh] flex items-center justify-center px-6 py-16">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Welcome to JobTask
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
                    Manage your products effortlessly with our Next.js powered app.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/login"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition"
                    >
                        Login
                    </a>
                    <a
                        href="/products"
                        className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md font-semibold transition"
                    >
                        View Products
                    </a>
                </div>
            </div>
        </section>
    );
}