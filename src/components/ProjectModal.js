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
      <div className="z-20 mx-6 mt-[33%] h-full shadow-slate-400 md:shadow-md"
      onClick={handleModalClick}>
        <div className="flex w-full flex-col justify-center rounded border-x border-y border-solid border-zinc-50 bg-zinc-800 text-slate-50 md:max-w-xl md:flex-row lg:max-w-4xl lg:border-none xl:max-w-6xl">
          <h2 className="text-center text-2xl font-bold underline my-1 mb-2">
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
          <div className="">

          </div>
          <div className="pt-3 mx-2">
            <p className="px-2">{props.project.details}</p>
          </div>
          {/* Description of Site, make it more technical */}
          {/* Links to live site and github */}
          {/* Tech used to create the project */}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
