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
          <h2 className="py-6 text-4xl">Latest Works</h2>
        </div>
        <div className="">
          {projects.map((project) => {
            return (
              <div className="flex h-[22rem] border-2 border-solid border-red-800">
                <div className="m-auto flex h-5/6 w-5/6 bg-slate-400">
                  <div className="flex flex-col  gap-1 justify-end px-4 pb-12">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <h5 className="font-serif font-light text-sm">{project.description}</h5>
                    <a href={project.hostedLink}>
                      <button className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 px-2 py-1 my-1 font-bold text-white rounded">View Site</button>
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
