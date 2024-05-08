import { Inventory } from "./types";

export const getInventory = async (id: string): Promise<Inventory> => {
  const res = await fetch(`http://127.0.0.1:3000/api/inventory/${id}`);
  return await res.json();
};
