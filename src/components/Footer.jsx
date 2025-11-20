"use client";

import { useEffect, useState } from "react";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname || "/");

  useEffect(() => {
    setActive(pathname || "/");
  }, [pathname]);

  const activeColor = "var(--color-button-pink)";
  const inactiveColor = "#666";

  return (
    <div className="fixed bottom-0 flex w-full justify-evenly bg-white/90 py-8">
      <Link href={`/`} onClick={() => setActive(`/`)}>
        <BsFillHouseHeartFill
          size={30}
          style={{ color: active === `/` ? activeColor : inactiveColor }}
        />
      </Link>

      <button
        type="button"
        onClick={() => setActive("/favorites")}
        aria-label="favorites"
      >
        <FaRegStar
          size={30}
          style={{
            color: active === "/favorites" ? activeColor : inactiveColor,
          }}
        />
      </button>

      <button
        type="button"
        onClick={() => setActive("/messages")}
        aria-label="messages"
      >
        <BsChat
          size={30}
          style={{
            color: active === "/messages" ? activeColor : inactiveColor,
          }}
        />
      </button>

      <Link href={`/formular`} onClick={() => setActive(`/formular`)}>
        <IoPersonOutline
          size={30}
          style={{
            color: active === `/formular` ? activeColor : inactiveColor,
          }}
        />
      </Link>
    </div>
  );
};

export default Footer;
