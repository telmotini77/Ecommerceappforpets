import { useNavigate } from 'react-router';
import { CreditCard, Check } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export function Checkout() {
  const { cart, getCartTotal, createOrder } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  if (!user) {
    navigate('/login?redirect=/checkout');
    return null;
  }

  if (cart.length === 0) {
    navigate('/carrito');
    return null;
  }

  const handlePayment = async () => {
    if (!user.paymentMethod) {
      navigate('/agregar-metodo-pago?redirect=/checkout');
      return;
    }

    setProcessing(true);
    setTimeout(() => {
      createOrder(user.id);
      setProcessing(false);
      navigate('/orden-completada');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Finalizar Compra</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Resumen del pedido</h2>
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.product.id} className="flex justify-between text-gray-700">
                  <span>
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-800">
                <span>Total</span>
                <span className="text-emerald-600">${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Información de envío</h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Nombre:</span> {user.name}</p>
              <p><span className="font-semibold">Email:</span> {user.email}</p>
              <p className="text-sm text-gray-500 mt-4">
                El envío es gratuito y se realizará en un plazo de 2-3 días hábiles.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Método de pago</h2>

            {user.paymentMethod ? (
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="w-6 h-6 text-emerald-600" />
                  <span className="font-semibold text-gray-800">Tarjeta guardada</span>
                </div>
                <p className="text-gray-700">
                  **** **** **** {user.paymentMethod.cardNumber.slice(-4)}
                </p>
                <p className="text-gray-600 text-sm mt-1">{user.paymentMethod.cardName}</p>
                <button
                  onClick={() => navigate('/agregar-metodo-pago?redirect=/checkout')}
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold mt-3"
                >
                  Cambiar método de pago
                </button>
              </div>
            ) : (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  No tienes un método de pago registrado
                </p>
                <button
                  onClick={() => navigate('/agregar-metodo-pago?redirect=/checkout')}
                  className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
                >
                  Agregar método de pago
                </button>
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={!user.paymentMethod || processing}
              className={`w-full py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2 ${
                !user.paymentMethod || processing
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {processing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Procesando...
                </>
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  Completar compra
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
