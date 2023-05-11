const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl">Brett Abramson</span>
      </div>
      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
            <a href="#" className="">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
