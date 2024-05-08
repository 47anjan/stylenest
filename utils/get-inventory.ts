import { Inventory } from "./types";

interface ResponseData {
  inventory: Inventory;
}

export const getInventory = async (id: string): Promise<ResponseData> => {
  const res = await fetch(`http://127.0.0.1:3000/api/inventory/${id}`);
  return await res.json();
};
