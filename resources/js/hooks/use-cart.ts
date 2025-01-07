import { Product } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FormatCart = Product & {
  size: string;
  amount: number;
};

type Aritmatic = {
  id: number;
  amount: number;
};

type Remove = {
  id: number;
  size: string;
};
interface Cart {
  cart: FormatCart[]; // Change this to a non-optional array
  add: (values: FormatCart) => void;
  remove: (values: Remove) => void;
  mutate: (values: Aritmatic) => void;
  clear: () => void;
}

export const useCart = create<Cart>()(
  persist(
    (set) => ({
      cart: [], // Initialize cart as an empty array
      mutate: ({ id, amount }: Aritmatic) =>
        set((state) => {
          // Find the item to decrement
          const updatedCart = state.cart.map((item) =>
            item.id === id
              ? { ...item, amount } // Prevent negative amount
              : item,
          );
          return { cart: updatedCart };
        }),
      add: (values: FormatCart) =>
        set((state) => {
          // Cek apakah ada item dengan id dan size yang sama
          const existingItem = state.cart.find(
            (item) => item.id === values.id && item.size === values.size,
          );

          if (existingItem) {
            // Jika item ditemukan, update amount
            const updatedCart = state.cart.map((item) =>
              item.id === values.id && item.size === values.size
                ? { ...item, price: item.price + values.price }
                : item,
            );
            return { cart: updatedCart };
          }

          // Jika item tidak ditemukan, tambahkan item baru ke cart
          return { cart: [...state.cart, values] };
        }),
      remove: (values: Remove) =>
        set((state) => {
          // Find the item to decrement
          const updatedCart = state.cart.filter(
            (item) => !(item.id === values.id && item.size === values.size),
          );
          return { cart: updatedCart };
        }),
      clear: () => set({ cart: [] }),
    }),
    { name: "cart-cart" },
  ),
);
