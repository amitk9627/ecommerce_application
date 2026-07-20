import { checkoutEndPoint } from "@/apiEndPoint/checkout";
import axios from "axios";

export const getCheckoutURL = async (payload: any) => {
   const { data } = await axios.post(checkoutEndPoint.getCheckout(), payload );
   return data;
}