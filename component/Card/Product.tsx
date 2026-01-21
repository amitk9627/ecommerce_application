import React from "react";
import Link from "next/link";

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
   
  return (
    <Link href={`/product-detail/${product.productId}`}>
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        {/* Product Image */}
        <img
          src={product.productImage}
          alt={product.productName}
          className="w-full h-48 object-cover"
        />

        {/* Card Body */}
        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.productName}
          </h2>

          <div className="flex items-center justify-between mt-3">
            <span className="text-xl font-bold text-green-600">
              ₹{product.productPrice.toLocaleString()}
            </span>

            {product.topSales && (
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                Top Sales
              </span>
            )}
          </div>

          {/* <div className="text-xs text-gray-500 mt-2 space-y-1">
          <p>Category ID: {product.categoryId}</p>
          <p>Sub Category ID: {product.subCategoryId}</p>
          <p>Supplier ID: {product.supplierId}</p>
        </div> */}

          {/* Status */}
          <div className="mt-3 flex justify-between items-center">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                product.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.isActive ? "Active" : "Inactive"}
            </span>

            {/* <span className="text-xs text-gray-400">
            ID: #{product.productId}
          </span> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
