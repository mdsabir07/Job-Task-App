'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useSession, signOut } from 'next-auth/react';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { theme, toggleTheme } = useTheme();

  const isActive = (href) =>
    pathname === href ? 'text-blue-500 font-semibold' : '';

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const MenuLinks = () => (
    <>
      <li>
        <Link href="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/products" className={isActive('/products')} onClick={() => setMenuOpen(false)}>
          Products
        </Link>
      </li>
      {session ? (
        <>
          <li>
            <Link href="/dashboard/add-product" className={isActive('/dashboard/add-product')} onClick={() => setMenuOpen(false)}>
              Add Product
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                signOut();
                setMenuOpen(false);
              }}
              className="text-red-500 hover:underline"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link href="/login" className={isActive('/login')} onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </li>
      )}
      <button
        onClick={toggleTheme}
        className="px-2 py-1 cursor-pointer rounded text-sm border border-gray-300 dark:border-gray-600"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </>
  );

  return (
    <nav className="shadow px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold text-blue-600">
          JobTask
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm items-center">
          <MenuLinks />
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle Menu">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
          <ul className="space-y-2">{<MenuLinks />}</ul>
        </div>
      )}
    </nav>
  );
}
