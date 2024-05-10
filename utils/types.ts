export interface Category {
  category_id: string;
  name: string;
  created_at: string;
}

export interface Collection {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface Image {
  color: string;
  image_url: string;
}

export interface Inventory {
  sku: string;
  color: string;
  size: string;
  list_price: number;
  discount: number | null;
  discount_percentage: number;
  sale_price: number;
  sold: number;
  stock: number;
}

export interface PriceRange {
  highest: number;
  lowest: number;
}

export interface Product {
  product_id: string;
  name: string;
  description: string;
  category: Category;
  collection: Collection;
  created_at: string;
  colors: string[];
  images: Image[];
  inventory: Inventory[];
  priceRange: PriceRange;
  rating: number;
  reviews: number;
  sizes: string[] | number[];
  sold: number;
}
