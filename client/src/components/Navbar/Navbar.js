import React from "react";
import useNavbarScroll from "../../hooks/useNavbarScroll";
import "../../styles/navbar.css";
import Socials from "./Socials";
import Pages from "./Pages";
import Search from "./Search";

const Navbar = () => {

  return (
    <nav className={`Navbar ${useNavbarScroll() ? "Navbar-Fixed" : ""}`}>
      <div className="Navbar-Container">
        <Socials />
        <Pages />
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;