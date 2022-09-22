import styled from "styled-components";

const Sidebar = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  transform: translateX(100%);
  opacity: 0;
  transition: var(--transition), opacity 0.3s ease-out;
  background-color: hsl(0 0% 0% /0.1);
  display: none;
  &.show-sidebar {
    transform: translateX(0) !important;
    opacity: 1;
  }
  aside {
    background-color: var(--colors-white);
    position: fixed;
    inset: 0 0 0 40%;
    transition: var(--transition);
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    padding: 4px;
  }
  .sidebar-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    margin: auto;
    height: 100%;
    list-style: none;
    padding-left: 0;
  }
  .sidebar-link {
    cursor: pointer;
    width: 100%;
    transition: var(--transition);
    color: inherit;
    text-decoration: none;
  }
  .sidebar-link a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    gap: 1rem;
    justify-content: flex-start;
    margin-left: 1rem;
    transition: var(--transition);
    padding: 1rem;
    color: inherit;
    text-decoration: none;
  }
  .sidebar-link:hover {
    background: var(--clr-grey-10);
  }
  .sidebar-link a:hover {
    padding-left: 2rem;
    color: var(--clr-grey-2);
  }
  .sidebar-link a img,
  svg {
    width: 3rem;
  }
  .active_page {
    color: var(--colors-accent-300);
  }
  @media (max-width: 635px) {
    aside {
      inset: 0 0 0 20%;
    }
  }
  @media (max-width: 900px) {
    display: block;
  }
`;

export { Sidebar };
