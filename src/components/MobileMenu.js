const MobileMenu = () => {
  return (
    <div className="fixed left-0 top-0 z-30 h-full w-0 overflow-x-hidden bg-emerald-950 transition duration-200 ease-in md:hidden">
      <div>
        <button>X</button>
      </div>
      <div className="relative top-1/4 mt-8 w-full text-center">
        <ul>
          <li>Projects</li>
          <li>Tools</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
