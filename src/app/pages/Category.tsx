import { useParams } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Package, Sparkles, Heart, Pill } from 'lucide-react';

const categoryInfo = {
  comida: {
    name: 'Comida',
    icon: Package,
    description: 'Alimentos premium y balanceados para todas las etapas de vida de tu mascota'
  },
  cuidado: {
    name: 'Cuidado',
    icon: Sparkles,
    description: 'Productos de higiene y cuidado para mantener a tu mascota saludable'
  },
  accesorios: {
    name: 'Accesorios',
    icon: Heart,
    description: 'Accesorios de calidad para el confort y entretenimiento de tu mascota'
  },
  suplementos: {
    name: 'Suplementos',
    icon: Pill,
    description: 'Vitaminas y suplementos para el bienestar integral de tu mascota'
  }
};

export function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();

  const category = categoryId as keyof typeof categoryInfo;
  const info = categoryInfo[category];
  const Icon = info?.icon;

  const filteredProducts = products.filter(p => p.category === category);

  if (!info) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-800">Categoría no encontrada</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-4">
          {Icon && <Icon className="w-12 h-12" />}
          <h1 className="text-4xl font-bold">{info.name}</h1>
        </div>
        <p className="text-emerald-50 text-lg">{info.description}</p>
      </div>

      <div className="mb-6">
        <p className="text-gray-600">
          {filteredProducts.length} productos encontrados
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
