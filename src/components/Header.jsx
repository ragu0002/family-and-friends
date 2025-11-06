import { VscBellDot } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <h1 className="text-xl font-bold">FamilyFriends</h1>
      <VscBellDot size={30} />
    </div>
  );
};

export default Header;
