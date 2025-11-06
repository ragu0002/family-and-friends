import AnimalList from "@/components/AnimalList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header className="col-(--content-col) grid grid-cols-subgrid">
        <Header></Header>
      </header>
      <main className="col-(--full-col) grid grid-cols-subgrid">
        <AnimalList></AnimalList>
      </main>
      <footer className="col-(--full-col) grid grid-cols-subgrid">
        <Footer></Footer>
      </footer>
    </>
  );
}
