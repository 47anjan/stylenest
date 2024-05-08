import { getInventory } from "@/utils/get-inventory";
import { Product } from "@/utils/types";

interface ProductProps {
  product: Product;
}

const ProductCard = async ({ product }: ProductProps) => {
  const inventory = await getInventory(product.product_id);

  return (
    <article className="w-full max-w-80 ">
      <div className="w-full h-[280px] bg-slate-600 rounded-lg"></div>
      <div className="py-4">
        <p className="text-xs capitalize font-medium text-gray-600">black</p>
        <h4 className="text-base font-medium line-clamp-2">{product.name}</h4>
        <div>
          <div className="py-3 text-gray-500 font-medium text-base">$15</div>
        </div>
        <div className="flex items-center flex-wrap gap-1">
          <button className="rounded-full bg-slate-500 border border-gray-400 size-4"></button>
          <button className="rounded-full bg-white border border-gray-400 size-4"></button>
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
