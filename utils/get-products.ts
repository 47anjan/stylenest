import { Product } from "./types";
interface ResponseData {
  products: Product[];
}

export const getProducts = async (): Promise<ResponseData> => {
  const res = await fetch("http://127.0.0.1:3000/api/products");
  return await res.json();
};
