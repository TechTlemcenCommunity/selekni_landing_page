import React from "react";
import { NavBarMobileContainer } from "./navBarMobile.styled";

function NavBarMobile(props) {
  return (
    <NavBarMobileContainer open={props.open}>
      NavBarMobile
    </NavBarMobileContainer>
  );
}

export default NavBarMobile;
