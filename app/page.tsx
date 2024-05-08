import Container from "@/components/container";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <Link href="/latest-arrivals">Product Grid</Link>
      </Container>
    </main>
  );
}
