import MobileMenuButton from "./MobileMenuButton";
import { useState } from "react";

const MobileMenu = () => {
  const [showMobile, setShowMobile] = useState(false)
  
  const displayMenu = () => {
    setShowMobile(!showMobile)
  }
  return (
    <>
      <MobileMenuButton displayMenu={displayMenu}/>
      <div className={"fixed right-0 top-0 z-30 h-full overflow-x-hidden bg-emerald-950 transition duration-200 ease-out md:hidden "+ (showMobile ? "w-full" : "w-0")} >
        <div>
          <button onClick={()=>displayMenu()}>X</button>
        </div>
        <div className="relative top-1/4 mt-8 w-full text-center">
          <ul>
            <li>Projects</li>
            <li>Tools</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
