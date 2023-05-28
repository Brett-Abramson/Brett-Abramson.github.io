import MobileMenuButton from "./MobileMenuButton";
import { useState } from "react";
import SocialLinks from "./SocialLinks";

const MobileMenu = () => {
  const [showMobile, setShowMobile] = useState(false);

  const displayMenu = () => {
    setShowMobile(!showMobile);
  };
  return (
    <>
      <MobileMenuButton displayMenu={displayMenu} />
      <div
        className={
          "fixed right-0 top-0 z-30 h-full w-full overflow-x-hidden bg-gradient-to-r from-green-900 from-10% to-emerald-950 transition duration-700 ease-in-out md:hidden" +
          (showMobile ? " translate-x-0" : " translate-x-full")
        }
      >
        <div className="mr-6 flex justify-end">
          <button
            className="mt-8 px-4 text-center text-2xl font-bold text-slate-50"
            onClick={() => displayMenu()}
          >
            X
          </button>
        </div>
        <div className="relative top-1/4 mt-6 w-full text-center">
          <ul>
            <li className="py-6 text-4xl font-bold text-slate-50 hover:text-5xl hover:underline">
              <a href="#projects" onClick={() => displayMenu()}>
                Projects
              </a>
            </li>
            <li className="py-6 text-4xl font-bold text-slate-50 hover:text-5xl hover:underline">
              <a href="#">Tools</a>
            </li>
            <li className="py-6 text-4xl font-bold text-slate-50 hover:text-5xl hover:underline">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0">
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
