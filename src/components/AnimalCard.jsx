import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";

const AnimalCard = () => {
  return (
    <Link href="/detalje" className="rounded-4xl shadow-xl">
      <div>
        <figure className="grid">
          <Image
            src="https://placecats.com/neo/300/200"
            loading="eager"
            alt="cat"
            width={300}
            height={200}
            className="col-1 row-1 rounded-4xl"
          ></Image>
          <div className="col-1 row-1 justify-self-end p-3">
            <FaRegStar size={20} />
          </div>
        </figure>
        <div className="flex justify-between p-5">
          <div>
            <h1 className="text-lg font-semibold">a little kitty</h1>
            <p>Info about the kitty</p>
          </div>
          <p>age</p>
        </div>
      </div>
    </Link>
  );
};

export default AnimalCard;
