import { Link } from 'react-router';
import { ShoppingCart, AlertCircle, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/producto/${product.id}`}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
              Agotado
            </span>
          </div>
        )}
        {product.stock > 0 && product.stock < 10 && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            Últimas unidades
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          {product.stock > 0 ? (
            <span className="text-green-600 text-sm flex items-center gap-1">
              <Check className="w-4 h-4" />
              En stock ({product.stock})
            </span>
          ) : (
            <span className="text-red-600 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              Sin stock
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-emerald-600">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`p-2 rounded-full transition ${
              product.stock === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
}
