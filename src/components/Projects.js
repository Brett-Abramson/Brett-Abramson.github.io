const Projects = () => {
  const projects = [
    {
      name: "Vinyl Vault",
      description: "An album companion and database App",
      hostedLink:
        "https://vinyl-vault-frontend-git-main-brettmabramson-gmailcom.vercel.app/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/Vinyl-Vault-Frontend",
      gitHubBackEnd: "https://github.com/Brett-Abramson/Vinyl_Vault_Backend",
      image: "https://i.imgur.com/tpqwZFH.png",
    },
    {
      name: "LANBuddy",
      description: "A Video Game Matching and Management App",
      hostedLink: "https://lanbuddy.herokuapp.com/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/LANbuddy_frontend",
      gitHubBackEnd: "https://github.com/jdbohac/project_4_backend",
      image: "https://i.imgur.com/TPPJAtd.png",
    },
    {
      name: "Lost in the Woods",
      description: "A community sourced hiking and camping companion app",
      hostedLink: "https://lost-in-the-woods.herokuapp.com/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/project_3_frontend",
      gitHubBackEnd: "https://github.com/Brett-Abramson/project_3_backend",
      image: "https://i.imgur.com/bXzM98J.png",
    },
  ];

  return (
    <div className="h-full w-full bg-slate-100">
      <div className="flex flex-col">
        <div className="flex flex-col items-center py-5">
          <h3 className="pt-2 font-serif text-2xl font-extralight">Projects</h3>
          <h2 className="py-4 md:py-6 text-4xl">Latest Works</h2>
        </div>
        <div className="">
          {projects.map((project) => {
            return (
              <div className="flex h-[22rem] border-2 border-solid border-red-800 md:h-screen">
                <div className="m-auto flex h-5/6 w-5/6 bg-slate-400 md:relative md:max-w-4xl">
                  <div className="flex flex-col justify-end gap-1 pb-10 pl-5 md:absolute md:bottom-4 md:left-12">
                    <h3 className="text-xl font-bold md:text-2xl">
                      {project.name}
                    </h3>
                    <h5 className="font-serif text-xs font-light md:text-sm">
                      {project.description}
                    </h5>
                    <a href={project.hostedLink} target="_blank" className="w-fit">
                      <button className="my-1 rounded bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 px-2 py-1 font-semibold text-white">
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
