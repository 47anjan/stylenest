"use client";

import { Image, Product } from "@/utils/types";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  const colors = product.colors;
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    setCurrentColor(colors[0]);
  }, [colors]);

  const images = colors.reduce((acc: Image[], item) => {
    let img = product.images.find((img) => img.color === item);
    acc.push(img!);
    return acc;
  }, []);

  const inventory = product.inventory.find(
    (item) => item.color === currentColor
  );

  const hasDiscount =
    inventory?.discount_percentage || inventory?.discount ? true : false;

  const image = images.find((item) => item.color === currentColor)?.image_url;

  const handleColorChange = (clr: string) => {
    setCurrentColor(clr);
  };

  return (
    <article className="w-full pb-4 ">
      <NextImage
        width={320}
        height={280}
        alt={product.name + " - " + currentColor}
        src={image!}
        className="w-full h-96 md:h-[300px] object-cover rounded-lg"
      ></NextImage>
      <div className="py-4">
        <p className="text-xs capitalize font-medium text-gray-600">
          {currentColor}
        </p>
        <h4 className="text-base font-medium line-clamp-2">{product.name}</h4>
        <div className="flex  gap-2 items-center py-3 text-gray-500 font-medium text-base">
          {hasDiscount && <div>${inventory?.sale_price}</div>}

          <div className={twMerge(hasDiscount && "text-sm line-through")}>
            ${inventory?.list_price}
          </div>
        </div>
        <div className="flex mb-4 items-center flex-wrap gap-2">
          {colors.map((color) => (
            <button
              onClick={() => handleColorChange(color)}
              onMouseEnter={() => handleColorChange(color)}
              onFocus={() => handleColorChange(color)}
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
