import AnimalFilter from "./AnimalFilter";
import AnimalCard from "./AnimalCard";

const AnimalList = () => {
  return (
    <div className="col-(--full-col) grid grid-cols-subgrid">
      <div className="col-(--full-col)">
        <AnimalFilter></AnimalFilter>
      </div>
      <div className="col-(--content-col) grid grid-cols-subgrid">
        <div className="grid grid-cols-(--my-list-grid) justify-between gap-3 py-5">
          <AnimalCard></AnimalCard> <AnimalCard></AnimalCard>{" "}
          <AnimalCard></AnimalCard> <AnimalCard></AnimalCard>{" "}
          <AnimalCard></AnimalCard> <AnimalCard></AnimalCard>{" "}
          <AnimalCard></AnimalCard> <AnimalCard></AnimalCard>
        </div>
      </div>
    </div>
  );
};

export default AnimalList;
