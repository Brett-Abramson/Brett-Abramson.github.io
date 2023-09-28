import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import VideoCarousel from "./VideoCarousel";

const ProjectModal = (props) => {
  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      props.toggleModal(null);
    }
  };

  const projectLinks = [
    {
      label: "Backend Repository",
      url: props.project.gitHubBackend,
      icon: faGithub,
    },
    {
      label: "Live Site",
      url: props.project.hostedLink,
      icon: faLink,
    },
    {
      label: "Frontend Repository",
      url: props.project.gitHubFrontend,
      icon: faGithub,
    },
  ];

  const IconLinks = ({url, icon, label}) => {
    return (
      <div className="relative flex flex-col items-center">
        <a
          href={url}
          target={"_blank"}
          title={label}
          className="flex flex-col-reverse"
        >
          <FontAwesomeIcon icon={icon} className="peer" />
          <label for="icon" className="text-xs ">
            {label}
          </label>
        </a>
      </div>
    );
  };

  return (
    <div
      className="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-zinc-950 bg-opacity-95"
      onClick={handleModalClick}
    >
      <div
        className="z-20 mx-6 mt-[33%] h-full shadow-slate-400 sm:mt-20 md:shadow-md"
        onClick={handleModalClick}
      >
        <div className="flex w-full flex-col justify-center rounded border-x border-y border-solid border-zinc-50 bg-zinc-800 text-slate-50 sm:m-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
          <h2 className="my-1 mb-2 text-center text-2xl font-bold underline sm:text-3xl">
            {props.project.name}
          </h2>
          <div className="mx-2 mb-1 flex justify-around pt-4 sm:justify-evenly">
            
            {projectLinks.map((links) => {
              return (
                <IconLinks label={links.label} url={links.url} icon={links.icon} />
              )
            })}
          </div>
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
            <p className="px-2">{props.project.details}</p>
          </div>
          <div className="mx-4 my-2 flex flex-wrap justify-around rounded-xl bg-zinc-600 py-1 sm:my-4 sm:py-3">
            {props.project.techStack.map((tech, index) => {
              return (
                <Image
                  width={32}
                  height={32}
                  src={tech.icon}
                  alt={`${tech.name} Icon`}
                  title={tech.name}
                  key={index}
                  className="max-[380px]:h-6"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;





{/* <div className="relative flex flex-col items-center">
              <a
                href={props.project.gitHubBackend}
                target={"_blank"}
                title="Backend Repository"
                className="flex flex-col-reverse"
              >
                <FontAwesomeIcon icon={faGithub} className="peer" />
                <label for="icon" className="text-xs ">
                  Backend
                </label>
              </a>
            </div>
            <div className="relative">
              <a
                href={props.project.hostedLink}
                target={"_blank"}
                className="flex flex-col-reverse"
                title="Live Site"
              >
                <FontAwesomeIcon icon={faLink} />
                <label for="icon" className="peer-hover: text-xs ">
                  Live Site
                </label>
              </a>
            </div>
            <div className="relative">
              <a
                href={props.project.gitHubFrontend}
                target={"_blank"}
                title="Frontend Repository"
                className="flex flex-col-reverse"
              >
                <FontAwesomeIcon icon={faGithub} />
                <label for="icon" className="text-xs sm:hidden sm:opacity-0 ">
                  Frontend
                </label>
              </a>
            </div> */}