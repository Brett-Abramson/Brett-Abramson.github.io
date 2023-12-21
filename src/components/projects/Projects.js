import { projectData } from "./projectData";
import SingleProject from "./SingleProject";


const Projects = () => {

  return (
    <div className="h-full w-full bg-slate-100" id="projects">
      <div className="flex flex-col">
        <div className="flex flex-col items-center py-5 lg:my-5">
          <h3 className="pt-2 font-serif text-3xl font-extralight text-slate-950">
            Projects
          </h3>
          <h2 className="py-1 text-5xl font-semibold text-slate-950">
            Latest Works
          </h2>
        </div>
        <div className="mx-5 mb-8 rounded-xl bg-slate-900 px-2 md:border-x gap-4">
          {projectData.map((project, index) => 
            <SingleProject key={project.name} project={project} index={index}  />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
