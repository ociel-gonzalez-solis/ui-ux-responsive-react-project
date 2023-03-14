import { useState } from "react";
import { close, menu } from "../../assets/img";
import { navLinks } from "../../constants";
import { NavLinksUI } from "./NavLinksUI";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  const menuHandler = toggle ? "fkex" : "hidden";
  const listStyles = "flex-1 list-none items-center justify-end flex flex-col";

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  const lastNavMarginStyle = (index = 1) => {
    return index === navLinks.length - 1 ? "mr-0" : "mb-4";
  };

  return (
    <div className="flex flex-1 items-center justify-end sm:hidden">
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="h-[28px] w-[28px] object-contain"
        onClick={toggleHandler}
      />
      <div
        className={`${menuHandler} bg-black-gradient sidebar absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
      >
        <NavLinksUI
          lastNavMarginStyle={lastNavMarginStyle}
          listStyles={listStyles}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
