import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Advantages from "./components/advantages/Advantages";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Phone from "./components/phone/Phone";
import PhoneMobile from "./components/phone/PhoneMobile";
import Promo from "./components/promo/Promo";
import Screens from "./components/Screens/Screens";
import SideBar from "./components/sideBar/SideBar";
import Stats from "./components/stats/Stats";
import Testmen from "./components/testmen/Testmen";
import Wilaya from "./components/wilaya/Wilaya";
import ModalVideo from "react-modal-video";

function App() {
  const [open, setOpen] = useState(false);
  const [vidOpen, setVidOpen] = useState(false);
  return (
    <Container open={open} className="App">
      <button
        aria-label="menu"
        type="button"
        className={open ? "nav-toggle open" : "nav-toggle"}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className={open ? "nav__icon open" : "nav__icon"}>&nbsp;</span>
      </button>
      <NavBar open={open} setOpen={setOpen} />
      <Promo setVidOpen={setVidOpen} />
      <PhoneMobile />
      <Advantages />
      <Stats />
      <Testmen />
      <Wilaya />
      <Screens />
      <Footer />
      <SideBar open={open} setOpen={setOpen} />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={vidOpen}
        videoId="Wh9Nlm16_m0"
        onClose={() => setVidOpen(false)}
      />
    </Container>
  );
}

const Container = styled.div`
  button {
    z-index: 99;
  }
  .navLink {
    font-weight: 500;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .navLink:hover {
    color: #7d73c1;
  }
  .navLink:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -3px;
    left: 0;
    background-color: #7d73c1;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  .navLink:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .nav-toggle {
    cursor: pointer;
    width: 60px;
    height: 60px;
    z-index: 9999;
    position: fixed;
    inset: 0 1em auto auto;
    border: none;
    display: none;
    border-radius: 50%;
    background-color: var(--main-black);
    transition: var(--transition);
    @media (max-width: 700px) {
      display: block;
    }
  }
  .nav-toggle.open {
    background-color: transparent;
  }
  .nav__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7rem;
    height: 7rem;
    transform: translate(-50%, -50%);
    transition: var(--transition);
  }
  .nav__icon,
  .nav__icon::before,
  .nav__icon::after {
    width: 28px;
    height: 3px;
    background: ${(props) =>
      props.open ? "var(--main-black)" : "var(--main-yellow)"};
    transition: all 0.8s cubic-bezier(1, 0.47, 0, 1.27);
  }
  .nav__icon::before,
  .nav__icon::after {
    content: "";
    position: absolute;
    left: 0;
  }
  .nav__icon::before {
    top: -11px;
  }
  .nav__icon::after {
    top: 10px;
    width: 20px;
  }
  .nav__icon.open {
    transform: translate(-50%, -50%) rotate(-720deg);
    background-color: transparent;
  }
  .nav__icon.open::before {
    transform: rotate(-45deg);
    top: 0;
  }
  .nav__icon.open::after {
    transform: rotate(45deg);
    top: 0;
    left: 0;
    width: 28px !important;
  }
`;
export default App;
