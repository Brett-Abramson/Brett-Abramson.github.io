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
          <a
            href="#projects"
            className="mx-4 text-zinc-300 hover:text-white hover:underline lg:mx-6 lg:text-3xl"
          >
            Projects
          </a>
          <a
            href="#"
            className="mx-4 text-zinc-300 hover:text-white hover:underline lg:mx-6 lg:text-3xl"
          >
            Tools
          </a>
          <a
            href="#"
            className="mx-4 text-zinc-300 hover:text-white hover:underline lg:mx-6 lg:text-3xl"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
