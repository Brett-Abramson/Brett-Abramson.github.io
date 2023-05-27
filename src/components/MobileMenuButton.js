import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileMenuButton = (props) => {
  return (
    <div className="md:hidden">
      <div className="mr-1 flex justify-end px-8">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-slate-50"
          onClick={()=>props.displayMenu()}
        />
      </div>
    </div>
  );
};

export default MobileMenuButton;
