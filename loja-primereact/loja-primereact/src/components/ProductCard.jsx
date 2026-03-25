import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function ProductCard({ product }) {
    // O cabeçalho do card com a imagem do produto
    const header = (
        <img alt={product.title} src={product.image} style={{ height: '200px', objectFit: 'contain', padding: '10px' }} />
    );

    return (
        <div className="col-12 md:col-4 lg:col-3 p-2"> {/* PrimeFlex cuidando do grid */}
            <Card 
                title={product.title.substring(0, 20) + "..."} 
                subTitle={`R$ ${product.price}`}
                header={header}
                className="h-full shadow-2"
            >
                <p className="m-0 text-sm text-600" style={{ height: '60px', overflow: 'hidden' }}>
                    {product.description.substring(0, 80)}...
                </p>
                <Button label="Comprar" icon="pi pi-shopping-cart" className="w-full mt-3 p-button-sm" />
            </Card>
        </div>
    );
}