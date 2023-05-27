import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex justify-center w-screen md:w-full  md:flex md:justify-end">
      <ul className="flex justify-around w-full px-10 py-10 text-4xl text-slate-50 md:mx-10 md:flex-col md:text-gray-400 md:w-0 lg:text-3xl">
        <li className="my-4 md:mx-0">
          <a href="https://www.linkedin.com/in/brettmabramson/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="my-4 md:mx-0">
          <a href="https://github.com/Brett-Abramson" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
