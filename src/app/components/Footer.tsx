import { Facebook, MessageCircle, PawPrint, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-8 h-8 text-emerald-400" />
              <span className="font-bold text-xl">PetShop Ecuador</span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu tienda de confianza para el cuidado y bienestar de tus mascotas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-emerald-400 transition">Inicio</a></li>
              <li><a href="/categorias" className="hover:text-emerald-400 transition">Categorías</a></li>
              <li><a href="/ofertas" className="hover:text-emerald-400 transition">Ofertas</a></li>
              <li><a href="/contacto" className="hover:text-emerald-400 transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/categoria/comida" className="hover:text-emerald-400 transition">Comida</a></li>
              <li><a href="/categoria/cuidado" className="hover:text-emerald-400 transition">Cuidado</a></li>
              <li><a href="/categoria/accesorios" className="hover:text-emerald-400 transition">Accesorios</a></li>
              <li><a href="/categoria/suplementos" className="hover:text-emerald-400 transition">Suplementos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contáctanos</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+593 95 985 4666</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@petshop.ec</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Quito, Ecuador</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/593959854666"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 PetShop Ecuador. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
