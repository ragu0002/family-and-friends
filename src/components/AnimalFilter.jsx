import FilterButton from "./FilterButton";
import FilterButtonDynamic from "./FilterButtonDynamic";

const AnimalFilter = ({ category }) => {
  return (
    <div className="scroll-container flex gap-3 py-3">
      <FilterButtonDynamic category={category}></FilterButtonDynamic>
    </div>
  );
};

export default AnimalFilter;
