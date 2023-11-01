import Image from "next/image";
import VideoCarousel from "./VideoCarousel";
import IconLinks from "./IconLinks";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = (props) => {
  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      props.toggleModal(null);
    }
  };

  const projectLinks = [
    {
      label: "Backend Repo",
      url: props.project.gitHubBackend,
      icon: faGithub,
    },
    {
      label: "Live Site",
      url: props.project.hostedLink,
      icon: faLink,
    },
    {
      label: "Frontend Repo",
      url: props.project.gitHubFrontend,
      icon: faGithub,
    },
  ];

  return (
    <div
      className="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-zinc-950 bg-opacity-95"
      onClick={handleModalClick}
    >
      <div
        className="z-20 mx-6 mt-[33%] h-full shadow-slate-400 sm:mt-20 md:shadow-md"
        onClick={handleModalClick}
      >
        <div className="relative flex w-full flex-col justify-center rounded border-x border-y border-solid border-zinc-50 bg-zinc-800 text-slate-50 sm:m-auto sm:max-w-lg md:max-w-xl md:px-2 lg:max-w-3xl">
          <div className="absolute right-1.5 top-1.5 flex w-6 cursor-pointer items-center justify-center rounded-full ">
            <button
              label="Close"
              url="#"
              onClick={() => props.toggleModal(null)}
              className="opacity-85 font-bold text-slate-50 md:text-lg"
            >
              X
            </button>
          </div>
          <h2 className="my-1 mb-2 text-center text-2xl font-bold underline sm:text-3xl">
            {props.project.name}
          </h2>
          <div className="mx-5 mb-3 flex justify-between pt-4 font-lato sm:mx-20 sm:justify-evenly sm:pt-1">
            {projectLinks.map((links) => {
              return (
                <IconLinks
                  key={links.label}
                  label={links.label}
                  url={links.url}
                  icon={links.icon}
                />
              );
            })}
          </div>
          {/* MULTIPLE VIDOES: displays tabs */}
          {Array.isArray(props.project.gif) ? (
            <VideoCarousel project={props.project} />
          ) : (
            <div className="relative mx-4 rounded-sm border border-zinc-100">
              <video loop autoPlay controls>
                <source src={props.project.gif} type="video/mp4" />
              </video>
            </div>
          )}

          <div className="mx-2 pt-3">
            <p className="my-2 px-2 font-merriweather  text-xs leading-relaxed sm:text-base md:leading-loose lg:text-lg">
              {props.project.details}
            </p>
          </div>
          <div className="mx-4 my-2 flex  justify-evenly rounded bg-zinc-600 py-1.5 sm:my-4 sm:rounded-xl sm:py-3 lg:flex-wrap">
            {props.project.techStack.map((tech) => {
              if (tech.name !== "HTML" && tech.name !== "CSS") {
                return (
                  <div
                    key={tech.name}
                    className="relative flex flex-col items-center justify-center"
                  >
                    <Image
                      width={32}
                      height={32}
                      src={tech.icon}
                      alt={`${tech.name} Icon`}
                      aria-label={`${tech.name} icon`}
                      className="peer  max-[380px]:h-6"
                    />
                    <span className="hidden text-sm md:absolute md:-bottom-4 md:block md:w-auto md:opacity-0 md:peer-hover:opacity-100 lg:static lg:opacity-100">
                      {tech.name}
                    </span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
