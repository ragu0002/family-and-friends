import AnimalFilter from "./AnimalFilter";
import AnimalCard from "./AnimalCard";

const AnimalList = () => {
  return (
    <div>
      <div>
        <AnimalFilter></AnimalFilter>
      </div>
      <div className="grid grid-cols-(--my-list-grid) justify-between gap-3 py-5">
        <AnimalCard></AnimalCard> <AnimalCard></AnimalCard>{" "}
        <AnimalCard></AnimalCard> <AnimalCard></AnimalCard>{" "}
        <AnimalCard></AnimalCard> <AnimalCard></AnimalCard>{" "}
        <AnimalCard></AnimalCard> <AnimalCard></AnimalCard>
      </div>
    </div>
  );
};

export default AnimalList;
