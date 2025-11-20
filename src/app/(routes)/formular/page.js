import Footer from "@/components/Footer";
import Formular from "@/components/Formular";
import Header from "@/components/Header";

export default function Home({ searchParams }) {
  return (
    <>
      <header className="col-(--content-col) grid grid-cols-subgrid">
        <Header></Header>
      </header>
      <main className="col-(--content-col) grid h-screen grid-cols-subgrid">
        <Formular />
      </main>
      <footer className="col-(--full-col) grid grid-cols-subgrid">
        <Footer></Footer>
      </footer>
    </>
  );
}
