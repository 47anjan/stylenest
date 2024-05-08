import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useInventory = (id: string) => {
  const getData = async () => axios.get(`/api/inventory/${id}`);

  return useQuery({
    queryKey: ["inventory", id],
    queryFn: getData,
  });
};
export default useInventory;
