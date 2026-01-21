import { productEndPoint } from "@/apiEndPoint/product";
import axios from "axios";

export const getAllProducts = async () => {
   const { data } = await axios.get(productEndPoint.getAllProduct());
   return data;
}
export const getProductById = async (productId: number) => {
   const { data } = await axios.get(productEndPoint.getProductById(productId));
   return data;
}