import React from "react";
import { getProductById } from "@/service/product";

import ProductDetails from "./index";
// import { useQuery } from '@tanstack/react-query'

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const response = await getProductById(Number(id));
  if (!response.status) {
    console.log("Product Details:", response.result);
    return <>error</>;
  }
  return (
    <>
      <ProductDetails product={response.result} />
    </>
  );
};

export default page;
