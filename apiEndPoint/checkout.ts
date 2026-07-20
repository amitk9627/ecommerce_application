export const checkoutEndPoint = {
    getCheckout: () => `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/checkout`,
}