import Link from "next/link";
import DropDown from "./Dropdown";

const Header = () => {
  return (
    <nav className="min-w-full">
      <div className="fixed top-2 right-10 mr-2">
        <DropDown />
      </div>
      <div className="flex justify-end mr-6">
        <div className="hidden md:flex">
          <Link
            href="#"
            className="text-gray-400 mx-4 lg:text-3xl lg:mx-6 hover:text-white hover:underline"
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-gray-400 mx-4 lg:text-3xl lg:mx-6 hover:text-white hover:underline"
          >
            Tools
          </Link>
          <Link
            href="#"
            className="text-gray-400 mx-4 lg:text-3xl lg:mx-6 hover:text-white hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
