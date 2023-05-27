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
          "fixed right-0 top-0 z-30 h-full w-full overflow-x-hidden bg-emerald-900 transition duration-700 ease-in-out md:hidden" +
          (showMobile ? " translate-x-0" : " translate-x-full")
        }
      >
        <div className="flex justify-end mr-4">
          <button
            className="mt-5  px-3 font-bold text-center text-2xl text-slate-50"
            onClick={() => displayMenu()}
          >
            X
          </button>
        </div>
        <div className="relative top-1/4 mt-6 w-full text-center">
          <ul>
            <li className="font-bold text-4xl text-slate-50 hover:text-5xl hover:underline py-6">Projects</li>
            <li className="font-bold text-4xl text-slate-50 hover:text-5xl hover:underline py-6">Tools</li>
            <li className="font-bold text-4xl text-slate-50 hover:text-5xl hover:underline py-6">Contact</li>
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
