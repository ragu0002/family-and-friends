import AnimalList from "@/components/AnimalList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
export default function Home({ searchParams }) {
  return (
    <>
      <header className="col-(--content-col) grid grid-cols-subgrid">
        <Header></Header>
      </header>
      <main className="col-(--full-col) grid grid-cols-subgrid">
        <Suspense>
          <AnimalListContainer searchParams={searchParams} />
        </Suspense>
      </main>
      <footer className="col-(--full-col) grid grid-cols-subgrid">
        <Footer></Footer>
      </footer>
    </>
  );
}
async function AnimalListContainer({ searchParams }) {
  const { category } = await searchParams;
  return <AnimalList category={category} />;
}
