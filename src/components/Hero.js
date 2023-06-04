import { useState } from "react";
import Button from "./Button";
import AboutModal from "./AboutModal";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <div className="flex h-full flex-col pt-8 md:justify-between">
        <h1 className="py-5 text-4xl font-extrabold text-slate-50 hover:animate-pulse lg:text-6xl xl:text-7xl">
          Brett Abramson
        </h1>
        <h3 className="pb-4 pt-1 font-serif text-xl text-zinc-400 lg:text-2xl xl:text-3xl">
          Software Developer
        </h3>
        <button className="w-fit rounded bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 px-4 py-2 font-bold text-slate-50 hover:scale-110 md:text-base xl:text-xl" onClick={toggleModal}>
          About Me
        </button>
      </div>
      {openModal && <AboutModal toggleModal={toggleModal}/>}
    </>
  );
};

export default Hero;
