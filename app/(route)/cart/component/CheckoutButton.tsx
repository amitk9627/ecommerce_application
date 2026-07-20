"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Order } from "../../../../types/checkout";
import { getCheckoutURL } from "../../../../service/checkout";

declare const process: {
  env: { NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?: string };
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
);

export default function CheckoutButton({ productList, totalAmount }: any) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    // Prevent multiple clicks
    if (loading) return;

    setLoading(true);

    try {
      const payload: Order = {
        userId: 1,
        address: "Ramphal Chowk",
        paymentStatus: "PENDING",
        paymentMethod: "card",
        totalAmount,
        orderItems: productList,
      };

      await stripePromise;

      const response = await getCheckoutURL(payload);

      // Redirect to Stripe Checkout
      window.location.href = response.checkoutUrl;
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Something went wrong. Please try again.");

      // Re-enable button only if request fails
      setLoading(false);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className={`w-full py-3 rounded text-white transition ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-orange-500 hover:bg-orange-600"
      }`}
    >
      {loading ? "Processing..." : "PLACE ORDER"}
    </button>
  );
}
