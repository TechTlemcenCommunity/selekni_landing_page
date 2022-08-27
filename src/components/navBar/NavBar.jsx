import React from "react";
import logo from "../../assets/logo.svg";
import { NavBarcontainer, NavBarLeft, NavBarRight } from "./navBar.styled";
import { Link } from "react-scroll";
function NavBar(props) {
  return (
    <NavBarcontainer open={props.open}>
      <NavBarLeft src={logo} alt="logo" />
      <NavBarRight>
        <li>
          <Link to="accueil" spy={true} smooth={true} offset={0} duration={500}>
            Accueil
          </Link>
        </li>

        <li>
          <Link
            to="advantages"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Les avantages
          </Link>
        </li>
        <li>
          <Link
            to="temoignages"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Témoignages
          </Link>
        </li>
      </NavBarRight>
    </NavBarcontainer>
  );
}

export default NavBar;
