import { Product } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ResponseData {
  products: {
    data: Product[];
  };
}

const useProducts = () => {
  const getData = async () =>
    axios.get(`/api/products`).then((res) => res.data);

  return useQuery<ResponseData>({
    queryKey: ["products"],
    queryFn: getData,
  });
};
export default useProducts;
