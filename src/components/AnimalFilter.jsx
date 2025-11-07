import FilterButton from "./FilterButton";

const AnimalFilter = () => {
  return (
    <div className="scroll-container flex gap-3">
      <FilterButton name="All"></FilterButton>
      <FilterButton name="Dogs"></FilterButton>
      <FilterButton name="Cats"></FilterButton>
      <FilterButton name="Cats"></FilterButton>
      <FilterButton name="Cats"></FilterButton>
      <FilterButton name="Cats"></FilterButton>
    </div>
  );
};

export default AnimalFilter;
