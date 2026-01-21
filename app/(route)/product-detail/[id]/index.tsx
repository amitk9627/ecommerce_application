"use client";
import { addToCartAction } from "@/app/actions/cart";

interface ProductProps {
  product: {
    productId: number;
    productName: string;
    productImage: string;
    productPrice: number;
    availableStock: number;
    productDescription: string;
    categoryName: string;
    subCategoryName: string;
    topSales: boolean;
  };
}

const ProductDetails = ({ product }: ProductProps) => {
  const handleAddToCart = async () => {
    await addToCartAction({
      productId: product.productId,
      productName: product.productName,
      productImage: product.productImage,
      productPrice: product.productPrice,
      quantity: 1,
    });

    alert("Product added to cart 🛒");
  };
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Product Image */}
      <div className="flex justify-center">
        <img
          src={product.productImage}
          alt={product.productName}
          className="w-[350px] h-auto object-contain border rounded-lg p-4"
        />
      </div>

      {/* Right: Product Info */}
      <div>
        <h1 className="text-2xl font-semibold">{product.productName}</h1>
        <p className="text-gray-500 mt-1">
          {product.categoryName} • {product.subCategoryName}
        </p>

        {product.topSales && (
          <span className="inline-block mt-2 bg-green-600 text-white text-xs px-3 py-1 rounded">
            Top Seller
          </span>
        )}

        <div className="mt-4 flex items-center gap-3">
          <span className="text-3xl font-bold text-gray-900">
            ₹{product.productPrice}
          </span>
          <span className="text-green-600 text-sm">Special Price</span>
        </div>

        <p className="mt-3 text-gray-600">{product.productDescription}</p>

        <p className="mt-3 text-sm">
          Stock Available:{" "}
          <span className="font-semibold">{product.availableStock}</span>
        </p>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleAddToCart}
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded font-semibold"
          >
            ADD TO CART
          </button>

          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-semibold">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
