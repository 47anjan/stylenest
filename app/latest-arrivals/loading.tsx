import Container from "@/components/container";

const LoadingPage = () => {
  return (
    <Container>
      <header className="flex items-center justify-between mt-10 lg:mt-20 mb-5">
        <h2 className="text-2xl font-bold">Latest Arrivals</h2>
        <div className="px-4 py-2 text-sm font-medium border rounded">
          View All
        </div>
      </header>
      <section className="grid gap-8 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array(8)
          .fill("*")
          .map((index, _) => (
            <div
              className="w-full h-96 md:h-[290px] bg-slate-400 rounded-lg"
              key={index}
            ></div>
          ))}
      </section>
      ;
    </Container>
  );
};
export default LoadingPage;
