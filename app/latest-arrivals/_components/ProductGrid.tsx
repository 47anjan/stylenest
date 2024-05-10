"use client";
import ProductCard from "@/components/product-card";
import useProducts from "@/hooks/useProducts";

const ProductGrid = () => {
  const { data, isLoading } = useProducts();

  if (isLoading)
    <section className="grid gap-8 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(8)
        .fill("*")
        .map((index, _) => (
          <div
            className="w-full h-[300px] bg-slate-400 rounded-lg"
            key={index}
          ></div>
        ))}
    </section>;

  return (
    <section className="grid gap-8 justify-items-center  md:grid-cols-2 lg:grid-cols-4">
      {data?.products.data.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </section>
  );
};
export default ProductGrid;
