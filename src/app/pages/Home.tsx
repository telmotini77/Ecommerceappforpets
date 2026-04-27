import { Link } from 'react-router';
import { Package, Sparkles, Heart, Pill } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

const categories = [
  {
    id: 'comida',
    name: 'Comida',
    icon: Package,
    color: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop'
  },
  {
    id: 'cuidado',
    name: 'Cuidado',
    icon: Sparkles,
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=400&h=300&fit=crop'
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    icon: Heart,
    color: 'bg-pink-500',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop'
  },
  {
    id: 'suplementos',
    name: 'Suplementos',
    icon: Pill,
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1585289331652-409e39830054?w=400&h=300&fit=crop'
  }
];

export function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      <section className="relative h-[500px] bg-gradient-to-r from-emerald-600 to-teal-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&h=500&fit=crop"
            alt="Mascotas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Todo lo que tu mascota necesita
            </h1>
            <p className="text-xl mb-8 text-emerald-50">
              Alimentos premium, accesorios de calidad y productos de cuidado para el bienestar de tu mejor amigo
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/categorias"
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition"
              >
                Ver Categorías
              </Link>
              <Link
                to="/ofertas"
                className="bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 transition border-2 border-white"
              >
                Ver Ofertas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Categorías Destacadas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/categoria/${category.id}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mb-2`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl">{category.name}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Productos Destacados
            </h2>
            <Link to="/categorias" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                ¿Necesitas ayuda o asesoría?
              </h2>
              <p className="text-emerald-50 mb-6">
                Nuestro equipo está disponible para ayudarte a elegir los mejores productos para tu mascota
              </p>
              <a
                href="https://wa.me/593959854666"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition"
              >
                Contáctanos por WhatsApp
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=400&fit=crop"
                alt="Mascota feliz"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
