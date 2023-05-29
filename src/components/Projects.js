import Image from "next/image";
import VinylVaultImage from "../../public/static/images/VinylVault.png";
import LANBuddyImage from "../../public/static/images/LANBuddy.png";
import LostInTheWoodsImage from "../../public/static/images/LostInTheWoods.png";

const Projects = () => {
  const projects = [
    {
      name: "Vinyl Vault",
      description: "An album companion and database App",
      hostedLink:
        "https://vinyl-vault-frontend-git-main-brettmabramson-gmailcom.vercel.app/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/Vinyl-Vault-Frontend",
      gitHubBackEnd: "https://github.com/Brett-Abramson/Vinyl_Vault_Backend",
      image:  VinylVaultImage ,
      // image: "/static/images/VinylVault.png",
    },
    {
      name: "LANBuddy",
      description: "A Video Game Matching and Management App",
      hostedLink: "https://lanbuddy.herokuapp.com/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/LANbuddy_frontend",
      gitHubBackEnd: "https://github.com/jdbohac/project_4_backend",
      image: LANBuddyImage ,
      // image: "/static/images/LANBuddy.png",
    },
    {
      name: "Lost in the Woods",
      description: "A community sourced hiking and camping companion app",
      hostedLink: "https://lost-in-the-woods.herokuapp.com/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/project_3_frontend",
      gitHubBackEnd: "https://github.com/Brett-Abramson/project_3_backend",
      image:  LostInTheWoodsImage ,
      // image: "/static/images/LostInTheWoods.png",
    },
  ];

  return (
    <div className="h-full w-full bg-slate-100" id="projects">
      <div className="flex flex-col">
        <div className="flex flex-col items-center py-5">
          <h3 className="pt-2 font-serif text-2xl font-extralight text-slate-950">
            Projects
          </h3>
          <h2 className="py-1 text-4xl font-semibold text-slate-950">
            Latest Works
          </h2>
        </div>
        <div className="mx-5 ">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="my-8 flex h-full shadow-md shadow-slate-400 sm:shadow-none"
              >
                <div className="m-auto flex border-y border-x border-solid border-red-800 w-full flex-col md:max-w-xl lg:max-w-4xl md:flex-row">
                  <div className="relative h-full bg-stone-100 hover:opacity-80 ">
                    <Image
                      src={project.image}
                      alt={`Image of ${project.name} Landing Page`}
                      // width={500}
                      // height={500}
                      fill
                      sizes="75vw"
                      className="!static object-contain"
                    />
                  </div>
                  <div className="py-0.5 md:py-0" />
                  <div className="flex flex-col justify-end gap-1 bg-gradient-to-tr from-slate-400 via-zinc-400 to-stone-500 py-3 pl-5 md:w-1/3  ">
                    <h3 className="text-xl font-bold md:text-2xl">
                      {project.name}
                    </h3>
                    <h5 className="font-serif text-xs font-thin md:text-sm md:font-light">
                      {project.description}
                    </h5>
                    <a
                      href={project.hostedLink}
                      target="_blank"
                      className="w-fit"
                    >
                      <button className="my-1 rounded bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 px-2 py-1 text-xs font-semibold text-white md:text-base">
                        View Site
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
