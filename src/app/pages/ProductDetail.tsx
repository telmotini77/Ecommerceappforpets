import { useParams, useNavigate, Link } from 'react-router';
import { ShoppingCart, ArrowLeft, Check, AlertCircle, Package } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ProductCard } from '../components/ProductCard';
import { useState } from 'react';

export function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === productId);
  const relatedProducts = product
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-800">Producto no encontrado</h1>
        <button onClick={() => navigate('/')} className="mt-4 text-emerald-600 hover:text-emerald-700">
          Volver al inicio
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-emerald-600">
              ${product.price.toFixed(2)}
            </span>
            {product.stock > 0 ? (
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" />
                En stock ({product.stock} disponibles)
              </span>
            ) : (
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Agotado
              </span>
            )}
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-lg mb-2">Descripción</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <Package className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Información de inventario</h3>
                <p className="text-blue-700 text-sm">
                  {product.sold} unidades vendidas | Stock disponible: {product.stock}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <label className="font-semibold text-gray-700">Cantidad:</label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-gray-100 transition"
              >
                -
              </button>
              <span className="px-6 py-2 font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="px-4 py-2 hover:bg-gray-100 transition"
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition ${
                product.stock === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {addedToCart ? (
                <>
                  <Check className="w-6 h-6" />
                  Agregado al carrito
                </>
              ) : (
                <>
                  <ShoppingCart className="w-6 h-6" />
                  Agregar al carrito
                </>
              )}
            </button>

            <Link
              to="/carrito"
              className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition"
            >
              Ir al carrito
            </Link>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
