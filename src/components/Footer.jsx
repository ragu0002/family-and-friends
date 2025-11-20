import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 flex w-full justify-evenly bg-white/90 py-8">
      <Link href={`/`}>
        <BsFillHouseHeartFill
          size={30}
          style={{ color: "var(--color-button-pink)" }}
        />
      </Link>

      <FaRegStar size={30} />
      <BsChat size={30} />
      <Link href={`/formular`}>
        <IoPersonOutline size={30} />
      </Link>
    </div>
  );
};

export default Footer;
