import { logo} from "../../assets/img";
import { DesktopMenu } from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
      <img src={logo} alt="hooBank" className="h-[32px] w-[124px]" />
      <MobileMenu />
      <DesktopMenu />
    </nav>
  );
};

export default Navbar;
