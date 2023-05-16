

const Projects = () => {

    const projects = [
        {
            name: "Vinyl Vault",
            description: "An album companion and database App",
            hostedLink: "https://vinyl-vault-frontend-git-main-brettmabramson-gmailcom.vercel.app/",
            gitHubFrontEnd: "https://github.com/Brett-Abramson/Vinyl-Vault-Frontend",
            gitHubBackEnd: "https://github.com/Brett-Abramson/Vinyl_Vault_Backend",
            image: "https://i.imgur.com/tpqwZFH.png"
        },
        {
            name: "LANBuddy",
            description: "A Video Game Matching and Management App",
            hostedLink:"https://lanbuddy.herokuapp.com/",
            gitHubFrontEnd: "https://github.com/Brett-Abramson/LANbuddy_frontend",
            gitHubBackEnd: "https://github.com/jdbohac/project_4_backend",
            image: "https://i.imgur.com/TPPJAtd.png"
        },
        {
            name: "Lost in the Woods",
            description: "A community sourced hiking and camping companion app",
            hostedLink: "https://lost-in-the-woods.herokuapp.com/",
            gitHubFrontEnd: "https://github.com/Brett-Abramson/project_3_frontend",
            gitHubBackEnd: "https://github.com/Brett-Abramson/project_3_backend",
            image: "https://i.imgur.com/bXzM98J.png"
        }
    ]

    return (
        <div className="bg-slate-100 h-full w-full">
            <div className="flex flex-col items-center py-5">
                <h3 className="text-2xl font-extralight pt-2">Projects</h3>
                <h2 className="text-4xl py-6">Latest Works</h2>
            </div>

        </div>
    )
}

export default Projects