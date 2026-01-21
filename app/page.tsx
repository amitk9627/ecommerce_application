import ProductCard from "@/component/Card/Product";
import Image from "next/image";
const productData = {
  productId: 1,
  productName: "iPhone 15",
  productDescription: "Latest Apple smartphone",
  productImage: "https://example.com/iphone.jpg",
  productPrice: 79999.99,
  topSales: true,
  isActive: true,
  supplierId: 101,
  createdAt: "2026-01-15T10:30:00",
  updatedAt: "2026-01-15T12:45:00",
  categoryId: 5,
  subCategoryId: 12,
  inventoryId: 20,
};
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <ProductCard product={productData} />
    </div>
  );
}
