import VinylVaultImage from "../../../public/static/images/VinylVault.png";
import VinylVaultVideo from "../../../public/static/videos/VinylVaultVideo.mp4";
import LANBuddyImage from "../../../public/static/images/LANBuddy.png";
import LANBuddyVideo from "../../../public/static/videos/LANBuddyVideo.mp4";
import MMTCUserImage from "../../../public/static/images/TOPReporting.png";
import MMTCUserVideo from "../../../public/static/videos/MMTCUserVideo.mp4";
import MMTCPartnerVideo from "../../../public/static/videos/MMTCPartnerVideo.mp4";
import AmazonS3 from "../../../public/static/icons/AmazonS3.svg";
import AmazonRDS from "../../../public/static/icons/AmazonRDS.svg";
import Knex from "../../../public/static/icons/Knex.svg";

export const projectData = [
  {
    name: "Make My Test Count",
    description:
      "A COVID Reporting, Data Visualization, and White-Label Customization App",
    hostedLink: "https://top-frontend-smoky.vercel.app/",
    gitHubFrontend: "https://github.com/Brett-Abramson/TOP_frontend",
    gitHubBackend: "https://github.com/Brett-Abramson/TOP_backend",
    image: MMTCUserImage,
    gif: [
      {
        name: "User",
        video: MMTCUserVideo,
      },
      {
        name: "Partner",
        video: MMTCPartnerVideo,
      },
    ],
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
        name: "AmazonS3",
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
    details: "",
  },
  {
    name: "Vinyl Vault",
    description: "An Album Companion and Database App",
    hostedLink:
      "https://vinyl-vault-frontend-git-main-brettmabramson-gmailcom.vercel.app/",
    gitHubFrontend: "https://github.com/Brett-Abramson/Vinyl-Vault-Frontend",
    gitHubBackend: "https://github.com/Brett-Abramson/Vinyl_Vault_Backend",
    image: VinylVaultImage,
    gif: VinylVaultVideo,
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
    gif: LANBuddyVideo,
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
];