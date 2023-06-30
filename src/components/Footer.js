import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-8">
      <div className="m-auto flex h-full w-screen flex-wrap bg-slate-950 text-slate-50">
        <div className="flex  w-full flex-col items-center justify-center py-4">
          <a href="#__next">
            <div className="my-2 flex flex-col text-lg">
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-2xl md:animate-bounce"
              />
              <h4 className="hidden md:block">Back To Top</h4>
            </div>
          </a>
          <ul className="flex w-1/2 justify-around text-2xl">
            <li className="my-3 md:mx-0">
              <Link
                href="https://www.linkedin.com/in/brettmabramson/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="hover:scale-110 hover:text-white"
                />
              </Link>
            </li>
            <li className="my-3 md:mx-0">
              <Link href="https://github.com/Brett-Abramson" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="hover:scale-110 hover:text-white"
                />
              </Link>
            </li>
          </ul>
          <a
            href="mailto:brett.m.abramson@gmail.com"
            className="my-1 text-sm text-slate-200"
          >
            brett.m.abramson@gmail.com
          </a>
          <p className="my-1 text-sm text-slate-300">
            &copy; {new Date().getFullYear()} Brett Abramson. All rights
            reserved.
          </p>
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
