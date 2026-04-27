import { Link, useNavigate } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate('/login?redirect=/checkout');
      return;
    }
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">
            Agrega productos para comenzar tu compra
          </p>
          <Link
            to="/categorias"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
          >
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Carrito de Compras</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-xl shadow-md p-4 flex gap-4"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <Link
                    to={`/producto/${item.product.id}`}
                    className="font-semibold text-gray-800 hover:text-emerald-600 transition"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">
                    ${item.product.price.toFixed(2)} c/u
                  </p>

                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center border-2 border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100 transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-1 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100 transition"
                        disabled={item.quantity >= item.product.stock}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-600 hover:text-red-700 transition flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald-600">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Resumen de compra</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Envío</span>
                <span className="text-green-600">Gratis</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-emerald-600">${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition mb-3"
            >
              Proceder al pago
            </button>

            <Link
              to="/categorias"
              className="block text-center text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
