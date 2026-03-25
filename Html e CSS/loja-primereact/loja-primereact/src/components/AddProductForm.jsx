import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';

export default function AddProductForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newProduct = {
            title,
            price: parseFloat(price),
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', // Imagem padrão
            description: 'Novo produto adicionado manualmente.'
        };

        // Simula o envio para a API
        axios.post('https://fakestoreapi.com/products', newProduct)
            .then(res => {
                alert("Produto enviado (simulado)!");
                onAdd(res.data); // Passa o produto novo para a lista principal
                setTitle('');
                setPrice('');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="p-card p-4 mb-4 flex flex-column gap-3 shadow-1 border-round">
            <h3 className="m-0">Adicionar Novo Produto</h3>
            <div className="flex flex-column md:flex-row gap-2">
                <InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nome do Produto" className="flex-1" required />
                <InputText value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" type="number" className="w-full md:w-10rem" required />
                <Button type="submit" label="Adicionar" icon="pi pi-plus" severity="success" />
            </div>
        </form>
    );
}