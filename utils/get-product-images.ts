import { Image, Inventory } from "./types";

interface ResponseData {
  images: Image[];
}

export const getProductImages = async (id: string): Promise<ResponseData> => {
  const res = await fetch(`http://127.0.0.1:3000/api/product-images/${id}`);
  return await res.json();
};
