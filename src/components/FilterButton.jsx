import Image from "next/image";

const FilterButton = ({ name }) => {
  return (
    <button className="flex shrink-0 basis-auto items-center gap-3 rounded-full border border-black px-5 py-2">
      <Image
        src="https://placecats.com/neo/300/200"
        loading="eager"
        alt="cat"
        width={50}
        height={50}
        className="aspect-square rounded-full object-cover"
      ></Image>
      <p>{name}</p>
    </button>
  );
};

export default FilterButton;
