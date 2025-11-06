import FilterButton from "./FilterButton";

const AnimalFilter = () => {
  return (
    <div className="px-var-(--scroll-padding) scroll-p-var(--scroll-padding) flex gap-3 overflow-x-auto">
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
