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
  const colors = [
    "bg-yellow-200",
    "bg-pink-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-orange-200",
  ];

  return products.map((product, index) => {
    const color = colors[index % colors.length];

    return (
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
              className={`col-1 row-1 rounded-4xl ${color} inset-shadow-sm`}
            />
            <div className="col-1 row-1 justify-self-end p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50/40">
                {" "}
                <FaRegStar size={25} color="white" />
              </div>
            </div>
          </figure>
          <div className="p-5">
            <h1 className="text-lg font-semibold">{product.brand}</h1>
            <p className="text-button-gray capitalize">{product.category}</p>
          </div>
        </div>
      </Link>
    );
  });
};
export default AnimalCardDynamic;
