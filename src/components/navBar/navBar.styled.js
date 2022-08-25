import styled from "styled-components";

const NavBarcontainer = styled.div`
  height: 60px;
  padding: 0 5%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  position: sticky;
  top: 0;

  background-color: var(--main-black);
  border-bottom: 1px solid var(--main-yellow);
  @media (max-width: 700px) {
    border: none;
    position: relative;
    z-index: 0;
  }
`;
const NavBarLeft = styled.img`
  height: 1.5rem;
`;
const NavBarRight = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  gap: 1rem;
  li {
    cursor: pointer;
    &:hover {
      color: var(--main-yellow);
      text-decoration: underline;
    }
    font-size: 1rem;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export { NavBarcontainer, NavBarLeft, NavBarRight };
