"use server";

import { cookies } from "next/headers";
import { CartItem } from "@/types/cart";

const CART_KEY = "cart";

export async function addToCartAction(item: CartItem) {
  const cookieStore = cookies();

  const cartCookie = (await cookieStore).get(CART_KEY);
  let cart: CartItem[] = cartCookie
    ? JSON.parse(cartCookie.value)
    : [];

  const existingItem = cart.find(
    (c) => c.productId === item.productId
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(item);
  }

  (await cookieStore).set(CART_KEY, JSON.stringify(cart), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function getCartAction(): Promise<CartItem[]> {
  const cart = (await cookies()).get(CART_KEY);
  return cart ? JSON.parse(cart.value) : [];
} 

export async function removeFromCartAction(productId: number) {
  const cookieStore = cookies();
  const cartCookie = (await cookieStore).get(CART_KEY);

  if (!cartCookie) return;

  let cart: CartItem[] = JSON.parse(cartCookie.value);

  const existingItem = cart.find(
    (item) => item.productId === productId
  );

  if (!existingItem) return;

  if (existingItem.quantity > 1) {
    existingItem.quantity -= 1;
  }
  // else: quantity is 1 → do nothing (keep item)

  (await cookieStore).set(CART_KEY, JSON.stringify(cart), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function removeItemCompletelyAction(productId: number) {
  const cookieStore = cookies();
  const cartCookie = (await cookieStore).get(CART_KEY);

  if (!cartCookie) return;

  let cart: CartItem[] = JSON.parse(cartCookie.value);
  cart = cart.filter(item => item.productId !== productId);

  (await cookieStore).set(CART_KEY, JSON.stringify(cart), {
    path: "/",
  });
}
