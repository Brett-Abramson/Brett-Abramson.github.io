import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const SocialLinks = () => {

    return (
        <div className="flex flex-col  h-1/3">
            <ul className="flex flex-col items-end mx-12 justify-evenly">
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                <li><FontAwesomeIcon icon={faGithub} /></li>
            </ul>
        </div>
    )
}

export default SocialLinks