import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import AdoptButton from "../components/AdoptButton";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import TypeButton from "../components/TypeButtom";
export default function details({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchProduct params={params} />
    </Suspense>
  );
}
async function FetchProduct({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <>
      <header className="col-(--content-col)">
        <Header></Header>
      </header>
      <main className="col-(--content-col) mt-0">
        <div>
          <figure className="grid">
            <Image
              src={product.thumbnail}
              loading="eager"
              alt={product.brand ? product.brand : "Product Image"}
              width={500}
              height={500}
              className="col-1 row-1 aspect-square rounded-4xl bg-blue-200 object-cover"
            ></Image>
            <div className="col-1 row-1 justify-self-start p-7">
              <Link href="/">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50/40">
                  <IoIosArrowBack size={30} />
                </div>
              </Link>
            </div>
            <div className="col-1 row-1 justify-self-end p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50/40">
                <FaRegStar size={25} color="white" />
              </div>
            </div>
          </figure>
          <h1 className="py-3 text-4xl font-semibold">{product.brand}</h1>
          <div className="flex gap-3 py-3">
            <TypeButton
              type={product.tags[0]}
              color="bg-type-green"
              textcol="text-text-green"
            ></TypeButton>
            <TypeButton
              type={product.tags[1]}
              color="bg-type-blue"
              textcol="text-text-green"
            ></TypeButton>
            <TypeButton
              type={product.availabilityStatus}
              color="bg-type-red"
              textcol="text-text-green"
            ></TypeButton>
          </div>
          <p className="py-3 text-xl text-[#333333]">{product.description}</p>
          <p className="text-button-gray py-2 text-sm">
            Opdateret den 13. juli.
          </p>
        </div>
      </main>
      <footer className="col-(--content-col)">
        <AdoptButton name={product.brand}></AdoptButton>
      </footer>
    </>
  );
}
