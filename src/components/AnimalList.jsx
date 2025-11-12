import AnimalFilter from "./AnimalFilter";
import AnimalCard from "./AnimalCard";
import AnimalCardDynamic from "./AnimalCardDynamic";

const AnimalList = ({ category }) => {
  return (
    <div className="col-(--full-col) grid grid-cols-subgrid pb-20">
      <div className="col-(--full-col)">
        <AnimalFilter category={category}></AnimalFilter>
      </div>
      <div className="col-(--content-col) grid grid-cols-subgrid">
        <div className="grid grid-cols-(--my-list-grid) justify-between gap-3 py-5">
          <AnimalCardDynamic category={category}></AnimalCardDynamic>
        </div>
      </div>
    </div>
  );
};

export default AnimalList;
