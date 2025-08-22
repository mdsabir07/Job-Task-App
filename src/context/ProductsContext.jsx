'use client';
import React, { createContext, useState, useContext } from 'react';

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([
    // Initial static products (if you want)
    {
      id: 1,
      name: 'Sample Product 1',
      description: 'This is a sample product.',
      image: 'https://via.placeholder.com/150',
    },
    // Add more if you want
  ]);

  // Function to add product
  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
