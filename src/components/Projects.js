import Image from "next/image";
// import VinylVaultImage from "/static/images/VinylVault.png";
// import LANBuddyImage from "/static/images/LANBuddy.png";
// import LostInTheWoodsImage from "/static/images/LostInTheWoods.png";

const Projects = () => {
  const projects = [
    {
      name: "Vinyl Vault",
      description: "An album companion and database App",
      hostedLink:
        "https://vinyl-vault-frontend-git-main-brettmabramson-gmailcom.vercel.app/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/Vinyl-Vault-Frontend",
      gitHubBackEnd: "https://github.com/Brett-Abramson/Vinyl_Vault_Backend",
      // image: { VinylVaultImage },
      image: "/static/images/VinylVault.png",
    },
    {
      name: "LANBuddy",
      description: "A Video Game Matching and Management App",
      hostedLink: "https://lanbuddy.herokuapp.com/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/LANbuddy_frontend",
      gitHubBackEnd: "https://github.com/jdbohac/project_4_backend",
      // // image: { LANBuddyImage },
      image: "/static/images/LANBuddy.png",
    },
    {
      name: "Lost in the Woods",
      description: "A community sourced hiking and camping companion app",
      hostedLink: "https://lost-in-the-woods.herokuapp.com/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/project_3_frontend",
      gitHubBackEnd: "https://github.com/Brett-Abramson/project_3_backend",
      // // image: { LostInTheWoodsImage },
      image: "/static/images/LostInTheWoods.png",
    },
  ];

  return (
    <div className="h-full w-full bg-slate-100">
      <div className="flex flex-col">
        <div className="flex flex-col items-center py-5">
          <h3 className="pt-2 font-serif text-2xl font-extralight">Projects</h3>
          <h2 className="py-4 text-4xl md:py-6">Latest Works</h2>
        </div>
        <div className="">
          {projects.map((project, index) => {
            return (
              <div
                className="flex h-[22rem] border-2 border-solid border-red-800 md:h-screen"
                key={index}
              >
                <div className="m-auto flex h-5/6 w-5/6 flex-col bg-slate-500 md:relative md:max-w-4xl">
                  <div className="relative h-full w-full bg-stone-100 border-2 border-solid border-green-400 hover:opacity-80">
                    <Image
                      src={project.image}
                      alt={`Image of ${project.name} Landing Page`}
                      // width={500}
                      // height={500}
                      fill
                      sizes={"50vw"}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-end gap-1 pb-2 pl-5 md:absolute md:bottom-4 md:left-12 md:pb-10">
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
