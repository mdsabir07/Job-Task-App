'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) =>
    pathname === href ? 'text-blue-500 font-semibold' : 'text-gray-700';

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">JobTask</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm items-center">
          <li>
            <Link href="/" className={isActive('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className={isActive('/products')}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/login" className={isActive('/login')}>
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-800">
          <Link
            href="/"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/login"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}

    </nav>
  );
}