import { Link } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop';

const PageLinks = ({link, name}) => {
  return (
    <li><Link onClick={scrollToTop} to ={link} replace={true} className="Page-Link">{name}</Link></li>
  )
}

export default PageLinks