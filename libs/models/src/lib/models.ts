export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categoryName: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
