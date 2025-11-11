import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import TypeButton from "./TypeButtom";
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
    <div>
      <figure className="grid">
        <Image
          src={product.thumbnail}
          loading="eager"
          alt={product.brand ? product.brand : "Product Image"}
          width={500}
          height={500}
          className="col-1 row-1 aspect-square rounded-4xl object-cover"
        ></Image>
        <div className="col-1 row-1 justify-self-start p-3">
          <Link href="/">
            <IoIosArrowBack size={40} />
          </Link>
        </div>
        <div className="col-1 row-1 justify-self-end p-3">
          <FaRegStar size={40} />
        </div>
      </figure>
      <h1 className="py-3 text-4xl font-semibold">{product.brand}</h1>
      <div className="flex gap-3 py-3">
        <TypeButton
          type="Cat"
          color="bg-type-blue"
          textcol="text-text-green"
        ></TypeButton>
        <TypeButton
          type="Big"
          color="bg-type-red"
          textcol="text-text-green"
        ></TypeButton>
        <TypeButton
          type="Girl"
          color="bg-type-green"
          textcol="text-text-green"
        ></TypeButton>
        <TypeButton
          type="Little Pus"
          color="bg-type-yellow"
          textcol="text-text-green"
        ></TypeButton>
      </div>
      <p className="py-3 text-xl text-[#333333]">
        Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde
        og er venlig over for andre dyr. På trods af sin hvide pels elsker den
        regn og vandpytter. 
      </p>
      <p className="py-2 text-sm">Opdateret den 13. juli.</p>
    </div>
  );
}
