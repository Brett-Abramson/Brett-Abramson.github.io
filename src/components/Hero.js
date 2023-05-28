const Hero = () => {
  return (
    <>
      <div className="flex h-full flex-col  md:justify-between">
        <h1 className="py-5 text-4xl font-extrabold text-slate-50 hover:animate-pulse lg:text-6xl xl:text-7xl">
          Brett Abramson
        </h1>
        <h3 className="pb-4 font-serif text-xl text-zinc-300 lg:text-2xl xl:text-3xl">
          Software Developer
        </h3>
        <button className=" w-fit rounded bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-50 hover:scale-110 md:text-base xl:text-xl">
          About Me
        </button>
      </div>
    </>
  );
};

export default Hero;
