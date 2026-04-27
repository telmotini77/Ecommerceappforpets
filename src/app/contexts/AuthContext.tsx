import { createContext, useContext, useState, ReactNode } from 'react';
import { User, PaymentMethod } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string, name: string) => boolean;
  logout: () => void;
  updatePaymentMethod: (method: PaymentMethod) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users database
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@petshop.com',
    name: 'Admin',
    role: 'admin'
  },
  {
    id: '2',
    email: 'cliente@example.com',
    name: 'Cliente Demo',
    role: 'customer'
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email: string, password: string): boolean => {
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = (email: string, password: string, name: string): boolean => {
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role: 'customer'
    };
    mockUsers.push(newUser);
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updatePaymentMethod = (method: PaymentMethod) => {
    if (user) {
      const updatedUser = { ...user, paymentMethod: method };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updatePaymentMethod }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
