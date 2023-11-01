import Image from "next/image";
import ProjectModal from "./ProjectModal";
import useWindowSize from "./useWindowSize";
import { useEffect, useState } from "react";

const SingleProject = ({ project, index }) => {
  const [openModal, setOpenModal] = useState(false);
  const { width } = useWindowSize();

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  // used to prevent side panel from opening modal on larger screen sizes
  const handleModalClick = () => {
    if (width && width <= 1024) {
      // console.log("clicked!");
      toggleModal(project);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && openModal) {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal, toggleModal]);

  return (
    <>
      <div
        key={project.name}
        className="my-8 h-full shadow-slate-400 md:shadow-md"
      >
        <div className="m-auto flex w-full flex-col rounded-sm border-x border-y shadow-md shadow-slate-400 sm:cursor-pointer sm:border-solid sm:border-zinc-800 sm:shadow-none sm:hover:scale-105 sm:hover:transition sm:hover:ease-in-out md:max-w-2xl md:flex-row md:border-none lg:max-w-4xl lg:hover:scale-100 lg:hover:cursor-default xl:max-w-6xl">
          <div
            className={`relative h-full opacity-90 lg:transition lg:ease-out lg:hover:scale-105 lg:hover:cursor-pointer lg:hover:opacity-100 lg:hover:transition lg:hover:ease-in-out ${
              index % 2 === 0 ? "sm:order-3" : ""
            } sm:border-r sm:border-zinc-800  lg:hover:shadow-lg lg:hover:shadow-slate-500`}
            onClick={() => {
              toggleModal();
            }}
          >
            <Image
              src={project.image}
              alt={`Image of ${project.name}'s Website`}
              fill
              sizes="75vw"
              className="!static object-contain"
            />
          </div>
          <div
            className={`py-0.5 md:py-0 lg:px-5 xl:px-10 ${
              index % 2 === 0 ? "sm:order-2" : ""
            }`}
          />
          <div
            className={`flex flex-col gap-1 ${
              index % 2 === 0
                ? "bg-gradient-to-tl sm:order-1"
                : "bg-gradient-to-tr"
            }  from-slate-400 via-zinc-400 to-stone-500 py-3 sm:justify-evenly  sm:rounded md:w-1/3 md:px-4 lg:border  lg:border-zinc-800  xl:px-5`}
            onClick={() => {
              handleModalClick();
            }}
          >
            <h3 className="text-center font-lato text-xl font-bold lg:text-3xl ">
              {project.name}
            </h3>
            <div className="m-auto mb-1 w-3/4 border-y bg-zinc-200 md:hidden" />
            <h4 className="hidden text-center font-merriweather text-sm font-light lg:block lg:text-base">
              {project.description}
            </h4>
            <h5 className="px-1 text-center font-serif text-xs font-thin md:text-sm lg:font-light">
              {project.techStack.slice(0, -2).map((tech, index) => {
                return index !== project.techStack.length - 3
                  ? ` ${tech.name} -`
                  : ` ${tech.name}`;
              })}
            </h5>
          </div>
        </div>
      </div>
      {openModal && (
        <ProjectModal project={project} toggleModal={toggleModal} />
      )}
    </>
  );
};

export default SingleProject;
