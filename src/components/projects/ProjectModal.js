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
          <div className="mx-2 mb-1 flex justify-around sm:justify-evenly">
            <div className="flex flex-col items-center">
              <p className="text-xs sm:hidden">Frontend</p>
              <a
                href={props.project.gitHubFrontend}
                target={"_blank"}
                title="Frontend Repository"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs sm:hidden">Live Site</p>
              <a
                href={props.project.hostedLink}
                target={"_blank"}
                className=""
                title="Live Site"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs sm:hidden">Backend</p>
              <a
                href={props.project.gitHubBackend}
                target={"_blank"}
                title="Backend Repository"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="mx-4 rounded-sm border border-zinc-100">
            {/* <Image
              src={props.project.gif}
              alt={`GIF of ${props.project.name} Landing Page`}
              fill
              // quality={100}
              // sizes="50vw"
              className="!static object-fill"
              unoptimized
            /> */}
            <video  loop autoPlay>
              <source src={props.project.gif} type="video/mp4" />
            </video>
          </div>

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
