import { navLinks } from "../../constants";

export const NavLinksUI = ({ listStyles, lastNavMarginStyle }) => {
  return (
    <ul className={`${listStyles}`}>
      <div></div>
      {navLinks.map((nav, index) => (
        <li
          key={index}
          className={`cursor-pointer font-poppins text-[16px] font-normal text-white ${lastNavMarginStyle(
            index
          )}`}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  );
};
