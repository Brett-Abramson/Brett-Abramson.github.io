import Link from "next/link";
import DropDown from "./Dropdown";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <nav className="min-w-full">
      <div>
        {/* <DropDown /> */}
        <MobileMenu />
      </div>
      <div className="mr-6 flex justify-end">
        <div className="hidden md:flex">
          <Link
            href="#projects"
            className="mx-4 text-gray-400 hover:text-white hover:underline lg:mx-6 lg:text-3xl"
          >
            Projects
          </Link>
          <Link
            href="#"
            className="mx-4 text-gray-400 hover:text-white hover:underline lg:mx-6 lg:text-3xl"
          >
            Tools
          </Link>
          <Link
            href="#"
            className="mx-4 text-gray-400 hover:text-white hover:underline lg:mx-6 lg:text-3xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
