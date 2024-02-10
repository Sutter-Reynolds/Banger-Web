import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const search = () => {
  return (
    <form className="Search-Form">
        <input type="search" placeholder="Search" className="Search-Input"/>
        <button type="submit" className="Search-Button"><FontAwesomeIcon icon={faSearch} size ="lg"/></button>
    </form>
  )
}

export default search