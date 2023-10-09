import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


const SocialLinks = () => {
  return (
    <div className="flex justify-center w-screen md:w-full  md:flex md:justify-end">
      <ul className="flex justify-around w-full px-10 py-10 text-4xl text-slate-50 md:mx-10 md:flex-col md:text-zinc-300 md:w-0">
        <li className="my-4 md:mx-0">
          <Link href="https://www.linkedin.com/in/brettmabramson/" target="_blank" aria-label="Visit Brett's linkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="hover:scale-110 hover:text-white"/>
          </Link>
        </li>
        <li className="my-4 md:mx-0">
          <Link href="https://github.com/Brett-Abramson" target="_blank" aria-label="Visit Brett's github">
            <FontAwesomeIcon icon={faGithub} className="hover:scale-110 hover:text-white"/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
