import { navLinks } from "../../constants";
import { NavLinksUI } from "./NavLinksUI";

export const DesktopMenu = () => {
  const lastNavMarginStyle = (index = 1) => {
    return index === navLinks.length - 1 ? "mr-0" : "mr-10"
  };
  const listStyles = "hidden flex-1 list-none items-center justify-end sm:flex";

  return (
    <NavLinksUI
      lastNavMarginStyle={lastNavMarginStyle}
      listStyles={listStyles}
    />
  );
};
