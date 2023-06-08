import Image from "next/image";

const Skills = () => {
  const technologies = [
    {
      name: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "MaterialUI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
    },
    {
      name: "PostGreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg bg-slate-100 p-4 text-slate-950 shadow-md xl:py-7"
              title={technology.name}
            >
              <Image
                width={32}
                height={32}
                src={technology.icon}
                alt={`${technology.name} Icon`}
                className="lg:w-10 xl:w-12 "
              />
              <h5 className="mt-2 font-serif xl:text-lg">{technology.name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
