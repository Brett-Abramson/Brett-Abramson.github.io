import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="hidden md:flex md:justify-end">
      <ul className="flex flex-col  text-gray-400 text-2xl lg:text-3xl mx-10 py-10 justify-evenly">
        <li className="my-4">
          <a href="https://www.linkedin.com/in/brettmabramson/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="my-4">
          <a href="https://github.com/Brett-Abramson" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
