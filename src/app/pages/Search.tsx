import { useSearchParams } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Search as SearchIcon } from 'lucide-react';

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <SearchIcon className="w-8 h-8 text-gray-600" />
        <h1 className="text-3xl font-bold text-gray-800">
          Resultados de búsqueda para: "{query}"
        </h1>
      </div>

      <p className="text-gray-600 mb-8">
        {searchResults.length} productos encontrados
      </p>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg mb-4">
            No se encontraron productos que coincidan con tu búsqueda
          </p>
          <a href="/categorias" className="text-emerald-600 hover:text-emerald-700 font-semibold">
            Ver todos los productos
          </a>
        </div>
      )}
    </div>
  );
}
