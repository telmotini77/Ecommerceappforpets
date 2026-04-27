import { useNavigate, Link } from 'react-router';
import { Package, CreditCard, User, ShoppingBag } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

export function CustomerDashboard() {
  const { user } = useAuth();
  const { orders } = useCart();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  if (user.role === 'admin') {
    navigate('/admin');
    return null;
  }

  const userOrders = orders.filter(o => o.userId === user.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Mi Cuenta</h1>
      <p className="text-gray-600 mb-8">Bienvenido, {user.name}</p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Package className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{userOrders.length}</h3>
              <p className="text-gray-600 text-sm">Pedidos realizados</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                ${userOrders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}
              </h3>
              <p className="text-gray-600 text-sm">Total gastado</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Método de pago</h3>
              {user.paymentMethod ? (
                <p className="text-gray-600 text-sm">
                  **** {user.paymentMethod.cardNumber.slice(-4)}
                </p>
              ) : (
                <p className="text-gray-600 text-sm">No configurado</p>
              )}
            </div>
          </div>
          <Link
            to="/agregar-metodo-pago?redirect=/dashboard"
            className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold"
          >
            {user.paymentMethod ? 'Cambiar' : 'Agregar'}
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-bold text-gray-800">Información Personal</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
            <p className="text-gray-800">{user.name}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <p className="text-gray-800">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <Package className="w-6 h-6 text-gray-600" />
          <h2 className="text-2xl font-bold text-gray-800">Historial de Pedidos</h2>
        </div>

        {userOrders.length > 0 ? (
          <div className="space-y-4">
            {userOrders.map((order) => (
              <div key={order.id} className="border-2 border-gray-200 rounded-xl p-4">
                <div className="flex flex-wrap items-center justify-between mb-3">
                  <div>
                    <p className="font-semibold text-gray-800">
                      Pedido #{order.id}
                    </p>
                    <p className="text-sm text-gray-600">
                      {new Date(order.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-600">
                      ${order.total.toFixed(2)}
                    </p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold mt-1">
                      {order.status === 'completed' ? 'Completado' : order.status}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Productos:</p>
                  <ul className="space-y-1">
                    {order.items.map((item) => (
                      <li key={item.product.id} className="text-sm text-gray-600">
                        {item.product.name} x{item.quantity} - ${(item.product.price * item.quantity).toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Aún no has realizado ningún pedido</p>
            <Link
              to="/categorias"
              className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition"
            >
              Explorar productos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
