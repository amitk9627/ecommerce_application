"use client";
import ProductCard from "@/component/Card/Product";
import { getAllProducts } from "@/service/product";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const page = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => await getAllProducts(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred</p>;
  // console.log(data, "data");
  const { result } = data;
  return (
    <div className="grid grid-cols-5 gap-5 max-md:grid-cols-2">
      {result.map((item: any, index: number) => (
        <React.Fragment key={index}>
          <ProductCard product={item} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default page;
