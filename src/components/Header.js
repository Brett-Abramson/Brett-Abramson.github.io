import Link from "next/link";
import DropDown from "./Dropdown";

const Header = () => {
  return (
    <nav className="min-w-full">
      <div className="fixed right-10 top-2 mr-2">
        <DropDown />
      </div>
      <div className="mr-6 flex justify-end">
        <div className="hidden md:flex">
          <Link
            href="#"
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
