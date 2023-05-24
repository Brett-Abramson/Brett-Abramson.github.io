const Hero = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between pt-8 md:pt-0">
        <h1 className="py-4 text-4xl font-extrabold text-white lg:text-6xl">
          Brett Abramson
        </h1>
        <h3 className="py-2 font-serif text-xl text-gray-500">
          Software Developer
        </h3>
        <button className="my-1 w-fit rounded bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 px-4 py-2 font-bold text-white hover:scale-110">
          About Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
