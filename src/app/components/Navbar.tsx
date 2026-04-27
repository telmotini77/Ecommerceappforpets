import { Link, useNavigate } from 'react-router';
import { ShoppingCart, User, LogOut, PawPrint, Search, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';

export function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <PawPrint className="w-8 h-8" />
            <span className="font-bold text-xl hidden sm:block">PetShop Ecuador</span>
          </Link>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </form>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-emerald-200 transition">Inicio</Link>
            <Link to="/categorias" className="hover:text-emerald-200 transition">Categorías</Link>
            <Link to="/ofertas" className="hover:text-emerald-200 transition">Ofertas</Link>
            <Link to="/contacto" className="hover:text-emerald-200 transition">Contacto</Link>
            <Link to="/agregar-producto" className="hover:text-emerald-200 transition">Agregar productos</Link>

            <Link to="/carrito" className="relative hover:text-emerald-200 transition">
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to={user.role === 'admin' ? '/admin' : '/dashboard'}
                  className="flex items-center gap-2 hover:text-emerald-200 transition"
                >
                  <User className="w-6 h-6" />
                  <span className="hidden lg:block">{user.name}</span>
                </Link>
                <button onClick={handleLogout} className="hover:text-emerald-200 transition">
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-white text-emerald-600 px-4 py-2 rounded-full font-semibold hover:bg-emerald-50 transition">
                Ingresar
              </Link>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-emerald-500 mt-2 pt-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  className="w-full px-4 py-2 rounded-full text-gray-900"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </form>

            <div className="flex flex-col gap-3">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-200 transition">Inicio</Link>
              <Link to="/categorias" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-200 transition">Categorías</Link>
              <Link to="/ofertas" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-200 transition">Ofertas</Link>
              <Link to="/contacto" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-200 transition">Contacto</Link>
              <Link to="/agregar-producto" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-200 transition">Agregar productos</Link>
              <Link to="/carrito" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 hover:text-emerald-200 transition">
                <ShoppingCart className="w-6 h-6" />
                Carrito {cartItemsCount > 0 && `(${cartItemsCount})`}
              </Link>

              {user ? (
                <>
                  <Link
                    to={user.role === 'admin' ? '/admin' : '/dashboard'}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-emerald-200 transition"
                  >
                    <User className="w-6 h-6" />
                    {user.name}
                  </Link>
                  <button onClick={handleLogout} className="flex items-center gap-2 hover:text-emerald-200 transition text-left">
                    <LogOut className="w-6 h-6" />
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-white text-emerald-600 px-4 py-2 rounded-full font-semibold text-center"
                >
                  Ingresar
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
