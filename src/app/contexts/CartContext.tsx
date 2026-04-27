import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product, Order } from '../types';

interface CartContextType {
  cart: CartItem[];
  orders: Order[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  createOrder: (userId: string) => Order;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const stored = localStorage.getItem('orders');
    return stored ? JSON.parse(stored) : [];
  });

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      let newCart;

      if (existingItem) {
        newCart = prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...prevCart, { product, quantity: 1 }];
      }

      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.product.id !== productId);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => {
      const newCart = prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const createOrder = (userId: string): Order => {
    const order: Order = {
      id: Date.now().toString(),
      userId,
      items: [...cart],
      total: getCartTotal(),
      date: new Date().toISOString(),
      status: 'completed'
    };

    const newOrders = [...orders, order];
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
    clearCart();

    return order;
  };

  return (
    <CartContext.Provider value={{
      cart,
      orders,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      createOrder
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
