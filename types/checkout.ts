interface OrderItem {
  // Define the properties of an individual product here, for example:
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  userId: number;
  address: string;
  paymentStatus: 'PENDING' | 'COMPLETED' | 'FAILED'; // Using a union type for strict status checking
  paymentMethod: 'card' | 'cash' | 'upi';            // Expand this union based on your supported methods
  totalAmount: number;
  orderItems: OrderItem[];
}