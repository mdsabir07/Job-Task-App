import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8 mt-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Site Info */}
                <div>
                    <h2 className="text-xl font-bold text-blue-600 mb-2">JobTask</h2>
                    <p>Your simple job task application built with Next.js.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:underline">Products</Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:underline">Login</Link>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <div className="text-sm md:text-right">
                    <p>&copy; {new Date().getFullYear()} JobTask. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
