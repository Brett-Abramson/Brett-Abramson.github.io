import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileMenuButton = () => {
  return (
    <div className="hidden">
      <div className="flex justify-end px-8">
        <FontAwesomeIcon icon={faBars} className="text-lg text-white" />
      </div>
    </div>
  );
};

export default MobileMenuButton;
