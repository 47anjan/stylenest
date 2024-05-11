import Container from "@/components/container";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="py-10 md:py-20">
          <h1 className="text-lg font-bold text-slate-800">
            <span className="text-green-600 text-xl">
              GreatFrontEnd Projects Challenge:
            </span>{" "}
            A fully functional e-commerce website for a mock e-commerce platform
          </h1>
        </div>
      </Container>
    </main>
  );
}
