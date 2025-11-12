import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="fixed bottom-0 flex w-full justify-evenly bg-white/90 py-8">
      <BsFillHouseHeartFill
        size={30}
        style={{ color: "var(--color-button-pink)" }}
      />
      <FaRegStar size={30} />
      <BsChat size={30} />
      <IoPersonOutline size={30} />
    </div>
  );
};

export default Footer;
