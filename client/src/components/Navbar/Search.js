import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import image from "../../assets/BillieEilish-LostCause.jpg"
import "../../styles/utils/imgFitter.css"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    console.log(searchTerm)
  }, [searchTerm]);

  return (
    <>
      <form className="Search-Form">
        <input type="search" values={searchTerm} placeholder="Search" className="Search-Input" onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit" className="Search-Button"><FontAwesomeIcon icon={faSearch} size="lg" /></button>
      </form>
      <div className="Search-Container">
        {["Singles", "Videos", "Albums"].map((element, index) => (
          <>
            <p key={index} className="Search-Table">{element}</p>
            <div className="Search-Articles-Container">
            <article className="Search-Article">
              <div className="Image-Container-2"><img src={image} alt="" className="img-fitter2"/></div>
              <h4>SZA - Doves in the Wind</h4>
              <h3>We had a clothing store in my town that would play this, and it was just fucking disappointing every time.
                  "I love bad [bleep] that's my [bleep]in' problem, and yeah I like to [bleep] I got a [bleep]in' problem"
                really just isn't the same thing at all anymore.</h3>
              <p></p>
            </article>
          </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Search