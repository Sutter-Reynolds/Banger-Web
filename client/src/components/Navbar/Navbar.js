import React from "react";
import useNavbarScroll from "../../hooks/useNavbarScroll";
import "../../styles/navbar.css";
import Socials from "./Socials";
import Pages from "./Pages";
import Search from "./Search";
import useWindowSize from "../../hooks/useWindowSize";

const Navbar = () => {

  return (
    <nav className={`Navbar ${useNavbarScroll() ? "Navbar-Fixed" : ""}`}>
      <div className="Navbar-Container">
        {(useWindowSize() >= 1024) && 
          <Socials />
        }
        <Pages />
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;