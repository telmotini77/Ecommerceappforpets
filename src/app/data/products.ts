import { Product } from '../types';

export const products: Product[] = [
  // Comida
  {
    id: '1',
    name: 'Alimento Premium para Perros Adultos 15kg',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&h=500&fit=crop',
    category: 'comida',
    description: 'Alimento balanceado premium con proteínas de alta calidad, ideal para perros adultos de todas las razas.',
    stock: 25,
    sold: 45
  },
  {
    id: '2',
    name: 'Alimento para Gatos Esterilizados 7.5kg',
    price: 38.50,
    image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=500&h=500&fit=crop',
    category: 'comida',
    description: 'Fórmula especial para gatos esterilizados, control de peso y salud urinaria.',
    stock: 30,
    sold: 52
  },
  {
    id: '3',
    name: 'Snacks Dentales para Perros 500g',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop',
    category: 'comida',
    description: 'Premios dentales que ayudan a reducir el sarro y mantener los dientes limpios.',
    stock: 50,
    sold: 78
  },
  {
    id: '4',
    name: 'Comida Húmeda Premium para Gatos 400g',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=500&h=500&fit=crop',
    category: 'comida',
    description: 'Deliciosa comida húmeda con trozos de pollo y atún en salsa.',
    stock: 40,
    sold: 63
  },

  // Cuidado
  {
    id: '5',
    name: 'Shampoo Hipoalergénico 500ml',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=500&h=500&fit=crop',
    category: 'cuidado',
    description: 'Shampoo suave para pieles sensibles, con ingredientes naturales.',
    stock: 35,
    sold: 41
  },
  {
    id: '6',
    name: 'Cepillo Deslanador Profesional',
    price: 22.50,
    image: 'https://images.unsplash.com/photo-1629554783522-52a87c0ca58c?w=500&h=500&fit=crop',
    category: 'cuidado',
    description: 'Cepillo profesional para eliminar pelo muerto y reducir la muda.',
    stock: 20,
    sold: 34
  },
  {
    id: '7',
    name: 'Cortauñas con Sensor de Seguridad',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=500&h=500&fit=crop',
    category: 'cuidado',
    description: 'Cortauñas profesional con sensor que evita cortar demasiado.',
    stock: 28,
    sold: 29
  },
  {
    id: '8',
    name: 'Kit Dental Completo',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=500&fit=crop',
    category: 'cuidado',
    description: 'Kit completo con cepillo, pasta dental y enjuague bucal para mascotas.',
    stock: 22,
    sold: 37
  },

  // Accesorios
  {
    id: '9',
    name: 'Collar Ajustable con Placa Identificadora',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=500&fit=crop',
    category: 'accesorios',
    description: 'Collar resistente y ajustable con placa para grabar datos de contacto.',
    stock: 45,
    sold: 67
  },
  {
    id: '10',
    name: 'Cama Ortopédica Memory Foam Grande',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=500&h=500&fit=crop',
    category: 'accesorios',
    description: 'Cama con espuma viscoelástica para máximo confort, ideal para perros grandes.',
    stock: 15,
    sold: 23
  },
  {
    id: '11',
    name: 'Bebedero Automático con Filtro 2L',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop',
    category: 'accesorios',
    description: 'Fuente de agua con filtro de carbón activado para agua siempre fresca.',
    stock: 18,
    sold: 31
  },
  {
    id: '12',
    name: 'Transportadora Acolchada con Ventilación',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=500&h=500&fit=crop',
    category: 'accesorios',
    description: 'Transportadora segura y cómoda con múltiples aberturas de ventilación.',
    stock: 12,
    sold: 18
  },

  // Suplementos
  {
    id: '13',
    name: 'Multivitamínico Completo 60 tabletas',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1585289331652-409e39830054?w=500&h=500&fit=crop',
    category: 'suplementos',
    description: 'Complejo vitamínico para fortalecer el sistema inmunológico y vitalidad.',
    stock: 30,
    sold: 42
  },
  {
    id: '14',
    name: 'Omega 3 para Piel y Pelaje 90 cápsulas',
    price: 34.50,
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500&h=500&fit=crop',
    category: 'suplementos',
    description: 'Aceite de pescado rico en omega 3 para un pelaje brillante y piel saludable.',
    stock: 25,
    sold: 38
  },
  {
    id: '15',
    name: 'Condroprotector para Articulaciones 120 tabs',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=500&fit=crop',
    category: 'suplementos',
    description: 'Glucosamina y condroitina para proteger y regenerar las articulaciones.',
    stock: 20,
    sold: 27
  },
  {
    id: '16',
    name: 'Probióticos Digestivos 30 sobres',
    price: 31.99,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop',
    category: 'suplementos',
    description: 'Probióticos para mejorar la salud digestiva y absorción de nutrientes.',
    stock: 28,
    sold: 33
  }
];
