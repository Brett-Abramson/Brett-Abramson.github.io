import AboutModal from "../AboutModal";
import TypingAnim from "./TypingAnim";

const Hero = (props) => {
  const typingAnimationText = ["Software Developer", 1000];

  return (
    <>
      <div className="flex h-full flex-col pt-8 md:justify-between">
        <h1 className="py-5 text-4xl font-extrabold text-slate-50 hover:animate-pulse lg:text-6xl xl:text-7xl">
          Brett Abramson
        </h1>
        <h3 className="pb-4 pt-1 font-serif text-3xl text-zinc-300 lg:text-4xl xl:text-5xl">
          <TypingAnim />
        </h3>
        <button
          className="w-fit rounded bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 px-4 py-2 font-bold text-slate-50 hover:scale-110 md:text-base xl:text-xl"
          onClick={props.toggleModal}
        >
          About Me
        </button>
      </div>
      {props.openModal && <AboutModal toggleModal={props.toggleModal} />}
    </>
  );
};

export default Hero;
