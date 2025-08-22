'use client';

import { createContext, useContext, useState } from 'react';
import staticProducts from '@/lib/products';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [userProducts, setUserProducts] = useState([]);

    const addProduct = (product) => {
        const newProduct = {
            ...product,
            id: Date.now().toString(), // generate unique id
        };
        setUserProducts((prev) => [newProduct, ...prev]);
    };

    const allProducts = [...userProducts, ...staticProducts];

    return (
        <ProductsContext.Provider value={{ addProduct, products: allProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
