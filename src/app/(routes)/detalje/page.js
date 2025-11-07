import Link from "next/link";
import AnimalSingle from "./components/AnimalSingle";
import Header from "@/components/Header";
import AdoptButton from "./components/AdoptButton";

const detalje = () => {
  return (
    <>
      <header className="col-(--content-col)">
        <Header></Header>
      </header>
      <main className="col-(--content-col) mt-0">
        <AnimalSingle></AnimalSingle>
      </main>
      <footer className="col-(--content-col)">
        <AdoptButton name="Mira pusen"></AdoptButton>
      </footer>
    </>
  );
};

export default detalje;
