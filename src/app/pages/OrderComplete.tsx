import { Link } from 'react-router';
import { CheckCircle, Package } from 'lucide-react';

export function OrderComplete() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-6 rounded-full">
            <CheckCircle className="w-24 h-24 text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ¡Compra realizada con éxito!
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Tu pedido ha sido procesado correctamente
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Package className="w-8 h-8 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Detalles de envío
            </h2>
          </div>
          <p className="text-gray-700 mb-2">
            Recibirás un correo de confirmación con los detalles de tu pedido.
          </p>
          <p className="text-gray-700 mb-4">
            El envío se realizará en un plazo de 2-3 días hábiles.
          </p>
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
            <p className="text-emerald-800 font-semibold">
              Envío gratuito incluido
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard"
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
          >
            Ver mis pedidos
          </Link>
          <Link
            to="/"
            className="bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
