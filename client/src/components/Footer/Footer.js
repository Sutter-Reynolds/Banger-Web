import Socials from "../Navbar/Socials"

import "../../styles/footer.css"

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="Banger-Footer">
      <div className="Footer-Info">
          <p className="Footer-Name">Banger Of The Day</p>
          <p className="Footer-CopyRight">Copyright &#169; {year} BangerOfTheDay</p>
          <Socials/>
      </div>
  </footer>  
  )
}

export default Footer
