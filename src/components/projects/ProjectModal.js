import Image from "next/image";
import VideoCarousel from "./VideoCarousel";
import IconLinks from "./IconLinks";
import { faGithub, faLink, faTimes } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="relative flex w-full flex-col justify-center rounded border-x border-y border-solid border-zinc-50 bg-zinc-800 text-slate-50 sm:m-auto sm:max-w-md md:max-w-lg lg:max-w-3xl">
          <div className="absolute right-2 top-2 cursor-pointer border bg-yellow-50 ">
            <FontAwesomeIcon
              icon={faTimes}
              label="Close"
              url="#"
              onClick={() => props.toggleModal(null)}
              className="text-lg"
            />
          </div>
          <h2 className="my-1 mb-2 text-center text-2xl font-bold underline sm:text-3xl">
            {props.project.name}
          </h2>
          <div className="mx-4 mb-2 flex justify-around pt-4 sm:justify-evenly sm:pt-1">
            {projectLinks.map((links, index) => {
              return (
                <IconLinks
                  key={`Link${index}`}
                  label={links.label}
                  url={links.url}
                  icon={links.icon}
                />
              );
            })}
          </div>
          {/* multiple videos: displays tabs */}
          {Array.isArray(props.project.gif) ? (
            <VideoCarousel project={props.project} />
          ) : (
            <div className="mx-4 rounded-sm border border-zinc-100">
              <video loop autoPlay>
                <source src={props.project.gif} type="video/mp4" />
              </video>
            </div>
          )}

          <div className="mx-2 pt-3">
            <p className="px-2 text-xs sm:text-base lg:text-lg">
              {props.project.details}
            </p>
          </div>
          <div className="mx-4 my-2 flex justify-around rounded bg-zinc-600 py-1 sm:my-4 sm:flex-wrap sm:rounded-xl sm:py-3">
            {props.project.techStack.map((tech, index) => {
              if (tech.name !== "HTML" && tech.name !== "CSS") {
                return (
                  <div
                    key={`icon: ${index}`}
                    className="flex flex-col items-center"
                  >
                    <Image
                      width={32}
                      height={32}
                      src={tech.icon}
                      alt={`${tech.name} Icon`}
                      className="max-[380px]:h-6"
                    />
                    <label
                      htmlFor="skillIcon"
                      className="hidden sm:block md:text-sm"
                    >
                      {tech.name}
                    </label>
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
