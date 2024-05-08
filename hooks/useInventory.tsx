import { Inventory } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ResponseData {
  inventory: Inventory;
}

const useInventory = (id: string) => {
  const getData = async () =>
    axios.get(`/api/inventory/${id}`).then((res) => res.data);

  return useQuery<ResponseData>({
    queryKey: ["inventory", id],
    queryFn: getData,
  });
};
export default useInventory;
