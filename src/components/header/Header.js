import MobileMenu from "../mobile menu/MobileMenu";

const Header = (props) => {
  return (
    <nav className="min-w-full">
      <div>
        {/* <DropDown /> */}
        <MobileMenu toggleModal={props.toggleModal} />
      </div>
      <div className="mr-6 flex justify-end">
        <div className="hidden md:flex">
          <a
            href="#projects"
            className="mx-4 text-zinc-300 hover:text-white hover:underline md:text-xl lg:mx-6 lg:text-3xl"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="mx-4 text-zinc-300 hover:text-white hover:underline md:text-xl lg:mx-6 lg:text-3xl"
          >
            Skills
          </a>
          <a
            href="#aboutMe"
            className="mx-4 text-zinc-300 hover:text-white hover:underline md:text-xl lg:mx-6 lg:text-3xl"
            onClick={props.toggleModal}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
