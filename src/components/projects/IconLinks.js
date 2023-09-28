import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconLinks = ({ url, icon, label }) => {
  return (
    <div className="relative flex flex-col items-center">
      <a
        href={url}
        target={"_blank"}
        title={label}
        className="flex flex-col-reverse"
      >
        <FontAwesomeIcon icon={icon} className="peer py-1 md:text-xl" />
        <label for="icon" className="text-xs sm:opacity-0 sm:peer-hover:opacity-100 sm:transition-opacity">
          {label}
        </label>
      </a>
    </div>
  );
};

export default IconLinks;
