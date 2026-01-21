"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, User, ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* LEFT: Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            ShopEase
          </Link>

          {/* CENTER: Search */}
          <div className="flex flex-1 max-w-xl items-center rounded-md border bg-gray-50 px-3">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-transparent px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* RIGHT: Wishlist + Account */}
          <div className="flex items-center gap-6">

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative flex items-center gap-1 text-gray-700 hover:text-black"
            >
              <Heart className="h-6 w-6" />
              <span className="text-sm">Wishlist</span>
            </Link>

            {/* Account Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 text-gray-700 hover:text-black"
              >
                <User className="h-6 w-6" />
                <span className="text-sm">Account</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg">
                  <Link
                    href="/account"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                    <Link
                    href="/cart"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Cart
                  </Link>
                  <Link
                    href="/account/orders"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
