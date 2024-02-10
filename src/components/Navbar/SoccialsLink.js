import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SoccialsLink = ({name, link}) => {
  return (
    <li className="Social-Links"><a href={link} target="_blank"><FontAwesomeIcon className="Social-Links-Icon" icon={name}/></a></li>
  )
}

export default SoccialsLink