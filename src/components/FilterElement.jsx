"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const FilterElement = ({ category }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const isSelected = activeCategory === category;

  return (
    <button
      onClick={() => {
        router.push(`?category=${category}`);
      }}
      className={`border-button-gray text-button-gray flex shrink-0 basis-auto items-center gap-3 rounded-full border px-5 py-2 transition-colors ${
        isSelected ? "bg-button-pink border-none text-white" : ""
      }`}
    >
      <Image
        src="https://placecats.com/neo/300/200"
        alt="cat"
        width={50}
        height={50}
        className="aspect-square rounded-full object-cover"
      />
      <p className="capitalize">{category}</p>
    </button>
  );
};

export default FilterElement;
