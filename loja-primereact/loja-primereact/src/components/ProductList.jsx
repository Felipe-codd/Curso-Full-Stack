import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import AddProductForm from './AddProductForm'; 

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleAddProduct = (newP) => {
        // Atualiza a lista local com o que veio do formulário
        setProducts([newP, ...products]); 
    };

    return (
        <div>
            <AddProductForm onAdd={handleAddProduct} />

            <div className="grid">
                {products.map(p => (
                    <ProductCard key={p.id || Math.random()} product={p} />
                ))}
            </div>
        </div>
    );
}