import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { CreditCard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function AddPaymentMethod() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const { updatePaymentMethod } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/dashboard';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (cardNumber.replace(/\s/g, '').length !== 16) {
      setError('El número de tarjeta debe tener 16 dígitos');
      return;
    }

    if (cvv.length !== 3) {
      setError('El CVV debe tener 3 dígitos');
      return;
    }

    updatePaymentMethod({
      cardNumber: cardNumber.replace(/\s/g, ''),
      cardName,
      expiryDate,
      cvv
    });

    navigate(redirect);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-600 p-4 rounded-full">
              <CreditCard className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Agregar Método de Pago</h1>
          <p className="text-gray-600">Ingresa los datos de tu tarjeta</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Número de tarjeta
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                maxLength={19}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre en la tarjeta
              </label>
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value.toUpperCase())}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                placeholder="JUAN PEREZ"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Fecha de expiración
                </label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) {
                      value = value.slice(0, 2) + '/' + value.slice(2, 4);
                    }
                    setExpiryDate(value);
                  }}
                  maxLength={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                  placeholder="MM/AA"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                  maxLength={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                  placeholder="123"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                Esta es una simulación. No se procesará ningún cargo real.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
            >
              Guardar método de pago
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
