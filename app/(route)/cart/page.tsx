import Image from "next/image";
import {
  getCartAction,
  removeFromCartAction,
  addToCartAction,
  removeItemCompletelyAction,
} from "@/app/actions/cart";
import { CartItem } from "@/types/cart";
import { getModifyCart } from "@/service/cart";

export default async function CartPage() {
  const cart: CartItem[] = await getCartAction();
  const data = await getModifyCart(cart);
  const { productList, totalAmount } = data.result;

  console.log("Modified Cart Data:", data.result.productList);
  if (productList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
        <p className="text-gray-500 mt-2">Add items to continue shopping</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* LEFT: Cart Items */}
      <div className="md:col-span-2 space-y-4">
        {productList.map((item: CartItem) => (
          <div
            key={item.productId}
            className="flex gap-4 border rounded-lg p-4"
          >
            <Image
              src={item.productImage}
              alt={item.productName}
              width={100}
              height={100}
              className="object-contain"
            />

            <div className="flex-1">
              <h2 className="font-semibold">{item.productName}</h2>
              <p className="text-gray-600 mt-1">₹{item.productPrice}</p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-3">
                <form
                  action={async () => {
                    "use server";
                    await addToCartAction({
                      ...item,
                      quantity: 1,
                    });
                  }}
                >
                  <button className="px-3 py-1 border rounded">+</button>
                </form>

                <span className="px-4">{item.quantity}</span>

                <form
                  action={async () => {
                    "use server";
                    await removeFromCartAction(item.productId);
                  }}
                >
                  <button
                    disabled={item.quantity === 1}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>
                </form>
              </div>
            </div>

            {/* Remove */}
            <form
              action={async () => {
                "use server";
                await removeItemCompletelyAction(item.productId);
              }}
            >
              <button className="text-red-600 text-sm">Remove</button>
            </form>
          </div>
        ))}
      </div>

      {/* RIGHT: Price Summary */}
      <div className="border rounded-lg p-4 h-fit">
        <h2 className="text-lg font-semibold mb-4">PRICE DETAILS</h2>

        <div className="flex justify-between mb-2">
          <span>Price ({cart.length} items)</span>
          <span>₹{totalAmount}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Delivery Charges</span>
          <span className="text-green-600">FREE</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded mt-4">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
