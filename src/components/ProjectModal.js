import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const ProjectModal = (props) => {
  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      props.toggleModal(null);
    }
  };
  return (
    <div
      className="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-slate-950 bg-opacity-90"
      onClick={handleModalClick}
    >
      <div
        className="z-20 mx-6 mt-[33%] h-full shadow-slate-400 md:shadow-md"
        onClick={handleModalClick}
      >
        <div className="flex w-full flex-col justify-center rounded border-x border-y border-solid border-zinc-50 bg-zinc-800 text-slate-50 md:max-w-xl md:flex-row lg:max-w-4xl lg:border-none xl:max-w-6xl">
          <h2 className="my-1 mb-2 text-center text-2xl font-bold underline">
            {props.project.name}
          </h2>
          <div className="mx-1">
            <Image
              src={props.project.gif}
              alt={`GIF of ${props.project.name} Landing Page`}
              // width={500}
              // height={500}
              fill
              // quality={25}
              sizes="50vw"
              className="!static object-contain"
            />
          </div>
          <div className="mx-2 flex justify-around">
            <div className="flex flex-col items-center">
              <p className="text-xs sm:hidden">Frontend</p>
              <a href={props.project.gitHubFrontend} target={"_blank"} title="Frontend Repository">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs sm:hidden">Live Site</p>
              <a href={props.project.hostedLink} target={"_blank"} className="" title="Live Site">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs sm:hidden">Backend</p>
              <a href={props.project.gitHubBackend} target={"_blank"} title="Backend Repository">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="mx-2 pt-3">
            <p className="px-2">{props.project.details}</p>
          </div>
          <div className="mx-4 my-2 flex justify-evenly">
            {props.project.techStack.map((tech, index) => {
              return (
                <Image
                  width={32}
                  height={32}
                  src={tech.icon}
                  alt={`${tech.name} Icon`}
                  title={tech.name}
                  key={index}
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
