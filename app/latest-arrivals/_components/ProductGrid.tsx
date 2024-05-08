import ProductCard from "@/components/product-card";
import { getProducts } from "@/utils/get-products";

const ProductGrid = async () => {
  const { products } = await getProducts();

  return (
    <section className="grid gap-8 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </section>
  );
};
export default ProductGrid;
