import React from "react";
import { useState } from "react";
import { Sidebar } from "./sideBar.styled";
import homeIcon from "../../assets/home.svg";
import advantafesIcon from "../../assets/advantages.svg";
import feedBackIcon from "../../assets/feedback.svg";
import { Link } from "react-scroll";

function SideBar(props) {
  return (
    <Sidebar className={`${props.open ? "show-sidebar" : ""}`}>
      <aside className={`${props.open ? "sidebar show-sidebar" : "sidebar"}`}>
        <ul className="sidebar-links">
          <li className="sidebar-link ">
            <Link
              to="accueil"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <img alt="" src={homeIcon} /> <span>Accueil</span>
            </Link>
          </li>
          <li className="sidebar-link">
            <Link
              to="advantages"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <img alt="" src={advantafesIcon} /> <span>Les avantages</span>
            </Link>
          </li>
          <li className="sidebar-link">
            <Link
              to="temoignages"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <img alt="" src={feedBackIcon} /> <span>Témoignages</span>
            </Link>
          </li>
        </ul>
      </aside>
    </Sidebar>
  );
}

export default SideBar;
