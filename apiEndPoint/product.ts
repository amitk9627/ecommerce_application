export const productEndPoint = {
    getAllProduct: () => `${process.env.NEXT_PUBLIC_API_BASE_URL}/product/getAllProduct`,
    getProductById: (productId: number) => `${process.env.NEXT_PUBLIC_API_BASE_URL}/product/getProduct/${productId}`,
}