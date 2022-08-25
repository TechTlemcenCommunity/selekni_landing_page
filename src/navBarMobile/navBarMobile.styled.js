import styled from "styled-components";

const NavBarMobileContainer = styled.div`
  background-color: var(--main-yellow);
  color: var(--man-black);
  height: 60px;
  display: ${(props) => (props.open ? "flex" : "none")}; ;
`;
export { NavBarMobileContainer };
