import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="pt-8">
      <div className="m-auto flex h-full w-screen flex-wrap bg-slate-950">
        <div className="flex  w-full flex-col items-center justify-center py-4">
          <div className="flex my-2 text-lg flex-col text-slate-50">
            <FontAwesomeIcon icon={faArrowUp} className="text-2xl md:animate-bounce"/>
            <h4 className="hidden md:block">Back To Top</h4>
          </div>
          <ul className="flex w-1/2 justify-around text-3xl text-slate-50">
            <li className="my-4 md:mx-0">
              <a
                href="https://www.linkedin.com/in/brettmabramson/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="hover:scale-110 hover:text-white"
                />
              </a>
            </li>
            <li className="my-4 md:mx-0">
              <a href="https://github.com/Brett-Abramson" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="hover:scale-110 hover:text-white"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Contact Info
// Social Media Links
// Nav Links
// Copyright
// Back to Top Button
// Logo or Branding
