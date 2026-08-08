"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export interface CartProduct {
  id: string;
  name: string;
  price: number;
}

const STORAGE_KEY = "azabu-salon-cart";
const listeners = new Set<() => void>();
const EMPTY_CART: CartItem[] = [];
let cartItems: CartItem[] = EMPTY_CART;

function loadFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function persist(items: CartItem[]) {
  cartItems = items;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return cartItems;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY_CART;
}

function addCartItem(product: CartProduct, qty: number) {
  const existing = cartItems.find((i) => i.id === product.id);
  const next = existing
    ? cartItems.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
    : [...cartItems, { id: product.id, name: product.name, price: product.price, qty }];
  persist(next);
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  addItem: (product: CartProduct, qty?: number) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // One-time hydration from localStorage after mount (external store, not React state).
  useEffect(() => {
    const stored = loadFromStorage();
    if (stored.length) {
      cartItems = stored;
      listeners.forEach((listener) => listener());
    }
  }, []);

  const addItem = useCallback((product: CartProduct, qty = 1) => {
    addCartItem(product, qty);
  }, []);

  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return <CartContext.Provider value={{ items, count, addItem }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
