import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import TypeButton from "./TypeButtom";
const AnimalSingle = () => {
  return (
    <div>
      <figure className="grid">
        <Image
          src="https://placecats.com/neo/300/200"
          loading="eager"
          alt="cat"
          width={500}
          height={500}
          className="col-1 row-1 aspect-square rounded-4xl object-cover"
        ></Image>
        <div className="col-1 row-1 justify-self-end p-3">
          <FaRegStar size={20} />
        </div>
      </figure>
      <h1 className="py-3 text-4xl font-semibold">Mira Pusen</h1>
      <div className="flex gap-3 py-3">
        <TypeButton
          type="Cat"
          color="bg-type-blue"
          textcol="text-text-green"
        ></TypeButton>
        <TypeButton
          type="Big"
          color="bg-type-red"
          textcol="text-text-green"
        ></TypeButton>
        <TypeButton
          type="Girl"
          color="bg-type-green"
          textcol="text-text-green"
        ></TypeButton>
        <TypeButton
          type="Little Pus"
          color="bg-type-yellow"
          textcol="text-text-green"
        ></TypeButton>
      </div>
      <p className="py-3 text-xl text-[#333333]">
        Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde
        og er venlig over for andre dyr. På trods af sin hvide pels elsker den
        regn og vandpytter. 
      </p>
      <p className="py-2 text-sm">Opdateret den 13. juli.</p>
    </div>
  );
};

export default AnimalSingle;
