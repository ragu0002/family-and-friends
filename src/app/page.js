import AnimalList from "@/components/AnimalList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="col-(--content-col) grid">
      <header>
        <Header></Header>
      </header>
      <main>
        <AnimalList></AnimalList>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
