"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function CheckoutButton({ productList }: any) {
  const handleCheckout = async () => {
    // console.log("Initiating checkout with products:", productList);
    const stripe = await stripePromise;

    const res = await fetch("http://localhost:8080/payment/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "1",
        Address: "Ramphal Chowk",
        paymentStatus: "pending",
        paymentMethod: "card",
        orderItems: productList,
      }),
    });

    // const sessionId = await res.text();
    // await stripe?.redirectToCheckout({ sessionId });
    // window.location.href = sessionUrl;
    const checkoutUrl = await res.text();

    // ✅ NEW Stripe Redirection
    window.location.href = checkoutUrl;
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      className="w-full bg-orange-500 text-white py-3 rounded"
    >
      PLACE ORDER
    </button>
  );
}
