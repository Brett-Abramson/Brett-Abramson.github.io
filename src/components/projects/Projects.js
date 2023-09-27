import Image from "next/image";
import VinylVaultImage from "../../../public/static/images/VinylVault.png";
import VinylVaultGIF from "../../../public/static/videos/VinylVaultGIF.mp4";
import LANBuddyImage from "../../../public/static/images/LANBuddy.png";
import LANBuddyGIF from "../../../public/static/videos/LANBuddyGIF.mp4";
import LostInTheWoodsImage from "../../../public/static/images/LostInTheWoods.png";
import LostInTheWoodsGIF from "../../../public/static/videos/LostInTheWoodsGIF.mp4";
import MMTCUserImage from "../../../public/static/images/TOPReporting.png";
import MMTCPartnersImage from "../../../public/static/images/TOPPartners.png";
import MMTCUserGIF from "../../../public/static/videos/MMTCUserGIF.mp4"
import MMTCPartnerGIF from "../../../public/static/videos/MMTCPartnerGIF.mp4"
import AmazonS3 from "../../../public/static/icons/AmazonS3.svg";
import AmazonRDS from "../../../public/static/icons/AmazonRDS.svg";
import Knex from "../../../public/static/icons/Knex.svg";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const toggleModal = (data) => {
    setOpenModal(!openModal);
    setModalData(data);
  };
 
  const projects = [
    {
      name: "Make My Test Count",
      description:
        "A COVID Reporting, Data Visualization, and White-Label Customization App",
      hostedLink: "https://top-frontend-smoky.vercel.app/",
      gitHubFrontend: "https://github.com/Brett-Abramson/TOP_frontend",
      gitHubBackend: "https://github.com/Brett-Abramson/TOP_backend",
      image: MMTCUserImage,
      gif: MMTCUserGIF,
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "PostGreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Amazon S3",
          icon: AmazonS3,
        },
        {
          name: "AmazonRDS",
          icon: AmazonRDS,
        },
        {
          name: "Knex",
          icon: Knex,
        },
        {
          name: "Chart.js",
          icon: "https://asset.brandfetch.io/idFdo8ulhr/idg4l58CuH.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Javascript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
      details: ""
    },
    {
      name: "Vinyl Vault",
      description: "An Album Companion and Database App",
      hostedLink:
        "https://vinyl-vault-frontend-git-main-brettmabramson-gmailcom.vercel.app/",
      gitHubFrontend: "https://github.com/Brett-Abramson/Vinyl-Vault-Frontend",
      gitHubBackend: "https://github.com/Brett-Abramson/Vinyl_Vault_Backend",
      image: VinylVaultImage,
      gif: VinylVaultGIF,
      techStack: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "PostGreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "TailwindCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Javascript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
      details:
        "Vinyl Vault is a personal album database management application. It combines the power of Next.js for the frontend and Django REST Framework for the backend API. By seemlessly integrating Spotify's API, it automates data retrieval, reducing manual input and enhancing usability. The application's intuitive interface is styled with Tailwind CSS, providing a user-friendly experience.",
    },
    {
      name: "LANBuddy",
      description: "A Video Game Matching and Management App",
      hostedLink: "https://lanbuddy.herokuapp.com/",
      gitHubFrontend: "https://github.com/Brett-Abramson/LANbuddy_frontend",
      gitHubBackend: "https://github.com/jdbohac/project_4_backend",
      image: LANBuddyImage,
      gif: LANBuddyGIF,
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "PostGreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MaterialUI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Javascript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      name: "Lost in the Woods",
      description: "A Community Sourced Hiking and Camping Companion App",
      hostedLink: "https://lost-in-the-woods.herokuapp.com/",
      gitHubFrontend: "https://github.com/Brett-Abramson/project_3_frontend",
      gitHubBackend: "https://github.com/Brett-Abramson/project_3_backend",
      image: LostInTheWoodsImage,
      gif: LostInTheWoodsGIF,
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Mongoose",
          icon: "",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Javascript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
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
        <div className="mx-5 mb-8 rounded-xl bg-slate-900 px-2 md:border-x">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="my-8 h-full shadow-slate-400 md:shadow-md"
              >
                <div className="m-auto flex w-full flex-col rounded-sm border-x border-y sm:border-solid sm:border-zinc-800 md:max-w-xl md:flex-row md:hover:scale-105 md:hover:cursor-pointer md:hover:transition md:hover:ease-in-out lg:max-w-4xl lg:border-none lg:hover:scale-100 lg:hover:cursor-default xl:max-w-6xl">
                  <div
                    className={`relative h-full opacity-90 lg:transition lg:ease-out lg:hover:scale-105 lg:hover:cursor-pointer lg:hover:opacity-100 lg:hover:transition lg:hover:ease-in ${
                      index % 2 === 0 ? "sm:order-3" : ""
                    } sm:border-r sm:border-zinc-800 lg:border lg:border-zinc-800 lg:drop-shadow-lg`}
                    onClick={() => {
                      toggleModal(project);
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={`Image of ${project.name} Landing Page`}
                      // width={500}
                      // height={500}
                      fill
                      // sizes="75vw"
                      className="!static object-contain"
                    />
                  </div>
                  <div
                    className={`py-0.5 md:py-0 lg:px-5 xl:px-10 ${
                      index % 2 === 0 ? "sm:order-2" : ""
                    }`}
                  />
                  <div
                    className={`flex flex-col gap-1 ${
                      index % 2 === 0
                        ? "bg-gradient-to-tl sm:order-1"
                        : "bg-gradient-to-tr"
                    }  from-slate-400 via-zinc-400 to-stone-500 py-3 sm:justify-evenly md:w-1/3 lg:border  lg:border-zinc-800 lg:shadow-lg lg:transition lg:ease-out lg:hover:scale-105 lg:hover:cursor-pointer lg:hover:transition lg:hover:ease-in xl:px-5`}
                    onClick={() => {
                      toggleModal(project);
                    }}
                  >
                    <h3 className="text-center text-xl font-bold lg:text-2xl">
                      {project.name}
                    </h3>
                    <div className="m-auto mb-1 w-3/4 border-y bg-zinc-200 md:hidden" />
                    <h4 className="hidden text-center font-serif text-sm font-light lg:block">
                      {project.description}
                    </h4>
                    <h5 className="text-center font-serif text-xs font-thin md:text-sm lg:font-light">
                      {project.techStack.slice(0, -2).map((tech, index) => {
                        return index !== project.techStack.length - 3
                          ? ` ${tech.name} -`
                          : ` ${tech.name}`;
                      })}
                    </h5>

                    {/* <a
                        href={project.hostedLink}
                        target="_blank"
                        className="w-fit"
                      >
                        <Button buttonText={"Visit Site"} />
                      </a> */}
                  </div>
                </div>
              </div>
            );
          })}
          {openModal && (
            <ProjectModal project={modalData} toggleModal={toggleModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
