import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Tag } from 'lucide-react';

export function Offers() {
  const offersProducts = products.filter(p => p.price < 30);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Tag className="w-12 h-12" />
          <h1 className="text-4xl font-bold">Ofertas Especiales</h1>
        </div>
        <p className="text-red-50 text-lg">
          Los mejores precios en productos de calidad para tu mascota
        </p>
      </div>

      <div className="mb-6">
        <p className="text-gray-600">
          {offersProducts.length} productos en oferta
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offersProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
