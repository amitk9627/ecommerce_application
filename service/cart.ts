import { CartEndPoint } from "@/apiEndPoint/cart";
import { CartItem } from "@/types/cart";
import axios from "axios";

export const getModifyCart = async (productList: CartItem[]) => {
    const { data } = await axios.post(CartEndPoint.modifyCart(), {
        productList: productList,
    });
    return data;
}