import { Link } from 'react-router-dom';

const PageLinks = ({link, name}) => {
  return (
    <li><Link to ={link} replace={true} className="Page-Link">{name}</Link></li>
  )
}

export default PageLinks