"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const FilterElement = ({ category }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`?category=${category}`)}
      className="flex shrink-0 basis-auto items-center gap-3 rounded-full border border-black px-5 py-2"
    >
      <Image
        src="https://placecats.com/neo/300/200"
        loading="eager"
        alt="cat"
        width={50}
        height={50}
        className="aspect-square rounded-full object-cover"
      ></Image>
      <p className="capitalize">{category}</p>
    </button>
  );
};

export default FilterElement;
