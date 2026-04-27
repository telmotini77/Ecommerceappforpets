import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { Category } from './pages/Category';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AddPaymentMethod } from './pages/AddPaymentMethod';
import { OrderComplete } from './pages/OrderComplete';
import { CustomerDashboard } from './pages/CustomerDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { Offers } from './pages/Offers';
import { Contact } from './pages/Contact';
import { Search } from './pages/Search';

import { Agregar_productos } from './pages/Agregar_productos';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'categorias', Component: Categories },
      { path: 'categoria/:categoryId', Component: Category },
      { path: 'producto/:productId', Component: ProductDetail },
      { path: 'carrito', Component: Cart },
      { path: 'checkout', Component: Checkout },
      { path: 'login', Component: Login },
      { path: 'registro', Component: Register },
      { path: 'agregar-metodo-pago', Component: AddPaymentMethod },
      { path: 'orden-completada', Component: OrderComplete },
      { path: 'dashboard', Component: CustomerDashboard },
      { path: 'admin', Component: AdminDashboard },
      { path: 'agregar-producto', Component: Agregar_productos },
      { path: 'ofertas', Component: Offers },
      { path: 'contacto', Component: Contact },
      { path: 'search', Component: Search }
    ]
  }
]);
