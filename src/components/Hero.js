const Hero = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between">
        <h1 className="text-6xl text-white font-extrabold">Brett Abramson</h1>
        <h3 className="text-xl text-gray-500 font-serif ">Software Developer</h3>
        <button className="bg-indigo-600 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded">About Me</button>
      </div>
    </div>
  );
};

export default Hero;
