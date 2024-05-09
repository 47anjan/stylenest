import Container from "@/components/container";
import Link from "next/link";
import ProductGrid from "./_components/ProductGrid";

const LatestArrivalsPage = () => {
  return (
    <Container>
      <header className="flex items-center justify-between my-10 lg:my-20 xl:my-32 ">
        <h2 className="text-2xl font-bold">Latest Arrivals</h2>
        <Link
          href="/latest-arrivals"
          className="px-4 py-2 text-sm font-medium border rounded"
        >
          View All
        </Link>
      </header>

      <ProductGrid />
    </Container>
  );
};
export default LatestArrivalsPage;
