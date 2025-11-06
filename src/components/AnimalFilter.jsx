import FilterButton from "./FilterButton";

const AnimalFilter = () => {
  return (
    <div className="flex gap-3 overflow-x-auto">
      <FilterButton name="All"></FilterButton>
      <FilterButton name="Dogs"></FilterButton>
      <FilterButton name="Cats"></FilterButton>
    </div>
  );
};

export default AnimalFilter;
