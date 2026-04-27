export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'comida' | 'cuidado' | 'accesorios' | 'suplementos';
  description: string;
  stock: number;
  sold: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
  paymentMethod?: PaymentMethod;
}

export interface PaymentMethod {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
}
