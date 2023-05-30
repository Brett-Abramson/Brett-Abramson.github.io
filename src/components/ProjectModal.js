const ProjectModal = (props) => {
  return (
    <div className=" z-10  h-full w-full overflow-auto">

          <div className="my-8 h-full shadow-slate-400 md:shadow-md">
            <div className="m-auto flex w-full flex-col text-slate-50 rounded-sm border-x border-y sm:border-solid sm:border-zinc-800 md:max-w-xl md:flex-row lg:max-w-4xl lg:border-none xl:max-w-6xl">
                Modal or Flipside of Card
                {props.project.name}
            </div>
          </div>
    </div>
  );
};

export default ProjectModal;
