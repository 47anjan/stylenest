export type Product = {
  product_id: string;
  name: string;
  description: string;
  category: string;
  collection: string;
  created_at: string;
};

export type Inventory = {
  product_id: string;
  sku: string;
  color: string;
  size: string;
  list_price: number;
  discount: number | null;
  discount_percentage: number;
  sale_price: number;
  sold: number;
  stock: number;
};
