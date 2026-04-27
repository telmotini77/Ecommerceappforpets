import { Link } from 'react-router';
import { Package, Sparkles, Heart, Pill } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { useState } from 'react';

const categories = [
  { id: 'comida', name: 'Comida', icon: Package },
  { id: 'cuidado', name: 'Cuidado', icon: Sparkles },
  { id: 'accesorios', name: 'Accesorios', icon: Heart },
  { id: 'suplementos', name: 'Suplementos', icon: Pill }
];

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string>('all');

  let filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  if (priceRange === 'low') {
    filteredProducts = filteredProducts.filter(p => p.price < 20);
  } else if (priceRange === 'medium') {
    filteredProducts = filteredProducts.filter(p => p.price >= 20 && p.price < 40);
  } else if (priceRange === 'high') {
    filteredProducts = filteredProducts.filter(p => p.price >= 40);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Todas las Categorías</h1>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.id}
              to={`/categoria/${cat.id}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-center group"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition">
                <Icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">{cat.name}</h3>
            </Link>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Filtros</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Categoría
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === null
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todas
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Rango de precio
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setPriceRange('all')}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  priceRange === 'all'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setPriceRange('low')}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  priceRange === 'low'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Menos de $20
              </button>
              <button
                onClick={() => setPriceRange('medium')}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  priceRange === 'medium'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                $20 - $40
              </button>
              <button
                onClick={() => setPriceRange('high')}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  priceRange === 'high'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Más de $40
              </button>
            </div>
          </div>
        </div>
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
