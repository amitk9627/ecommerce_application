export const productEndPoint = {
    getAllProduct: () => `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product/getAllProduct`,
    getProductById: (productId: number) => `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product/getProduct/${productId}`,
}