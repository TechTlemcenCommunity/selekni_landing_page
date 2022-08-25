import React from "react";
import logo from "../../assets/logo.svg";
import { NavBarcontainer, NavBarLeft, NavBarRight } from "./navBar.styled";

function NavBar(props) {
  return (
    <NavBarcontainer open={props.open}>
      <NavBarLeft src={logo} alt="logo" />
      <NavBarRight>
        <li>
          <a href="#accueil">Accueil</a>
        </li>

        <li>
          <a href="#advantages">Les avantages</a>
        </li>
        <li>
          <a href="#temoignages">Témoignages</a>
        </li>
      </NavBarRight>
    </NavBarcontainer>
  );
}

export default NavBar;
