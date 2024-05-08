import { getInventory } from "@/utils/get-inventory";
import { getProductImages } from "@/utils/get-product-images";
import { Product } from "@/utils/types";
import { twMerge } from "tailwind-merge";

interface ProductProps {
  product: Product;
}

const ProductCard = async ({ product }: ProductProps) => {
  const { inventory } = await getInventory(product.product_id);
  const { images } = await getProductImages(product.product_id);

  const colors = Array.from(new Set(images.map((item) => item.color)));

  const hasDiscount =
    inventory.discount_percentage || inventory.discount ? true : false;

  return (
    <article className="w-full max-w-80 ">
      <div className="w-full h-[280px] bg-slate-600 rounded-lg"></div>
      <div className="py-4">
        <p className="text-xs capitalize font-medium text-gray-600">black</p>
        <h4 className="text-base font-medium line-clamp-2">{product.name}</h4>
        <div className="flex  gap-2 items-center py-3 text-gray-500 font-medium text-base">
          {hasDiscount && <div>${inventory.sale_price}</div>}

          <div className={twMerge(hasDiscount && "text-sm line-through")}>
            ${inventory.list_price}
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-1">
          {colors.map((color) => (
            <button
              style={{
                backgroundColor: `${color}`,
              }}
              key={color}
              className={`rounded-full border border-gray-400 size-4`}
            ></button>
          ))}
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
