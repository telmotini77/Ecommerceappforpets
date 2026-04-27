import { MessageCircle, Mail, Phone, MapPin, Facebook, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contáctanos</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Información de Contacto
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                  <p className="text-gray-600">+593 95 985 4666</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@petshop.ec</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                  <p className="text-gray-600">Quito, Ecuador</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Horario</h3>
                  <p className="text-gray-600">Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Domingo: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/593959854666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 p-4 rounded-full hover:bg-green-600 transition text-white"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition text-white"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Envíanos un Mensaje
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda inmediata?</h2>
        <p className="mb-6 text-emerald-50">
          Contáctanos por WhatsApp y te responderemos lo antes posible
        </p>
        <a
          href="https://wa.me/593959854666"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition"
        >
          Chatear por WhatsApp
        </a>
      </div>
    </div>
  );
}
