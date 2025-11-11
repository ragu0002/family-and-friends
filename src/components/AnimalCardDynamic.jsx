import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const AnimalCardDynamic = ({ category }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchProduct category={category} />
    </Suspense>
  );
};
const FetchProduct = async ({ category }) => {
  "use server";
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : `https://dummyjson.com/products`;
  const response = await fetch(url);
  const { products } = await response.json();
  console.log(category);
  return products.map((product) => (
    <Link
      href={`/detalje/${product.id}`}
      key={product.id}
      className="rounded-4xl shadow-xl"
    >
      <div>
        <figure className="grid">
          <Image
            src={product.thumbnail}
            loading="eager"
            alt={product.brand ? product.brand : "Product Image"}
            width={300}
            height={200}
            className="col-1 row-1 rounded-4xl"
          ></Image>
          <div className="col-1 row-1 justify-self-end p-3">
            <FaRegStar size={20} />
          </div>
        </figure>
        <div className="flex justify-between p-5">
          <div>
            <h1 className="text-lg font-semibold">{product.brand}</h1>
            <p>{product.category}</p>
          </div>
          <p>{product.price}</p>
        </div>
      </div>
    </Link>
  ));
};
export default AnimalCardDynamic;
