import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { LogIn, PawPrint } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }

    const success = login(email, password);
    if (success) {
      navigate(redirect);
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-600 p-4 rounded-full">
              <PawPrint className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Iniciar Sesión</h1>
          <p className="text-gray-600">Accede a tu cuenta de PetShop Ecuador</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600">
              ¿No tienes cuenta?{' '}
              <Link to="/registro" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                Regístrate aquí
              </Link>
            </p>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-900 font-semibold mb-2">Cuentas de prueba:</p>
            <p className="text-sm text-blue-700">Cliente: cliente@example.com</p>
            <p className="text-sm text-blue-700">Admin: admin@petshop.com</p>
            <p className="text-xs text-blue-600 mt-2">Contraseña: cualquiera</p>
          </div>
        </div>
      </div>
    </div>
  );
}
