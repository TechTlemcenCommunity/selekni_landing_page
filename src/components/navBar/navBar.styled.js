import styled from "styled-components";

const NavBarcontainer = styled.div`
  padding: 0% 5%;
  height: 60px;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 200;
  max-width: 100vw;
  position: sticky;
  top: 0;

  background-color: var(--main-black);
  border-bottom: 1px solid var(--main-yellow);
  @media (min-width: 1700px) {
    height: 5vw;
  }
`;
const NavBarLeft = styled.img`
  height: 2rem;
  @media (min-width: 1700px) {
    height: 2vw;
  }
  @media (max-width: 700px) {
    height: 1.5rem;
  }
`;
const NavBarRight = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  gap: 1.5vw;

  li {
    cursor: pointer;
    &:hover {
      color: var(--main-yellow);
      text-decoration: underline;
    }
    font-size: 1.2rem;
    a {
      color: inherit;
      text-decoration: none;
    }
    @media (max-width: 1050px) {
      font-size: 1rem;
    }
    @media (min-width: 1700px) {
      font-size: 1.5vw;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export { NavBarcontainer, NavBarLeft, NavBarRight };
