import { Image, Product } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ResponseData {
  images: Image[];
}

const useImages = (id: string) => {
  const getData = async () =>
    axios.get(`/api/product-images/${id}`).then((res) => res.data);

  return useQuery<ResponseData>({
    queryKey: ["products", id],
    queryFn: getData,
  });
};
export default useImages;
