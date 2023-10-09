import Image from "next/image";
import Link from "next/link";
import AmazonS3 from "../../public/static/icons/AmazonS3.svg";
import AmazonRDS from "../../public/static/icons/AmazonRDS.svg";
import Knex from "../../public/static/icons/Knex.svg";

const Skills = () => {
  const technologies = [
    {
      name: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      url: "https://www.python.org",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      url: "https://www.w3.org/html/",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      url: "https://www.w3schools.com/css/",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      url: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      url: "https://tailwindcss.com/",
    },
    {
      name: "MaterialUI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      url: "https://mui.com/",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      url: "https://getbootstrap.com",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      url: "https://www.djangoproject.com/",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
      url: "https://www.mongodb.com/",
    },
    {
      name: "Knex",
      icon: Knex,
      url: "https://knexjs.org/",
    },
    {
      name: "PostGreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      url: "https://www.postgresql.org",
    },
    {
      name: "AmazonRDS",
      icon: AmazonRDS,
      url: "https://aws.amazon.com/rds/",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      url: "https://expressjs.com",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      url: "https://nodejs.org",
    },
    {
      name: "Chart.js",
      icon: "https://asset.brandfetch.io/idFdo8ulhr/idg4l58CuH.svg",
      url: "https://www.chartjs.org/",
    },
    {
      name: "Amazon S3",
      icon: AmazonS3,
      url: "https://aws.amazon.com/s3/",
    },
  ];

  return (
    <div
      className="rounded text-slate-100 md:container md:mx-auto md:my-12 md:min-h-screen md:bg-zinc-800 md:py-8 lg:pb-20"
      id="skills"
    >
      <h2 className="my-8 text-center text-3xl font-bold md:my-10 md:text-4xl lg:my-12">
        Skills
      </h2>
      <div className="mx-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mx-12 md:grid-cols-4 md:gap-5 lg:mx-16 lg:grid-cols-5 lg:gap-6 xl:gap-8">
        {technologies.map((technology, index) => {
          return (
            <div key={"Skills" + index}>
              <Link href={technology.url} target="_blank" rel="noreferrer" aria-label={`Visit ${technology.name}'s webpage`}>
                <div
                  className="flex flex-col items-center justify-center rounded-lg bg-slate-100 p-4 text-slate-950 shadow-md hover:scale-105 xl:py-7"
                  title={technology.name}
                >
                  <Image
                    width={32}
                    height={32}
                    src={technology.icon}
                    alt={`${technology.name} Icon`}
                    className="lg:w-10 xl:w-12 "
                  />
                  <h5 className="mt-2 font-serif xl:text-lg">
                    {technology.name}
                  </h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
