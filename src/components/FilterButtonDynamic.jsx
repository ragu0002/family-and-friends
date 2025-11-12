import { Suspense } from "react";
import Image from "next/image";
import FilterElement from "./FilterElement";

const FilterButtonDynamic = ({ category }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchCategories category={category} />
    </Suspense>
  );
};
const FetchCategories = async () => {
  "use server";
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  return categories.map((category, index) => (
    <FilterElement key={category} category={category}></FilterElement>
  ));
};
export default FilterButtonDynamic;
