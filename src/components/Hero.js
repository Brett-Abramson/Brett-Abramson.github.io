const Hero = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between">
        <h1 className="text-6xl text-white font-extrabold py-4">Brett Abramson</h1>
        <h3 className="text-xl text-gray-500 font-serif py-2">Software Developer</h3>
        <button className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 hover:scale-110 text-white font-bold w-fit py-2 px-4 my-1 rounded">About Me</button>
      </div>
    </div>
  );
};

export default Hero;
